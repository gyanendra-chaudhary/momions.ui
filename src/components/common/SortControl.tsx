import { cn } from '@/lib/utils';
import { BarsArrowUpIcon, BarsArrowDownIcon } from '@heroicons/react/20/solid'
import { Menu } from '@headlessui/react'

interface SortOption {
  value: string
  label: string
  direction?: 'asc' | 'desc'
}

interface SortControlProps {
  options: SortOption[]
  value: string
  direction?: 'asc' | 'desc'
  onChange: (value: string, direction: 'asc' | 'desc') => void
  className?: string
}

export const SortControl = ({
  options,
  value,
  direction = 'asc',
  onChange,
  className,
}: SortControlProps) => {
  const currentOption = options.find((option) => option.value === value)

  return (
    <Menu as="div" className={cn('relative inline-block text-left', className)}>
      <div>
        <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          {direction === 'asc' ? (
            <BarsArrowUpIcon className="mr-2 h-4 w-4" />
          ) : (
            <BarsArrowDownIcon className="mr-2 h-4 w-4" />
          )}
          {currentOption?.label || 'Sort'}
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {options.map((option) => (
            <div key={option.value}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() =>
                      onChange(
                        option.value,
                        option.direction || direction
                      )
                    }
                    className={cn(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex w-full items-center justify-between px-4 py-2 text-sm'
                    )}
                  >
                    <span>{option.label}</span>
                    {value === option.value && (
                      <span>
                        {direction === 'asc' ? (
                          <BarsArrowUpIcon className="h-4 w-4" />
                        ) : (
                          <BarsArrowDownIcon className="h-4 w-4" />
                        )}
                      </span>
                    )}
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  )
}