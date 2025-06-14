import React from 'react';
import { cn } from '@/lib/utils';

interface KnowledgeBaseSearchProps {
  className?: string;
  children?: React.ReactNode;
}

export const KnowledgeBaseSearch = ({ className, children }: KnowledgeBaseSearchProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
