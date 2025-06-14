import React from 'react';
import { cn } from '@/lib/utils';

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
}

export const Modal = ({ className, children }: ModalProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
