import React from 'react';
import { cn } from '@/lib/utils';

interface ModerationLogProps {
  className?: string;
  children?: React.ReactNode;
}

export const ModerationLog = ({ className, children }: ModerationLogProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
