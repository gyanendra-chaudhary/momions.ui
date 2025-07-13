import React from 'react';
import { cn } from '@/lib/utils';

interface LeaderboardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Leaderboard = ({ className, children }: LeaderboardProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
