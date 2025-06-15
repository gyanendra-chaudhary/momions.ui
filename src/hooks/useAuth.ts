import { useEffect } from 'react';
import { useAuthStore } from '@/stores/auth.store';
export const useAuth = () => {
    const {
        user,
        isLoading,
        error,
        login,
        loginWithGoogle,
        logout,
        fetchUser,
        initialize,
        isInitialized
    } = useAuthStore();

    useEffect(() => {
        initialize();
    }, [initialize]);

    return {
        user,
        isLoading: isLoading || !isInitialized,
        error,
        isAuthenticated: !!user,
        isInitialized,
        login,
        loginWithGoogle,
        logout,
        fetchUser
    };
};