import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { mockPartnerHistory } from '../../services/mockData';

export default function History() {
  const [filter, setFilter] = useState('all');
  const history = mockPartnerHistory;
  const filtered = history.filter((o) => {
    if (filter === 'delivered') return o.status === 'delivered';
    if (filter === 'cancelled') return o.status === 'cancelled';
    return true;
  });

  return (
    <div className="min-h-screen bg-bg pb-8">
      <div className="bg-bg-white page-px py-4" style={{ boxShadow: 'var(--shadow-header)' }}>
        <div className="flex items-center gap-3">
          <Link to="/partner/dashboard" className="p-2 -ml-2 rounded-xl hover:bg-bg transition-colors">
            <FiArrowLeft className="text-[18px] text-text" />
          </Link>
          <h1 className="text-[16px] font-bold text-text">Order History</h1>
        </div>
      </div>

      <div className="page-px mt-5">
        {/* Filters */}
        <div className="flex gap-2 mb-5">
          {['all', 'delivered', 'cancelled'].map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-2xl text-[12px] font-bold capitalize transition-all ${
                filter === f
                  ? 'bg-primary text-text-inverse shadow-[var(--shadow-btn)]'
                  : 'bg-bg-white border border-border text-text-muted hover:border-primary/30'
              }`}>{f}</button>
          ))}
        </div>

        {/* Orders */}
        <div className="space-y-3">
          {filtered.map((order, i) => (
            <div key={order._id} className="bg-bg-white rounded-2xl p-5 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms`, boxShadow: 'var(--shadow-card)' }}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] font-mono text-text-muted tracking-wider">{order.orderNumber}</span>
                  <h3 className="text-[15px] font-bold text-text leading-tight">{order.restaurant}</h3>
                </div>
                <span className={`px-2.5 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider ${
                  order.status === 'delivered' ? 'bg-success-light text-success' : 'bg-danger-light text-danger'
                }`}>{order.status}</span>
              </div>
              <p className="text-[12px] text-text-muted mb-2">{order.dropAddress}</p>
              <div className="flex justify-between text-[12px] items-center">
                <span className="text-text-muted">{order.date} · {order.time}</span>
                <div className="flex gap-3 items-center">
                  <span className="text-text-secondary font-medium">₹{order.total}</span>
                  <span className="font-extrabold text-primary text-[13px]">+₹{order.earnings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="bg-bg-white rounded-2xl p-12 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-[36px] mb-3">📋</p>
            <p className="text-[15px] font-bold text-text-sub">No orders found</p>
            <p className="text-[13px] text-text-muted mt-1">Try changing the filter above</p>
          </div>
        )}
      </div>
    </div>
  );
}
