import React from 'react';
import { cn } from '@/lib/utils';

interface EscalationInterfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const EscalationInterface = ({ className, children }: EscalationInterfaceProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
