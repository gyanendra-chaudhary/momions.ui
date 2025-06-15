// import { Button } from '@/components/common/Button'
// import { Card } from '@/components/common/Card'
// import { Input } from '@/components/common/Input'
// import { LockClosedIcon } from '@heroicons/react/20/solid'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'

// const schema = z
//     .object({
//         currentPassword: z.string().min(6, 'Password must be at least 6 characters'),
//         newPassword: z.string().min(6, 'Password must be at least 6 characters'),
//         confirmPassword: z.string(),
//     })
//     .refine((data) => data.newPassword === data.confirmPassword, {
//         message: "Passwords don't match",
//         path: ['confirmPassword'],
//     })

// type FormData = z.infer<typeof schema>

// export const PasswordChange = ({
//     onSubmit,
// }: {
//     onSubmit: (data: FormData) => void
// }) => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<FormData>({
//         resolver: zodResolver(schema),
//     })

//     return (
//         <Card className="max-w-md mx-auto">
//             <div className="text-center">
//                 <h2 className="text-2xl font-bold text-gray-900">Change password</h2>
//                 <p className="mt-2 text-sm text-gray-600">
//                     For security, please enter your current password and then your new
//                     password.
//                 </p>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
//                 <Input
//                     label="Current password"
//                     id="currentPassword"
//                     type="password"
//                     placeholder="••••••••"
//                     icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
//                     error={errors.currentPassword?.message}
//                     {...register('currentPassword')}
//                 />

//                 <Input
//                     label="New password"
//                     id="newPassword"
//                     type="password"
//                     placeholder="••••••••"
//                     icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
//                     error={errors.newPassword?.message}
//                     {...register('newPassword')}
//                 />

//                 <Input
//                     label="Confirm new password"
//                     id="confirmPassword"
//                     type="password"
//                     placeholder="••••••••"
//                     icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
//                     error={errors.confirmPassword?.message}
//                     {...register('confirmPassword')}
//                 />

//                 <Button type="submit" variant="primary" className="w-full">
//                     Change password
//                 </Button>
//             </form>
//         </Card>
//     )
// }

import React from 'react'

export default function PasswordChange() {
    return (
        <div>PasswordChange</div>
    )
}
