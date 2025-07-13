import React from 'react';
import { cn } from '@/lib/utils';

interface BulkOperationsProps {
  className?: string;
  children?: React.ReactNode;
}

export const BulkOperations = ({ className, children }: BulkOperationsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
