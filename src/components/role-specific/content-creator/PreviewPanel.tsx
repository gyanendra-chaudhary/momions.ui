import React from 'react';
import { cn } from '@/lib/utils';

interface PreviewPanelProps {
  className?: string;
  children?: React.ReactNode;
}

export const PreviewPanel = ({ className, children }: PreviewPanelProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
