import React, { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/20/solid'
import { cn } from '@/lib/utils'
import { Avatar } from './Avatar'
import type { User } from '@/types/User.interface'
import type { NavigationItem, UserNavigationItem } from '@/types/NavigationItem.type'
import { SearchBar } from './SearchBar'
import { Role } from '@/types/Role.type'

interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  allowedRoles?: string[]
  size?: 'sm' | 'md' | 'lg'
}

interface NotificationProps {
  allowedRoles?: string[]
  icon?: React.ReactNode
  onClick?: () => void
  badge?: number | string
  className?: string
}

interface RightComponentProps {
  component: React.ReactNode
  allowedRoles?: Role[] | string[] // Roles that can see this component
  order?: number // For ordering components
  className?: string
}

interface HeaderProps {
  navigation: NavigationItem[]
  userNavigation: UserNavigationItem[]
  user: User | null
  onSignOut: () => void
  className?: string
  logo: React.ReactNode

  // Legacy props for backward compatibility
  showSearch?: boolean
  searchProps?: SearchInputProps
  showNotification?: boolean
  notificationProps?: NotificationProps

  // New flexible system
  rightComponents?: RightComponentProps[]
  rightComponentsAlign?: 'start' | 'center' | 'end'
  userProfilePosition?: 'end' | 'start' // Whether user profile is at the very end or start of right components

  // Navigation alignment
  alignNav?: 'left' | 'center' | 'right'
}

export const Header = ({
  navigation,
  userNavigation,
  user,
  onSignOut,
  className,
  logo,

  // Legacy props
  showSearch = false,
  searchProps,
  showNotification = false,
  notificationProps,

  // New flexible props
  rightComponents = [],
  rightComponentsAlign = 'end',
  userProfilePosition = 'end',

  alignNav = 'left',
}: HeaderProps) => {
  const location = useLocation()
  const role = user?.role as Role;
  const [searchValue, setSearchValue] = useState('')

  const displayName =
    user?.displayName ||
    [user?.firstName, user?.lastName].filter(Boolean).join(' ') ||
    user?.name

  const filteredNavigation = navigation.filter(
    (item) => !item.allowedRoles || item.allowedRoles.includes(role)
  )

  const filteredUserNavigation = userNavigation.filter(
    (item) => !item.allowedRoles || item.allowedRoles.includes(role)
  )

  const navAlignmentClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[alignNav]

  const rightAlignmentClass = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  }[rightComponentsAlign]

  // Filter right components based on user role
  const filteredRightComponents = rightComponents.filter(
    (item) => !item.allowedRoles || item.allowedRoles.includes(role)
  )

  // Sort components by order
  const sortedRightComponents = filteredRightComponents.sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  )

  // Legacy components (for backward compatibility)
  const legacyComponents: RightComponentProps[] = []

  // Add legacy search
  if (showSearch && (!searchProps?.allowedRoles || searchProps.allowedRoles.includes(role))) {
    legacyComponents.push({
      component: (
        <div className="hidden lg:block w-full max-w-xs">
          <SearchBar
            {...searchProps}
            value={searchValue}
            onChange={(val) => setSearchValue(val)}
          />
        </div>
      ),
      order: -2,
    })
  }

  // Add legacy notification
  if (showNotification && (!notificationProps?.allowedRoles || notificationProps.allowedRoles.includes(role))) {
    const notificationIcon = notificationProps?.icon ?? <BellIcon className="h-6 w-6" aria-hidden="true" />

    legacyComponents.push({
      component: (
        <div className="relative">
          <button
            type="button"
            onClick={notificationProps?.onClick}
            className={cn(
              "rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200",
              notificationProps?.className
            )}
          >
            <span className="sr-only">View notifications</span>
            {notificationIcon}
          </button>
          {notificationProps?.badge && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs font-medium text-white flex items-center justify-center">
              {notificationProps.badge}
            </span>
          )}
        </div>
      ),
      order: -1,
    })
  }

  // Combine and sort all right components
  const allRightComponents = [...legacyComponents, ...sortedRightComponents]
  const finalRightComponents = allRightComponents.sort((a, b) => (a.order || 0) - (b.order || 0))

  // User Profile Component
  const UserProfileComponent = () => {
    if (!user) return null

    return (
      <Menu as="div" className="relative">
        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:focus:ring-blue-400 transition-colors duration-200">
          <span className="sr-only">Open user menu</span>
          <Avatar
            src={user.photoUrl}
            initials={displayName?.charAt(0) || '👤'}
            size="sm"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none">
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{displayName}</p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
            {filteredUserNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    to={item.href}
                    className={cn(
                      active ? 'bg-gray-100 dark:bg-gray-700' : '',
                      'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onSignOut}
                  className={cn(
                    active ? 'bg-gray-100 dark:bg-gray-700' : '',
                    'block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }

  return (
    <header className={cn('bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Navigation */}
          <div className="flex items-center space-x-6">
            {logo}
            <nav className={cn('hidden md:flex flex-1 space-x-6', navAlignmentClass)}>
              {filteredNavigation.map((item) => {
                const isActive = item.current || location.pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      isActive
                        ? 'border-blue-500 text-gray-900 dark:text-white dark:border-blue-400'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200',
                      item.className
                    )}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.name}
                    {item.badge && (
                      <span className="ml-1 rounded-full bg-blue-100 dark:bg-blue-900 px-2 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-200">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Right Components */}
          <div className={cn('flex items-center space-x-4', rightAlignmentClass)}>
            {/* Render right components based on user profile position */}
            {userProfilePosition === 'start' && <UserProfileComponent />}

            {finalRightComponents.map((item, index) => (
              <div key={index} className={cn('flex items-center', item.className)}>
                {item.component}
              </div>
            ))}

            {userProfilePosition === 'end' && <UserProfileComponent />}
          </div>
        </div>
      </div>
    </header>
  )
}