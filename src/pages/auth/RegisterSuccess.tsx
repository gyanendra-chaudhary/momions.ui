import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface LocationState {
    username?: string
}

const RegisterSuccess = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [countdown, setCountdown] = useState(3)

    // Read from location.state
    const state = location.state as LocationState
    const userName = state?.username || null

    useEffect(() => {
        const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000)
        const redirectTimer = setTimeout(() => navigate('/login'), 3000)

        return () => {
            clearInterval(timer)
            clearTimeout(redirectTimer)
        }
    }, [navigate])

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-green-50 px-4">
            <div className="text-center">
                <div className="flex justify-center mb-6 animate-pulse">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 shadow-md">
                        <CheckCircleIcon className="h-8 w-8 text-green-600" />
                    </div>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                    Register Successful!
                </h1>
                {userName && (
                    <p className="text-lg text-gray-700 font-medium">
                        Welcome, <span className="text-blue-600">{userName}</span> 🎉
                    </p>
                )}
                <p className="mt-2 text-gray-600">
                    Redirecting to the login page in{' '}
                    <span className="font-semibold text-gray-800">{countdown}</span>{' '}
                    second{countdown !== 1 ? 's' : ''}...
                </p>
                <div className="mt-6">
                    <button
                        onClick={() => navigate('/login')}
                        className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow"
                    >
                        Go now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterSuccess
