import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Food } from "@/types";
import { useFood } from "@/context/FoodContext";

interface FoodCardProps {
  food: Food;
  showDetails?: boolean;
}

const FoodCard = ({ food, showDetails = true }: FoodCardProps) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFood();
  const favorite = isFavorite(food.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorite) {
      removeFromFavorites(food.id);
    } else {
      addToFavorites(food.id);
    }
  };

  return (
    <Link to={`/food/${food.id}`}>
      <Card className="food-card overflow-hidden">
        <div className="relative">
          <img 
            src={food.image} 
            alt={food.name} 
            className="w-full h-48 object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${
              favorite ? 'text-red-500' : 'text-gray-500'
            }`}
            onClick={handleFavoriteToggle}
          >
            <Heart className={favorite ? 'fill-current' : ''} size={18} />
          </Button>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-white font-medium text-lg truncate">{food.name}</h3>
            <p className="text-white/80 text-sm">{food.category}</p>
          </div>
        </div>
        
        {showDetails && (
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-gray-500">Calories</p>
                <p className="font-semibold">{food.calories}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Protein</p>
                <p className="font-semibold">{food.protein}g</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Carbs</p>
                <p className="font-semibold">{food.carbs}g</p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  );
};

export default FoodCard;