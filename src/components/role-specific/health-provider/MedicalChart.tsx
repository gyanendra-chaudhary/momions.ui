import React from 'react';
import { cn } from '@/lib/utils';

interface MedicalChartProps {
  className?: string;
  children?: React.ReactNode;
}

export const MedicalChart = ({ className, children }: MedicalChartProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
