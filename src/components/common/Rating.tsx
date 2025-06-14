import React from 'react';
import { cn } from '@/lib/utils';

interface RatingProps {
  className?: string;
  children?: React.ReactNode;
}

export const Rating = ({ className, children }: RatingProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
