using System.ComponentModel.DataAnnotations;

namespace DotnetClient.Models
{
    public class User
    {
        public int Id { get; set; }
 
        public required string  Username { get; set; }

        [EmailAddress]
        public required string Email { get; set; }
   
        public required string PasswordHash { get; set; }
        
        public bool IsAdmin { get; set; } // Indicating if the user is an admin
    }
}
