import React from 'react';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const RecipeCard = ({ className, children }: RecipeCardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
