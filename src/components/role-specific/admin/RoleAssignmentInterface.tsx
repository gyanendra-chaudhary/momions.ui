import React from 'react';
import { cn } from '@/lib/utils';

interface RoleAssignmentInterfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const RoleAssignmentInterface = ({ className, children }: RoleAssignmentInterfaceProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
