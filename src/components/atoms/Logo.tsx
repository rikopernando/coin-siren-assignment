import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface LogoProps {
  className?: string;
  href?: string;
}

export function Logo({ className, href = '/' }: LogoProps) {
  return (
    <Link href={href} className={cn('flex items-center gap-2 font-bold text-xl', className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <span className="text-sm font-bold">CS</span>
      </div>
      <span className="text-foreground">Coin Siren</span>
    </Link>
  );
}
