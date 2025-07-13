import { cn } from '@/lib/utils';
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface AccordionProps {
  items: {
    title: string
    content: React.ReactNode
  }[]
  className?: string
}

export const Accordion = ({ items, className }: AccordionProps) => {
  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <Disclosure.Button className="flex w-full items-center justify-between p-4 text-left">
                <span className="text-lg font-medium text-gray-900">{item.title}</span>
                <ChevronDownIcon
                  className={cn(
                    'h-5 w-5 text-gray-500 transition-transform duration-200',
                    open && 'rotate-180'
                  )}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-600">
                  {item.content}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}