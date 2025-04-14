namespace DotnetClient.Models
{
    public class AuthResponseDto
    {
        public required string Token { get; set; }
        public required User User { get; set; }
    }
}
