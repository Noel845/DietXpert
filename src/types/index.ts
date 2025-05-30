export interface User {
    id: string;
    email: string;
    name: string;
    favorites: string[];
  }
  
  export interface Nutrient {
    name: string;
    amount: number;
    unit: string;
  }
  
  export interface Food {
    id: string;
    name: string;
    image: string;
    category: string;
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
    nutrients: Nutrient[];
  }
  
  export interface Meal {
    id: string;
    name: string;
    image: string;
    foods: Food[];
    description: string;
    totalCalories: number;
    totalCarbs: number;
    totalProtein: number;
    totalFat: number;
  }
  
  export interface FoodCategory {
    id: string;
    name: string;
    image: string;
  }