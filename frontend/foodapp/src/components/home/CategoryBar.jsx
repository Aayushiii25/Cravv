const categories = [
  { id: 'c1', name: 'Rolls', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=160&h=160&fit=crop' },
  { id: 'c2', name: 'Pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=160&h=160&fit=crop' },
  { id: 'c3', name: 'Dessert', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=160&h=160&fit=crop' },
  { id: 'c4', name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=160&h=160&fit=crop' },
  { id: 'c5', name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=160&h=160&fit=crop' },
  { id: 'c6', name: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=160&h=160&fit=crop' },
  { id: 'c7', name: 'Dosa', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=160&h=160&fit=crop' },
  { id: 'c8', name: 'Thali', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=160&h=160&fit=crop' },
  { id: 'c9', name: 'Sushi', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=160&h=160&fit=crop' },
  { id: 'c10', name: 'Cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=160&h=160&fit=crop' },
];

export default function CategoryBar() {
  return (
    <div className="flex gap-5 sm:gap-7 overflow-x-auto no-scrollbar py-1">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer"
        >
          <div className="w-[76px] h-[76px] sm:w-[84px] sm:h-[84px] rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-primary/30 transition-all duration-200">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <span className="text-[12px] font-semibold text-text-sub group-hover:text-primary transition-colors">
            {cat.name}
          </span>
        </button>
      ))}
    </div>
  );
}
