import React from 'react';
import { cn } from '@/lib/utils';

interface ProductImageUploaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const ProductImageUploader = ({ className, children }: ProductImageUploaderProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
