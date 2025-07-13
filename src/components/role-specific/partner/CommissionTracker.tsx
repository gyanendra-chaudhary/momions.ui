import React from 'react';
import { cn } from '@/lib/utils';

interface CommissionTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export const CommissionTracker = ({ className, children }: CommissionTrackerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
