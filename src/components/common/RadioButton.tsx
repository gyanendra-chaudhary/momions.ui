import { cn } from '@/lib/utils';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  description?: string
}

export const RadioButton = ({
  label,
  description,
  className,
  ...props
}: RadioButtonProps) => {
  return (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input
          type="radio"
          className={cn(
            'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500',
            className
          )}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={props.id} className="font-medium text-gray-700">
          {label}
        </label>
        {description && <p className="text-gray-500">{description}</p>}
      </div>
    </div>
  )
}