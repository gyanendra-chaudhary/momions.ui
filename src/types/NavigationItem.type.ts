// types.ts
import { ReactNode } from 'react';

export type NavigationItem = {
    /** Display name for the navigation item */
    name: string;

    /** Path to navigate to when clicked */
    href: string;

    /** Icon to display (can be any React node) */
    icon: ReactNode;

    /** Whether this item is currently active */
    current: boolean;

    /** Optional array of child navigation items */
    children?: NavigationItem[];

    /** Optional badge/count to display */
    badge?: string | number;

    /** Optional roles that can access this item */
    allowedRoles?: string[];

    /** Optional custom class names */
    className?: string;
};
export interface UserNavigationItem {
    name: string
    href: string
    allowedRoles?: string[]
}