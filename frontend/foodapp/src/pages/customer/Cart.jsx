import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrash2, FiTag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { items, totalItems, totalPrice, addItem, removeItem, clearCart } = useCart();

  const deliveryFee = totalPrice > 0 ? 29 : 0;
  const tax = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center page-px">
        <div className="text-center animate-fade-in">
          <p className="text-6xl mb-5">🛒</p>
          <h2 className="text-[22px] font-extrabold text-text mb-2">Your cart is empty</h2>
          <p className="text-[14px] text-text-muted mb-6 max-w-xs mx-auto">Add items from a restaurant to get started with your order</p>
          <Link to="/" className="inline-flex px-8 py-3 bg-primary text-text-inverse rounded-2xl font-bold text-[14px] hover:bg-primary-dark transition-colors" style={{ boxShadow: 'var(--shadow-btn)' }}>
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg pb-24 md:pb-8">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-bg-white page-px py-3" style={{ boxShadow: 'var(--shadow-header)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 -ml-2 rounded-xl hover:bg-bg transition-colors">
              <FiArrowLeft className="text-[18px] text-text" />
            </Link>
            <div>
              <h1 className="text-[16px] font-bold text-text leading-tight">Cart</h1>
              <p className="text-[11px] text-text-muted">{totalItems} item{totalItems > 1 ? 's' : ''}</p>
            </div>
          </div>
          <button onClick={clearCart} className="flex items-center gap-1.5 text-[12px] font-semibold text-danger hover:bg-danger-light px-3 py-1.5 rounded-xl transition-colors">
            <FiTrash2 className="text-[13px]" /> Clear
          </button>
        </div>
      </div>

      <div className="page-px mt-4">
        {/* Cart Items Card */}
        <div className="bg-bg-white rounded-2xl overflow-hidden mb-3" style={{ boxShadow: 'var(--shadow-card)' }}>
          {items.map((item, i) => (
            <div key={item._id} className={`flex items-center gap-3 px-5 py-4 ${i < items.length - 1 ? 'border-b border-divider' : ''}`}>
              <span className={`w-[14px] h-[14px] border-[1.5px] rounded-[2px] flex items-center justify-center text-[6px] flex-shrink-0 ${item.veg ? 'border-success text-success' : 'border-danger text-danger'}`}>●</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-semibold text-text truncate">{item.name}</h3>
                <p className="text-[14px] font-bold text-text-sub mt-0.5">₹{item.price * item.quantity}</p>
              </div>
              <div className="flex items-center rounded-xl overflow-hidden border-2 border-border-light">
                <button onClick={() => removeItem(item._id)} className="px-3 py-1.5 text-text-secondary font-bold text-[14px] hover:bg-bg transition-colors">−</button>
                <span className="px-2 py-1.5 text-primary font-extrabold text-[13px] min-w-[28px] text-center">{item.quantity}</span>
                <button onClick={() => addItem(item, '')} className="px-3 py-1.5 text-primary font-bold text-[14px] hover:bg-bg transition-colors">+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Code Card */}
        <div className="bg-bg-white rounded-2xl p-4 mb-3" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="flex items-center gap-3">
            <FiTag className="text-primary text-[16px]" />
            <input type="text" placeholder="Enter promo code" className="flex-1 bg-transparent text-[14px] text-text placeholder:text-text-muted" />
            <button className="px-4 py-1.5 text-[12px] font-bold text-primary border-2 border-primary rounded-xl hover:bg-primary-50 transition-colors">Apply</button>
          </div>
        </div>

        {/* Bill Details Card */}
        <div className="bg-bg-white rounded-2xl p-5 mb-5" style={{ boxShadow: 'var(--shadow-card)' }}>
          <h3 className="text-[14px] font-extrabold text-text mb-4">Bill Details</h3>
          <div className="space-y-3 text-[14px]">
            <div className="flex justify-between"><span className="text-text-secondary">Item Total</span><span className="text-text font-medium">₹{totalPrice}</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">Delivery Fee</span><span className="text-text font-medium">₹{deliveryFee}</span></div>
            <div className="flex justify-between"><span className="text-text-secondary">GST & Taxes</span><span className="text-text font-medium">₹{tax}</span></div>
            <div className="border-t-2 border-divider pt-3 flex justify-between">
              <span className="font-extrabold text-text text-[15px]">TO PAY</span>
              <span className="font-extrabold text-text text-[18px]">₹{grandTotal}</span>
            </div>
          </div>
        </div>

        {/* Checkout */}
        <button className="w-full py-4 bg-primary text-text-inverse rounded-2xl font-bold text-[15px] hover:bg-primary-dark transition-colors active:scale-[0.98]" style={{ boxShadow: 'var(--shadow-btn)' }}>
          Proceed to Checkout · ₹{grandTotal}
        </button>
      </div>
    </div>
  );
}
