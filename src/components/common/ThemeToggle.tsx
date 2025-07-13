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