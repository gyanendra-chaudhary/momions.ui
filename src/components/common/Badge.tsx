import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  className?: string;
  children?: React.ReactNode;
}

export const Badge = ({ className, children }: BadgeProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
