import React from 'react';
import { cn } from '@/lib/utils';

interface ScreenSharingToolProps {
  className?: string;
  children?: React.ReactNode;
}

export const ScreenSharingTool = ({ className, children }: ScreenSharingToolProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
