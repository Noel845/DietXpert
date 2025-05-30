import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo size="medium" />
            <p className="mt-4 text-gray-600 max-w-xs">
              Discover a healthier you with personalized nutrition insights and meal planning.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-dietxpert-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dietxpert-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dietxpert-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-dietxpert-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-600 hover:text-dietxpert-primary transition-colors">Search Foods</Link>
              </li>
              <li>
                <Link to="/meal-ideas" className="text-gray-600 hover:text-dietxpert-primary transition-colors">Meal Ideas</Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-600 hover:text-dietxpert-primary transition-colors">Your Favorites</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-dietxpert-primary transition-colors">Nutrition Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dietxpert-primary transition-colors">Meal Planning Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dietxpert-primary transition-colors">Food Database</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dietxpert-primary transition-colors">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DietXpert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;