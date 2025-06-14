import React from 'react';
import { cn } from '@/lib/utils';

interface BackButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const BackButton = ({ className, children }: BackButtonProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
