import { Role } from "@/types/Role.type";
import { useEffect, useState } from "react";

const RoleManagement = () => {
    const [roles, setRoles] = useState<Role | null>(null);
    // get roles
    function getRoles() {

    }
    useEffect(() => {
        if (roles == null)
            getRoles();
    }, []);
    return (
        <div>

        </div>
    );
};

export default RoleManagement;
