import React from 'react';
import { cn } from '@/lib/utils';

interface ReviewDisplayProps {
  className?: string;
  children?: React.ReactNode;
}

export const ReviewDisplay = ({ className, children }: ReviewDisplayProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
