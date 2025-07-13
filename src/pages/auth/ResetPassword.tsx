// import { Button } from '@/components/common/Button'
// import { Card } from '@/components/common/Card'
// import { Input } from '@/components/common/Input'
// import { LockClosedIcon } from '@heroicons/react/20/solid'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { useNavigate, useParams } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import api from '@/services/api'
// import { useEffect } from 'react'

// const schema = z
//     .object({
//         password: z.string().min(6, 'Password must be at least 6 characters'),
//         confirmPassword: z.string(),
//     })
//     .refine((data) => data.password === data.confirmPassword, {
//         message: "Passwords don't match",
//         path: ['confirmPassword'],
//     })

// type FormData = z.infer<typeof schema>

// export default function ResetPasswordPage() {
//     const { token } = useParams<{ token: string }>()
//     const navigate = useNavigate()
//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm<FormData>({
//         resolver: zodResolver(schema),
//     })

//     useEffect(() => {
//         if (!token) {
//             toast.error('Invalid password reset link')
//             navigate('/forgot-password')
//         }
//     }, [token, navigate])

//     const handleFormSubmit = async (data: FormData) => {
//         try {
//             await api.post('/auth/reset-password', {
//                 token,
//                 newPassword: data.password
//             })

//             toast.success('Password reset successfully!')
//             navigate('/login')
//         } catch (error: any) {
//             toast.error(error.response?.data?.message || 'Password reset failed. Please try again.')
//         }
//     }

//     return (
//         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <Card className="max-w-md w-full">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-900">Reset your password</h2>
//                     <p className="mt-2 text-sm text-gray-600">
//                         Create a new password for your account.
//                     </p>
//                 </div>

//                 <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-8 space-y-6">
//                     <Input
//                         label="New password"
//                         id="password"
//                         type="password"
//                         placeholder="••••••••"
//                         icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
//                         error={errors.password?.message}
//                         {...register('password')}
//                         disabled={isSubmitting}
//                     />

//                     <Input
//                         label="Confirm new password"
//                         id="confirmPassword"
//                         type="password"
//                         placeholder="••••••••"
//                         icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
//                         error={errors.confirmPassword?.message}
//                         {...register('confirmPassword')}
//                         disabled={isSubmitting}
//                     />

//                     <Button
//                         type="submit"
//                         variant="primary"
//                         className="w-full"
//                         loading={isSubmitting}
//                     >
//                         Reset password
//                     </Button>
//                 </form>
//             </Card>
//         </div>
//     )
// }

import React from 'react'

export default function ResetPassword() {
    return (
        <div>ResetPassword</div>
    )
}
