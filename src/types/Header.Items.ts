// types/HeaderItem.ts
export type HeaderItemPosition = 'left' | 'center' | 'right';

export interface HeaderItem {
    id: string;
    element: React.ReactNode;
    allowedRoles?: string[];
    position: HeaderItemPosition;
}
