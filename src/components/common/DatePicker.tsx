import React from 'react';
import { cn } from '@/lib/utils';

interface DatePickerProps {
  className?: string;
  children?: React.ReactNode;
}

export const DatePicker = ({ className, children }: DatePickerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
