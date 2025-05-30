import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import Logo from "./Logo";
import { Menu, Search, User, Heart, BookOpen, X } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm py-3 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/search" 
            className="flex items-center gap-2 text-gray-700 hover:text-dietxpert-primary transition-colors"
          >
            <Search size={18} />
            <span>Search Foods</span>
          </Link>
          
          {isAuthenticated && (
            <>
              <Link 
                to="/favorites" 
                className="flex items-center gap-2 text-gray-700 hover:text-dietxpert-primary transition-colors"
              >
                <Heart size={18} />
                <span>Favorites</span>
              </Link>
              <Link 
                to="/meal-ideas" 
                className="flex items-center gap-2 text-gray-700 hover:text-dietxpert-primary transition-colors"
              >
                <BookOpen size={18} />
                <span>Meal Ideas</span>
              </Link>
            </>
          )}
          
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link to="/profile">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <User size={16} />
                  <span>Profile</span>
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/search" 
              className="flex items-center gap-2 text-gray-700 py-2 hover:text-dietxpert-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search size={18} />
              <span>Search Foods</span>
            </Link>
            
            {isAuthenticated && (
              <>
                <Link 
                  to="/favorites" 
                  className="flex items-center gap-2 text-gray-700 py-2 hover:text-dietxpert-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Heart size={18} />
                  <span>Favorites</span>
                </Link>
                <Link 
                  to="/meal-ideas" 
                  className="flex items-center gap-2 text-gray-700 py-2 hover:text-dietxpert-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen size={18} />
                  <span>Meal Ideas</span>
                </Link>
              </>
            )}
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/profile" 
                  className="flex items-center gap-2 text-gray-700 py-2 hover:text-dietxpert-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={18} />
                  <span>Profile</span>
                </Link>
                <Button 
                  variant="ghost" 
                  className="justify-start px-0 hover:bg-transparent" 
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 mt-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;