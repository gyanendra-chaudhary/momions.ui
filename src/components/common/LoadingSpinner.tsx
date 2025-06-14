import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

interface LoadingSpinnerProps {
    fullScreen?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    fullScreen = false,
    size = 'md',
    className = '',
    text = 'Loading...',
}) => {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
    };

    const textSizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
    };

    const containerClasses = fullScreen
        ? 'fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'
        : 'inline-flex items-center';

    return (
        <div className={`${containerClasses} ${className}`} role="status">
            <div className="flex flex-col items-center">
                <ArrowPathIcon
                    className={`animate-spin text-primary-500 ${sizeClasses[size]}`}
                    aria-hidden="true"
                />
                {text && (
                    <span className={`mt-2 font-medium text-gray-500 ${textSizeClasses[size]}`}>
                        {text}
                    </span>
                )}
            </div>
            <span className="sr-only">Loading</span>
        </div>
    );
};

export default LoadingSpinner;