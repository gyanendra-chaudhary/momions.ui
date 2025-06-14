import React from 'react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  className?: string;
  children?: React.ReactNode;
}

export const FileUpload = ({ className, children }: FileUploadProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
