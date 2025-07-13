import React from 'react';
import { cn } from '@/lib/utils';

interface PublishingQueueProps {
  className?: string;
  children?: React.ReactNode;
}

export const PublishingQueue = ({ className, children }: PublishingQueueProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
