import React from 'react';
import { cn } from '@/lib/utils';

interface VideoCallWidgetProps {
  className?: string;
  children?: React.ReactNode;
}

export const VideoCallWidget = ({ className, children }: VideoCallWidgetProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
