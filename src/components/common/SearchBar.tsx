import React from 'react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

export const SearchBar = ({ className, children }: SearchBarProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
