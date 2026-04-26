import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiPhone, FiNavigation } from 'react-icons/fi';

const STATUS_FLOW = [
  { key: 'accepted', label: 'Accepted', icon: '✅' },
  { key: 'picked', label: 'Picked Up', icon: '📦' },
  { key: 'on_the_way', label: 'On the Way', icon: '🛵' },
  { key: 'delivered', label: 'Delivered', icon: '🎉' },
];

export default function ActiveOrder() {
  const [currentStatus, setCurrentStatus] = useState(0);

  const order = {
    orderNumber: '#CRV-2847',
    restaurant: 'Pizza Paradise',
    pickupAddress: '123 Food Street, Koramangala',
    dropAddress: '456 Main Road, HSR Layout',
    customerName: 'Rahul S.',
    customerPhone: '+91 98765 43210',
    items: ['2x Margherita Pizza', '1x Garlic Bread'],
    total: 527,
    earnings: 62,
  };

  const advance = () => { if (currentStatus < STATUS_FLOW.length - 1) setCurrentStatus((p) => p + 1); };
  const done = currentStatus === STATUS_FLOW.length - 1;

  return (
    <div className="min-h-screen bg-bg pb-8">
      {/* Header */}
      <div className="bg-bg-white page-px py-4" style={{ boxShadow: 'var(--shadow-header)' }}>
        <div className="flex items-center gap-3">
          <Link to="/partner/dashboard" className="p-2 -ml-2 rounded-xl hover:bg-bg transition-colors">
            <FiArrowLeft className="text-[18px] text-text" />
          </Link>
          <div>
            <h1 className="text-[16px] font-bold text-text leading-tight">Active Order</h1>
            <p className="text-[11px] text-text-muted">{order.orderNumber}</p>
          </div>
        </div>
      </div>

      <div className="page-px mt-5">
        {/* Status Progress Card */}
        <div className="bg-bg-white rounded-2xl p-6 mb-4 animate-fade-in" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="flex items-center justify-between mb-6">
            {STATUS_FLOW.map((step, i) => (
              <div key={step.key} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-[44px] h-[44px] rounded-2xl flex items-center justify-center text-[18px] transition-all ${
                    i <= currentStatus ? 'bg-primary-50' : 'bg-bg'
                  }`}>{step.icon}</div>
                  <span className={`text-[10px] font-bold mt-1.5 ${i <= currentStatus ? 'text-primary' : 'text-text-muted'}`}>{step.label}</span>
                </div>
                {i < STATUS_FLOW.length - 1 && (
                  <div className={`flex-1 h-[3px] mx-2 rounded-full transition-colors ${i < currentStatus ? 'bg-primary' : 'bg-border-light'}`} />
                )}
              </div>
            ))}
          </div>

          {!done ? (
            <button onClick={advance} className="w-full py-3.5 bg-primary text-text-inverse rounded-2xl font-bold text-[14px] hover:bg-primary-dark transition-colors"
              style={{ boxShadow: 'var(--shadow-btn)' }}>
              {currentStatus === 0 ? 'Mark as Picked Up' : currentStatus === 1 ? 'Start Delivery' : 'Mark as Delivered'}
            </button>
          ) : (
            <div className="text-center py-3 bg-success-light rounded-2xl">
              <p className="text-[24px] mb-1">🎉</p>
              <p className="text-[15px] font-extrabold text-success">Order Delivered!</p>
              <p className="text-[12px] text-text-muted mt-0.5">You earned ₹{order.earnings}</p>
            </div>
          )}
        </div>

        {/* Route Card */}
        <div className="bg-bg-white rounded-2xl p-5 mb-4 animate-slide-up" style={{ boxShadow: 'var(--shadow-card)' }}>
          <h3 className="text-[14px] font-extrabold text-text mb-4">Route</h3>
          <div className="flex items-start gap-3 mb-2">
            <div className="w-[28px] h-[28px] rounded-lg bg-success-light flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-extrabold text-success">P</span>
            </div>
            <div>
              <p className="text-[11px] text-text-muted font-medium">Pickup</p>
              <p className="text-[14px] font-bold text-text">{order.restaurant}</p>
              <p className="text-[12px] text-text-secondary">{order.pickupAddress}</p>
            </div>
          </div>
          <div className="ml-[13px] border-l-2 border-dashed border-border h-4" />
          <div className="flex items-start gap-3 mt-2">
            <div className="w-[28px] h-[28px] rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-extrabold text-primary">D</span>
            </div>
            <div>
              <p className="text-[11px] text-text-muted font-medium">Drop</p>
              <p className="text-[14px] font-bold text-text">{order.customerName}</p>
              <p className="text-[12px] text-text-secondary">{order.dropAddress}</p>
            </div>
          </div>
        </div>

        {/* Customer Card */}
        <div className="bg-bg-white rounded-2xl p-5 mb-4 animate-slide-up" style={{ boxShadow: 'var(--shadow-card)', animationDelay: '80ms' }}>
          <h3 className="text-[14px] font-extrabold text-text mb-3">Customer</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[14px] font-bold text-text">{order.customerName}</p>
              <p className="text-[12px] text-text-muted mt-0.5">{order.customerPhone}</p>
            </div>
            <div className="flex gap-2">
              <button className="w-[40px] h-[40px] rounded-xl bg-success-light flex items-center justify-center text-success hover:bg-success/20 transition-colors">
                <FiPhone className="text-[16px]" />
              </button>
              <button className="w-[40px] h-[40px] rounded-xl bg-primary-50 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <FiNavigation className="text-[16px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Items Card */}
        <div className="bg-bg-white rounded-2xl p-5 animate-slide-up" style={{ boxShadow: 'var(--shadow-card)', animationDelay: '160ms' }}>
          <h3 className="text-[14px] font-extrabold text-text mb-3">Order Items</h3>
          {order.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[13px] text-text-secondary py-1.5">
              <span className="w-[5px] h-[5px] rounded-full bg-text-muted flex-shrink-0" />{item}
            </div>
          ))}
          <div className="border-t border-divider mt-3 pt-3 flex justify-between text-[14px]">
            <span className="text-text-muted">Order Total</span>
            <span className="font-extrabold text-text">₹{order.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
