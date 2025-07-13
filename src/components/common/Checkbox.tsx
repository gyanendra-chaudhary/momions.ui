import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
}

export const Checkbox = ({ label, description, className, ...props }: CheckboxProps) => {
  return (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500',
            className
          )}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        {label && (
          <label htmlFor={props.id} className="font-medium text-gray-700">
            {label}
          </label>
        )}
        {description && <p className="text-gray-500">{description}</p>}
      </div>
    </div>
  )
}