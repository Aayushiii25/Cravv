import { Link } from 'react-router-dom';
import { FiStar, FiClock } from 'react-icons/fi';

export default function RestaurantCard({ restaurant }) {
  const { _id, name, cuisine, rating, deliveryTime, costForTwo, image, discount } = restaurant;

  return (
    <Link
      to={`/restaurant/${_id}`}
      className="flex gap-4 p-4 bg-bg-white rounded-2xl transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] animate-fade-in group"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Image */}
      <div className="relative w-[120px] h-[110px] flex-shrink-0 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {discount && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-2 pb-1.5 pt-4">
            <span className="text-[11px] font-extrabold text-white leading-tight">{discount}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 py-1 flex flex-col justify-center">
        <h3 className="text-[16px] font-bold text-text mb-1 truncate group-hover:text-primary transition-colors leading-tight">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-1.5">
          <div className="flex items-center gap-1 bg-success text-text-inverse px-[6px] py-[2px] rounded-md">
            <FiStar className="text-[10px] fill-current" />
            <span className="text-[11px] font-bold leading-none">{rating}</span>
          </div>
          <span className="text-[12px] text-text-muted">·</span>
          <div className="flex items-center gap-1">
            <FiClock className="text-[11px] text-text-muted" />
            <span className="text-[12px] font-medium text-text-sub">{deliveryTime}</span>
          </div>
        </div>

        <p className="text-[12px] text-text-muted truncate leading-snug">{cuisine}</p>
        <p className="text-[11px] text-text-light mt-0.5">{costForTwo} for two</p>
      </div>
    </Link>
  );
}
