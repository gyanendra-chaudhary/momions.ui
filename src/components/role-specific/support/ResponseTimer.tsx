import React from 'react';
import { cn } from '@/lib/utils';

interface ResponseTimerProps {
  className?: string;
  children?: React.ReactNode;
}

export const ResponseTimer = ({ className, children }: ResponseTimerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
