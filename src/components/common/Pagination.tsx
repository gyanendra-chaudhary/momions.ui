import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      let startPage = Math.max(1, currentPage - 2)
      let endPage = Math.min(totalPages, currentPage + 2)

      if (currentPage <= 3) {
        endPage = maxVisiblePages
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxVisiblePages + 1
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      if (startPage > 1) {
        if (startPage > 2) {
          pages.unshift('...')
        }
        pages.unshift(1)
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('...')
        }
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div
      className={cn(
        'flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6',
        className
      )}
    >
      <div className="flex flex-1 items-center justify-between">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={cn(
            'relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium',
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          )}
        >
          <ChevronLeftIcon className="h-5 w-5" />
          Previous
        </button>
        <div className="hidden sm:flex sm:space-x-2">
          {getPageNumbers().map((page, index) =>
            page === '...' ? (
              <span
                key={`ellipsis-${index}`}
                className="px-4 py-2 text-sm font-medium text-gray-700"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={cn(
                  'relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium',
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                )}
              >
                {page}
              </button>
            )
          )}
        </div>
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={cn(
            'relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium',
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          )}
        >
          Next
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}