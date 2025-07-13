import React from 'react';
import { cn } from '@/lib/utils';

interface ProfessionalCalendarProps {
  className?: string;
  children?: React.ReactNode;
}

export const ProfessionalCalendar = ({ className, children }: ProfessionalCalendarProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
