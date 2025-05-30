import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FoodCard from "@/components/FoodCard";
import { useFood } from "@/context/FoodContext";
import { ArrowLeft } from "lucide-react";

const MealDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getMealById } = useFood();
  const [meal, setMeal] = useState(getMealById(id || ""));

  useEffect(() => {
    if (id) {
      const mealData = getMealById(id);
      setMeal(mealData);
    }
  }, [id, getMealById]);

  if (!meal) {
    return (
      <Layout>
        <div className="container mx-auto px-4 max-w-7xl py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Meal not found</h1>
          <p className="text-gray-600 mb-6">The meal you're looking for doesn't exist or has been removed.</p>
          <Link to="/meal-ideas">
            <Button>Browse Meals</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <Link to="/meal-ideas" className="inline-flex items-center text-gray-600 hover:text-dietxpert-primary mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to Meal Ideas
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <img 
              src={meal.image} 
              alt={meal.name} 
              className="w-full h-auto rounded-lg shadow-md object-cover aspect-video"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{meal.name}</h1>
            <p className="text-gray-700 mb-6">{meal.description}</p>
            
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-dietxpert-light p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600 mb-1">Calories</p>
                <p className="text-2xl font-bold text-dietxpert-primary">{meal.totalCalories}</p>
              </div>
              <div className="bg-dietxpert-light p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600 mb-1">Protein</p>
                <p className="text-2xl font-bold text-dietxpert-primary">{meal.totalProtein}g</p>
              </div>
              <div className="bg-dietxpert-light p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600 mb-1">Carbs</p>
                <p className="text-2xl font-bold text-dietxpert-primary">{meal.totalCarbs}g</p>
              </div>
              <div className="bg-dietxpert-light p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600 mb-1">Fat</p>
                <p className="text-2xl font-bold text-dietxpert-primary">{meal.totalFat}g</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-6">Ingredients</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {meal.foods.map((food) => (
                <FoodCard key={food.id} food={food} showDetails={false} />
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center mt-12">
          <Link to="/meal-ideas">
            <Button variant="outline">Explore More Meal Ideas</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default MealDetail;