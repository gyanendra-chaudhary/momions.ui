import React from 'react';
import { cn } from '@/lib/utils';

interface BarChartProps {
  className?: string;
  children?: React.ReactNode;
}

export const BarChart = ({ className, children }: BarChartProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
