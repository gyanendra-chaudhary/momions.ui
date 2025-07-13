import React from 'react';
import { cn } from '@/lib/utils';

interface SessionNotesProps {
  className?: string;
  children?: React.ReactNode;
}

export const SessionNotes = ({ className, children }: SessionNotesProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
