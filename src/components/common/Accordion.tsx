import React from 'react';
import { cn } from '@/lib/utils';

interface AccordionProps {
  className?: string;
  children?: React.ReactNode;
}

export const Accordion = ({ className, children }: AccordionProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
