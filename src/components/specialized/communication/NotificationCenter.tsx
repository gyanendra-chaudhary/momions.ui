import React from 'react';
import { cn } from '@/lib/utils';

interface NotificationCenterProps {
  className?: string;
  children?: React.ReactNode;
}

export const NotificationCenter = ({ className, children }: NotificationCenterProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
