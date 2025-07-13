import React from 'react';
import { cn } from '@/lib/utils';

interface BanWarningInterfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const BanWarningInterface = ({ className, children }: BanWarningInterfaceProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
