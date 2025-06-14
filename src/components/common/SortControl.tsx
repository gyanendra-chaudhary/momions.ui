import React from 'react';
import { cn } from '@/lib/utils';

interface SortControlProps {
  className?: string;
  children?: React.ReactNode;
}

export const SortControl = ({ className, children }: SortControlProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
