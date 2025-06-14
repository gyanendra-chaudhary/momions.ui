import React from 'react';
import { cn } from '@/lib/utils';

interface PeerCollaborationProps {
  className?: string;
  children?: React.ReactNode;
}

export const PeerCollaboration = ({ className, children }: PeerCollaborationProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
