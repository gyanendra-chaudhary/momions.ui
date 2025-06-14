import React from 'react';
import { cn } from '@/lib/utils';

interface AvailabilityToggleProps {
  className?: string;
  children?: React.ReactNode;
}

export const AvailabilityToggle = ({ className, children }: AvailabilityToggleProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
