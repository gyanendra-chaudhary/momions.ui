import React from 'react';
import { cn } from '@/lib/utils';

interface FeedingLogWidgetProps {
  className?: string;
  children?: React.ReactNode;
}

export const FeedingLogWidget = ({ className, children }: FeedingLogWidgetProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
