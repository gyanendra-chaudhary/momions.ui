import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  header?: React.ReactNode
  footer?: React.ReactNode
}

export const Card = ({
  children,
  className,
  hoverEffect = false,
  header,
  footer,
}: CardProps) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm',
        hoverEffect && 'transition-all hover:shadow-md',
        className
      )}
    >
      {header && (
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6">
          {header}
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">{children}</div>
      {footer && (
        <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 sm:px-6">
          {footer}
        </div>
      )}
    </div>
  )
}