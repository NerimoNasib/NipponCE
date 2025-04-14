using Microsoft.EntityFrameworkCore;
using DotnetClient.Services;
using DotnetClient.Services.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using DotnetClient.Repositories;
using System.Security.Claims;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Registering services for LandingPageCards
builder.Services.AddScoped<IRepository<LandingPageCardsModel>, Repository<LandingPageCardsModel>>();
builder.Services.AddScoped<ILandingPageCardsService, LandingPageCardsService>();


// Configuration for JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false; // Set to true for production to enforce HTTPS
        options.SaveToken = true;

        // Get the secret from the configuration
        var secretKey = builder.Configuration["Jwt:Secret"];

        // Check if the secret is null or empty and throw a clear exception if it's missing
        if (string.IsNullOrEmpty(secretKey))
        {
            throw new ArgumentNullException("JWT:Secret", "JWT Secret is missing from the configuration.");
        }

        // Set up the token validation parameters
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true, // Validate the issuer (to be verified against the issuer in the token)
            ValidateAudience = true, // Validate the audience (to be verified against the audience in the token)
            ValidateLifetime = true, // Validate the expiration time (to check if token is expired)
            ValidIssuer = builder.Configuration["Jwt:Issuer"], // The expected issuer of the token
            ValidAudience = builder.Configuration["Jwt:Audience"], // The expected audience of the token
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey)) // The key used to sign the token
        };
    });



// Register the authentication service
builder.Services.AddScoped<IAuthService, AuthService>();

// Add services for authentication and authorization
builder.Services.AddAuthorization(options =>
{
    // Policy that allows only users with the "Admin" role
    options.AddPolicy("AdminOnly", policy => policy.RequireClaim(ClaimTypes.Role, "Admin"));
});
// Register services for controllers and endpoints
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });

    // Add security definition to support JWT in Swagger UI
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme.",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});

builder.Services.AddControllers();

// Add services for CORS to allow cross-origin requests
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin", policy =>
    {
        policy.AllowAnyOrigin()  // Allow any origin
              .AllowAnyMethod()  // Allow any method (GET, POST, etc.)
              .AllowAnyHeader(); // Allow any header
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // Enable Swagger
    app.UseSwaggerUI(); // Enable Swagger UI
}

// Use CORS middleware
app.UseCors("AllowAnyOrigin");

// Use HTTPS redirection
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseRouting();
app.UseAuthorization();

// Map controllers to routes
app.MapControllers();

app.Run();