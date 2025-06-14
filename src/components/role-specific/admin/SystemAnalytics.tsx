import React from 'react';
import { cn } from '@/lib/utils';

interface SystemAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export const SystemAnalytics = ({ className, children }: SystemAnalyticsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
