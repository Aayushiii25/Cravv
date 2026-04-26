import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiChevronRight, FiCheck, FiX } from 'react-icons/fi';
import { mockPartnerOrders, mockPartnerEarnings } from '../../services/mockData';

export default function PartnerDashboard() {
  const [online, setOnline] = useState(false);
  const [orders, setOrders] = useState(mockPartnerOrders);
  const navigate = useNavigate();
  const earnings = mockPartnerEarnings;

  const handleAccept = (id) => { setOrders((p) => p.filter((o) => o._id !== id)); navigate('/partner/active-order'); };
  const handleReject = (id) => { setOrders((p) => p.filter((o) => o._id !== id)); };

  return (
    <div className="min-h-screen bg-bg pb-8">
      {/* Header */}
      <div className="bg-bg-white page-px py-4" style={{ boxShadow: 'var(--shadow-header)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[44px] h-[44px] rounded-2xl bg-primary-50 flex items-center justify-center text-[22px]">🛵</div>
            <div>
              <h1 className="text-[16px] font-extrabold text-text leading-tight">Cravv Partner</h1>
              <p className="text-[12px] text-text-muted">Welcome back, Driver</p>
            </div>
          </div>
          <button
            onClick={() => setOnline(!online)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[13px] font-bold transition-all ${
              online
                ? 'bg-success text-text-inverse shadow-[0_2px_12px_rgba(27,166,114,.3)]'
                : 'bg-bg text-text-muted border border-border'
            }`}
          >
            <FiPower className="text-[14px]" />
            {online ? 'Online' : 'Offline'}
          </button>
        </div>
      </div>

      <div className="page-px mt-5">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Today\'s Earnings', value: `₹${earnings.today.total}`, icon: '💰', color: 'bg-primary-50' },
            { label: 'Trips Done', value: earnings.today.trips, icon: '✅', color: 'bg-success-light' },
            { label: 'Online Time', value: earnings.today.online, icon: '⏱️', color: 'bg-[#FFF8E1]' },
          ].map((s, i) => (
            <div key={i} className={`${s.color} rounded-2xl p-4 text-center animate-slide-up`} style={{ animationDelay: `${i * 80}ms`, boxShadow: 'var(--shadow-card)' }}>
              <span className="text-[20px] block mb-1">{s.icon}</span>
              <p className="text-[20px] font-extrabold text-text leading-tight">{s.value}</p>
              <p className="text-[10px] font-semibold text-text-muted mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Nav */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { to: '/partner/earnings', label: 'Earnings', desc: 'View weekly earnings', icon: '📊' },
            { to: '/partner/history', label: 'History', desc: 'Past deliveries', icon: '📋' },
          ].map((link) => (
            <Link key={link.to} to={link.to}
              className="bg-bg-white rounded-2xl p-4 flex items-center gap-3 group hover:shadow-[var(--shadow-card-hover)] transition-all"
              style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="text-[24px]">{link.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-text leading-tight">{link.label}</p>
                <p className="text-[11px] text-text-muted mt-0.5">{link.desc}</p>
              </div>
              <FiChevronRight className="text-text-muted group-hover:text-primary text-[14px] flex-shrink-0" />
            </Link>
          ))}
        </div>

        {/* Incoming Orders */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[17px] font-extrabold text-text tracking-tight">Incoming Orders</h2>
          {orders.length > 0 && (
            <span className="px-2.5 py-1 text-[11px] rounded-xl bg-primary text-text-inverse font-bold">{orders.length} new</span>
          )}
        </div>

        {!online ? (
          <div className="bg-bg-white rounded-2xl p-10 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="w-[60px] h-[60px] rounded-full bg-danger-light flex items-center justify-center text-[24px] mx-auto mb-3">🔴</div>
            <p className="text-[16px] font-bold text-text mb-1">You are offline</p>
            <p className="text-[13px] text-text-muted">Go online to start receiving delivery orders</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-bg-white rounded-2xl p-10 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="w-[60px] h-[60px] rounded-full bg-primary-50 flex items-center justify-center text-[24px] mx-auto mb-3">⏳</div>
            <p className="text-[16px] font-bold text-text mb-1">Waiting for orders...</p>
            <p className="text-[13px] text-text-muted">New orders will appear here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((order, i) => (
              <div key={order._id} className="bg-bg-white rounded-2xl p-5 animate-slide-up" style={{ animationDelay: `${i * 100}ms`, boxShadow: 'var(--shadow-card)' }}>
                {/* Top row */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-[10px] font-mono text-text-muted tracking-wider">{order.orderNumber}</span>
                    <h3 className="text-[16px] font-extrabold text-text leading-tight">{order.restaurant}</h3>
                  </div>
                  <div className="text-right bg-primary-50 px-3 py-1.5 rounded-xl">
                    <p className="text-[16px] font-extrabold text-primary leading-none">₹{order.earnings}</p>
                    <p className="text-[9px] text-primary/70 font-semibold uppercase">Earn</p>
                  </div>
                </div>

                {/* Route */}
                <div className="space-y-2 mb-3 pl-1">
                  <div className="flex items-start gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[9px] font-extrabold text-success">P</span>
                    </div>
                    <span className="text-[12px] text-text-secondary leading-snug">{order.pickupAddress}</span>
                  </div>
                  <div className="ml-[10px] border-l-2 border-dashed border-border h-2" />
                  <div className="flex items-start gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[9px] font-extrabold text-primary">D</span>
                    </div>
                    <span className="text-[12px] text-text-secondary leading-snug">{order.dropAddress}</span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex gap-4 mb-4 text-[11px] text-text-muted font-medium">
                  <span>📍 {order.distance}</span>
                  <span>⏱️ {order.estimatedTime}</span>
                  <span>🛒 {order.items.length} items</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button onClick={() => handleReject(order._id)}
                    className="flex-1 py-3 rounded-2xl bg-bg text-text-secondary font-bold text-[13px] hover:bg-danger-light hover:text-danger transition-all flex items-center justify-center gap-1.5 border border-border-light">
                    <FiX className="text-[14px]" /> Reject
                  </button>
                  <button onClick={() => handleAccept(order._id)}
                    className="flex-1 py-3 rounded-2xl bg-primary text-text-inverse font-bold text-[13px] hover:bg-primary-dark transition-all flex items-center justify-center gap-1.5"
                    style={{ boxShadow: 'var(--shadow-btn)' }}>
                    <FiCheck className="text-[14px]" /> Accept
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
