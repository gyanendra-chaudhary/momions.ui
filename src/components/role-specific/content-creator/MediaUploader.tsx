import React from 'react';
import { cn } from '@/lib/utils';

interface MediaUploaderProps {
  className?: string;
  children?: React.ReactNode;
}

export const MediaUploader = ({ className, children }: MediaUploaderProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
