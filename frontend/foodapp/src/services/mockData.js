// ===== Mock Data for Cravv Frontend =====

// Demo reel videos
export const mockReels = [
  {
    _id: 'reel_1',
    name: 'Midnight Cheese Burst',
    description: 'Golden melted cheese stretching over freshly baked layers. Comfort food that hits different.',
    video: 'https://ik.imagekit.io/nmdzcg29o/15763681_720_1280_30fps.mp4',
    likes: 1243,
    foodPartner: { name: 'Pizza Paradise' },
  },
  {
    _id: 'reel_2',
    name: 'Street Style Perfection',
    description: 'Crispy, spicy, and packed with flavor—pure street food magic.',
    video: 'https://ik.imagekit.io/nmdzcg29o/8106285-hd_1080_1920_30fps.mp4',
    likes: 892,
    foodPartner: { name: 'Street Bites Co.' },
  },
  {
    _id: 'reel_3',
    name: 'Luxury Bite Experience',
    description: 'Rich textures and premium visuals that feel like fine dining.',
    video: 'https://ik.imagekit.io/nmdzcg29o/6222175-uhd_2160_3840_24fps.mp4',
    likes: 2105,
    foodPartner: { name: 'The Grand Kitchen' },
  },
];

// Mock restaurants for home page
export const mockRestaurants = [
  {
    _id: 'r1',
    name: 'Pizza Paradise',
    cuisine: 'Italian, Pizza, Fast Food',
    rating: 4.5,
    deliveryTime: '25-30 min',
    costForTwo: '₹400',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    promoted: true,
    discount: '50% OFF up to ₹100',
    veg: false,
  },
  {
    _id: 'r2',
    name: 'Burger Barn',
    cuisine: 'Burgers, American, Fast Food',
    rating: 4.2,
    deliveryTime: '20-25 min',
    costForTwo: '₹350',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    promoted: false,
    discount: '30% OFF up to ₹75',
    veg: false,
  },
  {
    _id: 'r3',
    name: 'Tandoori Nights',
    cuisine: 'North Indian, Mughlai, Kebabs',
    rating: 4.7,
    deliveryTime: '30-35 min',
    costForTwo: '₹600',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    promoted: true,
    discount: '20% OFF up to ₹50',
    veg: false,
  },
  {
    _id: 'r4',
    name: 'Green Bowl',
    cuisine: 'Healthy, Salads, Bowls',
    rating: 4.4,
    deliveryTime: '15-20 min',
    costForTwo: '₹300',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    promoted: false,
    discount: '',
    veg: true,
  },
  {
    _id: 'r5',
    name: 'Sushi Zen',
    cuisine: 'Japanese, Sushi, Asian',
    rating: 4.8,
    deliveryTime: '35-40 min',
    costForTwo: '₹800',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop',
    promoted: true,
    discount: '₹125 OFF above ₹499',
    veg: false,
  },
  {
    _id: 'r6',
    name: 'Dosa Factory',
    cuisine: 'South Indian, Dosa, Idli',
    rating: 4.3,
    deliveryTime: '20-25 min',
    costForTwo: '₹250',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
    promoted: false,
    discount: '40% OFF up to ₹80',
    veg: true,
  },
  {
    _id: 'r7',
    name: 'Chai & Snacks',
    cuisine: 'Beverages, Snacks, Street Food',
    rating: 4.1,
    deliveryTime: '10-15 min',
    costForTwo: '₹150',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    promoted: false,
    discount: '',
    veg: true,
  },
  {
    _id: 'r8',
    name: 'BBQ Nation',
    cuisine: 'BBQ, Grills, North Indian',
    rating: 4.6,
    deliveryTime: '30-40 min',
    costForTwo: '₹700',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    promoted: true,
    discount: '60% OFF up to ₹120',
    veg: false,
  },
];

