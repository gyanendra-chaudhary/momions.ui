import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Type helpers
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

// String helpers
export function truncate(str: string, length: number) {
    return str.length > length ? `${str.slice(0, length)}...` : str
}

// URL helpers
export function getUrlParams(url: string) {
    return Object.fromEntries(new URL(url).searchParams.entries())
}

// Date helpers
export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options,
    }).format(date)
}