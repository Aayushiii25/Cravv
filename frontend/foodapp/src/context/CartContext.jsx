import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem('cravv_cart');
    return stored ? JSON.parse(stored) : [];
  });

  const [restaurantId, setRestaurantId] = useState(() => {
    return localStorage.getItem('cravv_cart_restaurant') || null;
  });

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('cravv_cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (restaurantId) {
      localStorage.setItem('cravv_cart_restaurant', restaurantId);
    }
  }, [restaurantId]);

  const addItem = (item, restId) => {
    // If cart has items from different restaurant, clear first
    if (restaurantId && restaurantId !== restId) {
      setItems([{ ...item, quantity: 1 }]);
      setRestaurantId(restId);
      return;
    }

    setRestaurantId(restId);
    setItems((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        return prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (itemId) => {
    setItems((prev) => {
      const existing = prev.find((i) => i._id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i._id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i._id !== itemId);
    });
  };

  const clearCart = () => {
    setItems([]);
    setRestaurantId(null);
    localStorage.removeItem('cravv_cart');
    localStorage.removeItem('cravv_cart_restaurant');
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, restaurantId, addItem, removeItem, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}

export default CartContext;
