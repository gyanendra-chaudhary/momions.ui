import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  className?: string;
  children?: React.ReactNode;
}

export const Tag = ({ className, children }: TagProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
