import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export const Footer = ({ className, children }: FooterProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
