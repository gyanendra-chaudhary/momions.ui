import React from 'react';
import { cn } from '@/lib/utils';

interface ResourceLibraryProps {
  className?: string;
  children?: React.ReactNode;
}

export const ResourceLibrary = ({ className, children }: ResourceLibraryProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
