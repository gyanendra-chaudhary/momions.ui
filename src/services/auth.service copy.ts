import axios from 'axios';
import api from './api';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface ErrorResponse {
    message: string;
    status?: number;
    data?: unknown;
}

class AuthService {
    constructor() {
        this.initializeAuth();
    }

    /**
     * Login with Google
     */
    async loginWithGoogle(): Promise<LoginResponse> {
        try {
            const response = await api.get<LoginResponse>('/Authentication/google-login');
            return response.data;
        } catch (error: unknown) {
            throw this.handleError(error);
        }
    }

    /**
     * Login with email and password
     */
    async loginWithEmail(email: string, password: string): Promise<LoginResponse> {
        try {
            const response = await api.post<LoginResponse>('/Authentication/login', { email, password });
            return response.data;
        } catch (error: unknown) {
            throw this.handleError(error);
        }
    }

    /**
     * Logout the current user
     */
    async logout(): Promise<void> {
        try {
            await api.get('/Authentication/logout');
            localStorage.removeItem('authToken');
            delete api.defaults.headers.common['Authorization'];
        } catch (error: unknown) {
            throw this.handleError(error);
        }
    }

    /**
     * Set the authentication token for subsequent requests
     */
    setAuthToken(token: string): void {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('authToken', token);
    }

    /**
     * Initialize auth state from stored token
     */
    initializeAuth(): void {
        const token = localStorage.getItem('authToken');
        if (token) {
            this.setAuthToken(token);
        }
    }

    private handleError(error: unknown): ErrorResponse {
        if (axios.isAxiosError(error)) {
            return {
                message: error.response?.data?.message || error.message,
                status: error.response?.status,
                data: error.response?.data,
            };
        }

        if (error instanceof Error) {
            return {
                message: error.message,
            };
        }

        return {
            message: 'An unknown error occurred',
        };
    }
}

const authService = new AuthService();
export default authService;
