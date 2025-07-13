import React from 'react';
import { cn } from '@/lib/utils';

interface TimeSlotManagerProps {
  className?: string;
  children?: React.ReactNode;
}

export const TimeSlotManager = ({ className, children }: TimeSlotManagerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
