import React from 'react'

interface AppIconProps {
    className?: string
    size?: number
}

export const AppIcon: React.FC<AppIconProps> = ({ className = '', size = 40 }) => {
    return (
        <div
            className={`flex items-center justify-center bg-blue-600 text-white font-bold rounded-full ${className}`}
            style={{ width: size, height: size, fontSize: size / 2 }}
        >
            M
        </div>
    )
}
