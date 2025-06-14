import React from 'react';
import { cn } from '@/lib/utils';

interface ConfigurationPanelProps {
  className?: string;
  children?: React.ReactNode;
}

export const ConfigurationPanel = ({ className, children }: ConfigurationPanelProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
