import React from 'react';
import { cn } from '@/lib/utils';

interface SelectProps {
  className?: string;
  children?: React.ReactNode;
}

export const Select = ({ className, children }: SelectProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
