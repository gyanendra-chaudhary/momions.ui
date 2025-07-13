import React from 'react';
import { cn } from '@/lib/utils';

interface ContentCalendarProps {
  className?: string;
  children?: React.ReactNode;
}

export const ContentCalendar = ({ className, children }: ContentCalendarProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
