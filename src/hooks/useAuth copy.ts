// File: src/hooks/useAuth.ts
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/auth.store';
import api from '@/services/api';

export const useAuth = () => {
    const { user, isLoading, error, login, logout } = useAuthStore();
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token && !user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, []);

    return {
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
        login,
        logout,
    };
};