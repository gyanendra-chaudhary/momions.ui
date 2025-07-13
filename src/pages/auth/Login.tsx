import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'
import { Checkbox } from '@/components/common/Checkbox'
import { Input } from '@/components/common/Input'
import { GoogleIcon } from '@/components/icons/GoogleLogo'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    remember: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>

export default function LoginPage() {
    const { login, loginWithGoogle, isAuthenticated, isLoading } = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated, navigate])

    const handleFormSubmit = async (data: FormData) => {
        try {
            await login(data.email, data.password)
            toast.success('Login successful!')
        } catch (err: unknown) {
            let errorMessage = 'Login failed. Please try again.';

            if (err instanceof Error) {
                errorMessage += ` ${err.message}`;
            } else if (typeof err === 'string') {
                errorMessage += ` ${err}`;
            } else {
                errorMessage += ' An unexpected error occurred.';
            }

            toast.error(errorMessage);
        }

    }

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle()
        } catch (err: unknown) {
            let errorMessage = 'Google login failed. Please try again.';

            if (err instanceof Error) {
                errorMessage += ` ${err.message}`;
            } else if (typeof err === 'string') {
                errorMessage += ` ${err}`;
            } else {
                errorMessage += ' An unexpected error occurred.';
            }

            toast.error(errorMessage);
        }
    }

    const handleForgotPassword = () => {
        navigate('/forgot-password') // or your forgot password route
    }

    const handleRegister = () => {
        navigate('/register') // or your register route
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Card className="max-w-md w-full">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Or{' '}
                        <button
                            type="button"
                            onClick={handleRegister}
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            create a new account
                        </button>
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-6 space-y-6">
                    <Input
                        label="Email address"
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        icon={<AtSymbolIcon className="h-5 w-5 text-gray-400" />}
                        error={errors.email?.message}
                        {...register('email')}
                        disabled={isLoading}
                    />

                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
                        error={errors.password?.message}
                        {...register('password')}
                        disabled={isLoading}
                    />

                    <div className="flex items-center justify-between">
                        <Checkbox
                            id="remember"
                            label="Remember me"
                            {...register('remember')}
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-sm font-medium text-blue-600 hover:text-blue-500"
                            disabled={isLoading}
                        >
                            Forgot password?
                        </button>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        loading={isLoading}
                    >
                        Sign in
                    </Button>
                </form>

                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                </div>

                <div className="mt-6">
                    <Button
                        variant="secondary"
                        className="w-full flex items-center justify-center"
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                    >
                        <GoogleIcon className="h-5 w-5 mr-2" />
                        Sign in with Google
                    </Button>
                </div>
            </Card>
        </div>
    )
}