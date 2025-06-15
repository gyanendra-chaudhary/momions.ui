import axios from 'axios';
import api from './api';

export interface UserInfoResponse {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    roleId: number;
    roleName: string;
    photoUrl: string;
    displayName: string;
}

interface UserSignUpDTO {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    preferredLanguage?: string;
    roleID?: number;
    photo?: File;
}

interface UserSSODTO {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    preferredLanguage?: string;
    photoUrl?: string;
}

interface UserAuthDetails {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    photo?: string;
    roleID: number;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    errors?: string[];
    statusCode?: number;
}
export interface ErrorResponse {
    message: string;
    status?: number;
    data?: unknown;
}

class AuthService {
    /**
     * Login with Google
     */
    async loginWithGoogle(): Promise<void> {
        try {
            window.location.href = 'api/Authentication/google-login';
        } catch (error) {
            throw this.handleAuthError(error);
        }
    }

    /**
     * Login with email and password
     */
    async loginWithEmail(email: string, password: string): Promise<void> {
        try {
            await api.post('/Authentication/login', { email, password });
        } catch (error) {
            throw this.handleAuthError(error);
        }
    }

    /**
     * Register new user with email/password
     */
    async register(userData: UserSignUpDTO): Promise<ApiResponse<UserAuthDetails | unknown>> {
        try {
            const formData = new FormData();

            // Append all fields to FormData
            Object.entries(userData).forEach(([key, value]) => {
                if (key === 'photo' && value instanceof File) {
                    formData.append('Photo', value);
                } else if (value !== undefined) {
                    formData.append(key, String(value));
                }
            });

            const response = await api.post('/api/user/register-user', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            return {
                success: true,
                message: 'Registration successful',
                data: response.data.data,
                statusCode: response.status
            };
        } catch (error) {
            return this.handleApiError(error, 'Registration failed');
        }
    }

    /**
     * Register new user via SSO
     */
    async registerWithSSO(userData: UserSSODTO): Promise<ApiResponse<UserAuthDetails | unknown>> {
        try {
            const response = await api.post('/api/user/register-user-sso', {
                ...userData,
                phoneNumber: userData.phoneNumber || '',
                preferredLanguage: userData.preferredLanguage || 'en'
            });

            return {
                success: true,
                message: 'SSO registration successful',
                data: response.data.data,
                statusCode: response.status
            };
        } catch (error) {
            return this.handleApiError(error, 'SSO registration failed');
        }
    }

    /**
     * Logout the current user
     */
    async logout(): Promise<void> {
        try {
            await api.get('/Authentication/logout');
        } catch (error) {
            throw this.handleAuthError(error);
        }
    }

    /**
     * Get current user info
     */
    async getUserInfo(): Promise<UserInfoResponse> {
        try {
            const response = await api.get<UserInfoResponse>('/User/info');
            return response.data;
        } catch (error) {
            throw this.handleAuthError(error);
        }
    }

    /**
     * Handle authentication errors (for login/logout/user info)
     */
    private handleAuthError(error: unknown): ErrorResponse {
        if (axios.isAxiosError(error)) {
            return {
                message: error.response?.data?.message || error.message,
                status: error.response?.status,
                data: error.response?.data,
            };
        }

        if (error instanceof Error) {
            return { message: error.message };
        }

        return { message: 'An unknown authentication error occurred' };
    }

    /**
     * Handle API errors (for registration)
     */
    private handleApiError(error: unknown, defaultMessage: string): ApiResponse<UserAuthDetails | unknown> {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: error.response?.data?.message || defaultMessage,
                errors: error.response?.data?.errors,
                statusCode: error.response?.status
            };
        }

        return {
            success: false,
            message: defaultMessage,
            statusCode: 500
        };
    }
}

const authService = new AuthService();
export default authService;