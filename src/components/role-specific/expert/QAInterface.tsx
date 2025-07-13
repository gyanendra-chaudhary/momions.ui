import React from 'react';
import { cn } from '@/lib/utils';

interface QAInterfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const QAInterface = ({ className, children }: QAInterfaceProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
