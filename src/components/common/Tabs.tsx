import React from 'react';
import { cn } from '@/lib/utils';
import { Tab } from '@headlessui/react'

interface TabItem {
  label: string
  content: React.ReactNode
}

interface TabsProps {
  items: TabItem[]
  className?: string
  defaultIndex?: number
}

export const Tabs = ({ items, className, defaultIndex = 0 }: TabsProps) => {
  return (
    <Tab.Group defaultIndex={defaultIndex}>
      <Tab.List
        className={cn(
          'flex space-x-1 rounded-lg bg-gray-100 p-1',
          className
        )}
      >
        {items.map((item, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              cn(
                'w-full rounded-md py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow text-blue-700'
                  : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-800'
              )
            }
          >
            {item.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {items.map((item, index) => (
          <Tab.Panel
            key={index}
            className={cn(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            {item.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}