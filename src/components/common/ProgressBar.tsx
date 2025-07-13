import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  showLabel?: boolean
  variant?: 'primary' | 'success' | 'danger' | 'warning'
}

const variantClasses = {
  primary: 'bg-blue-600',
  success: 'bg-green-600',
  danger: 'bg-red-600',
  warning: 'bg-yellow-600',
}

export const ProgressBar = ({
  value,
  max = 100,
  className,
  showLabel = false,
  variant = 'primary',
}: ProgressBarProps) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={cn('space-y-1', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-300 ease-out',
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}