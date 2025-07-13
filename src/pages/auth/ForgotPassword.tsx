// import { AtSymbolIcon } from '@heroicons/react/20/solid'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { Card } from '@/components/common/Card'
// import { Input } from '@/components/common/Input'
// import { Button } from '@/components/common/Button'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import authService from '@/services/auth.service'

// const schema = z.object({
//     email: z.string().email('Invalid email address'),
// })

// type FormData = z.infer<typeof schema>

// export default function ForgotPasswordPage() {
//     const navigate = useNavigate()
//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm<FormData>({
//         resolver: zodResolver(schema),
//     })

//     const handleSubmitForm = async (data: FormData) => {
//         try {
//             await authService.sendPasswordResetEmail(data.email)
//             toast.success('Password reset link sent to your email!')
//             navigate('/login') // Redirect to login after successful submission
//         } catch (error) {
//             toast.error('Failed to send reset link. Please try again.')
//         }
//     }

//     const handleBackToLogin = () => {
//         navigate('/login')
//     }

//     return (
//         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <Card className="max-w-md w-full">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-900">Forgot password?</h2>
//                     <p className="mt-2 text-sm text-gray-600">
//                         Enter your email and we'll send you a link to reset your password.
//                     </p>
//                 </div>

//                 <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-8 space-y-6">
//                     <Input
//                         label="Email address"
//                         id="email"
//                         type="email"
//                         placeholder="your@email.com"
//                         icon={<AtSymbolIcon className="h-5 w-5 text-gray-400" />}
//                         error={errors.email?.message}
//                         {...register('email')}
//                         disabled={isSubmitting}
//                     />

//                     <div className="space-y-3">
//                         <Button
//                             type="submit"
//                             variant="primary"
//                             className="w-full"
//                             loading={isSubmitting}
//                         >
//                             Send reset link
//                         </Button>
//                         <Button
//                             type="button"
//                             variant="ghost"
//                             className="w-full"
//                             onClick={handleBackToLogin}
//                             disabled={isSubmitting}
//                         >
//                             Back to login
//                         </Button>
//                     </div>
//                 </form>
//             </Card>
//         </div>
//     )
// }

import React from 'react'

export default function ForgotPassword() {
    return (
        <div>ForgotPassword</div>
    )
}
