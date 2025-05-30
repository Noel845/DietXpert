
import { Link } from "react-router-dom";

const Logo = ({ size = 'large' }: { size?: 'small' | 'medium' | 'large' }) => {
  const sizeClasses = {
    small: 'h-12',
    medium: 'h-20',
    large: 'h-28'
  };

  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="https://boutique.laventure.michelin.com/wp-content/uploads/2020/12/Magnet-Cuisinier.png" 
        alt="DietXpert Logo"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
      <span className={`font-bold ${size === 'small' ? 'text-lg' : size === 'medium' ? 'text-2xl' : 'text-3xl'} text-dietxpert-primary`}>
        DietXpert
      </span>
    </Link>
  );
};

export default Logo;