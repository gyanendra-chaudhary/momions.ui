import React from 'react';
import { cn } from '@/lib/utils';

interface AchievementBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

export const AchievementBadge = ({ className, children }: AchievementBadgeProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
