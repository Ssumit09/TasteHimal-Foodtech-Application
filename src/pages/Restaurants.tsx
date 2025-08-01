import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Star, Clock, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurants, categories } from '@/data/mockData';

const Restaurants = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const allCuisines = useMemo(() => {
    const cuisines = new Set<string>();
    restaurants.forEach(restaurant => {
      restaurant.cuisine.forEach(c => cuisines.add(c));
    });
    return Array.from(cuisines);
  }, []);

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants;

    // Category filter from URL
    if (categoryFilter) {
      filtered = filtered.filter(restaurant =>
        restaurant.cuisine.some(c => c.toLowerCase().includes(categoryFilter.toLowerCase()))
      );
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Cuisine filter
    if (cuisineFilter !== 'all') {
      filtered = filtered.filter(restaurant =>
        restaurant.cuisine.includes(cuisineFilter)
      );
    }

    // Rating filter
    if (ratingFilter !== 'all') {
      const minRating = parseFloat(ratingFilter);
      filtered = filtered.filter(restaurant => restaurant.rating >= minRating);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'deliveryTime':
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        case 'priceForTwo':
          return a.priceForTwo - b.priceForTwo;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, sortBy, cuisineFilter, ratingFilter, categoryFilter]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {categoryFilter ? `${categoryFilter} Restaurants` : 'All Restaurants'}
          </h1>
          <p className="text-muted-foreground">
            {filteredRestaurants.length} restaurants found
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search restaurants or cuisines"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="deliveryTime">Delivery Time</SelectItem>
                <SelectItem value="priceForTwo">Price</SelectItem>
              </SelectContent>
            </Select>

            <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Cuisine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cuisines</SelectItem>
                {allCuisines.map(cuisine => (
                  <SelectItem key={cuisine} value={cuisine}>
                    {cuisine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="4.0">4.0+</SelectItem>
                <SelectItem value="4.2">4.2+</SelectItem>
                <SelectItem value="4.5">4.5+</SelectItem>
              </SelectContent>
            </Select>

            {(searchQuery || cuisineFilter !== 'all' || ratingFilter !== 'all') && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setCuisineFilter('all');
                  setRatingFilter('all');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {categoryFilter && (
              <Badge variant="secondary">
                Category: {categoryFilter}
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary">
                Search: {searchQuery}
              </Badge>
            )}
            {cuisineFilter !== 'all' && (
              <Badge variant="secondary">
                Cuisine: {cuisineFilter}
              </Badge>
            )}
            {ratingFilter !== 'all' && (
              <Badge variant="secondary">
                Rating: {ratingFilter}+
              </Badge>
            )}
          </div>
        </div>

        {/* Restaurant Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No restaurants found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setCuisineFilter('all');
                setRatingFilter('all');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;