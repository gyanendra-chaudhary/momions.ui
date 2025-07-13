import React from 'react';
import { cn } from '@/lib/utils';

interface SystemDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export const SystemDashboard = ({ className, children }: SystemDashboardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
