import React from 'react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  className?: string;
  children?: React.ReactNode;
}

export const ImageGallery = ({ className, children }: ImageGalleryProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
