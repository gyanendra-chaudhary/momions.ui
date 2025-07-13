import api, { ApiResponse, handleApiError } from './api';
import { UserSearchRequest, UserWithProfileResponse } from '@/types/User.interface';



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
            throw handleApiError(error, 'Failed to fetch users');
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
            throw handleApiError(error, 'Failed to fetch user');
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
            throw handleApiError(error, 'Failed to update user status');
        }
    }


}

const userService = new UserService();
export default userService;