import React from 'react';
import { cn } from '@/lib/utils';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export const PerformanceMonitor = ({ className, children }: PerformanceMonitorProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
