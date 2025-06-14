import React from 'react';
import { cn } from '@/lib/utils';

interface HealthMetricsDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export const HealthMetricsDashboard = ({ className, children }: HealthMetricsDashboardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
