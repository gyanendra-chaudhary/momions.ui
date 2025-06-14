import React from 'react';
import { cn } from '@/lib/utils';

interface AuditLogViewerProps {
  className?: string;
  children?: React.ReactNode;
}

export const AuditLogViewer = ({ className, children }: AuditLogViewerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
