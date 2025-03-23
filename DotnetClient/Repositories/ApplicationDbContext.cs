using Microsoft.EntityFrameworkCore;

namespace DotnetClient.Repositories
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<LandingPageCardsModel> LandingPageCards { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LandingPageCardsModel>()
                .ToTable("LandingPageCards")
                .HasKey(c => c.Id);
        }
    }
}
