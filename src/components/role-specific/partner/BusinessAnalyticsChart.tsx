import React from 'react';
import { cn } from '@/lib/utils';

interface BusinessAnalyticsChartProps {
  className?: string;
  children?: React.ReactNode;
}

export const BusinessAnalyticsChart = ({ className, children }: BusinessAnalyticsChartProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
