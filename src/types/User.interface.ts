export interface User {
    [x: string]: unknown;
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

