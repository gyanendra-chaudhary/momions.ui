import React from 'react';
import { cn } from '@/lib/utils';

interface VersionControlProps {
  className?: string;
  children?: React.ReactNode;
}

export const VersionControl = ({ className, children }: VersionControlProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
