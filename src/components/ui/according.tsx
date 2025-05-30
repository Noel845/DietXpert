import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { FoodCategory } from "@/types";

interface CategoryCardProps {
  category: FoodCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/search?category=${category.name.toLowerCase()}`}>
      <Card className="category-card overflow-hidden">
        <div className="relative">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-36 object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white font-semibold text-xl">{category.name}</h3>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;