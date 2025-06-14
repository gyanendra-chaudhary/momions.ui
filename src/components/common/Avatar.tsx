import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  className?: string;
  children?: React.ReactNode;
}

export const Avatar = ({ className, children }: AvatarProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
