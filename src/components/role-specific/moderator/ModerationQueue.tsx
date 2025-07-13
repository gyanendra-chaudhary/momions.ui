import React from 'react';
import { cn } from '@/lib/utils';

interface ModerationQueueProps {
  className?: string;
  children?: React.ReactNode;
}

export const ModerationQueue = ({ className, children }: ModerationQueueProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
