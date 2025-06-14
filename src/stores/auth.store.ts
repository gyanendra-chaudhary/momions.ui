import { create } from 'zustand';
import api from '@/services/api';

type Role = 'Mother' | 'Admin' | 'HealthProvider' | 'Partner' | 'ContentCreator' | 'Moderator' | 'Expert' | 'SupportStaff';

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  token?: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post('/auth/login', { email, password });
      const user = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        role: response.data.role,
        token: response.data.token,
      };
      set({ user, isLoading: false });

      if (user.token) {
        localStorage.setItem('authToken', user.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
      }
    } catch (error: unknown) {
      let errorMessage = 'Login failed';

      if (typeof error === 'object' && error !== null) {
        const apiError = error as ApiError;
        errorMessage = apiError.response?.data?.message ||
          apiError.message ||
          'Login failed';
      }

      set({
        error: errorMessage,
        isLoading: false
      });
      throw new Error(errorMessage);
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    delete api.defaults.headers.common['Authorization'];
    set({ user: null });
  },
}));