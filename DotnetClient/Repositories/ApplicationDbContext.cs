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
                
            modelBuilder.Entity<UserPost>()
                .ToTable("UserPosts")
                .HasKey(p => p.Slug);

            modelBuilder.Entity<UserPost>()
                .HasOne(p => p.User)
                .WithMany()
                .HasForeignKey(p => p.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<UserPost>()
                .HasOne(p => p.PostCategory)
                .WithMany()
                .HasForeignKey(p => p.PostCategoryId)
                .OnDelete(DeleteBehavior.Cascade);
                
            modelBuilder.Entity<User>()
                .HasOne(u => u.UserRole)
                .WithMany()
                .HasForeignKey(u => u.UserRoleId)
                .OnDelete(DeleteBehavior.Restrict); 
        }
    }
}
