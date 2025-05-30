import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import FoodCard from "@/components/FoodCard";
import MealCard from "@/components/MealCard";
import { useFood } from "@/context/FoodContext";
import { Search, Heart, Utensils } from "lucide-react";

const Index = () => {
  const { foods, meals, categories } = useFood();

  // Featured foods and meals
  const featuredFoods = foods.slice(0, 4);
  const featuredMeals = meals.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dietxpert-primary to-dietxpert-secondary py-16 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Discover the science of nutrition with DietXpert
              </h1>
              <p className="text-lg opacity-90">
                Search foods, track nutrients, find meal ideas and create your perfect diet plan with our comprehensive nutrition platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/search">
                  <Button size="lg" className="bg-white text-dietxpert-primary hover:bg-gray-100">
                    Find Foods
                  </Button>
                </Link>
                <Link to="/meal-ideas">
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                    Explore Meals
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://assets.clevelandclinic.org/transform/a35aef83-8f90-4738-8ced-fee64e4ed789/meal-Prepping-Food-Containers-1271087035-967x544-1_jpg" 
                alt="Healthy Food" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Explore Food Categories</h2>
            <p className="text-gray-600 mt-2">Discover nutrients in different food groups</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Foods */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Featured Foods</h2>
              <p className="text-gray-600 mt-1">Explore nutritional information for popular foods</p>
            </div>
            <Link to="/search">
              <Button variant="outline" className="flex items-center gap-2">
                <Search size={16} />
                <span>Search All</span>
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Meal Ideas</h2>
              <p className="text-gray-600 mt-1">Discover balanced and nutritious meal combinations</p>
            </div>
            <Link to="/meal-ideas">
              <Button variant="outline" className="flex items-center gap-2">
                <Utensils size={16} />
                <span>View All</span>
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose DietXpert</h2>
            <p className="text-gray-600 mt-2">Everything you need for smart nutrition choices</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-dietxpert-light inline-flex p-3 rounded-full mb-4">
                <Search className="text-dietxpert-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Food Database</h3>
              <p className="text-gray-600">
                Search through thousands of foods with detailed nutritional information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-dietxpert-light inline-flex p-3 rounded-full mb-4">
                <Utensils className="text-dietxpert-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Meal Suggestions</h3>
              <p className="text-gray-600">
                Get personalized meal ideas based on your food preferences and nutritional goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-dietxpert-light inline-flex p-3 rounded-full mb-4">
                <Heart className="text-dietxpert-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Your Favorites</h3>
              <p className="text-gray-600">
                Keep track of your favorite foods and meals for quick access anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dietxpert-primary py-16 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your nutrition journey?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join DietXpert today and discover a healthier you through balanced nutrition.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/register">
              <Button size="lg" className="bg-white text-dietxpert-primary hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                Search Foods
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;