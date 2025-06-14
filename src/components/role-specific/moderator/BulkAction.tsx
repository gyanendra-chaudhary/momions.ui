import React from 'react';
import { cn } from '@/lib/utils';

interface BulkActionProps {
  className?: string;
  children?: React.ReactNode;
}

export const BulkAction = ({ className, children }: BulkActionProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
