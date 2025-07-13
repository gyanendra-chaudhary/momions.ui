import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { Avatar } from './Avatar';
import { User } from '@/types/User.interface';
import { Tooltip } from './Tooltip';

export type UserRole = string;

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  current: boolean;
  roles?: UserRole[];
  children?: NavigationItem[];
  badge?: string | number;
}

interface SidebarProps {
  user: User | null;
  navigation: NavigationItem[];
  onSignOut: () => void;
  className?: string;
  logo: React.ReactNode;
  collapsedLogo?: React.ReactNode;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
}

export const Sidebar = ({
  user,
  navigation,
  onSignOut,
  className,
  logo,
  collapsedLogo,
  mobileOpen = false,
  onMobileClose,
  collapsible = true,
  defaultCollapsed = false,
  onCollapseChange,
}: SidebarProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: location.pathname.startsWith(item.href),
    children: item.children?.map(child => ({
      ...child,
      current: location.pathname === child.href,
    })),
  }));

  const toggleCollapse = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);

    // Close all dropdowns when collapsing
    if (newCollapsed) {
      setOpenItems({});
    }
  };

  useEffect(() => {
    const newOpenItems: Record<string, boolean> = {};
    updatedNavigation.forEach(item => {
      if (item.children) {
        // Keep items open if they contain the current page or if sidebar is expanded
        newOpenItems[item.name] = item.children.some(child => child.current) || item.current;
      }
    });
    setOpenItems(newOpenItems);
  }, [location.pathname]);

  const toggleItem = (itemName: string) => {
    if (collapsed) return; // Don't toggle in collapsed mode

    setOpenItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <>
      {/* Mobile sidebar overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden dark:bg-gray-900/90",
        mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={onMobileClose} />

      {/* Mobile sidebar content */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-200 bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden dark:bg-gray-800 dark:border-gray-700",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          {logo}
          <button
            type="button"
            className="-mr-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={onMobileClose}
          >
            <span className="sr-only">Close sidebar</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex h-0 flex-1 flex-col overflow-y-auto pb-4">
          <nav className="mt-6 space-y-1 px-4">
            {updatedNavigation.map((item) => (
              <NavigationItemComponent
                key={item.name}
                item={item}
                onMobileClose={onMobileClose}
                isOpen={!!openItems[item.name]}
                onToggle={() => item.children && toggleItem(item.name)}
                collapsed={false}
              />
            ))}
          </nav>
        </div>
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <UserProfile user={user} onSignOut={onSignOut} collapsed={false} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div
        className={cn(
          'hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:flex-col lg:border-r lg:border-gray-200 lg:shadow-sm lg:transition-all lg:duration-300 lg:ease-in-out dark:border-gray-700',
          collapsed ? 'lg:w-20' : 'lg:w-64',
          className,
          'bg-white dark:bg-gray-800' // Added dark mode background
        )}
      >
        {collapsible && (
          <button
            type="button"
            className="absolute -right-3 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
            onClick={toggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <ChevronRightIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            ) : (
              <ChevronRightIcon className="h-4 w-4 rotate-180 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        )}

        <div className="flex h-16 flex-shrink-0 items-center px-4 transition-all duration-300">
          <div className={cn(
            "transition-opacity duration-300",
            collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          )}>
            {logo}
          </div>
          <div className={cn(
            "absolute transition-opacity duration-300",
            collapsed ? "opacity-100" : "opacity-0 w-0"
          )}>
            {collapsedLogo || logo}
          </div>
        </div>

        <div className="mt-2 flex flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {updatedNavigation.map((item) => (
              <NavigationItemComponent
                key={item.name}
                item={item}
                isOpen={!!openItems[item.name]}
                onToggle={() => item.children && toggleItem(item.name)}
                collapsed={collapsed}
              />
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <UserProfile
            user={user}
            onSignOut={onSignOut}
            collapsed={collapsed}
          />
        </div>
      </div>

      {/* Content spacer - this pushes main content to the right */}
      <div
        className={cn(
          'hidden lg:block lg:transition-all lg:duration-300 lg:ease-in-out',
          collapsed ? 'lg:w-20' : 'lg:w-64'
        )}
        aria-hidden="true"
      />
    </>
  );
};

interface NavigationItemComponentProps {
  item: NavigationItem;
  onMobileClose?: () => void;
  isOpen: boolean;
  onToggle: () => void;
  collapsed: boolean;
}

const NavigationItemComponent = ({
  item,
  onMobileClose,
  isOpen,
  onToggle,
  collapsed,
}: NavigationItemComponentProps) => {
  const hasChildren = item.children && item.children.length > 0;

  // Collapsed state without children - show tooltip
  if (collapsed && !hasChildren) {
    return (
      <Tooltip content={item.name} position="right">
        <Link
          to={item.href}
          onClick={onMobileClose}
          className={cn(
            item.current
              ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600 dark:bg-gray-700 dark:text-indigo-400 dark:border-indigo-400'
              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
            'group relative flex items-center justify-center rounded-md p-3 text-sm font-medium transition-colors duration-200'
          )}
        >
          <span className="flex h-5 w-5 items-center justify-center">
            {item.icon}
          </span>
          <span className="sr-only">{item.name}</span>
          {item.badge && (
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-indigo-600 animate-pulse dark:bg-indigo-400" />
          )}
        </Link>
      </Tooltip>
    );
  }

  // Collapsed state with children - show popover on hover
  if (collapsed && hasChildren) {
    return (
      <div className="group relative">
        <Tooltip content={item.name} position="right">
          <div
            className={cn(
              item.current
                ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600 dark:bg-gray-700 dark:text-indigo-400 dark:border-indigo-400'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
              'group flex w-full items-center justify-center rounded-md p-3 text-sm font-medium cursor-pointer transition-colors duration-200'
            )}
          >
            <span className="flex h-5 w-5 items-center justify-center">
              {item.icon}
            </span>
            <span className="sr-only">{item.name}</span>
            {item.badge && (
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-indigo-600 animate-pulse dark:bg-indigo-400" />
            )}
          </div>
        </Tooltip>

        {/* Popover for collapsed navigation with children */}
        <div className="absolute left-full top-0 z-50 ml-2 hidden w-56 group-hover:block">
          <div className="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1 transition-all duration-200 dark:bg-gray-700 dark:ring-gray-600">
            <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-100 dark:text-white dark:border-gray-600">
              {item.name}
            </div>
            {item.children?.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                onClick={onMobileClose}
                className={cn(
                  child.current
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-gray-600 dark:text-indigo-300'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white',
                  'block px-4 py-2 text-sm transition-colors duration-200'
                )}
              >
                <div className="flex items-center">
                  <span className="truncate">{child.name}</span>
                  {child.badge && (
                    <span className="ml-2 inline-flex h-4 items-center rounded-full bg-indigo-100 px-2 text-xs font-medium text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900">
                      {child.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Expanded state with children
  if (hasChildren) {
    return (
      <div>
        <button
          onClick={onToggle}
          className={cn(
            item.current
              ? 'bg-indigo-50 text-indigo-600 dark:bg-gray-700 dark:text-indigo-400'
              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
            'group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200'
          )}
        >
          <div className="flex items-center min-w-0">
            <span className="flex h-5 w-5 items-center justify-center flex-shrink-0">
              {item.icon}
            </span>
            <span className="ml-3 truncate">{item.name}</span>
          </div>
          <div className="flex items-center flex-shrink-0">
            {item.badge && (
              <span className="ml-2 inline-flex h-5 items-center rounded-full bg-indigo-100 px-2 text-xs font-medium text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900">
                {item.badge}
              </span>
            )}
            <ChevronDownIcon
              className={cn(
                'ml-2 h-4 w-4 text-gray-400 transition-transform duration-200 dark:text-gray-300',
                isOpen ? 'rotate-180' : ''
              )}
              aria-hidden="true"
            />
          </div>
        </button>

        {/* Children with smooth transition */}
        <div className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="ml-8 mt-1 space-y-1 border-l border-gray-200 pl-4 dark:border-gray-600">
            {item.children?.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                onClick={onMobileClose}
                className={cn(
                  child.current
                    ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600 dark:bg-gray-700 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200'
                )}
              >
                <span className="truncate">{child.name}</span>
                {child.badge && (
                  <span className="ml-auto inline-flex h-4 items-center rounded-full bg-indigo-100 px-2 text-xs font-medium text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900">
                    {child.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Simple navigation item (expanded state, no children)
  return (
    <Link
      to={item.href}
      onClick={onMobileClose}
      className={cn(
        item.current
          ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600 dark:bg-gray-700 dark:text-indigo-400 dark:border-indigo-400'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
        'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200'
      )}
    >
      <span className="flex h-5 w-5 items-center justify-center flex-shrink-0">
        {item.icon}
      </span>
      <span className="ml-3 truncate">{item.name}</span>
      {item.badge && (
        <span className="ml-auto inline-flex h-5 items-center rounded-full bg-indigo-100 px-2 text-xs font-medium text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900">
          {item.badge}
        </span>
      )}
    </Link>
  );
};

interface UserProfileProps {
  user: User | null;
  onSignOut: () => void;
  collapsed: boolean;
}

const UserProfile = ({ user, onSignOut, collapsed }: UserProfileProps) => {
  if (!user) return null;

  if (collapsed) {
    return (
      <Tooltip content={`${user.name} - Click to sign out`} position="right">
        <button
          onClick={onSignOut}
          className="flex w-full justify-center rounded-md p-2 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:hover:bg-gray-700"
        >
          <Avatar
            src={user.photoUrl}
            initials={user.name.charAt(0)}
            size="sm"
          />
        </button>
      </Tooltip>
    );
  }

  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Avatar
          src={user.photoUrl}
          initials={user.name.charAt(0)}
          size="sm"
        />
      </div>
      <div className="ml-3 min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-700 dark:text-gray-200">{user.name}</p>
        <button
          onClick={onSignOut}
          className="truncate text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:underline dark:text-gray-400 dark:hover:text-gray-300"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};