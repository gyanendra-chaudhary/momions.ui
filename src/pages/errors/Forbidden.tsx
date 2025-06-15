import { ExclamationTriangleIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/common/Button'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/common/Card'

const Forbidden = () => {
    const navigate = useNavigate()

    return (
        <Card className="max-w-md mx-auto mt-12">
            <div className="text-center">
                <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
                    </div>
                </div>
                <h1 className="mt-4 text-3xl font-bold text-gray-900">403 - Forbidden</h1>
                <p className="mt-4 text-gray-600">
                    You don't have permission to access this resource.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    Please contact your administrator if you believe this is an error.
                </p>
                <div className="mt-6">
                    <Button
                        variant="primary"
                        onClick={() => navigate(-1)}
                        icon={<ArrowLeftIcon className="h-5 w-5" />}
                    >
                        Go back
                    </Button>
                </div>
                <div className="mt-4">
                    <Button variant="ghost" onClick={() => navigate('/')}>
                        Return home
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default Forbidden;