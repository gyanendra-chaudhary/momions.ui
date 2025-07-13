import React from 'react'
import { cn } from '@/lib/utils'
import { ToastContainer, toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProps {
  position?:
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
  autoClose?: number
  className?: string
}

export const Toast = ({
  position = 'top-right',
  autoClose = 5000,
  className,
}: ToastProps) => {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className={className}
      toastClassName={cn(
        'relative flex p-4 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer shadow-lg',
        'bg-white text-gray-800 text-sm font-medium'
      )}
    />
  )
}

export const showToast = (
  message: string,
  type: 'success' | 'error' | 'warning' | 'info' = 'info',
  options?: ToastOptions
) => {
  switch (type) {
    case 'success':
      toast.success(message, options)
      break
    case 'error':
      toast.error(message, options)
      break
    case 'warning':
      toast.warning(message, options)
      break
    default:
      toast(message, options)
  }
}
