import React from 'react';
import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/20/solid'

interface TagProps {
  children: React.ReactNode
  onRemove?: () => void
  className?: string
  color?: 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink'
}

const colorClasses = {
  blue: 'bg-blue-100 text-blue-800',
  gray: 'bg-gray-100 text-gray-800',
  red: 'bg-red-100 text-red-800',
  green: 'bg-green-100 text-green-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  indigo: 'bg-indigo-100 text-indigo-800',
  purple: 'bg-purple-100 text-purple-800',
  pink: 'bg-pink-100 text-pink-800',
}

export const Tag = ({
  children,
  onRemove,
  className,
  color = 'blue',
}: TagProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        colorClasses[color],
        className
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-current hover:text-opacity-75 focus:outline-none"
          onClick={onRemove}
        >
          <XMarkIcon className="h-3 w-3" />
        </button>
      )}
    </span>
  )
}