import React from 'react';
import { cn } from '@/lib/utils';

interface AutomoderationRulesProps {
  className?: string;
  children?: React.ReactNode;
}

export const AutomoderationRules = ({ className, children }: AutomoderationRulesProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
