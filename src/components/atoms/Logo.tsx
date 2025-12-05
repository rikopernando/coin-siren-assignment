import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface LogoProps {
  className?: string;
  href?: string;
}

export function Logo({ className, href = '/' }: LogoProps) {
  return (
    <Link href={href} className={cn('flex items-center gap-2 font-bold text-xl', className)}>
      <Image width={114} height={21} src="/images/dark-logo.webp" alt="Logo" />
    </Link>
  );
}
