import React from 'react';
import { cn } from '@/lib/utils';

interface MacroActionProps {
  className?: string;
  children?: React.ReactNode;
}

export const MacroAction = ({ className, children }: MacroActionProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
