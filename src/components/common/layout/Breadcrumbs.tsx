import React from 'react';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  className?: string;
  children?: React.ReactNode;
}

export const Breadcrumbs = ({ className, children }: BreadcrumbsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
