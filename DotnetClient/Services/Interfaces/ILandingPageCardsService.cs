public interface ILandingPageCardsService
{
    Task<IEnumerable<LandingPageCardsModel>> GetAllCardsAsync();
    Task<LandingPageCardsModel> GetCardByIdAsync(int id);
    Task<LandingPageCardsModel> AddCardAsync(LandingPageCardsModel card);
    Task UpdateCardAsync(LandingPageCardsModel card);
    Task DeleteCardAsync(int id);
}
