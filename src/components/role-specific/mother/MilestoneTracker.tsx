import React from 'react';
import { cn } from '@/lib/utils';

interface MilestoneTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export const MilestoneTracker = ({ className, children }: MilestoneTrackerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
