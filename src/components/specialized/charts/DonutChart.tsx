import React from 'react';
import { cn } from '@/lib/utils';

interface DonutChartProps {
  className?: string;
  children?: React.ReactNode;
}

export const DonutChart = ({ className, children }: DonutChartProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
