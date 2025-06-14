import React from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageContainer = ({ className, children }: PageContainerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
