import React from 'react';
import { cn } from '@/lib/utils';

interface RewardCatalogProps {
  className?: string;
  children?: React.ReactNode;
}

export const RewardCatalog = ({ className, children }: RewardCatalogProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
