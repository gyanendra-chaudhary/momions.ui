import React from 'react';
import { cn } from '@/lib/utils';

interface ReminderCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const ReminderCard = ({ className, children }: ReminderCardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
