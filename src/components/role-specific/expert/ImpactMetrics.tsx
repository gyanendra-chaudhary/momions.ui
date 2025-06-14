import React from 'react';
import { cn } from '@/lib/utils';

interface ImpactMetricsProps {
  className?: string;
  children?: React.ReactNode;
}

export const ImpactMetrics = ({ className, children }: ImpactMetricsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
