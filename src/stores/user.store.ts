import { create } from 'zustand';
import userService, { UserSearchRequest, UserWithProfileResponse } from '../services/user.service';

interface UserStoreState {
    users: UserWithProfileResponse[];
    currentUser: UserWithProfileResponse | null;
    isLoading: boolean;
    error: string | null;
    totalCount: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}

interface UserStoreActions {
    fetchUsers: (request: UserSearchRequest) => Promise<void>;
    fetchUser: (userId: number) => Promise<void>;
    toggleUserStatus: (userId: number) => Promise<void>;
    clearError: () => void;
    setPagination: (page: number, size: number) => void;
}

const useUserStore = create<UserStoreState & UserStoreActions>((set, get) => ({
    users: [],
    currentUser: null,
    isLoading: false,
    error: null,
    totalCount: 0,
    currentPage: 1,
    pageSize: 10,
    totalPages: 0,
    hasPrevious: false,
    hasNext: false,

    fetchUsers: async (request) => {
        set({ isLoading: true, error: null });
        try {
            const result = await userService.getUsersWithProfiles({
                ...request,
                pageNumber: request.pageNumber || get().currentPage,
                pageSize: request.pageSize || get().pageSize
            });

            set({
                users: result.data || [],
                totalCount: result.totalCount || 0,
                isLoading: false,
                currentPage: result.currentPage || get().currentPage,
                pageSize: result.pageSize || get().pageSize,
                totalPages: result.totalPages || 0,
                hasPrevious: result.hasPrevious || false,
                hasNext: result.hasNext || false
            });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch users',
                isLoading: false
            });
        }
    },

    fetchUser: async (userId) => {
        set({ isLoading: true, error: null });
        try {
            const response = await userService.getUserWithProfile(userId);
            set({
                currentUser: response.data || null,
                isLoading: false
            });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch user',
                isLoading: false
            });
        }
    },

    toggleUserStatus: async (userId) => {
        set({ isLoading: true, error: null });
        try {
            const currentStatus = get().users.find(u => u.user.userId === userId)?.user.isActive;
            if (currentStatus === undefined) throw new Error('User not found');

            await userService.updateUserStatus(userId, !currentStatus);

            set({
                users: get().users.map(u =>
                    u.user.userId === userId
                        ? { ...u, user: { ...u.user, isActive: !currentStatus } }
                        : u
                ),
                isLoading: false
            });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to update user status',
                isLoading: false
            });
        }
    },

    clearError: () => set({ error: null }),
    setPagination: (page, size) => set({ currentPage: page, pageSize: size })
}));

export default useUserStore;