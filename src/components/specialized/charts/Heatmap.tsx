import React from 'react';
import { cn } from '@/lib/utils';

interface HeatmapProps {
  className?: string;
  children?: React.ReactNode;
}

export const Heatmap = ({ className, children }: HeatmapProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
