
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodCard from "@/components/FoodCard";
import { useFood } from "@/context/FoodContext";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const { foods, categories, searchFood, searchResults } = useFood();

  // Perform search when component mounts or when query/category changes from URL
  useEffect(() => {
    const urlQuery = searchParams.get("q") || "";
    const urlCategory = searchParams.get("category") || "all";
    
    setQuery(urlQuery);
    setSelectedCategory(urlCategory);
    
    searchFood(urlQuery, urlCategory === "all" ? undefined : urlCategory);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update URL parameters
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    setSearchParams(params);
    
    // Perform search
    searchFood(query, selectedCategory === "all" ? undefined : selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    // Update URL and trigger search
    const params = new URLSearchParams(searchParams);
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    setSearchParams(params);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Foods</h1>
          <p className="text-gray-600">
            Find detailed nutritional information for your favorite foods
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search for foods..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>

        {/* Category Tabs */}
        <Tabs 
          value={selectedCategory} 
          onValueChange={handleCategoryChange}
          className="mb-8"
        >
          <TabsList className="w-full overflow-x-auto flex-nowrap justify-start md:justify-center">
            <TabsTrigger value="all" className="px-5">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.name.toLowerCase()}
                className="px-5"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Search Results */}
        <div>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          ) : query || selectedCategory !== "all" ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-gray-600">
                Try adjusting your search or exploring different categories
              </p>
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Start searching for foods</h3>
              <p className="text-gray-600">
                Enter a search term or select a category to see results
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;