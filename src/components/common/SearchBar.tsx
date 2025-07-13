import { cn } from '@/lib/utils';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search...',
  className,
}: SearchBarProps) => {
  return (
    <div className={cn('relative rounded-md shadow-sm', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        className={cn(
          'block w-full rounded-md border-gray-300 py-2 pl-10 pr-3 text-sm placeholder-gray-400',
          'focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400',
          'bg-white dark:bg-gray-700 text-gray-900 dark:text-white',
          'border dark:border-gray-600',
          'transition-colors duration-200'
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};