// Mock menu for restaurant details
export const mockMenu = {
  r1: {
    restaurant: {
      _id: 'r1',
      name: 'Pizza Paradise',
      cuisine: 'Italian, Pizza, Fast Food',
      rating: 4.5,
      deliveryTime: '25-30 min',
      costForTwo: '₹400',
      address: '123 Food Street, Koramangala, Bengaluru',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop',
    },
    sections: [
      {
        title: 'Recommended',
        items: [
          { _id: 'm1', name: 'Margherita Pizza', price: 199, description: 'Classic cheese & tomato pizza with fresh basil', veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop' },
          { _id: 'm2', name: 'Pepperoni Feast', price: 349, description: 'Loaded with spicy pepperoni and mozzarella', veg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop' },
          { _id: 'm3', name: 'BBQ Chicken Pizza', price: 399, description: 'Smoky BBQ chicken with jalapeños and onions', veg: false, bestseller: false, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop' },
        ],
      },
      {
        title: 'Sides',
        items: [
          { _id: 'm4', name: 'Garlic Bread', price: 129, description: 'Crispy garlic bread with herbs and butter', veg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=200&h=200&fit=crop' },
          { _id: 'm5', name: 'Chicken Wings', price: 249, description: 'Spicy buffalo wings with ranch dip', veg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1608039829572-9b5bba1ee9ac?w=200&h=200&fit=crop' },
        ],
      },
      {
        title: 'Beverages',
        items: [
          { _id: 'm6', name: 'Coca Cola', price: 59, description: '300ml can', veg: true, bestseller: false, image: '' },
          { _id: 'm7', name: 'Iced Tea', price: 89, description: 'Refreshing lemon iced tea', veg: true, bestseller: false, image: '' },
        ],
      },
    ],
  },
};

// Mock food categories
export const mockCategories = [
  { id: 'c1', name: 'Pizza', emoji: '🍕' },
  { id: 'c2', name: 'Burger', emoji: '🍔' },
  { id: 'c3', name: 'Biryani', emoji: '🍛' },
  { id: 'c4', name: 'Chinese', emoji: '🥡' },
  { id: 'c5', name: 'Desserts', emoji: '🍰' },
  { id: 'c6', name: 'Sushi', emoji: '🍣' },
  { id: 'c7', name: 'Thali', emoji: '🍽️' },
  { id: 'c8', name: 'Rolls', emoji: '🌯' },
  { id: 'c9', name: 'Dosa', emoji: '🥞' },
  { id: 'c10', name: 'Chai', emoji: '☕' },
];

// Mock partner orders
export const mockPartnerOrders = [
  {
    _id: 'po1',
    orderNumber: '#CRV-2847',
    restaurant: 'Pizza Paradise',
    pickupAddress: '123 Food Street, Koramangala',
    dropAddress: '456 Main Road, HSR Layout',
    customerName: 'Rahul S.',
    customerPhone: '+91 98765 43210',
    items: ['2x Margherita Pizza', '1x Garlic Bread'],
    total: 527,
    distance: '4.2 km',
    estimatedTime: '18 min',
    earnings: 62,
    status: 'pending',
    timestamp: new Date().toISOString(),
  },
  {
    _id: 'po2',
    orderNumber: '#CRV-2848',
    restaurant: 'Burger Barn',
    pickupAddress: '78 Brigade Road, MG Road',
    dropAddress: '12 Residency Road, Ashok Nagar',
    customerName: 'Priya M.',
    customerPhone: '+91 87654 32109',
    items: ['1x Classic Burger', '1x Fries', '2x Coke'],
    total: 438,
    distance: '2.8 km',
    estimatedTime: '12 min',
    earnings: 45,
    status: 'pending',
    timestamp: new Date().toISOString(),
  },
];

// Mock partner earnings
export const mockPartnerEarnings = {
  today: { total: 842, trips: 12, online: '6h 30m' },
  week: { total: 5230, trips: 78, online: '42h 15m' },
  breakdown: [
    { day: 'Mon', amount: 650 },
    { day: 'Tue', amount: 920 },
    { day: 'Wed', amount: 780 },
    { day: 'Thu', amount: 840 },
    { day: 'Fri', amount: 1100 },
    { day: 'Sat', amount: 940 },
    { day: 'Sun', amount: 0 },
  ],
};

// Mock partner order history
export const mockPartnerHistory = [
  {
    _id: 'ph1',
    orderNumber: '#CRV-2840',
    restaurant: 'Sushi Zen',
    dropAddress: '90 Indiranagar, Bengaluru',
    total: 1245,
    earnings: 85,
    status: 'delivered',
    date: '2026-04-25',
    time: '1:30 PM',
  },
  {
    _id: 'ph2',
    orderNumber: '#CRV-2835',
    restaurant: 'Tandoori Nights',
    dropAddress: '45 Whitefield, Bengaluru',
    total: 890,
    earnings: 72,
    status: 'delivered',
    date: '2026-04-25',
    time: '12:10 PM',
  },
  {
    _id: 'ph3',
    orderNumber: '#CRV-2831',
    restaurant: 'Green Bowl',
    dropAddress: '22 JP Nagar, Bengaluru',
    total: 420,
    earnings: 48,
    status: 'delivered',
    date: '2026-04-24',
    time: '8:45 PM',
  },
  {
    _id: 'ph4',
    orderNumber: '#CRV-2826',
    restaurant: 'Dosa Factory',
    dropAddress: '11 BTM Layout, Bengaluru',
    total: 310,
    earnings: 38,
    status: 'cancelled',
    date: '2026-04-24',
    time: '7:00 PM',
  },
];
