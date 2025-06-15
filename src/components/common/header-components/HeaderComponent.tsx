import React from 'react';
import { BellIcon, Cog6ToothIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 p-2 text-gray-500 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-offset-gray-900"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {/* Sun Icon - visible in dark mode */}
            <SunIcon
                className={`absolute h-5 w-5 transform transition-all duration-500 ease-in-out ${theme === 'dark'
                    ? 'rotate-0 scale-100 opacity-100'
                    : 'rotate-90 scale-0 opacity-0'
                    }`}
            />

            {/* Moon Icon - visible in light mode */}
            <MoonIcon
                className={`absolute h-5 w-5 transform transition-all duration-500 ease-in-out ${theme === 'light'
                    ? 'rotate-0 scale-100 opacity-100'
                    : '-rotate-90 scale-0 opacity-0'
                    }`}
            />

            {/* Subtle glow effect */}
            <div
                className={`absolute inset-0 rounded-lg transition-all duration-300 ${theme === 'dark'
                    ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100'
                    : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100'
                    }`}
            />
        </button>
    );
};

// Notification Component
interface NotificationButtonProps {
    onClick?: () => void;
    badge?: number | string;
    icon?: React.ReactNode;
    className?: string;
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

export const NotificationButton = ({
    onClick,
    badge,
    icon = <BellIcon className="h-5 w-5" />,
    className,
    variant = 'default'
}: NotificationButtonProps) => {
    const variantClasses = {
        default: 'text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white',
        primary: 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300',
        success: 'text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300',
        warning: 'text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300',
        danger: 'text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300',
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={onClick}
                className={cn(
                    "rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                    variantClasses[variant],
                    className
                )}
            >
                <span className="sr-only">View notifications</span>
                {icon}
            </button>
            {badge && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs font-medium text-white flex items-center justify-center min-w-[1.25rem]">
                    {typeof badge === 'number' && badge > 99 ? '99+' : badge}
                </span>
            )}
        </div>
    );
};

// Settings Button Component
interface SettingsButtonProps {
    onClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
}

export const SettingsButton = ({
    onClick,
    icon = <Cog6ToothIcon className="h-5 w-5" />,
    className
}: SettingsButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "rounded-full p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                className
            )}
        >
            <span className="sr-only">Settings</span>
            {icon}
        </button>
    );
};

// Help Button Component
interface HelpButtonProps {
    onClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
}

export const HelpButton = ({
    onClick,
    icon = <QuestionMarkCircleIcon className="h-5 w-5" />,
    className
}: HelpButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "rounded-full p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                className
            )}
        >
            <span className="sr-only">Help</span>
            {icon}
        </button>
    );
};

// Quick Action Button Component
interface QuickActionButtonProps {
    onClick?: () => void;
    icon: React.ReactNode;
    label: string;
    badge?: number | string;
    className?: string;
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

export const QuickActionButton = ({
    onClick,
    icon,
    label,
    badge,
    className,
    variant = 'default'
}: QuickActionButtonProps) => {
    const variantClasses = {
        default: 'text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white',
        primary: 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300',
        success: 'text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300',
        warning: 'text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300',
        danger: 'text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300',
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={onClick}
                className={cn(
                    "rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                    variantClasses[variant],
                    className
                )}
            >
                <span className="sr-only">{label}</span>
                {icon}
            </button>
            {badge && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs font-medium text-white flex items-center justify-center min-w-[1.25rem]">
                    {typeof badge === 'number' && badge > 99 ? '99+' : badge}
                </span>
            )}
        </div>
    );
};

// Status Indicator Component
interface StatusIndicatorProps {
    status: 'online' | 'offline' | 'away' | 'busy';
    showText?: boolean;
    className?: string;
}

export const StatusIndicator = ({ status, showText = false, className }: StatusIndicatorProps) => {
    const statusConfig = {
        online: { color: 'bg-green-500', text: 'Online' },
        offline: { color: 'bg-gray-400', text: 'Offline' },
        away: { color: 'bg-yellow-500', text: 'Away' },
        busy: { color: 'bg-red-500', text: 'Busy' },
    };

    const config = statusConfig[status];

    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <div className={cn('h-3 w-3 rounded-full', config.color)} />
            {showText && (
                <span className="text-sm text-gray-600 dark:text-gray-400">{config.text}</span>
            )}
        </div>
    );
};

// Custom Divider Component
export const HeaderDivider = ({ className }: { className?: string }) => {
    return (
        <div className={cn('h-6 w-px bg-gray-300 dark:bg-gray-600', className)} />
    );
};

