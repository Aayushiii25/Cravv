export function RestaurantCardShimmer() {
  return (
    <div className="flex gap-4 p-4 bg-bg-white rounded-2xl animate-pulse" style={{ boxShadow: 'var(--shadow-card)' }}>
      <div className="shimmer w-[120px] h-[110px] rounded-xl flex-shrink-0" />
      <div className="flex-1 py-2">
        <div className="shimmer h-[18px] w-3/5 mb-3 rounded-lg" />
        <div className="shimmer h-[14px] w-2/5 mb-2 rounded-lg" />
        <div className="shimmer h-[12px] w-4/5 rounded-lg" />
      </div>
    </div>
  );
}

export function CategoryShimmer() {
  return (
    <div className="flex gap-5 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0">
          <div className="shimmer w-[76px] h-[76px] rounded-full" />
          <div className="shimmer w-10 h-3 rounded" />
        </div>
      ))}
    </div>
  );
}

export function MenuItemShimmer() {
  return (
    <div className="flex items-center gap-4 py-5 animate-pulse">
      <div className="flex-1">
        <div className="shimmer h-4 w-1/3 mb-2 rounded-lg" />
        <div className="shimmer h-4 w-1/4 mb-2 rounded-lg" />
        <div className="shimmer h-3 w-3/4 rounded-lg" />
      </div>
      <div className="shimmer w-[120px] h-[100px] rounded-xl" />
    </div>
  );
}
