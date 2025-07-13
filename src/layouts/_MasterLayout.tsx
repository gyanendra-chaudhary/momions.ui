import { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Sidebar } from '@/components/common/Sidebar';
import { AppLogo } from '@/components/icons/AppLogo';
import { AppIcon } from '@/components/icons/AppIcon';
import { Header } from '@/components/common/Header';
import {
    HomeIcon,
    UsersIcon,
    GiftIcon,
    CalendarIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline'
import { getNavigationForRole, updateNavigationState } from '@/utils/navigation-utils';
import { SearchBar } from '@/components/common/SearchBar';
import { HelpButton, NotificationButton, ThemeToggle } from '@/components/common/header-components/HeaderComponent';
import { OffCanvasDrawer } from '@/components/common/OffCanvasDrawer';
import { YouTubeMusicPlayer } from '@/components/common/header-components/YouTubeMusicPlayer';

export default function MasterLayout() {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const roleNavigation = getNavigationForRole(user!.role);
    const updatedNavigation = updateNavigationState(
        roleNavigation,
        location.pathname,
        `/${user?.role}`
    );

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const openMobileMenu = () => {
        setMobileMenuOpen(true);
    };
    console.log(sidebarCollapsed, 'sidebarCollapsed');

    return (
        <div className="flex h-screen w-full overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                user={user}
                navigation={updatedNavigation}
                onSignOut={logout}
                logo={<AppLogo className="h-8 w-auto" />}
                collapsedLogo={<AppIcon className="h-8 w-auto" />}
                mobileOpen={mobileMenuOpen}
                onMobileClose={closeMobileMenu}
                collapsible={true}
                defaultCollapsed={false}
                onCollapseChange={setSidebarCollapsed}
            />

            {/* Main Content Area */}
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden lg:ml-0">
                {/* Header */}
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
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="lg:hidden -ml-2 mr-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onClick={openMobileMenu}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo - hidden on mobile when sidebar is available */}
                            <div className="lg:hidden">
                                <AppLogo className="h-8 w-auto" />
                            </div>
                        </div>
                    }
                    rightComponents={[
                        {
                            component: (
                                <div className="hidden lg:block w-full max-w-xs">
                                    <SearchBar
                                        placeholder="Search users..." value={''}
                                        onChange={function (value: string): void {
                                            console.log(value);
                                        }}
                                    />
                                </div>
                            ),
                            allowedRoles: ['Admin', 'Mother', 'ContentCreator', 'HealthProvider', 'Partner', 'Moderator', 'Expert', 'SupportStaff'],
                            order: 1,
                        },
                        {
                            component: (
                                <NotificationButton

                                    icon={
                                        user?.role === 'Admin' ? (
                                            <GiftIcon className="h-6 w-6 text-green-500" />
                                        ) : (
                                            <CalendarIcon className="h-6 w-6 text-pink-500" />
                                        )
                                    }
                                />
                            ),
                            allowedRoles: ['Admin', 'Mother', 'ContentCreator', 'HealthProvider', 'Partner', 'Moderator', 'Expert', 'SupportStaff'],
                            order: 2,
                        },
                        {
                            component: (
                                <HelpButton />
                            ),
                            allowedRoles: ['Mother', 'HealthProvider', 'Moderator', 'Partner', 'SupportStaff', 'Expert'],
                            order: 3,
                        },
                        {
                            component: (
                                <YouTubeMusicPlayer showNowPlaying={false} showYouTubeAttribution={false} showAddButton={false} />
                            ),
                            allowedRoles: ['Mother', 'ContentCreator', 'Partner', 'SupportStaff'],
                            order: 4,
                        },
                        {
                            component: (
                                <ThemeToggle />
                            ),
                            allowedRoles: ['Admin', 'Mother', 'ContentCreator', 'HealthProvider', 'Partner', 'Moderator', 'Expert', 'SupportStaff'],
                            order: 5,
                        },
                    ]}
                    alignNav="center"
                />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
                    <div className="mx-auto max-w-7xl">
                        <Outlet />
                    </div>
                </main>
                <OffCanvasDrawer position="right" notificationCount={1} />
            </div>

            {/* Mobile overlay - additional safety net */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-gray-900/50 lg:hidden"
                    onClick={closeMobileMenu}
                />
            )}
        </div>
    );
}