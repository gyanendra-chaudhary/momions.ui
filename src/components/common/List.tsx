import React from 'react';
import { cn } from '@/lib/utils';

interface ListItem {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
}

interface ListProps {
  items: ListItem[]
  className?: string
  emptyState?: React.ReactNode
}

export const List = ({ items, className, emptyState }: ListProps) => {
  if (items.length === 0 && emptyState) {
    return <>{emptyState}</>
  }

  return (
    <ul
      role="list"
      className={cn('divide-y divide-gray-200 overflow-hidden', className)}
    >
      {items.map((item) => (
        <li key={item.id} className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {item.icon && (
                <div className="flex-shrink-0">{item.icon}</div>
              )}
              <div>
                <p className="truncate text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                {item.description && (
                  <p className="truncate text-sm text-gray-500">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
            {item.action && <div>{item.action}</div>}
          </div>
        </li>
      ))}
    </ul>
  )
}