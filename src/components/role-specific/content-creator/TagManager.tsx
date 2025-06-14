import React from 'react';
import { cn } from '@/lib/utils';

interface TagManagerProps {
  className?: string;
  children?: React.ReactNode;
}

export const TagManager = ({ className, children }: TagManagerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
