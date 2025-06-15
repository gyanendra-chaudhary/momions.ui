import { cn } from '@/lib/utils'
import { CalendarIcon } from '@heroicons/react/20/solid'
import { Popover, Transition } from '@headlessui/react'
import { format } from 'date-fns'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DatePickerProps {
  selected?: Date
  onChange: (date: Date) => void
  placeholder?: string
  className?: string
  minDate?: Date
  maxDate?: Date
  dateOnly?: boolean // ✅ New prop to toggle date vs datetime
}

export const DatePicker = ({
  selected,
  onChange,
  placeholder = 'Select date',
  className,
  minDate,
  maxDate,
  dateOnly = true, // default is date only
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover className="relative">
      <Popover.Button
        className={cn(
          'flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm',
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={cn(!selected && 'text-gray-400')}>
          {selected
            ? format(
              selected,
              dateOnly ? 'MMM dd, yyyy' : 'MMM dd, yyyy hh:mm aa'
            )
            : placeholder}
        </span>
        <CalendarIcon className="h-5 w-5 text-gray-400" />
      </Popover.Button>

      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 mt-1">
          {({ close }) => (
            <ReactDatePicker
              selected={selected}
              onChange={(date) => {
                onChange(date as Date)
                close()
              }}
              inline
              showTimeSelect={!dateOnly} // ✅ Show time select only if dateOnly is false
              timeIntervals={15}
              dateFormat={dateOnly ? 'MMMM d, yyyy' : 'MMMM d, yyyy h:mm aa'}
              minDate={minDate}
              maxDate={maxDate}
              calendarClassName="rounded-md shadow-lg border border-gray-200 p-2 bg-white"
            />
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
