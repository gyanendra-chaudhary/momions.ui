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