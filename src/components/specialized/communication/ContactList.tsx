import React from 'react';
import { cn } from '@/lib/utils';

interface ContactListProps {
  className?: string;
  children?: React.ReactNode;
}

export const ContactList = ({ className, children }: ContactListProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
