import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiStar, FiClock, FiMapPin } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { mockMenu, mockRestaurants } from '../../services/mockData';
import { MenuItemShimmer } from '../../components/common/Shimmer';

export default function Restaurant() {
  const { id } = useParams();
  const { addItem, removeItem, items: cartItems } = useCart();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mockMenu[id]) {
        setData(mockMenu[id]);
      } else {
        const restaurant = mockRestaurants.find((r) => r._id === id);
        if (restaurant) {
          setData({
            restaurant: { ...restaurant, address: '123 Food Street, Koramangala, Bengaluru' },
            sections: [
              {
                title: 'Recommended',
                items: [
                  { _id: `${id}_1`, name: 'Signature Special', price: 299, description: 'Chef\'s signature dish prepared with the freshest seasonal ingredients', veg: true, bestseller: true, image: restaurant.image },
                  { _id: `${id}_2`, name: 'House Classic', price: 249, description: 'The classic that made us famous — a crowd favourite', veg: false, bestseller: true, image: '' },
                  { _id: `${id}_3`, name: 'Premium Platter', price: 449, description: 'A generous platter meant to be shared with friends and family', veg: false, bestseller: false, image: '' },
                ],
              },
              {
                title: 'Quick Bites',
                items: [
                  { _id: `${id}_4`, name: 'Starter Combo', price: 199, description: 'Assorted starters to kick off your meal', veg: true, bestseller: false, image: '' },
                  { _id: `${id}_5`, name: 'Beverage', price: 79, description: 'Refreshing cold-pressed drink of the day', veg: true, bestseller: false, image: '' },
                ],
              },
            ],
          });
        }
      }
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  const getQty = (itemId) => cartItems.find((i) => i._id === itemId)?.quantity || 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-bg pb-24 page-px">
        <div className="shimmer h-[220px] w-full rounded-2xl mt-4 mb-5" />
        {Array.from({ length: 4 }).map((_, i) => <MenuItemShimmer key={i} />)}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">😔</p>
          <p className="text-[16px] font-bold text-text-sub">Restaurant not found</p>
          <Link to="/" className="text-primary text-sm mt-3 inline-block font-semibold hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const { restaurant, sections } = data;

  return (
    <div className="min-h-screen bg-bg pb-24 md:pb-8">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-bg-white page-px py-3" style={{ boxShadow: 'var(--shadow-header)' }}>
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 -ml-2 rounded-xl hover:bg-bg transition-colors">
            <FiArrowLeft className="text-[18px] text-text" />
          </Link>
          <h1 className="text-[15px] font-bold text-text truncate">{restaurant.name}</h1>
        </div>
      </div>

      {/* Banner */}
      <div className="page-px mt-4">
        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-[200px] sm:h-[260px] object-cover" />
        </div>
      </div>

      {/* Info Card */}
      <div className="page-px mt-4">
        <div className="bg-bg-white rounded-2xl p-5" style={{ boxShadow: 'var(--shadow-card)' }}>
          <h1 className="text-[22px] font-extrabold text-text leading-tight mb-1">{restaurant.name}</h1>
          <p className="text-[13px] text-text-muted mb-3">{restaurant.cuisine}</p>

          <div className="flex items-center gap-3 text-[13px]">
            <div className="flex items-center gap-1 bg-success text-text-inverse px-2 py-[3px] rounded-lg">
              <FiStar className="text-[11px] fill-current" />
              <span className="font-bold text-[12px]">{restaurant.rating}</span>
            </div>
            <span className="font-medium text-text-sub">{restaurant.deliveryTime}</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-secondary">{restaurant.costForTwo} for two</span>
          </div>

          {restaurant.address && (
            <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-divider text-[12px] text-text-muted">
              <FiMapPin className="text-[12px] flex-shrink-0" />
              <span>{restaurant.address}</span>
            </div>
          )}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="page-px mt-4">
        {sections.map((section) => (
          <div key={section.title} className="bg-bg-white rounded-2xl p-5 mb-4" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="flex items-center gap-2 mb-1 pb-3 border-b border-divider">
              <h2 className="text-[16px] font-extrabold text-text">{section.title}</h2>
              <span className="text-[11px] text-text-muted bg-bg px-2 py-0.5 rounded-full font-semibold">{section.items.length}</span>
            </div>

            <div className="divide-y divide-divider">
              {section.items.map((item) => {
                const qty = getQty(item._id);
                return (
                  <div key={item._id} className="flex items-start gap-5 py-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`w-[16px] h-[16px] border-[2px] rounded-[3px] flex items-center justify-center text-[7px] ${item.veg ? 'border-success text-success' : 'border-danger text-danger'}`}>●</span>
                        {item.bestseller && (
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">★ Bestseller</span>
                        )}
                      </div>
                      <h3 className="text-[15px] font-bold text-text mb-0.5 leading-snug">{item.name}</h3>
                      <p className="text-[14px] font-bold text-text-sub mb-1.5">₹{item.price}</p>
                      <p className="text-[12px] text-text-muted leading-relaxed line-clamp-2">{item.description}</p>
                    </div>

                    <div className="relative flex-shrink-0">
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-[120px] h-[100px] object-cover rounded-xl" loading="lazy" />
                      )}
                      <div className={item.image ? 'absolute -bottom-3 left-1/2 -translate-x-1/2' : ''}>
                        {qty === 0 ? (
                          <button
                            onClick={() => addItem(item, id)}
                            className="px-7 py-[7px] bg-bg-white border-2 border-primary text-primary text-[13px] font-extrabold rounded-xl hover:bg-primary-50 transition-all active:scale-95"
                            style={{ boxShadow: '0 2px 8px rgba(255,82,0,.12)' }}
                          >
                            ADD
                          </button>
                        ) : (
                          <div className="flex items-center rounded-xl overflow-hidden bg-primary" style={{ boxShadow: 'var(--shadow-btn)' }}>
                            <button onClick={() => removeItem(item._id)} className="px-3 py-[7px] text-text-inverse font-bold text-[14px] hover:bg-primary-dark transition-colors">−</button>
                            <span className="px-2 py-[7px] text-text-inverse font-extrabold text-[13px] min-w-[24px] text-center">{qty}</span>
                            <button onClick={() => addItem(item, id)} className="px-3 py-[7px] text-text-inverse font-bold text-[14px] hover:bg-primary-dark transition-colors">+</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
