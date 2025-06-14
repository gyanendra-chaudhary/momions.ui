import React from 'react';
import { cn } from '@/lib/utils';

interface MessageThreadProps {
  className?: string;
  children?: React.ReactNode;
}

export const MessageThread = ({ className, children }: MessageThreadProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
