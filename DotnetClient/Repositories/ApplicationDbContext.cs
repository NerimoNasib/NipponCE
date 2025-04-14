using DotnetClient.Models;
using Microsoft.EntityFrameworkCore;

namespace DotnetClient.Repositories
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public required DbSet<User> Users { get; set; }
    }
}
