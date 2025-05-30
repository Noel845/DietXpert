import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { FoodProvider } from "@/context/FoodContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import FoodDetail from "./pages/FoodDetail";
import MealDetail from "./pages/MealDetail";
import Favorites from "./pages/Favorites";
import MealIdeas from "./pages/MealIdeas";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <FoodProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<Search />} />
              <Route path="/food/:id" element={<FoodDetail />} />
              <Route path="/meal/:id" element={<MealDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/meal-ideas" element={<MealIdeas />} />
              <Route path="/profile" element={<Profile />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </FoodProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;