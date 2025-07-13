import React from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const ProductCard = ({ className, children }: ProductCardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
