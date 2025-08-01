// Mock data for TasteHimal - Premium Himalayan cuisine delivery
export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  priceForTwo: number;
  image: string;
  offer?: string;
  distance: string;
  area: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating?: number;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Himalayan', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=150&h=150&fit=crop&crop=center' },
  { id: '2', name: 'Asian Fusion', image: 'https://images.unsplash.com/photo-1526318896980-cf6ba7d2d6b1?w=150&h=150&fit=crop&crop=center' },
  { id: '3', name: 'Tibetan', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=150&h=150&fit=crop&crop=center' },
  { id: '4', name: 'Nepali', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop&crop=center' },
  { id: '5', name: 'Indian', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=150&h=150&fit=crop&crop=center' },
  { id: '6', name: 'Thai', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=150&h=150&fit=crop&crop=center' },
];

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Mountain Peak Kitchen',
    cuisine: ['Himalayan', 'Tibetan'],
    rating: 4.6,
    deliveryTime: '25-30 mins',
    priceForTwo: 450,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center',
    offer: '40% OFF UPTO ₹150',
    distance: '2.1 km',
    area: 'Thamel'
  },
  {
    id: '2',
    name: 'Golden Dragon',
    cuisine: ['Asian Fusion', 'Chinese'],
    rating: 4.4,
    deliveryTime: '20-25 mins',
    priceForTwo: 380,
    image: 'https://images.unsplash.com/photo-1526318896980-cf6ba7d2d6b1?w=300&h=200&fit=crop&crop=center',
    offer: 'FREE DELIVERY',
    distance: '1.5 km',
    area: 'Lazimpat'
  },
  {
    id: '3',
    name: 'Sherpa Kitchen',
    cuisine: ['Tibetan', 'Nepali'],
    rating: 4.7,
    deliveryTime: '15-20 mins',
    priceForTwo: 320,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop&crop=center',
    distance: '0.8 km',
    area: 'Boudha'
  },
  {
    id: '4',
    name: 'Himalayan Spice',
    cuisine: ['Nepali', 'Indian'],
    rating: 4.5,
    deliveryTime: '30-35 mins',
    priceForTwo: 400,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop&crop=center',
    offer: 'BUY 1 GET 1 FREE',
    distance: '2.8 km',
    area: 'Durbar Marg'
  },
  {
    id: '5',
    name: 'Sacred Valley',
    cuisine: ['Himalayan', 'Organic'],
    rating: 4.8,
    deliveryTime: '20-25 mins',
    priceForTwo: 520,
    image: 'https://images.unsplash.com/photo-1488474339733-75b623d2bf4e?w=300&h=200&fit=crop&crop=center',
    distance: '1.2 km',
    area: 'Patan'
  },
  {
    id: '6',
    name: 'Yak & Yeti',
    cuisine: ['Tibetan', 'Asian Fusion'],
    rating: 4.3,
    deliveryTime: '25-30 mins',
    priceForTwo: 380,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=center',
    offer: '30% OFF',
    distance: '2.4 km',
    area: 'Jhamsikhel'
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Himalayan Momo',
    description: 'Traditional steamed dumplings with spiced yak meat filling',
    price: 280,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop',
    category: 'Himalayan Specialties',
    isVeg: false,
    rating: 4.7,
    isPopular: true
  },
  {
    id: '2',
    name: 'Dal Bhat Set',
    description: 'Traditional Nepali meal with lentils, rice, and vegetables',
    price: 350,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop',
    category: 'Traditional Sets',
    isVeg: true,
    rating: 4.6,
    isPopular: true
  },
  {
    id: '3',
    name: 'Thukpa',
    description: 'Hearty Tibetan noodle soup with vegetables and meat',
    price: 240,
    image: 'https://images.unsplash.com/photo-1563379091339-03246a98cd15?w=300&h=200&fit=crop',
    category: 'Soups & Noodles',
    isVeg: false,
    rating: 4.5
  },
  {
    id: '4',
    name: 'Yak Cheese Momos',
    description: 'Premium steamed dumplings with authentic yak cheese',
    price: 320,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop',
    category: 'Himalayan Specialties',
    isVeg: true,
    rating: 4.8
  },
  {
    id: '5',
    name: 'Sherpa Bread',
    description: 'Traditional mountain bread baked in clay ovens',
    price: 120,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop',
    category: 'Breads & Sides',
    isVeg: true,
    rating: 4.4
  },
  {
    id: '6',
    name: 'Himalayan Herbal Tea',
    description: 'Organic high-altitude tea blend with healing herbs',
    price: 80,
    image: 'https://images.unsplash.com/photo-1488474339733-75b623d2bf4e?w=300&h=200&fit=crop',
    category: 'Beverages',
    isVeg: true,
    rating: 4.6
  }
];

export const offers = [
  {
    id: '1',
    title: 'MOUNTAIN40',
    description: '40% OFF up to ₹200',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=200&fit=crop'
  },
  {
    id: '2',
    title: 'FREE DELIVERY',
    description: 'On orders above ₹299',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop'
  }
];

export const userProfile = {
  name: 'Tenzin Norbu',
  email: 'tenzin.norbu@email.com',
  phone: '+977 9876543210',
  addresses: [
    {
      id: '1',
      type: 'Home',
      address: '123 Thamel Street, Kathmandu, Nepal 44600',
      isDefault: true
    },
    {
      id: '2',
      type: 'Work',
      address: '456 Durbar Marg, Kathmandu, Nepal 44600',
      isDefault: false
    }
  ],
  orders: [
    {
      id: 'ORD001',
      restaurant: 'Mountain Peak Kitchen',
      items: ['Himalayan Momo', 'Sherpa Bread'],
      total: 400,
      date: '2024-01-15',
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      restaurant: 'Sacred Valley',
      items: ['Dal Bhat Set'],
      total: 350,
      date: '2024-01-10',
      status: 'Delivered'
    }
  ]
};