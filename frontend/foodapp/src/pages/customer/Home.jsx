import { useState, useEffect } from 'react';
import PromoBanner from '../../components/home/HeroBanner';
import CategoryBar from '../../components/home/CategoryBar';
import RestaurantCard from '../../components/home/RestaurantCard';
import { RestaurantCardShimmer } from '../../components/common/Shimmer';
import { mockRestaurants } from '../../services/mockData';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRestaurants(mockRestaurants);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg pb-24 md:pb-8">
      {/* === Promo Banner === */}
      <section className="bg-bg-white py-5 page-px">
        <PromoBanner />
      </section>

      {/* Separator */}
      <div className="section-gap" />

      {/* === Categories === */}
      <section className="bg-bg-white py-5 page-px">
        <h2 className="text-[17px] font-extrabold text-text mb-4 tracking-tight">
          What's on your mind?
        </h2>
        <CategoryBar />
      </section>

      {/* Separator */}
      <div className="section-gap" />

      {/* === Restaurant Listing === */}
      <section className="bg-bg-white py-5 page-px">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-[18px] font-extrabold text-text tracking-tight leading-tight">
              Top rated near you
            </h2>
            <p className="text-[13px] text-text-muted mt-0.5">
              Curated picks from your neighbourhood
            </p>
          </div>
          <span className="text-[12px] font-semibold text-text-muted">
            {restaurants.length} places
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <RestaurantCardShimmer key={i} />)
            : restaurants.map((r) => <RestaurantCard key={r._id} restaurant={r} />)
          }
        </div>
      </section>
    </div>
  );
}
