import React from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  className?: string;
  children?: React.ReactNode;
}

export const Tooltip = ({ className, children }: TooltipProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
