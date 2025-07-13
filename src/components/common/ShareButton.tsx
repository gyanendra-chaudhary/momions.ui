import { cn } from '@/lib/utils';
import { ArrowUpTrayIcon, LinkIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface ShareOption {
  name: string
  icon: React.ReactNode
  action: () => void
}

interface ShareButtonProps {
  url: string
  title?: string
  className?: string
  additionalOptions?: ShareOption[]
}

export const ShareButton = ({
  url,
  title,
  className,
  additionalOptions = [],
}: ShareButtonProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    // You might want to show a toast notification here
    console.log(title ? `${title} link copied to clipboard!` : 'Link copied to clipboard!');
  }

  const shareOptions: ShareOption[] = [
    {
      name: 'Copy link',
      icon: <LinkIcon className="h-5 w-5" />,
      action: copyToClipboard,
    },
    ...additionalOptions,
  ]

  return (
    <Menu as="div" className={cn('relative inline-block text-left', className)}>
      <div>
        <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <ArrowUpTrayIcon className="mr-2 h-4 w-4" />
          Share
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {shareOptions.map((option) => (
              <Menu.Item key={option.name}>
                {({ active }) => (
                  <button
                    onClick={option.action}
                    className={cn(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex w-full items-center px-4 py-2 text-sm'
                    )}
                  >
                    <span className="mr-3">{option.icon}</span>
                    {option.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}