import React from 'react';
import { cn } from '@/lib/utils';

interface KnowledgeBaseEditorProps {
  className?: string;
  children?: React.ReactNode;
}

export const KnowledgeBaseEditor = ({ className, children }: KnowledgeBaseEditorProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
