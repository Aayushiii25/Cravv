import axios from 'axios';

// Axios instance with base config
const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ===== Auth APIs =====
export const authAPI = {
  // Customer auth
  registerUser: (data) => api.post('/auth/user/register', data),
  loginUser: (data) => api.post('/auth/user/login', data),
  logoutUser: () => api.get('/auth/user/logout'),

  // Food Partner auth
  registerPartner: (data) => api.post('/auth/food-partner/register', data),
  loginPartner: (data) => api.post('/auth/food-partner/login', data),
  logoutPartner: () => api.get('/auth/food-partner/logout'),
};

// ===== Food APIs =====
export const foodAPI = {
  getFoodItems: () => api.get('/food'),
  createFood: (formData) =>
    api.post('/food', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

// ===== Delivery Partner APIs (stubs for future backend) =====
export const partnerAPI = {
  getOrders: () => Promise.resolve({ data: { orders: [] } }),
  acceptOrder: (id) => Promise.resolve({ data: { orderId: id, status: 'accepted' } }),
  rejectOrder: (id) => Promise.resolve({ data: { orderId: id, status: 'rejected' } }),
  updateOrderStatus: (id, status) => Promise.resolve({ data: { orderId: id, status } }),
  getEarnings: () => Promise.resolve({ data: { earnings: {} } }),
  getOrderHistory: () => Promise.resolve({ data: { orders: [] } }),
};

export default api;
