import React from 'react';
import { cn } from '@/lib/utils';

interface BabyProfileCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const BabyProfileCard = ({ className, children }: BabyProfileCardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
