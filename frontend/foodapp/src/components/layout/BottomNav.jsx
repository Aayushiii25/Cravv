import { NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function IconHome({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#FF5200' : 'none'} stroke={active ? '#FF5200' : '#93959F'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconFood({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#FF5200' : '#93959F'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

function IconReels({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#FF5200' : '#93959F'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function IconCart({ active, count }) {
  return (
    <div className="relative">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#FF5200' : '#93959F'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-[5px] bg-primary rounded-full text-[10px] font-bold text-text-inverse flex items-center justify-center leading-none">{count}</span>
      )}
    </div>
  );
}

function IconPartner({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#FF5200' : '#93959F'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

export default function BottomNav() {
  const { totalItems } = useCart();
  const location = useLocation();

  if (
    location.pathname === '/reels' ||
    location.pathname.startsWith('/partner') ||
    location.pathname === '/login' ||
    location.pathname === '/register'
  ) return null;

  const tabs = [
    { to: '/', icon: IconHome, label: 'Cravv' },
    { to: '/food', icon: IconFood, label: 'Food' },
    { to: '/reels', icon: IconReels, label: 'Reels' },
    { to: '/cart', icon: IconCart, label: 'Cart', badge: totalItems },
    { to: '/partner/login', icon: IconPartner, label: 'Partner' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-bg-white border-t border-border md:hidden" style={{ boxShadow: '0 -1px 6px rgba(0,0,0,.04)' }}>
      <div className="flex items-center justify-around h-[56px]">
        {tabs.map((tab) => {
          const isActive = tab.to === '/' ? location.pathname === '/' : location.pathname.startsWith(tab.to);
          return (
            <NavLink key={tab.to} to={tab.to} className="flex flex-col items-center justify-center gap-[2px] flex-1 h-full">
              <tab.icon active={isActive} count={tab.badge} />
              <span className={`text-[10px] font-semibold leading-none ${isActive ? 'text-primary' : 'text-text-muted'}`}>{tab.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
