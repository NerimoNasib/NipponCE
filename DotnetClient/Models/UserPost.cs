using System.ComponentModel.DataAnnotations;

public class UserPost
{
    [Key]
    public string Slug { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime DateCreated { get; set; } = DateTime.UtcNow;
    public int PostCategoryId { get; set; }
    public PostCategory PostCategory { get; set; }
    public int UserId { get; set; }
    public User User { get; set; } 
}