import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'

interface ErrorPageProps {
  title?: string
  description?: string
  statusCode?: number
}

export const ErrorPage = ({
  title = 'Something went wrong',
  description = 'Sorry, we couldn’t complete your request. Please try again later.',
  statusCode = 500,
}: ErrorPageProps) => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="max-w-md space-y-4">
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">{statusCode}</h1>
        <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <div className="pt-4">
          <Button variant="primary" onClick={() => navigate('/')}>
            Go back home
          </Button>
        </div>
      </div>
    </div>
  )
}