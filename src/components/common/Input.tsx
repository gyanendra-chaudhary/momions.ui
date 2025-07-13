import { cn } from "@/lib/utils";
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className, id, ...props }, ref) => {
        return (
            <div className="space-y-1">
                {label && (
                    <label
                        htmlFor={id}
                        className="block text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                )}
                <div className="relative rounded-md shadow-sm">
                    {icon && (
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-400">{icon}</span>
                        </div>
                    )}
                    <input
                        ref={ref}
                        id={id}
                        className={cn(
                            'block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm',
                            error &&
                            'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500',
                            icon ? 'pl-10' : 'pl-3',
                            className
                        )}
                        {...props}
                    />
                </div>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
        )
    }
)

Input.displayName = 'Input'