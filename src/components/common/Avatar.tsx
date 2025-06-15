import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  initials?: string
  status?: 'online' | 'offline' | 'busy' | 'away'
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
}

const statusClasses = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  busy: 'bg-red-500',
  away: 'bg-yellow-500',
}

export const Avatar = ({
  src,
  alt,
  size = 'md',
  className,
  initials,
  status,
}: AvatarProps) => {
  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className={cn(
            'rounded-full object-cover',
            sizeClasses[size],
            className
          )}
        />
      ) : (
        <div
          className={cn(
            'flex items-center justify-center rounded-full bg-gray-200 font-medium text-gray-700',
            sizeClasses[size],
            className
          )}
        >
          {initials}
        </div>
      )}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white',
            statusClasses[status]
          )}
        />
      )}
    </div>
  )
}