// File: src/routes/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: string[];
    isMobileRoute?: boolean;
}

export const ProtectedRoute = ({
    children,
    allowedRoles,
    isMobileRoute = false
}: ProtectedRouteProps) => {
    const { user, isLoading, isAuthenticated } = useAuth();

    if (isLoading) {
        return <LoadingSpinner fullScreen />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (isMobileRoute) {
        return children;
    }

    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        return <Navigate to="/403" replace />;
    }

    return children;
};