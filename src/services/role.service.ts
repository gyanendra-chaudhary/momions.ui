import { Role } from "@/types/Role.type"
import api, { ApiResponse, handleApiError } from "./api";

class RoleService {
    /* 
    * get list of user roles
    */
    async getUserRoles() {
        const roles: Role[] = ["Admin", "ContentCreator", "Expert", "HealthProvider", "Moderator", "Mother", "Partner", "SupportStaff"];
        return roles;
    }

    /*
    * assign role to users 
    */
    async assignUserRole(userId: number, role: Role) {
        try {
            const response = await api.patch<ApiResponse<boolean>>(
                `/users/${userId}/role`,
                { userId: userId, role: role }
            );
            if (response.data.success)
                return response.data;
            throw new Error(response.data.message || 'Failed to update user role')
        } catch (error) {
            throw handleApiError(error, 'Failed to update user role')
        }
    }
}
const roleService = new RoleService();
export default roleService;