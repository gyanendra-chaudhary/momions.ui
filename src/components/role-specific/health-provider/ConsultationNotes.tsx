import React from 'react';
import { cn } from '@/lib/utils';

interface ConsultationNotesProps {
  className?: string;
  children?: React.ReactNode;
}

export const ConsultationNotes = ({ className, children }: ConsultationNotesProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
