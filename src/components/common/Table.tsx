import React from 'react';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from './LoadingSpinner';

export interface Column<T> {
  key: string; // Changed from keyof T to string for more flexibility
  header: string;
  render?: (row: T) => React.ReactNode; // Simplified to receive entire row
  align?: 'left' | 'center' | 'right';
  width?: string;
  className?: string; // Added for cell customization
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  loading?: boolean;
  emptyState?: React.ReactNode;
  onRowClick?: (row: T) => void;
  rowClassName?: string | ((row: T) => string); // Added for row styling
  headerClassName?: string; // Added for header customization
}

export const Table = <T,>({
  columns,
  data,
  className,
  loading = false,
  emptyState,
  onRowClick,
  rowClassName,
  headerClassName,
}: TableProps<T>) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (data.length === 0) {
    return emptyState ? (
      <div className="flex justify-center p-8">
        {emptyState}
      </div>
    ) : (
      <div className="flex justify-center p-8 text-gray-500">
        No data available
      </div>
    );
  }

  const getRowClassName = (row: T) => {
    const baseClass = onRowClick ? 'cursor-pointer hover:bg-gray-50' : '';
    const additionalClass = typeof rowClassName === 'function'
      ? rowClassName(row)
      : rowClassName;
    return cn('group', baseClass, additionalClass);
  };

  return (
    <div className={cn('overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg', className)}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={cn('bg-gray-50', headerClassName)}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={cn(
                    'px-4 py-3 text-left text-sm font-semibold text-gray-900',
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right',
                    column.width && `w-[${column.width}]`,
                    column.className
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick?.(row)}
                className={getRowClassName(row)}
              >
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className={cn(
                      'px-4 py-4 text-sm text-gray-900',
                      column.align === 'center' && 'text-center',
                      column.align === 'right' && 'text-right',
                      column.className
                    )}
                  >
                    {column.render ? column.render(row) : (
                      <span className="text-gray-500">
                        {String(row[column.key as keyof T] ?? '—')}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
