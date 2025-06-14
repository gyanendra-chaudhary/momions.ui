import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  className?: string;
  children?: React.ReactNode;
}

export const Checkbox = ({ className, children }: CheckboxProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
