import React from 'react';
import { cn } from '@/lib/utils';

interface InventoryCounterProps {
  className?: string;
  children?: React.ReactNode;
}

export const InventoryCounter = ({ className, children }: InventoryCounterProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
