import React from 'react';
import { cn } from '@/lib/utils';

interface LiveChatInterfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const LiveChatInterface = ({ className, children }: LiveChatInterfaceProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
