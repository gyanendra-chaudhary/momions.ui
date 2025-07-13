import { useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-lg">
                <div className="flex flex-col items-center">
                    <ExclamationTriangleIcon className="h-16 w-16 text-red-500" />
                    <h1 className="mt-4 text-5xl font-bold text-gray-900">404</h1>
                    <h2 className="mt-2 text-2xl font-medium text-gray-800">Page Not Found</h2>
                    <p className="mt-2 text-center text-gray-600">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                </div>

                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;