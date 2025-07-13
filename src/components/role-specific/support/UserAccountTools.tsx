import React from 'react';
import { cn } from '@/lib/utils';

interface UserAccountToolsProps {
  className?: string;
  children?: React.ReactNode;
}

export const UserAccountTools = ({ className, children }: UserAccountToolsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
