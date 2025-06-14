import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  className?: string;
  children?: React.ReactNode;
}

export const ProgressBar = ({ className, children }: ProgressBarProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
