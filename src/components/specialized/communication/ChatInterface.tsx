import React from 'react';
import { cn } from '@/lib/utils';

interface ChatInterfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const ChatInterface = ({ className, children }: ChatInterfaceProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
