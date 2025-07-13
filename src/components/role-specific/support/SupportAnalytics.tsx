import React from 'react';
import { cn } from '@/lib/utils';

interface SupportAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export const SupportAnalytics = ({ className, children }: SupportAnalyticsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
