import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
