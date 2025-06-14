import React from 'react';
import { cn } from '@/lib/utils';

interface InputFieldProps {
  className?: string;
  children?: React.ReactNode;
}

export const InputField = ({ className, children }: InputFieldProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
