import React from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  title?: string
  actions?: React.ReactNode
  breadcrumbs?: React.ReactNode
  fullWidth?: boolean
}

export const PageContainer = ({
  children,
  className,
  title,
  actions,
  breadcrumbs,
  fullWidth = false,
}: PageContainerProps) => {
  return (
    <div
      className={cn(
        'min-h-screen bg-gray-50',
        fullWidth ? '' : 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
      )}
    >
      <div className={cn('py-6', className)}>
        {breadcrumbs && <div className="mb-4">{breadcrumbs}</div>}
        {(title || actions) && (
          <div className="mb-6 flex items-center justify-between">
            {title && (
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            )}
            {actions && <div className="flex space-x-3">{actions}</div>}
          </div>
        )}
        <div className="rounded-lg bg-white shadow">{children}</div>
      </div>
    </div>
  )
}
