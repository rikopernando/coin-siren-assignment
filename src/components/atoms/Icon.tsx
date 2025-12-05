import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

export function Icon({ icon: IconComponent, className, size = 24 }: IconProps) {
  return <IconComponent className={cn('text-current', className)} size={size} />;
}
