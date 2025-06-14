import React from 'react';
import { cn } from '@/lib/utils';

interface ShareButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const ShareButton = ({ className, children }: ShareButtonProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
