import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface LogoProps {
  className?: string;
  href?: string;
  width?: number;
  height?: number;
  variant?: 'light' | 'dark';
}

export function Logo({ className, href = '/', variant = 'dark', height = 21, width = 114 }: LogoProps) {
  return (
    <Link href={href} className={cn('flex items-center gap-2 font-bold text-xl', className)}>
      <Image
        width={width}
        height={height}
        src={variant === 'dark' ? '/images/dark-logo.webp' : '/images/light-logo.webp'}
        alt="Logo"
      />
    </Link>
  );
}
