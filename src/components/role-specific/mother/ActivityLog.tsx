import React from 'react';
import { cn } from '@/lib/utils';

interface ActivityLogProps {
  className?: string;
  children?: React.ReactNode;
}

export const ActivityLog = ({ className, children }: ActivityLogProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
