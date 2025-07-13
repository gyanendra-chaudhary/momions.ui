import React from 'react';
import { cn } from '@/lib/utils';

interface OrderManagementTableProps {
  className?: string;
  children?: React.ReactNode;
}

export const OrderManagementTable = ({ className, children }: OrderManagementTableProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
