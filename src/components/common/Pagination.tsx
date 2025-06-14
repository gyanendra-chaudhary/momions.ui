import React from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  className?: string;
  children?: React.ReactNode;
}

export const Pagination = ({ className, children }: PaginationProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
