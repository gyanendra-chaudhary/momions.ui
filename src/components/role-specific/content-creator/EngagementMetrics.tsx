import React from 'react';
import { cn } from '@/lib/utils';

interface EngagementMetricsProps {
  className?: string;
  children?: React.ReactNode;
}

export const EngagementMetrics = ({ className, children }: EngagementMetricsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
