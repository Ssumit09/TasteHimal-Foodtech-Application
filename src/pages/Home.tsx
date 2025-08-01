import { useState } from 'react';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurants, categories, offers } from '@/data/mockData';
import heroImage from '@/assets/hero-himalayan.jpg';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRestaurants = restaurants.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
              Taste the Himalayas!
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
              Discover authentic mountain cuisine & traditional flavors from the roof of the world
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto animate-scale-in">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for Himalayan cuisine or restaurants"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 text-base bg-white/95 backdrop-blur-sm border-none shadow-lg"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Delivering across Kathmandu Valley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Mountain Flavors
            </h2>
            <p className="text-muted-foreground">
              Journey through diverse Himalayan cuisines
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/restaurants?category=${category.name}`}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-full mx-auto mb-3 w-20 h-20 md:w-24 md:h-24 shadow-card group-hover:shadow-float transition-all duration-300 group-hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Best Offers For You
            </h2>
            <p className="text-muted-foreground">
              Save more with these exclusive deals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden shadow-card hover:shadow-float transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">{offer.title}</h3>
                      <p className="text-white/90">{offer.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Popular Restaurants
              </h2>
              <p className="text-muted-foreground">
                Top-rated restaurants in your area
              </p>
            </div>
            <Link to="/restaurants">
              <Button variant="outline" className="group">
                View All
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;