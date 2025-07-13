import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressRingProps {
  className?: string;
  children?: React.ReactNode;
}

export const ProgressRing = ({ className, children }: ProgressRingProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
