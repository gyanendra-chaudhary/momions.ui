import React from 'react';
import { cn } from '@/lib/utils';

interface GaugeChartProps {
  className?: string;
  children?: React.ReactNode;
}

export const GaugeChart = ({ className, children }: GaugeChartProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
