import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Food, Meal, FoodCategory } from '@/types';
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from './AuthContext';

// Mock data
import { mockFoods, mockMeals, mockCategories } from '@/data/mockData';

interface FoodContextType {
  foods: Food[];
  meals: Meal[];
  categories: FoodCategory[];
  searchResults: Food[];
  favorites: Food[];
  searchFood: (query: string, category?: string) => void;
  addToFavorites: (foodId: string) => void;
  removeFromFavorites: (foodId: string) => void;
  isFavorite: (foodId: string) => boolean;
  getFoodById: (id: string) => Food | undefined;
  getMealById: (id: string) => Meal | undefined;
  getSuggestedMeals: (foodId: string) => Meal[];
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [foods, setFoods] = useState<Food[]>(mockFoods);
  const [meals, setMeals] = useState<Meal[]>(mockMeals);
  const [categories, setCategories] = useState<FoodCategory[]>(mockCategories);
  const [searchResults, setSearchResults] = useState<Food[]>([]);
  const [favorites, setFavorites] = useState<Food[]>([]);
  const { toast } = useToast();
  const { user } = useAuth();

  // Load user favorites when user changes
  useEffect(() => {
    if (user && user.favorites) {
      const userFavorites = foods.filter(food => 
        user.favorites.includes(food.id)
      );
      setFavorites(userFavorites);
    } else {
      setFavorites([]);
    }
  }, [user, foods]);

  const searchFood = (query: string, category?: string) => {
    if (!query && !category) {
      setSearchResults([]);
      return;
    }

    let results = [...foods];
    
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(food => 
        food.name.toLowerCase().includes(lowerQuery)
      );
    }
    
    if (category && category !== 'all') {
      results = results.filter(food => 
        food.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    setSearchResults(results);
  };

  const addToFavorites = (foodId: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to add favorites",
        variant: "destructive",
      });
      return;
    }

    const foodToAdd = foods.find(f => f.id === foodId);
    if (!foodToAdd) return;

    if (!favorites.some(f => f.id === foodId)) {
      const newFavorites = [...favorites, foodToAdd];
      setFavorites(newFavorites);
      
      // Update user favorites in local storage
      const updatedUser = {
        ...user,
        favorites: [...user.favorites, foodId]
      };
      localStorage.setItem('dietxpert_user', JSON.stringify(updatedUser));
      
      toast({
        title: "Added to Favorites",
        description: `${foodToAdd.name} has been added to your favorites.`,
      });
    }
  };

  const removeFromFavorites = (foodId: string) => {
    if (!user) return;

    const foodToRemove = foods.find(f => f.id === foodId);
    if (!foodToRemove) return;

    const newFavorites = favorites.filter(f => f.id !== foodId);
    setFavorites(newFavorites);
    
    // Update user favorites in local storage
    const updatedUser = {
      ...user,
      favorites: user.favorites.filter(id => id !== foodId)
    };
    localStorage.setItem('dietxpert_user', JSON.stringify(updatedUser));
    
    toast({
      title: "Removed from Favorites",
      description: `${foodToRemove.name} has been removed from your favorites.`,
    });
  };

  const isFavorite = (foodId: string): boolean => {
    return favorites.some(f => f.id === foodId);
  };

  const getFoodById = (id: string): Food | undefined => {
    return foods.find(food => food.id === id);
  };

  const getMealById = (id: string): Meal | undefined => {
    return meals.find(meal => meal.id === id);
  };

  const getSuggestedMeals = (foodId: string): Meal[] => {
    return meals.filter(meal => 
      meal.foods.some(food => food.id === foodId)
    );
  };

  return (
    <FoodContext.Provider value={{ 
      foods, 
      meals, 
      categories,
      searchResults, 
      favorites, 
      searchFood, 
      addToFavorites, 
      removeFromFavorites, 
      isFavorite,
      getFoodById,
      getMealById,
      getSuggestedMeals
    }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error('useFood must be used within a FoodProvider');
  }
  return context;
};