import axios from 'axios';
import api from './api';

export interface User {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    photo?: string;
    preferredLanguage: string;
    createdAt: Date;
    lastLoginAt?: Date;
    isActive: boolean;
}

export interface UserProfile {
    profileId: number;
    userId: number;
    dateOfBirth?: Date;
    address?: string;
    city?: string;
    state?: string;
    emergencyContact?: string;
    emergencyPhone?: string;
    lastUpdated?: Date;
}

export interface UserWithProfileResponse {
    user: User;
    profile?: UserProfile;
}

export interface UserSearchRequest {
    searchTerm?: string;
    roleId?: number;
    isActive?: boolean;
    pageNumber?: number;
    pageSize?: number;
    sortBy?: string;
    sortDescending?: boolean;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    errors?: string[];
    statusCode?: number;
    totalCount?: number;
    pageSize?: number;
    currentPage?: number;
    totalPages?: number;
    hasPrevious?: boolean;
    hasNext?: boolean;
}

interface ErrorResponse {
    message: string;
    status?: number;
    data?: unknown;
}

class UserService {
    /**
     * Get paginated list of users with profiles
     */
    async getUsersWithProfiles(request: UserSearchRequest): Promise<ApiResponse<UserWithProfileResponse[]>> {
        try {
            const response = await api.get<ApiResponse<UserWithProfileResponse[]>>(
                '/user/all',
                { params: request }
            );

            if (response.data.success) {
                return response.data;
            }
            throw new Error(response.data.message || 'Failed to fetch users');
        } catch (error) {
            throw this.handleApiError(error, 'Failed to fetch users');
        }
    }

    /**
     * Get single user with profile
     */
    async getUserWithProfile(userId: number): Promise<ApiResponse<UserWithProfileResponse>> {
        try {
            const response = await api.get<ApiResponse<UserWithProfileResponse>>(
                `/user/${userId}`
            );

            if (response.data.success) {
                return response.data;
            }
            throw new Error(response.data.message || 'Failed to fetch user');
        } catch (error) {
            throw this.handleApiError(error, 'Failed to fetch user');
        }
    }

    /**
     * Update user status (active/inactive)
     */
    async updateUserStatus(userId: number, isActive: boolean): Promise<ApiResponse<boolean>> {
        try {
            const response = await api.patch<ApiResponse<boolean>>(
                `/users/${userId}/status`,
                { isActive }
            );

            if (response.data.success) {
                return response.data;
            }
            throw new Error(response.data.message || 'Failed to update user status');
        } catch (error) {
            throw this.handleApiError(error, 'Failed to update user status');
        }
    }

    /**
     * Handle API errors
     */
    private handleApiError(error: unknown, defaultMessage: string): ErrorResponse {
        if (axios.isAxiosError(error)) {
            return {
                message: error.response?.data?.message || defaultMessage,
                status: error.response?.status,
                data: error.response?.data,
            };
        }

        if (error instanceof Error) {
            return { message: error.message };
        }

        return { message: defaultMessage };
    }
}

const userService = new UserService();
export default userService;