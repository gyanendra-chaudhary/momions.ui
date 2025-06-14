import React from 'react';
import { cn } from '@/lib/utils';

interface AudioRecorderProps {
  className?: string;
  children?: React.ReactNode;
}

export const AudioRecorder = ({ className, children }: AudioRecorderProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
