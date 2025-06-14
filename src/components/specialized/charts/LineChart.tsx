import React from 'react';
import { cn } from '@/lib/utils';

interface LineChartProps {
  className?: string;
  children?: React.ReactNode;
}

export const LineChart = ({ className, children }: LineChartProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
