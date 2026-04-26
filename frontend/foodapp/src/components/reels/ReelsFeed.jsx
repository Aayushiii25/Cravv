import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import VideoCard from './VideoCard';

export default function ReelsFeed({ reels }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Intersection Observer for tracking active video
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.7,
      }
    );

    const items = container.querySelectorAll('[data-index]');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [reels]);

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4">
        <Link
          to="/"
          className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          <FiArrowLeft className="text-xl text-white" />
        </Link>
        <h2 className="text-base font-bold text-white">Reels</h2>
        <div className="w-9" /> {/* Spacer for centering */}
      </div>

      {/* Scroll container */}
      <div ref={containerRef} className="snap-container">
        {reels.map((reel, index) => (
          <div key={reel._id} data-index={index}>
            <VideoCard reel={reel} isActive={index === activeIndex} />
          </div>
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1.5">
        {reels.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'h-6 bg-primary' : 'h-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
