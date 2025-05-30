import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/FoodCard";
import { useFood } from "@/context/FoodContext";
import { useAuth } from "@/context/AuthContext";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { favorites } = useFood();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="container mx-auto px-4 max-w-7xl py-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg max-w-xl mx-auto">
            <Heart className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-bold mb-4">Sign in to view your favorites</h1>
            <p className="text-gray-600 mb-6">
              Create an account or sign in to save your favorite foods and meals.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button>Create Account</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Favorites</h1>
          <p className="text-gray-600">
            Foods you've saved for quick access
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <Heart className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
            <p className="text-gray-600 mb-6">
              Start adding foods to your favorites for quick access
            </p>
            <Link to="/search">
              <Button>Search Foods</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;