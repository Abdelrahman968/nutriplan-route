import Nutrients from './nutrients.js';

class Analyze {
  baseUrl = 'https://nutriplan-api.vercel.app/api';
  apiKey = 'blENUaoJVaHoHJpPP8rI2bQPa1B2pSHJ8vLUrru3';

  constructor(title, ingredients = []) {
    this.ingredients = ingredients;
    this.title = title;
  }

  async fetchCaloriesData() {
    // console.log(this.ingredients);
    // console.log(this.title);

    const url = `${this.baseUrl}/nutrition/analyze`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-api-key': this.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          ingredients: this.ingredients,
        }),
      });
      const data = await response.json();
      // console.log(data.breakdown.match);

      const extractIngredients = data.breakdown.map(item => item.match);
      this.fetchNutrientsData(extractIngredients);
      return data;
    } catch (error) {
      console.error(`Error fetching ingredient data:`, error);
      throw error;
    }
  }

  async fetchNutrientsData(nutrientsData) {
    const getNutrients = new Nutrients(nutrientsData);
    const data = await getNutrients.fetchAllIngredients();

    const totalNutrition = data.reduce(
      (acc, next) => {
        acc.calories += next.calories ?? 0;
        acc.protein += next.protein ?? 0;
        acc.carbs += next.carbs ?? 0;
        acc.fat += next.fat ?? 0;
        acc.fiber += next.fiber ?? 0;
        acc.sodium += next.sodium ?? 0;
        acc.sugar += next.sugar ?? 0;
        return acc;
      },
      {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        fiber: 0,
        sodium: 0,
        sugar: 0,
      }
    );

    const formattedNutrition = {
      calories: Number(totalNutrition.calories.toFixed(2)),
      protein: Number(totalNutrition.protein.toFixed(2)),
      carbs: Number(totalNutrition.carbs.toFixed(2)),
      fat: Number(totalNutrition.fat.toFixed(2)),
      fiber: Number(totalNutrition.fiber.toFixed(2)),
      sodium: Number(totalNutrition.sodium.toFixed(2)),
      sugar: Number(totalNutrition.sugar.toFixed(2)),
    };

    // console.log(formattedNutrition);
    return formattedNutrition;
  }
}

export default Analyze;
