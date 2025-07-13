import React from 'react';
import { cn } from '@/lib/utils';

interface TicketManagementPanelProps {
  className?: string;
  children?: React.ReactNode;
}

export const TicketManagementPanel = ({ className, children }: TicketManagementPanelProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
