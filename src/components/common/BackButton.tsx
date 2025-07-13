import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

interface BackButtonProps {
  className?: string
  text?: string
}

export const BackButton = ({ className, text = 'Back' }: BackButtonProps) => {
  const navigate = useNavigate()
  return (
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className={cn('group', className)}
      icon={<ArrowLeftIcon className="h-5 w-5" />}
    >
      {text}
    </Button>
  )
}