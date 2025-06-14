import React from 'react';
import { cn } from '@/lib/utils';

interface ListProps {
  className?: string;
  children?: React.ReactNode;
}

export const List = ({ className, children }: ListProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
