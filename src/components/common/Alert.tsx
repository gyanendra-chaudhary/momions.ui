import React from 'react';
import { cn } from '@/lib/utils';

interface AlertProps {
  className?: string;
  children?: React.ReactNode;
}

export const Alert = ({ className, children }: AlertProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
