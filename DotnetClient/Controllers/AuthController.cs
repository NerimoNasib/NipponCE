using System.Security.Claims;
using DotnetClient.Models;
using DotnetClient.Repositories;
using DotnetClient.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DotnetClient.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly ApplicationDbContext _context;

        public AuthController(IAuthService authService, ApplicationDbContext context)
        {
            _authService = authService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AuthResponseDto>> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                var response = await _authService.RegisterAsync(registerDto);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponseDto>> Login([FromBody] LoginDto loginDto)
        {
            try
            {
                var response = await _authService.LoginAsync(loginDto);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Endpoint untuk mengubah role pengguna
        [Authorize(Policy = "AdminOnly")]
        [HttpPut("assign-role/{userId}")]
        public async Task<ActionResult> AssignRole(int userId, [FromBody] AssignRoleDto assignRoleDto)
        {
            // Debugging role claim
            var roleClaim = User.FindFirst(ClaimTypes.Role)?.Value;
            Console.WriteLine($"Role from JWT: {roleClaim}"); // Menampilkan role yang diterima dari token JWT

            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            user.IsAdmin = assignRoleDto.IsAdmin;
            await _context.SaveChangesAsync();  // Save changes to the database

            return Ok("Role updated successfully.");
        }


        private User GetCurrentUser()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
            {
                throw new UnauthorizedAccessException("User is not logged in.");
            }

            var user = _context.Users.Find(int.Parse(userId));
            if (user == null)
            {
                throw new UnauthorizedAccessException("User not found.");
            }

            return user;
        }
    }
}
