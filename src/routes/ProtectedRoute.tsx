import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

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
    const { user, isLoading, isInitialized } = useAuth();
    const location = useLocation();

    if (isLoading || !isInitialized) {
        return <LoadingSpinner fullScreen />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (isMobileRoute) {
        return children;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/403" replace />;
    }

    return children;
};