import React from 'react';
import { cn } from '@/lib/utils';

interface ToastProps {
  className?: string;
  children?: React.ReactNode;
}

export const Toast = ({ className, children }: ToastProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
