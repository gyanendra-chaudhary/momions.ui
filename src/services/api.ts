import { ErrorResponse } from '@/types/Auth.interface';
import axios from 'axios';

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL || 'https://admin-momions.runasp.net/api',
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:44323/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
     * Handle API errors
     */
export function handleApiError(error: unknown, defaultMessage: string): ErrorResponse {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.message || defaultMessage,
      status: error.response?.status ?? 0,
      data: error.response?.data,
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: defaultMessage };
}
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
  statusCode?: number;
  totalCount?: number;
  pageSize?: number;
  currentPage?: number;
  totalPages?: number;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export default api;