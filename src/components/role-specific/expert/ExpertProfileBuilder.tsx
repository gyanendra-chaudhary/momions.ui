import React from 'react';
import { cn } from '@/lib/utils';

interface ExpertProfileBuilderProps {
  className?: string;
  children?: React.ReactNode;
}

export const ExpertProfileBuilder = ({ className, children }: ExpertProfileBuilderProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
