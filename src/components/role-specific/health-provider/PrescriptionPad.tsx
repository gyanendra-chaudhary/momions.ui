import React from 'react';
import { cn } from '@/lib/utils';

interface PrescriptionPadProps {
  className?: string;
  children?: React.ReactNode;
}

export const PrescriptionPad = ({ className, children }: PrescriptionPadProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
