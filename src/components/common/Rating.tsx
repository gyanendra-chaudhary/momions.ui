import { cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

interface RatingProps {
  value?: number
  onChange?: (value: number) => void
  readOnly?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

export const Rating = ({
  value = 0,
  onChange,
  readOnly = false,
  className,
  size = 'md',
}: RatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const handleClick = (newValue: number) => {
    if (!readOnly && onChange) {
      onChange(newValue)
    }
  }

  const handleMouseEnter = (newValue: number) => {
    if (!readOnly) {
      setHoverValue(newValue)
    }
  }

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(null)
    }
  }

  const displayValue = hoverValue !== null ? hoverValue : value

  return (
    <div className={cn('flex items-center', className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          disabled={readOnly}
          className={cn(
            'text-gray-300 focus:outline-none',
            !readOnly && 'cursor-pointer',
            sizeClasses[size]
          )}
        >
          <StarIcon
            className={cn(
              displayValue >= star ? 'text-yellow-400' : 'text-gray-300',
              sizeClasses[size]
            )}
          />
        </button>
      ))}
    </div>
  )
}