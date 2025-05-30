import Layout from "@/components/Layout";
import MealCard from "@/components/MealCard";
import { useFood } from "@/context/FoodContext";

const MealIdeas = () => {
  const { meals } = useFood();

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Meal Ideas</h1>
          <p className="text-gray-600">
            Discover balanced and nutritious meal combinations
          </p>
        </div>

        {meals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">No meal ideas available</h2>
            <p className="text-gray-600">
              Check back later for delicious and nutritious meal suggestions
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MealIdeas;