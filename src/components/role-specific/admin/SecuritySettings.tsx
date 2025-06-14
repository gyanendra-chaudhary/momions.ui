import React from 'react';
import { cn } from '@/lib/utils';

interface SecuritySettingsProps {
  className?: string;
  children?: React.ReactNode;
}

export const SecuritySettings = ({ className, children }: SecuritySettingsProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
