import React from 'react';
import { cn } from '@/lib/utils';

interface FilterProps {
  className?: string;
  children?: React.ReactNode;
}

export const Filter = ({ className, children }: FilterProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
