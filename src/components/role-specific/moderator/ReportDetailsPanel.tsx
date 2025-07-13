import React from 'react';
import { cn } from '@/lib/utils';

interface ReportDetailsPanelProps {
  className?: string;
  children?: React.ReactNode;
}

export const ReportDetailsPanel = ({ className, children }: ReportDetailsPanelProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
