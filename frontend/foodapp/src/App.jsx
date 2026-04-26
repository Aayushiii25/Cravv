import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';

// Customer Pages
import Home from './pages/customer/Home';
import Restaurant from './pages/customer/Restaurant';
import Cart from './pages/customer/Cart';
import Login from './pages/customer/Login';
import Register from './pages/customer/Register';

// Reels
import Reels from './pages/reels/Reels';

// Partner Pages
import PartnerLogin from './pages/partner/PartnerLogin';
import Dashboard from './pages/partner/Dashboard';
import ActiveOrder from './pages/partner/ActiveOrder';
import Earnings from './pages/partner/Earnings';
import History from './pages/partner/History';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            {/* Customer Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Reels */}
            <Route path="/reels" element={<Reels />} />

            {/* Delivery Partner Routes */}
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/dashboard" element={<Dashboard />} />
            <Route path="/partner/active-order" element={<ActiveOrder />} />
            <Route path="/partner/earnings" element={<Earnings />} />
            <Route path="/partner/history" element={<History />} />
          </Routes>
          <BottomNav />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
