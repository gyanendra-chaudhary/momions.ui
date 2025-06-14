import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps {
  className?: string;
  children?: React.ReactNode;
}

export const Textarea = ({ className, children }: TextareaProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
