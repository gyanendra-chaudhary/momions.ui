import React from 'react';
import { cn } from '@/lib/utils';

interface MedicalAlertBannerProps {
  className?: string;
  children?: React.ReactNode;
}

export const MedicalAlertBanner = ({ className, children }: MedicalAlertBannerProps) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};
