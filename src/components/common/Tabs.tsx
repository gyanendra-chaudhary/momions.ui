import React from 'react';
import { cn } from '@/lib/utils';

interface TabsProps {
  className?: string;
  children?: React.ReactNode;
}

export const Tabs = ({ className, children }: TabsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
