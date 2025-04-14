using DotnetClient.Models;
using DotnetClient.Repositories;
using DotnetClient.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DotnetClient.Services
{
    public class AuthService : IAuthService
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthService(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<AuthResponseDto> RegisterAsync(RegisterDto registerDto)
        {
            // Cek jika username atau email sudah terdaftar
            var userExists = await _context.Users
                .AnyAsync(u => u.Username == registerDto.Username || u.Email == registerDto.Email);
            if (userExists)
                throw new Exception("Username atau email sudah terdaftar.");

            // Hash password
            var passwordHash = BCrypt.Net.BCrypt.HashPassword(registerDto.Password);

            var user = new User
            {
                Username = registerDto.Username,
                Email = registerDto.Email,
                PasswordHash = passwordHash,
                IsAdmin = registerDto.IsAdmin
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            var token = GenerateJwtToken(user);

            return new AuthResponseDto
            {
                Token = token,
                User = user
            };
        }

        public async Task<AuthResponseDto> LoginAsync(LoginDto loginDto)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == loginDto.Username);

            if (user == null || !BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
                throw new Exception("Login gagal: username atau password salah.");

            var token = GenerateJwtToken(user);

            return new AuthResponseDto
            {
                Token = token,
                User = user
            };
        }

        private string GenerateJwtToken(User user)
        {
            var audience = _configuration["Jwt:Audience"];

            if (string.IsNullOrEmpty(audience))  // Ensure that the audience is not null or empty
            {
                throw new ArgumentNullException("Jwt:Audience", "Audience is missing from configuration.");
            }

            var claims = new[]
            {
        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
        new Claim(ClaimTypes.Name, user.Username),
        new Claim(ClaimTypes.Email, user.Email),
        new Claim(ClaimTypes.Role, user.IsAdmin ? "Admin" : "User"),
        new Claim(JwtRegisteredClaimNames.Aud, audience)  // Safe to use audience now
    };

            var secretKey = _configuration["Jwt:Secret"];
            if (string.IsNullOrEmpty(secretKey))
            {
                throw new ArgumentNullException("Jwt:Secret", "JWT Secret key is missing from configuration.");
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expirationTime = DateTime.UtcNow.AddMinutes(Convert.ToDouble(_configuration["Jwt:ExpiryMinutes"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: audience,  // Use the audience here
                claims: claims,
                expires: expirationTime,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
