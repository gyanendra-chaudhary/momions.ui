import React from 'react';
import { cn } from '@/lib/utils';

interface PieChartProps {
  className?: string;
  children?: React.ReactNode;
}

export const PieChart = ({ className, children }: PieChartProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
