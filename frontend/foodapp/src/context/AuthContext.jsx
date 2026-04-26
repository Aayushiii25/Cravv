import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth on mount
    const storedUser = localStorage.getItem('cravv_user');
    const storedPartner = localStorage.getItem('cravv_partner');
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedPartner) setPartner(JSON.parse(storedPartner));
    setLoading(false);
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem('cravv_user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('cravv_user');
  };

  const loginPartner = (partnerData) => {
    setPartner(partnerData);
    localStorage.setItem('cravv_partner', JSON.stringify(partnerData));
  };

  const logoutPartner = () => {
    setPartner(null);
    localStorage.removeItem('cravv_partner');
  };

  return (
    <AuthContext.Provider
      value={{ user, partner, loading, loginUser, logoutUser, loginPartner, logoutPartner }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

export default AuthContext;
