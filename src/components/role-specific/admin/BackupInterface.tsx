import React from 'react';
import { cn } from '@/lib/utils';

interface BackupInterfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const BackupInterface = ({ className, children }: BackupInterfaceProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
