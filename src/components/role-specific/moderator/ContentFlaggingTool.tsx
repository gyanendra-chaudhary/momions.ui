import React from 'react';
import { cn } from '@/lib/utils';

interface ContentFlaggingToolProps {
  className?: string;
  children?: React.ReactNode;
}

export const ContentFlaggingTool = ({ className, children }: ContentFlaggingToolProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
