import React from 'react';
import { cn } from '@/lib/utils';

interface PointsDisplayProps {
  className?: string;
  children?: React.ReactNode;
}

export const PointsDisplay = ({ className, children }: PointsDisplayProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
