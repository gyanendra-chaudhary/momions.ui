import React from 'react';
import { cn } from '@/lib/utils';

interface AppointmentCalendarProps {
  className?: string;
  children?: React.ReactNode;
}

export const AppointmentCalendar = ({ className, children }: AppointmentCalendarProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
