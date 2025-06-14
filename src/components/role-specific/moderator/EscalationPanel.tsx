import React from 'react';
import { cn } from '@/lib/utils';

interface EscalationPanelProps {
  className?: string;
  children?: React.ReactNode;
}

export const EscalationPanel = ({ className, children }: EscalationPanelProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
