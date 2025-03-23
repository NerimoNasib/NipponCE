using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LandingPageController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetLandingPage()
        {
            var landingPage = new
            {
                Title = "Welcome to the Landing Page",
                Content = "XIXIXIXI"
            };

            return Ok(landingPage);
        }
    }
}