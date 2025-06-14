import React from 'react';
import { cn } from '@/lib/utils';

interface CommunityHealthMetricsProps {
  className?: string;
  children?: React.ReactNode;
}

export const CommunityHealthMetrics = ({ className, children }: CommunityHealthMetricsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
