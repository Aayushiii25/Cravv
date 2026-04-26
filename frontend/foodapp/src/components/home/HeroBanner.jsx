import { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    title: 'BUY 1 GET 1 FREE',
    description: 'Delicious delightful pizza by more',
    cta: 'ORDER NOW',
    bg: '#FFF5EE',
    accent: '#FF5200',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=280&fit=crop',
  },
  {
    id: 2,
    title: 'FREE SNACKS!',
    description: 'Grab free nachos with your order. Use code: SNACKIT',
    cta: 'GRAB NOW',
    bg: '#F0FFF4',
    accent: '#1BA672',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=280&fit=crop',
  },
  {
    id: 3,
    title: 'Flat 20% OFF',
    description: 'On all orders above ₹499. Limited time only!',
    cta: 'VIEW OUTLETS',
    bg: '#FFF8E1',
    accent: '#DB7C38',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=280&fit=crop',
  },
];

export default function PromoBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % banners.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: `translateX(-${index * 100}%)` }}>
          {banners.map((b) => (
            <div key={b.id} className="w-full flex-shrink-0 flex items-center gap-5 p-5 sm:p-6" style={{ background: b.bg }}>
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] sm:text-[22px] font-extrabold text-text leading-tight mb-1.5">
                  {b.title}
                </h3>
                <p className="text-[13px] text-text-secondary mb-4 line-clamp-2 leading-relaxed">{b.description}</p>
                <button
                  className="px-5 py-2 text-[12px] font-bold rounded-xl text-text-inverse transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: b.accent, boxShadow: `0 4px 12px ${b.accent}40` }}
                >
                  {b.cta}
                </button>
              </div>
              <img
                src={b.image}
                alt={b.title}
                className="w-[120px] h-[90px] sm:w-[160px] sm:h-[110px] object-cover rounded-xl flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex items-center justify-center gap-[6px] mt-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? 'w-6 h-[6px] bg-text' : 'w-[6px] h-[6px] bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
