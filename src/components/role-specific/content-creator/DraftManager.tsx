import React from 'react';
import { cn } from '@/lib/utils';

interface DraftManagerProps {
  className?: string;
  children?: React.ReactNode;
}

export const DraftManager = ({ className, children }: DraftManagerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
