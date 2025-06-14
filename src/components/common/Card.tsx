import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
