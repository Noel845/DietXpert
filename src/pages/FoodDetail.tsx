import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NutrientChart from "@/components/NutrientChart";
import MealCard from "@/components/MealCard";
import { useFood } from "@/context/FoodContext";
import { Heart, ArrowLeft } from "lucide-react";

const FoodDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getFoodById, isFavorite, addToFavorites, removeFromFavorites, getSuggestedMeals } = useFood();
  const [food, setFood] = useState(getFoodById(id || ""));
  const [suggestedMeals, setSuggestedMeals] = useState(getSuggestedMeals(id || ""));
  const favorite = isFavorite(id || "");

  useEffect(() => {
    if (id) {
      const foodData = getFoodById(id);
      setFood(foodData);
      
      if (foodData) {
        setSuggestedMeals(getSuggestedMeals(id));
      }
    }
  }, [id, getFoodById, getSuggestedMeals]);

  const handleFavoriteToggle = () => {
    if (!food) return;
    
    if (favorite) {
      removeFromFavorites(food.id);
    } else {
      addToFavorites(food.id);
    }
  };

  if (!food) {
    return (
      <Layout>
        <div className="container mx-auto px-4 max-w-7xl py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Food not found</h1>
          <p className="text-gray-600 mb-6">The food you're looking for doesn't exist or has been removed.</p>
          <Link to="/search">
            <Button>Back to Search</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <Link to="/search" className="inline-flex items-center text-gray-600 hover:text-dietxpert-primary mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to Search
        </Link>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <img 
              src={food.image} 
              alt={food.name} 
              className="w-full h-auto rounded-lg shadow-md object-cover aspect-video"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{food.name}</h1>
                <p className="text-dietxpert-primary font-medium">{food.category}</p>
              </div>
              
              <Button
                variant={favorite ? "default" : "outline"}
                className={favorite ? "bg-dietxpert-primary hover:bg-dietxpert-primary/90" : ""}
                onClick={handleFavoriteToggle}
              >
                <Heart className={`mr-2 ${favorite ? "fill-current" : ""}`} size={18} />
                {favorite ? "Favorited" : "Add to Favorites"}
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-4 my-8">
              <div className="bg-dietxpert-light p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600 mb-1">Calories</p>
                <p className="text-2xl font-bold text-dietxpert-primary">{food.calories}</p>
              </div>
              <div className="bg-dietxpert-light p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600 mb-1">Protein</p>
                <p className="text-2xl font-bold text-dietxpert-primary">{food.protein}g</p>
              </div>
              <div className="bg-dietxpert-light p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600 mb-1">Carbs</p>
                <p className="text-2xl font-bold text-dietxpert-primary">{food.carbs}g</p>
              </div>
              <div className="bg-dietxpert-light p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600 mb-1">Fat</p>
                <p className="text-2xl font-bold text-dietxpert-primary">{food.fat}g</p>
              </div>
            </div>
            
            <NutrientChart food={food} />
          </div>
        </div>
        
        <Tabs defaultValue="nutrients" className="mt-8">
          <TabsList className="mb-4">
            <TabsTrigger value="nutrients">Nutrients</TabsTrigger>
            <TabsTrigger value="meals">Meal Ideas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="nutrients">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Nutritional Information</h3>
                <div className="border rounded-lg divide-y">
                  {food.nutrients.map((nutrient, index) => (
                    <div key={index} className="grid grid-cols-2 py-3 px-4">
                      <span className="text-gray-700">{nutrient.name}</span>
                      <span className="text-right font-medium">{nutrient.amount} {nutrient.unit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="meals">
            <h3 className="text-xl font-semibold mb-4">
              Meals with {food.name}
            </h3>
            
            {suggestedMeals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {suggestedMeals.map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-gray-600 mb-4">No meal ideas available for this food yet.</p>
                  <Link to="/meal-ideas">
                    <Button variant="outline">Browse All Meals</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default FoodDetail;