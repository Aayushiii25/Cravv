import { useRef, useEffect, useState, useCallback } from 'react';
import { FiHeart, FiBookmark, FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function VideoCard({ reel, isActive }) {
  const videoRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [muted, setMuted] = useState(true);
  const [likeCount, setLikeCount] = useState(reel.likes || 0);
  const [showHeart, setShowHeart] = useState(false);

  // Auto play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const handleLike = useCallback(() => {
    setLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  }, []);

  const handleDoubleTap = useCallback(() => {
    if (!liked) {
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 800);
  }, [liked]);

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  }, []);

  return (
    <div
      className="snap-item relative w-full bg-black flex items-center justify-center"
      onDoubleClick={handleDoubleTap}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={reel.video}
        className="w-full h-full object-cover"
        loop
        muted={muted}
        playsInline
        preload="metadata"
      />

      {/* Double-tap heart animation */}
      {showHeart && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <FiHeart className="text-7xl text-primary fill-primary animate-bounce-in" />
        </div>
      )}

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Top gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Info overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-16 p-5 pb-8 z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold">
            {reel.foodPartner?.name?.charAt(0) || 'C'}
          </div>
          <span className="text-sm font-semibold text-white">
            {reel.foodPartner?.name || 'Cravv'}
          </span>
        </div>
        <h3 className="text-lg font-extrabold text-white mb-1">{reel.name}</h3>
        <p className="text-sm text-white/70 line-clamp-2">{reel.description}</p>
      </div>

      {/* Side action buttons */}
      <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 z-10">
        {/* Like */}
        <button
          onClick={handleLike}
          className="flex flex-col items-center gap-1 active:scale-90 transition-transform"
        >
          <div className={`p-2.5 rounded-full ${liked ? 'bg-primary/20' : 'bg-white/10 backdrop-blur-sm'} transition-colors`}>
            <FiHeart
              className={`text-xl ${liked ? 'text-primary fill-primary' : 'text-white'} transition-colors`}
            />
          </div>
          <span className="text-[10px] font-semibold text-white">{likeCount}</span>
        </button>

        {/* Save */}
        <button
          onClick={() => setSaved(!saved)}
          className="flex flex-col items-center gap-1 active:scale-90 transition-transform"
        >
          <div className={`p-2.5 rounded-full ${saved ? 'bg-accent/20' : 'bg-white/10 backdrop-blur-sm'} transition-colors`}>
            <FiBookmark
              className={`text-xl ${saved ? 'text-accent fill-accent' : 'text-white'} transition-colors`}
            />
          </div>
          <span className="text-[10px] font-semibold text-white">Save</span>
        </button>

        {/* Mute/Unmute */}
        <button
          onClick={toggleMute}
          className="flex flex-col items-center gap-1 active:scale-90 transition-transform"
        >
          <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm">
            {muted ? (
              <FiVolumeX className="text-xl text-white" />
            ) : (
              <FiVolume2 className="text-xl text-white" />
            )}
          </div>
          <span className="text-[10px] font-semibold text-white">{muted ? 'Unmute' : 'Mute'}</span>
        </button>
      </div>
    </div>
  );
}
