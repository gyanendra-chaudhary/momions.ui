import React from 'react';
import { cn } from '@/lib/utils';

interface ErrorPageProps {
  className?: string;
  children?: React.ReactNode;
}

export const ErrorPage = ({ className, children }: ErrorPageProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
