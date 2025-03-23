namespace DotnetClient.Services
{
    public class LandingPageCardsService : ILandingPageCardsService
    {
        private readonly IRepository<LandingPageCardsModel> _repository;

        public LandingPageCardsService(IRepository<LandingPageCardsModel> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<LandingPageCardsModel>> GetAllCardsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<LandingPageCardsModel> GetCardByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task<LandingPageCardsModel> AddCardAsync(LandingPageCardsModel card)
        {
            if (card == null)
            {
                throw new ArgumentNullException(nameof(card), "Card cannot be null.");
            }

            await _repository.AddAsync(card); 
            return card;
        }

        public async Task UpdateCardAsync(LandingPageCardsModel card)
        {
            if (card == null)
            {
                throw new ArgumentNullException(nameof(card), "Card cannot be null.");
            }

            await _repository.UpdateAsync(card);
        }


        public async Task DeleteCardAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
