import React from 'react';
import { cn } from '@/lib/utils';

interface RichTextEditorProps {
  className?: string;
  children?: React.ReactNode;
}

export const RichTextEditor = ({ className, children }: RichTextEditorProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
