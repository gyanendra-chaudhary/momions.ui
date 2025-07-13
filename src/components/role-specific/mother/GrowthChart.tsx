import React from 'react';
import { cn } from '@/lib/utils';

interface GrowthChartProps {
  className?: string;
  children?: React.ReactNode;
}

export const GrowthChart = ({ className, children }: GrowthChartProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
