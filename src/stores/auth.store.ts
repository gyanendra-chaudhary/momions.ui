import { create } from 'zustand';
import authService from '@/services/auth.service';
import { Role } from '@/types/Role.type';
import { AuthStore } from '@/types/Auth.interface';

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isLoading: false,
  error: null,
  isInitialized: false,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      await authService.loginWithEmail(email, password);
      await get().fetchUser();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  loginWithGoogle: async () => {
    set({ isLoading: true, error: null });
    try {
      await authService.loginWithGoogle();
      await get().fetchUser();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Google login failed';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await authService.logout();
      set({ user: null, isLoading: false, isInitialized: true });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  fetchUser: async () => {
    set({ isLoading: true, error: null });
    try {
      const userInfo = await authService.getUserInfo();
      set({
        user: {
          id: userInfo.userId,
          name: userInfo.displayName,
          email: userInfo.email,
          role: userInfo.roleName as Role,
          photoUrl: userInfo.photoUrl,
          displayName: userInfo.displayName
        },
        isLoading: false,
        isInitialized: true
      });
    } catch (error) {
      set({
        user: null,
        isLoading: false,
        isInitialized: true,
        error: error instanceof Error ? error.message : 'Failed to fetch user'
      });
    }
  },

  initialize: async () => {
    if (get().isInitialized) return;
    set({ isLoading: true });
    try {
      await get().fetchUser();
    } catch (error) {
      set({
        isLoading: false,
        isInitialized: true,
        error: error instanceof Error ? error.message : 'Initialization failed'
      });
    }
  }
}));