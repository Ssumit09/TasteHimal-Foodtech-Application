import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, MapPin, Plus, Minus, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/hooks/useCart';
import { restaurants, menuItems } from '@/data/mockData';

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem, items } = useCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const restaurant = restaurants.find(r => r.id === id);
  
  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Restaurant not found</h1>
          <p className="text-muted-foreground">The restaurant you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const getItemQuantityInCart = (itemId: string) => {
    const cartItem = items.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (item: any) => {
    addItem(item);
    setQuantities(prev => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
  };

  const menuCategories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Restaurant Header */}
      <div className="relative">
        <div className="h-64 md:h-80 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {restaurant.name}
            </h1>
            <p className="text-white/90 mb-4">
              {restaurant.cuisine.join(', ')}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-success text-success" />
                <span className="font-medium">{restaurant.rating}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{restaurant.distance} • {restaurant.area}</span>
              </div>
              
              <span>₹{restaurant.priceForTwo} for two</span>
            </div>
            
            {restaurant.offer && (
              <Badge className="mt-3 bg-primary text-primary-foreground">
                {restaurant.offer}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          
          <TabsContent value="menu" className="mt-8">
            <div className="space-y-8">
              {menuCategories.map(category => (
                <div key={category} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    {category}
                  </h2>
                  
                  <div className="grid gap-4">
                    {menuItems
                      .filter(item => item.category === category)
                      .map(item => (
                        <Card key={item.id} className="shadow-card hover:shadow-float transition-all duration-300">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              <div className="flex-1 p-6">
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-center space-x-2">
                                    {item.isVeg ? (
                                      <div className="w-4 h-4 border-2 border-success flex items-center justify-center">
                                        <div className="w-2 h-2 bg-success rounded-full" />
                                      </div>
                                    ) : (
                                      <div className="w-4 h-4 border-2 border-destructive flex items-center justify-center">
                                        <div className="w-2 h-2 bg-destructive rounded-full" />
                                      </div>
                                    )}
                                    {item.isPopular && (
                                      <Badge variant="secondary" className="text-xs">
                                        Popular
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  {item.rating && (
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-3 w-3 fill-success text-success" />
                                      <span className="text-xs font-medium">{item.rating}</span>
                                    </div>
                                  )}
                                </div>
                                
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                  {item.name}
                                </h3>
                                
                                <p className="text-muted-foreground text-sm mb-4">
                                  {item.description}
                                </p>
                                
                                <div className="flex items-center justify-between">
                                  <span className="text-lg font-bold text-foreground">
                                    ₹{item.price}
                                  </span>
                                  
                                  <Button
                                    onClick={() => handleAddToCart(item)}
                                    className="bg-gradient-himalayan hover:bg-gradient-himalayan/90"
                                  >
                                    <Plus className="h-4 w-4 mr-1" />
                                    Add to Cart
                                  </Button>
                                </div>
                                
                                {getItemQuantityInCart(item.id) > 0 && (
                                  <div className="mt-2 text-xs text-success font-medium">
                                    {getItemQuantityInCart(item.id)} in cart
                                  </div>
                                )}
                              </div>
                              
                              <div className="md:w-48 md:h-36">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover md:rounded-r-lg"
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-8">
            <div className="text-center py-16">
              <Star className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Reviews Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Customer reviews will be available soon
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="about" className="mt-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  About {restaurant.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Cuisine</h4>
                    <p className="text-muted-foreground">{restaurant.cuisine.join(', ')}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Location</h4>
                    <p className="text-muted-foreground">{restaurant.area}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Average Cost</h4>
                    <p className="text-muted-foreground">₹{restaurant.priceForTwo} for two people</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Delivery Time</h4>
                    <p className="text-muted-foreground">{restaurant.deliveryTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RestaurantDetails;