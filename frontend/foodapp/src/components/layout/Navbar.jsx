import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiUser, FiChevronDown } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user } = useAuth();
  const location = useLocation();

  // Hide navbar on reels and partner pages
  if (location.pathname === '/reels' || location.pathname.startsWith('/partner')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-bg-white" style={{ boxShadow: 'var(--shadow-header)' }}>
      {/* Top row */}
      <div className="flex items-center justify-between h-[56px] page-px">
        {/* Left: Logo + Location */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex-shrink-0">
            <span className="text-[22px] font-black text-primary tracking-tight leading-none">cravv</span>
          </Link>

          <div className="flex items-center gap-1.5 cursor-pointer group">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-extrabold text-text leading-none">Home</span>
                <FiChevronDown className="text-primary text-[13px]" />
              </div>
              <p className="text-[11px] text-text-muted leading-none mt-0.5 max-w-[260px] truncate">
                A-31, Bank Street, New Delhi 110006
              </p>
            </div>
          </div>
        </div>

        {/* Right: Profile */}
        <div className="flex items-center gap-5">
          {user ? (
            <Link to="/profile" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FiUser className="text-[18px] text-text-sub" />
              <span className="text-[13px] font-bold text-text-sub hidden sm:block">{user.fullName?.split(' ')[0]}</span>
            </Link>
          ) : (
            <Link to="/login" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FiUser className="text-[18px] text-text-sub" />
              <span className="text-[13px] font-bold text-text-sub hidden sm:block">Sign In</span>
            </Link>
          )}
        </div>
      </div>

      {/* Search Bar - full width */}
      <div className="page-px pb-3">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[15px]" />
          <input
            type="text"
            placeholder='Search for restaurants, cuisines...'
            className="w-full pl-11 pr-4 py-[10px] bg-bg border border-border rounded-2xl text-[14px] text-text placeholder:text-text-muted focus:bg-bg-white focus:border-border focus:shadow-[0_2px_12px_rgba(0,0,0,.06)] transition-all"
          />
        </div>
      </div>
    </header>
  );
}
