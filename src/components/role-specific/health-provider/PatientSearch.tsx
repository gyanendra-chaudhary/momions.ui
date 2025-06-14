import React from 'react';
import { cn } from '@/lib/utils';

interface PatientSearchProps {
  className?: string;
  children?: React.ReactNode;
}

export const PatientSearch = ({ className, children }: PatientSearchProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
