// import { Button } from '@/components/common/Button'
// import { Card } from '@/components/common/Card'
// import { EmptyState } from '@/components/common/EmptyState'
// import { EnvelopeIcon } from '@heroicons/react/20/solid'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import authService from '@/services/auth.service'
// import { useAuth } from '@/hooks/useAuth'

// export default function EmailVerificationPage() {
//     const [isLoading, setIsLoading] = useState(false)
//     const [email, setEmail] = useState('') // You might get this from auth store or location state
//     const navigate = useNavigate()
//     const { user } = useAuth()

//     // Initialize email - you might get this from location state or auth store
//     useEffect(() => {
//         if (user?.email) {
//             setEmail(user.email)
//         }
//         // Or from location state if coming from registration:
//         // const location = useLocation()
//         // setEmail(location.state?.email || '')
//     }, [user])

//     const handleResend = async () => {
//         setIsLoading(true)
//         try {
//             await authService.resendVerificationEmail(email)
//             toast.success('Verification email resent successfully!')
//         } catch (error) {
//             toast.error('Failed to resend verification email. Please try again.')
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     const handleChangeEmail = () => {
//         navigate('/update-email') // Adjust to your change email route
//     }

//     return (
//         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <Card className="max-w-md w-full">
//                 <EmptyState
//                     icon={<EnvelopeIcon className="h-12 w-12 text-blue-500" />}
//                     title="Verify your email"
//                     description={
//                         <>
//                             We've sent a verification link to{' '}
//                             <span className="font-medium">{email}</span>. Please check your
//                             inbox and click the link to verify your account.
//                         </>
//                     }
//                 />
//                 <div className="mt-6 space-y-4">
//                     <Button
//                         variant="primary"
//                         className="w-full"
//                         onClick={handleResend}
//                         loading={isLoading}
//                     >
//                         Resend verification email
//                     </Button>
//                     <Button
//                         variant="ghost"
//                         className="w-full"
//                         onClick={handleChangeEmail}
//                         disabled={isLoading}
//                     >
//                         Change email address
//                     </Button>
//                 </div>
//             </Card>
//         </div>
//     )
// }

import React from 'react'

export default function EmailVerification() {
    return (
        <div>EmailVerification</div>
    )
}
