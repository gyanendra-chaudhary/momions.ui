import React from 'react';
import { cn } from '@/lib/utils';

interface APIManagementProps {
  className?: string;
  children?: React.ReactNode;
}

export const APIManagement = ({ className, children }: APIManagementProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
