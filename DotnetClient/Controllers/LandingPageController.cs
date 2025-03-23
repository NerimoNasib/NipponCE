using Microsoft.AspNetCore.Mvc;
using DotnetClient.Services;

namespace DotnetClient.Controllers
{
    [ApiController] // This makes it an API controller
    [Route("api/[controller]")]
    public class LandingPageController : ControllerBase
    {
        private readonly ILandingPageCardsService _landingPageCardsService;

        public LandingPageController(ILandingPageCardsService landingPageCardsService)
        {
            _landingPageCardsService = landingPageCardsService;
        }

        [HttpGet("getall")]
        public async Task<IActionResult> GetAllCards()
        {
            var cards = await _landingPageCardsService.GetAllCardsAsync();
            return Ok(cards);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCardsById(int id)
        {
            var card = await _landingPageCardsService.GetCardByIdAsync(id);
            if (card == null)
            {
                return NotFound(); 
            }
            return Ok(card);
        }

        //TODO: simplify return statement
        [HttpPost("create")]
        public async Task<IActionResult> CreateCard([FromBody] LandingPageCardsModel model)
        {
            if (model == null)
            {
                return BadRequest("Invalid data.");
            }

            var createdCard = await _landingPageCardsService.AddCardAsync(model);

            if (createdCard == null)
            {
                return StatusCode(500, "An error occurred while creating the card.");
            }

            return CreatedAtAction(nameof(GetCardsById), new { id = createdCard.Id }, createdCard);
        }
    }
}
