import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
