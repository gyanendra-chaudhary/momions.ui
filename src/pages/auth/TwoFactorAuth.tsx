// import { Button } from '@/components/common/Button'
// import { Card } from '@/components/common/Card'
// import { EmptyState } from '@/components/common/EmptyState'
// import { Input } from '@/components/common/Input'
// import { ShieldCheckIcon } from '@heroicons/react/20/solid'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import authService from '@/services/auth.service'
// import { useAuth } from '@/hooks/useAuth'

// export default function TwoFactorAuthPage() {
//     const [code, setCode] = useState('')
//     const [isLoading, setIsLoading] = useState(false)
//     const navigate = useNavigate()
//     const { user } = useAuth()

//     const handleVerify = async () => {
//         if (!code || code.length !== 6) {
//             toast.error('Please enter a valid 6-digit code')
//             return
//         }

//         setIsLoading(true)
//         try {
//             // Adjust this to match your actual 2FA verification endpoint
//             const response = await authService.verifyTwoFactorCode(code)

//             if (response.success) {
//                 toast.success('Verification successful!')
//                 navigate(user?.role === 'admin' ? '/admin/dashboard' : '/dashboard')
//             } else {
//                 toast.error(response.message || 'Verification failed')
//             }
//         } catch (error) {
//             toast.error('Invalid verification code. Please try again.')
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     const handleBackupCode = () => {
//         navigate('/two-factor/backup')
//     }

//     const handleRecovery = () => {
//         navigate('/two-factor/recovery')
//     }

//     return (
//         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <Card className="max-w-md w-full">
//                 <EmptyState
//                     icon={<ShieldCheckIcon className="h-12 w-12 text-blue-500" />}
//                     title="Two-factor authentication"
//                     description="Enter the 6-digit code from your authenticator app."
//                 />
//                 <div className="mt-6 space-y-4">
//                     <Input
//                         label="Verification code"
//                         id="code"
//                         type="text"
//                         placeholder="123456"
//                         value={code}
//                         onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
//                         maxLength={6}
//                         className="text-center tracking-widest text-xl"
//                         disabled={isLoading}
//                     />

//                     <Button
//                         variant="primary"
//                         className="w-full"
//                         onClick={handleVerify}
//                         loading={isLoading}
//                     >
//                         Verify
//                     </Button>

//                     <div className="text-center space-y-3">
//                         <button
//                             type="button"
//                             onClick={handleBackupCode}
//                             className="text-sm font-medium text-blue-600 hover:text-blue-500"
//                             disabled={isLoading}
//                         >
//                             Use backup code
//                         </button>
//                         <button
//                             type="button"
//                             onClick={handleRecovery}
//                             className="block text-sm font-medium text-blue-600 hover:text-blue-500"
//                             disabled={isLoading}
//                         >
//                             Can't access your authenticator?
//                         </button>
//                     </div>
//                 </div>
//             </Card>
//         </div>
//     )
// }

import React from 'react'

export default function TwoFactorAuth() {
    return (
        <div>TwoFactorAuth</div>
    )
}
