import React from 'react'

interface AppLogoProps {
    className?: string
    size?: 'sm' | 'md' | 'lg'
}

export const AppLogo: React.FC<AppLogoProps> = ({ className = '', size = 'md' }) => {
    const sizeClass = {
        sm: 'text-lg',
        md: 'text-2xl',
        lg: 'text-4xl',
    }[size]

    return (
        <span className={`font-extrabold text-blue-600 tracking-tight ${sizeClass} ${className}`}>
            Momions
        </span>
    )
}
