import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="text-8xl mb-4">🍽️</div>
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Looks like you're hungry for a page that doesn't exist!
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Don't worry, let's get you back to delicious food instead.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="himalayan" size="lg">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/restaurants">
            <Button variant="outline" size="lg">
              <Search className="h-4 w-4 mr-2" />
              Browse Restaurants
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
