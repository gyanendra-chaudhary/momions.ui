import { UserIcon, AtSymbolIcon, LockClosedIcon, PhoneIcon, LanguageIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { GoogleIcon } from '@/components/icons/GoogleLogo'
import { Input } from '@/components/common/Input'
import { FileUpload } from '@/components/common/FileUpload'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import authService from '@/services/auth.service'
import api from '@/services/api'
import axios from 'axios'
import type { SubmitHandler } from 'react-hook-form'

// Schema definition
const schema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Must contain at least one number')
        .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character'),
    confirmPassword: z.string(),
    preferredLanguage: z.string(),
    roleID: z.number(),
    photo: z
        .any()
        .refine((file) => !file || file instanceof File, {
            message: 'Invalid file type',
        })
        .optional()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
})

type FormData = z.infer<typeof schema>

export default function RegisterPage() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            preferredLanguage: 'en',
            roleID: 2
        }
    })

    const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const formData = new FormData()
            formData.append('Email', data.email)
            formData.append('Password', data.password)
            formData.append('ConfirmPassword', data.confirmPassword)
            formData.append('FirstName', data.firstName)
            formData.append('LastName', data.lastName)
            formData.append('PhoneNumber', data.phoneNumber)
            formData.append('PreferredLanguage', data.preferredLanguage)
            formData.append('RoleID', data.roleID.toString())

            if (data.photo) {
                formData.append('Photo', data.photo)
            }

            await api.post('/user/register-user', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })

            toast.success('Registration successful! Please login.')
            window.setTimeout(() => {
                navigate('/register-success', {
                    state: { username: data.firstName + " " + data.lastName }
                })
            }, 2000)
        } catch (err: unknown) {
            let errorMessage = 'Registration failed. Please try again.'

            if (axios.isAxiosError(err)) {
                errorMessage = err.response?.data?.message || errorMessage
            } else if (err instanceof Error) {
                errorMessage += ` ${err.message}`
            } else if (typeof err === 'string') {
                errorMessage += ` ${err}`
            }

            toast.error(errorMessage)
        }
    }

    const handleFileChange = (files: File[]) => {
        if (files.length > 0) {
            setValue('photo', files[0])
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await authService.loginWithGoogle()
        } catch (err: unknown) {
            let errorMessage = 'Google login failed. Please try again.'

            if (err instanceof Error) {
                errorMessage += ` ${err.message}`
            } else if (typeof err === 'string') {
                errorMessage += ` ${err}`
            } else {
                errorMessage += ' An unexpected error occurred.'
            }

            toast.error(errorMessage)
        }
    }

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Card className="max-w-md w-full">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Create a new account</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Or{' '}
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            sign in to your existing account
                        </button>
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
                        <FileUpload
                            onFileChange={handleFileChange}
                            accept="image/*"
                            maxSizeMB={10}
                            multiple={false}
                            avatarMode={true}
                            shape="circle"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="First name"
                            id="firstName"
                            type="text"
                            placeholder="John"
                            icon={<UserIcon className="h-5 w-5 text-gray-400" />}
                            error={errors.firstName?.message}
                            {...register('firstName')}
                            disabled={isSubmitting}
                        />
                        <Input
                            label="Last name"
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            icon={<UserIcon className="h-5 w-5 text-gray-400" />}
                            error={errors.lastName?.message}
                            {...register('lastName')}
                            disabled={isSubmitting}
                        />
                    </div>

                    <Input
                        label="Email address"
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        icon={<AtSymbolIcon className="h-5 w-5 text-gray-400" />}
                        error={errors.email?.message}
                        {...register('email')}
                        disabled={isSubmitting}
                    />

                    <Input
                        label="Phone number"
                        id="phoneNumber"
                        type="tel"
                        placeholder="+1234567890"
                        icon={<PhoneIcon className="h-5 w-5 text-gray-400" />}
                        error={errors.phoneNumber?.message}
                        {...register('phoneNumber')}
                        disabled={isSubmitting}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Password"
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
                            error={errors.password?.message}
                            {...register('password')}
                            disabled={isSubmitting}
                        />
                        <Input
                            label="Confirm password"
                            id="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
                            error={errors.confirmPassword?.message}
                            {...register('confirmPassword')}
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Preferred language"
                            id="preferredLanguage"
                            type="text"
                            placeholder="en"
                            icon={<LanguageIcon className="h-5 w-5 text-gray-400" />}
                            error={errors.preferredLanguage?.message}
                            {...register('preferredLanguage')}
                            disabled={isSubmitting}
                        />
                        <input
                            type="hidden"
                            value={2}
                            {...register('roleID', { valueAsNumber: true })}
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        loading={isSubmitting}
                    >
                        Create account
                    </Button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or sign up with</span>
                        </div>
                    </div>

                    <Button
                        variant="secondary"
                        className="w-full flex items-center justify-center mt-6"
                        onClick={handleGoogleLogin}
                        disabled={isSubmitting}
                    >
                        <GoogleIcon className="h-5 w-5 mr-2" />
                        Continue with Google
                    </Button>
                </div>
            </Card>
        </div>
    )
}
