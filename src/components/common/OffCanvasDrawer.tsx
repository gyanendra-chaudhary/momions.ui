import { useState } from "react";
import {
    XMarkIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HeartIcon,
    VideoCameraIcon,
    PhoneIcon,
    ChatBubbleLeftIcon,
    ClockIcon,
    PlusIcon
} from "@heroicons/react/24/outline";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Separator } from "./Separator";

// Storage helper (simplified)
const useLocalStorage = (key: string, initialValue: boolean) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = (value: boolean) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
};

const quickConsultations = [
    {
        id: 1,
        title: "Women's Health Matters",
        description: "Talk to a Gynecologist—no clinic visit required",
        price: 349,
        waitTime: 7,
        icon: HeartIcon,
    },
    {
        id: 2,
        title: "Need quick advice?",
        description: "Chat with a certified Pediatrician in minutes",
        price: 299,
        waitTime: 5,
        icon: HeartIcon,
    },
];

function DrawerContent() {
    return (
        <div className="p-4 h-full overflow-y-auto">
            <div className="space-y-6">
                {/* Health Services Section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Quick Consultation
                    </h3>
                    <div className="space-y-3">
                        {quickConsultations.map((consultation) => (
                            <Card
                                key={consultation.id}
                                className="border-l-4 border-l-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <div className="p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                                            <consultation.icon className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                                                {consultation.title}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {consultation.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm mb-3">
                                        <span className="font-medium text-gray-900 dark:text-gray-100">
                                            Rs. {consultation.price} / session
                                        </span>
                                        <Badge className="gap-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                            <ClockIcon className="h-3 w-3" /> {consultation.waitTime} min wait
                                        </Badge>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-sm">
                                            <ChatBubbleLeftIcon className="h-4 w-4 mr-2" />
                                            Start Chat
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="w-full hover:bg-blue-50 dark:hover:bg-gray-700 text-sm"
                                        >
                                            <PhoneIcon className="h-4 w-4 mr-2" />
                                            Schedule Call
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <Separator className="bg-gray-200 dark:bg-gray-700" />

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        My Appointments
                    </h3>
                    <div>
                        <h4 className="text-base font-medium text-blue-600 dark:text-blue-400 mb-3">
                            Upcoming
                        </h4>
                        <div className="space-y-3">
                            {[
                                {
                                    id: 1,
                                    name: "Pediatric Video Call",
                                    doctor: "Dr. Shrestha",
                                    date: "Today",
                                },
                                {
                                    id: 2,
                                    name: "Radiologist Video Call",
                                    doctor: "Dr. Basnet",
                                    date: "Tomorrow",
                                },
                            ].map((item) => (
                                <Card
                                    key={item.id}
                                    className="border-l-4 border-l-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <div className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                                                <VideoCameraIcon className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">{item.doctor}</p>
                                            </div>
                                            <Badge className="flex items-center gap-1 shrink-0 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                                <ClockIcon className="h-3 w-3" /> {item.date}
                                            </Badge>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
                                            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                                                Join Call
                                            </Button>
                                            <Button variant="ghost" size="sm" className="w-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                                Reschedule
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        <Button
                            variant="ghost"
                            className="mt-3 w-full justify-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-700"
                        >
                            <PlusIcon className="h-4 w-4" /> Schedule New Appointment
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

interface OffCanvasDrawerProps {
    position?: DrawerPosition;
    notificationCount?: number;
    children?: React.ReactNode;
    title?: string;
}

export function OffCanvasDrawer({
    position = 'right',
    notificationCount = 0,
    children,
    title = "Quick Actions"
}: OffCanvasDrawerProps) {
    const [isOpen, setIsOpen] = useLocalStorage('drawer-open', false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    // Position classes
    const positionClasses = {
        left: {
            button: 'left-0 top-1/2 -translate-y-1/2 rounded-r-full',
            drawer: 'left-0 top-0 h-full w-80 transform transition-transform duration-300',
            open: 'translate-x-0',
            closed: '-translate-x-full',
            icon: isOpen ? <ChevronLeftIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />,
        },
        right: {
            button: 'right-0 top-1/2 -translate-y-1/2 rounded-l-full',
            drawer: 'right-0 top-0 h-full w-80 transform transition-transform duration-300',
            open: 'translate-x-0',
            closed: 'translate-x-full',
            icon: isOpen ? <ChevronRightIcon className="h-5 w-5" /> : <ChevronLeftIcon className="h-5 w-5" />,
        },
        top: {
            button: 'top-0 left-1/2 -translate-x-1/2 rounded-b-full',
            drawer: 'top-0 left-0 w-full h-64 transform transition-transform duration-300',
            open: 'translate-y-0',
            closed: '-translate-y-full',
            icon: isOpen ? <ChevronLeftIcon className="h-5 w-5 rotate-90" /> : <ChevronRightIcon className="h-5 w-5 rotate-90" />,
        },
        bottom: {
            button: 'bottom-0 left-1/2 -translate-x-1/2 rounded-t-full',
            drawer: 'bottom-0 left-0 w-full h-64 transform transition-transform duration-300',
            open: 'translate-y-0',
            closed: 'translate-y-full',
            icon: isOpen ? <ChevronRightIcon className="h-5 w-5 rotate-90" /> : <ChevronLeftIcon className="h-5 w-5 rotate-90" />,
        },
    };

    const currentPosition = positionClasses[position];

    return (
        <div className="relative">
            {/* Toggle Button */}
            <div className={`fixed z-50 ${currentPosition.button}`}>
                <div className="relative">
                    <Button
                        onClick={toggleDrawer}
                        variant="ghost"
                        size="md"
                        className={`
                            bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 
                            text-white shadow-lg 
                            transition-all duration-300 h-12 w-12
                            ${notificationCount > 0 && !isOpen ? 'animate-pulse' : ''}
                        `}
                        aria-label={isOpen ? 'Close drawer' : 'Open drawer'}
                    >
                        {currentPosition.icon}
                    </Button>

                    {/* Notification Badge */}
                    {notificationCount > 0 && !isOpen && (
                        <div className="absolute -top-1 -right-1 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-400 dark:bg-red-500 rounded-full animate-ping opacity-75"></div>
                                <Badge className="relative bg-red-500 dark:bg-red-600 text-white rounded-full min-w-5 h-5 flex items-center justify-center text-xs font-bold shadow-lg">
                                    {notificationCount > 99 ? '99+' : notificationCount}
                                </Badge>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-40 z-40"
                    onClick={toggleDrawer}
                />
            )}

            {/* Drawer */}
            <div className={`
                fixed z-50 bg-black bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700
                ${currentPosition.drawer}
                ${isOpen ? currentPosition.open : currentPosition.closed}
            `}>
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {title}
                    </h2>
                    <button
                        onClick={toggleDrawer}
                        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        aria-label="Close drawer"
                    >
                        <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </button>
                </div>

                {/* Drawer Content */}
                <div className="py-2 px-1 overflow-y-auto h-full">
                    {children || <DrawerContent />}
                </div>
            </div>
        </div>
    );
}