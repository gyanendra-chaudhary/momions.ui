import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const Header = ({ className, children }: HeaderProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
