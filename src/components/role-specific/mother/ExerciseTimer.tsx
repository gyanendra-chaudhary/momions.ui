import React from 'react';
import { cn } from '@/lib/utils';

interface ExerciseTimerProps {
  className?: string;
  children?: React.ReactNode;
}

export const ExerciseTimer = ({ className, children }: ExerciseTimerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
