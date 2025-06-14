import React from 'react';
import { cn } from '@/lib/utils';

interface PhotoTimelineProps {
  className?: string;
  children?: React.ReactNode;
}

export const PhotoTimeline = ({ className, children }: PhotoTimelineProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
