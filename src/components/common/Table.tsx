import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
  className?: string;
  children?: React.ReactNode;
}

export const Table = ({ className, children }: TableProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
