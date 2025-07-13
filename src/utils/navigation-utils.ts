import { adminNavigation, contentCreatorNavigation, expertNavigation, healthProviderNavigation, moderatorNavigation, motherNavigation, partnerVendorNavigation, supportStaffNavigation } from "@/data/navigation.data";
import { NavigationItem } from "@/types/NavigationItem.type";

export const getNavigationForRole = (role: string): NavigationItem[] => {
    switch (role) {
        case 'Admin':
            return adminNavigation;
        case 'Mother':
            return motherNavigation;
        case 'HealthProvider':
            return healthProviderNavigation;
        case 'Partner':
            return partnerVendorNavigation;
        case 'ContentCreator':
            return contentCreatorNavigation;
        case 'Moderator':
            return moderatorNavigation;
        case 'Expert':
            return expertNavigation;
        case 'SupportStaff':
            return supportStaffNavigation;
        default:
            return [];
    }
};
export const updateNavigationState = (
    navItems: NavigationItem[],
    currentPath: string,
    basePath = ''
): NavigationItem[] => {
    return navItems.map(item => {
        const fullPath = `${basePath}${item.href}`;
        return {
            ...item,
            current: currentPath.startsWith(fullPath),
            children: item.children?.map(child => ({
                ...child,
                current: currentPath === `${basePath}${child.href}`,
            })),
        };
    });
};