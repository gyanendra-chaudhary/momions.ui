import React from 'react';
import { cn } from '@/lib/utils';

interface FormValidationProps {
  className?: string;
  children?: React.ReactNode;
}

export const FormValidation = ({ className, children }: FormValidationProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
