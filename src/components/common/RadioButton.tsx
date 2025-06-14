import React from 'react';
import { cn } from '@/lib/utils';

interface RadioButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const RadioButton = ({ className, children }: RadioButtonProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
