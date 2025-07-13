import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Button } from './Button';

type AlertVariant = 'success' | 'error' | 'warning' | 'info'

interface AlertProps {
  variant?: AlertVariant
  title: string
  message?: string
  onClose?: () => void
  className?: string
}

const variantStyles: Record<AlertVariant, string> = {
  success: 'bg-green-50 text-green-800 border-green-100',
  error: 'bg-red-50 text-red-800 border-red-100',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-100',
  info: 'bg-blue-50 text-blue-800 border-blue-100',
}

export const Alert = ({
  variant = 'info',
  title,
  message,
  onClose,
  className,
}: AlertProps) => {
  return (
    <div
      className={cn(
        'rounded-lg border p-4 shadow-sm',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-sm font-medium">{title}</h3>
          {message && <p className="mt-1 text-sm opacity-90">{message}</p>}
        </div>
        {onClose && (
          <Button
            onClick={onClose}
            className="ml-4 rounded-md p-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-current"
          >
            <XMarkIcon className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  )
}