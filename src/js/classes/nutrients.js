class Nutrients {
  baseUrl = 'https://nutriplan-api.vercel.app/api';
  apiKey = 'blENUaoJVaHoHJpPP8rI2bQPa1B2pSHJ8vLUrru3';

  constructor(searchQuery = []) {
    this.searchQuery = Array.isArray(searchQuery) ? searchQuery : [searchQuery];
  }

  async fetchSingleIngredient(query) {
    const params = new URLSearchParams({
      page: '1',
      limit: '1',
      q: query,
    });

    const url = `${this.baseUrl}/nutrition/search?${params.toString()}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-api-key': this.apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) return null;

      const data = await response.json();
      const item = data?.results?.[0];

      if (!item || !item.nutrients) return null;

      return {
        ingredient: query,
        calories: item.nutrients.calories ?? 0,
        protein: item.nutrients.protein ?? 0,
        carbs: item.nutrients.carbs ?? 0,
        fat: item.nutrients.fat ?? 0,
        fiber: item.nutrients.fiber ?? 0,
        sugar: item.nutrients.sugar ?? 0,
        sodium: item.nutrients.sodium ?? 0,
      };
    } catch (error) {
      console.error('Fetch single ingredient failed:', error);
      throw error;
    }
  }

  async fetchAllIngredients() {
    const requests = this.searchQuery.map(q => this.fetchSingleIngredient(q));

    try {
      const results = await Promise.all(requests);

      return results.filter(Boolean);
    } catch (error) {
      console.error('Fetch all ingredients failed:', error);
      throw error;
    }
  }
}

export default Nutrients;
