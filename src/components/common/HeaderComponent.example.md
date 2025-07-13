// HeaderUsageExamples.tsx - Examples of how to use the new flexible header

import React from 'react';
import { Header } from '@/components/common/Header';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import {
NotificationButton,
SettingsButton,
HelpButton,
QuickActionButton,
StatusIndicator,
HeaderDivider
} from '@/components/common/HeaderComponents';
import { SearchBar } from '@/components/common/SearchBar';
import {
PlusIcon,
ChatBubbleLeftIcon,
DocumentPlusIcon
} from '@heroicons/react/24/outline';

// Example 1: Basic Header with Theme Toggle
export const BasicHeaderExample = ({ user, navigation, userNavigation, onSignOut, logo }) => {
return (

<Header
navigation={navigation}
userNavigation={userNavigation}
user={user}
onSignOut={onSignOut}
logo={logo}
rightComponents={[
{
component: <ThemeToggle />,
order: 1,
}
]}
/>
);
};

// Example 2: Full Featured Header
export const FullFeaturedHeaderExample = ({ user, navigation, userNavigation, onSignOut, logo }) => {
const [searchValue, setSearchValue] = React.useState('');

return (

<Header
navigation={navigation}
userNavigation={userNavigation}
user={user}
onSignOut={onSignOut}
logo={logo}
rightComponents={[
{
component: (
<div className="hidden lg:block w-full max-w-xs">
<SearchBar
                placeholder="Search..."
                value={searchValue}
                onChange={setSearchValue}
                size="sm"
              />
</div>
),
allowedRoles: ['Admin', 'Manager'],
order: 1,
},
{
component: <HeaderDivider />,
order: 2,
},
{
component: (
<QuickActionButton
icon={<PlusIcon className="h-5 w-5" />}
label="Create new"
onClick={() => console.log('Create new')}
variant="primary"
/>
),
allowedRoles: ['Admin'],
order: 3,
},
{
component: (
<QuickActionButton
icon={<ChatBubbleLeftIcon className="h-5 w-5" />}
label="Messages"
badge={3}
onClick={() => console.log('Messages')}
/>
),
order: 4,
},
{
component: (
<NotificationButton
badge={12}
onClick={() => console.log('Notifications')}
/>
),
order: 5,
},
{
component: <HeaderDivider />,
order: 6,
},
{
component: <ThemeToggle />,
order: 7,
},
{
component: (
<SettingsButton
onClick={() => console.log('Settings')}
/>
),
allowedRoles: ['Admin'],
order: 8,
},
{
component: (
<HelpButton
onClick={() => console.log('Help')}
/>
),
order: 9,
},
]}
rightComponentsAlign="end"
userProfilePosition="end"
/>
);
};

// Example 3: Role-based Components
export const RoleBasedHeaderExample = ({ user, navigation, userNavigation, onSignOut, logo }) => {
return (

<Header
navigation={navigation}
userNavigation={userNavigation}
user={user}
onSignOut={onSignOut}
logo={logo}
rightComponents={[
// Admin only - Quick create button
{
component: (
<QuickActionButton
icon={<DocumentPlusIcon className="h-5 w-5" />}
label="Quick create"
onClick={() => console.log('Quick create')}
variant="success"
/>
),
allowedRoles: ['Admin'],
order: 1,
},
// Manager and Admin - Notifications
{
component: (
<NotificationButton
badge={5}
onClick={() => console.log('Notifications')}
variant="primary"
/>
),
allowedRoles: ['Admin', 'Manager'],
order: 2,
},
// Everyone - Theme toggle
{
component: <ThemeToggle />,
order: 3,
},
// Status indicator for all users
{
component: <StatusIndicator status="online" showText={false} />,
order: 4,
},
]}
/>
);
};

// Example 4: Legacy Compatibility (Backward Compatible)
export const LegacyCompatibleHeaderExample = ({ user, navigation, userNavigation, onSignOut, logo }) => {
return (

<Header
navigation={navigation}
userNavigation={userNavigation}
user={user}
onSignOut={onSignOut}
logo={logo}
// Legacy props still work
showSearch={true}
searchProps={{
        placeholder: 'Search users...',
        allowedRoles: ['Admin', 'Manager'],
      }}
showNotification={true}
notificationProps={{
        allowedRoles: ['Admin'],
        badge: 8,
        onClick: () => console.log('Legacy notification'),
      }}
// New flexible components alongside legacy
rightComponents={[
{
component: <ThemeToggle />,
order: 10, // After legacy components
},
]}
/>
);
};

// Example 5: Custom Component Integration
const CustomStatusWidget = () => {
return (

<div className="flex items-center space-x-2 px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">
<div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
<span className="text-xs font-medium text-green-700 dark:text-green-300">
System Healthy
</span>
</div>
);
};

export const CustomComponentHeaderExample = ({ user, navigation, userNavigation, onSignOut, logo }) => {
return (

<Header
navigation={navigation}
userNavigation={userNavigation}
user={user}
onSignOut={onSignOut}
logo={logo}
rightComponents={[
{
component: <CustomStatusWidget />,
allowedRoles: ['Admin'],
order: 1,
},
{
component: <ThemeToggle />,
order: 2,
},
]}
rightComponentsAlign="center" // Center align right components
userProfilePosition="end" // Keep user profile at the end
/>
);
};

// Example 6: Updated MasterLayout Usage
export const UpdatedMasterLayoutExample = () => {
const { user, logout } = useAuth();
const location = useLocation();
const [searchValue, setSearchValue] = React.useState('');

return (

<div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
{/_ Sidebar code... _/}

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden lg:ml-0">
        <Header
          navigation={[
            {
              name: 'Dashboard',
              href: '/dashboard',
              icon: <HomeIcon className="h-4 w-4" />,
              current: location.pathname.startsWith('/dashboard'),
              allowedRoles: ['Admin', 'Mother'],
            },
            {
              name: 'Users',
              href: '/users',
              icon: <UsersIcon className="h-4 w-4" />,
              badge: 8,
              current: location.pathname.startsWith('/users'),
              allowedRoles: ['Admin'],
            },
          ]}
          userNavigation={[
            { name: 'Profile', href: '/profile', allowedRoles: ['Admin', 'Mother'] },
            { name: 'Settings', href: '/settings', allowedRoles: ['Admin'] },
          ]}
          user={user}
          onSignOut={logout}
          logo={
            <div className="flex items-center">
              {/* Mobile menu button and logo code... */}
            </div>
          }
          rightComponents={[
            // Search component
            {
              component: (
                <div className="hidden lg:block w-full max-w-xs">
                  <SearchBar
                    placeholder="Search users..."
                    value={searchValue}
                    onChange={setSearchValue}
                  />
                </div>
              ),
              allowedRoles: ['Admin', 'Mother'],
              order: 1,
            },
            // Notifications
            {
              component: (
                <NotificationButton
                  badge={user?.role === 'Admin' ? 5 : 2}
                  onClick={() => console.log('View notifications')}
                  icon={user?.role === 'Admin'
                    ? <GiftIcon className="h-5 w-5" />
                    : <CalendarIcon className="h-5 w-5" />
                  }
                  variant={user?.role === 'Admin' ? 'success' : 'primary'}
                />
              ),
              allowedRoles: ['Admin', 'Mother'],
              order: 2,
            },
            // Theme toggle
            {
              component: <ThemeToggle />,
              order: 3,
            },
          ]}
          alignNav="center"
        />

        {/* Main content... */}
      </div>
    </div>

);
};
