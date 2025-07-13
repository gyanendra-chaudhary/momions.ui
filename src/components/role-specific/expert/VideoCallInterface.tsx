import React from 'react';
import { cn } from '@/lib/utils';

interface VideoCallInterfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const VideoCallInterface = ({ className, children }: VideoCallInterfaceProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
