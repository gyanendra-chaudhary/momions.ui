import axios from 'axios';

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL || 'https://admin-momions.runasp.net/api',
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:44323/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;