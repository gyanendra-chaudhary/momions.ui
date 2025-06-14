import React from 'react';
import { cn } from '@/lib/utils';

interface PatientCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const PatientCard = ({ className, children }: PatientCardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
