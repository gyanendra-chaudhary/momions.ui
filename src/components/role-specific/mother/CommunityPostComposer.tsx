import React from 'react';
import { cn } from '@/lib/utils';

interface CommunityPostComposerProps {
  className?: string;
  children?: React.ReactNode;
}

export const CommunityPostComposer = ({ className, children }: CommunityPostComposerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
