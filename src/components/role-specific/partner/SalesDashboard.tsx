import React from 'react';
import { cn } from '@/lib/utils';

interface SalesDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export const SalesDashboard = ({ className, children }: SalesDashboardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
