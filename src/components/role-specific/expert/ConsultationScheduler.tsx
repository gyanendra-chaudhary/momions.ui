import React from 'react';
import { cn } from '@/lib/utils';

interface ConsultationSchedulerProps {
  className?: string;
  children?: React.ReactNode;
}

export const ConsultationScheduler = ({ className, children }: ConsultationSchedulerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
