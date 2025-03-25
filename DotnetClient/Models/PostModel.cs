using System.ComponentModel.DataAnnotations;

public class PostModel
{
    [Key]
    public string Slug { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime DateCreated { get; set; } = DateTime.UtcNow;
    public int CategoryId { get; set; }
    public Category Category { get; set; }
}