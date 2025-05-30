import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Meal } from "@/types";

interface MealCardProps {
  meal: Meal;
}

const MealCard = ({ meal }: MealCardProps) => {
  return (
    <Link to={`/meal/${meal.id}`}>
      <Card className="food-card overflow-hidden">
        <div className="relative">
          <img 
            src={meal.image} 
            alt={meal.name} 
            className="w-full h-56 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-white font-semibold text-lg">{meal.name}</h3>
            <p className="text-white/80 text-sm">{meal.totalCalories} calories</p>
          </div>
        </div>
        
        <CardContent className="p-4">
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">{meal.description}</p>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-xs text-gray-500">Protein</p>
              <p className="font-semibold">{meal.totalProtein}g</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Carbs</p>
              <p className="font-semibold">{meal.totalCarbs}g</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Fat</p>
              <p className="font-semibold">{meal.totalFat}g</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MealCard;
