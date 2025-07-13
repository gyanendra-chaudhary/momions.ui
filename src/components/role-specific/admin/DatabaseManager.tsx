import React from 'react';
import { cn } from '@/lib/utils';

interface DatabaseManagerProps {
  className?: string;
  children?: React.ReactNode;
}

export const DatabaseManager = ({ className, children }: DatabaseManagerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
