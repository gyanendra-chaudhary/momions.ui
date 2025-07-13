import React from 'react';
import { cn } from '@/lib/utils';

interface MemoryBookEditorProps {
  className?: string;
  children?: React.ReactNode;
}

export const MemoryBookEditor = ({ className, children }: MemoryBookEditorProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
