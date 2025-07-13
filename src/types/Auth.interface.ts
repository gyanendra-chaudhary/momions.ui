import { User } from "./User.interface";

export interface AuthStore {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    isInitialized: boolean;
    login: (email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
    fetchUser: () => Promise<void>;
    initialize: () => Promise<void>;
}

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

export interface UserSignUpDTO {
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

export interface UserSSODTO {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    preferredLanguage?: string;
    photoUrl?: string;
}

export interface UserAuthDetails {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    photo?: string;
    roleID: number;
}

export interface ApiResponse<T> {
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