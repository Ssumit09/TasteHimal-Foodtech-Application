import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const location = useLocation();
  
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-himalayan rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-himalayan bg-clip-text text-transparent">
              TasteHimal
            </span>
          </Link>

          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Kathmandu</span>
              <span className="text-xs">Nepal</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/restaurants" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/restaurants') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Restaurants
            </Link>
            <Link 
              to="/profile" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/profile') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Profile
            </Link>
          </div>

          {/* Cart and User Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground px-2">
                <MapPin className="h-4 w-4" />
                <div>
                  <div className="text-sm font-medium text-foreground">Kathmandu</div>
                  <div className="text-xs">Nepal</div>
                </div>
              </div>
              
              <Link 
                to="/" 
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/restaurants" 
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  isActive('/restaurants') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Restaurants
              </Link>
              <Link 
                to="/profile" 
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  isActive('/profile') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;