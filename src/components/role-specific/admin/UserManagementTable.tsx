import React from 'react';
import { cn } from '@/lib/utils';

interface UserManagementTableProps {
  className?: string;
  children?: React.ReactNode;
}

export const UserManagementTable = ({ className, children }: UserManagementTableProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
