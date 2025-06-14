import React from 'react';
import { cn } from '@/lib/utils';

interface PriceCalculatorProps {
  className?: string;
  children?: React.ReactNode;
}

export const PriceCalculator = ({ className, children }: PriceCalculatorProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
