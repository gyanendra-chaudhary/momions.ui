import React from 'react';
import { cn } from '@/lib/utils';

interface UserActionHistoryProps {
  className?: string;
  children?: React.ReactNode;
}

export const UserActionHistory = ({ className, children }: UserActionHistoryProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
