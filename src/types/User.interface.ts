import { Role } from "./Role.type";

export interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
    photoUrl?: string;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    roleId?: number;
}
