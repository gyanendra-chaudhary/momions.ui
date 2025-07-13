import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
  // baseURL: import.meta.env.VITE_API_BASE_URL || 'https://admin-momions.runasp.net/api',
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:44323/api',
=======
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://ac-dev.runasp.net/api',
>>>>>>> 9b2a0e90b03714ff659de574b347f7ef4aaed57e
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;