import React from 'react';
import { cn } from '@/lib/utils';

interface ShippingCalculatorProps {
  className?: string;
  children?: React.ReactNode;
}

export const ShippingCalculator = ({ className, children }: ShippingCalculatorProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
