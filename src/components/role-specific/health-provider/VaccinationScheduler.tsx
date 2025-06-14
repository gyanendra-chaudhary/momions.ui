import React from 'react';
import { cn } from '@/lib/utils';

interface VaccinationSchedulerProps {
  className?: string;
  children?: React.ReactNode;
}

export const VaccinationScheduler = ({ className, children }: VaccinationSchedulerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
