import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import { Restaurant } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="group">
      <Card className="overflow-hidden shadow-card hover:shadow-float transition-all duration-300 group-hover:scale-[1.02]">
        <div className="relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          {restaurant.offer && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground font-medium">
              {restaurant.offer}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            
            <p className="text-muted-foreground text-sm">
              {restaurant.cuisine.join(', ')}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-success text-success" />
                <span className="text-sm font-medium">{restaurant.rating}</span>
              </div>
              
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{restaurant.deliveryTime}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                ₹{restaurant.priceForTwo} for two
              </span>
              
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span className="text-xs">{restaurant.distance}</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground">{restaurant.area}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;