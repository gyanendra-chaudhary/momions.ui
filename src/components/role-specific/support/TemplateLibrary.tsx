import React from 'react';
import { cn } from '@/lib/utils';

interface TemplateLibraryProps {
  className?: string;
  children?: React.ReactNode;
}

export const TemplateLibrary = ({ className, children }: TemplateLibraryProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
