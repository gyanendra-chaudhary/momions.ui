import React from 'react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  className?: string;
  children?: React.ReactNode;
}

export const EmptyState = ({ className, children }: EmptyStateProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
