import { Logo } from '@/components/atoms/Logo';
import { NavBarLink } from '@/components/molecules/NavBarLink';
import { Button } from '@/components/ui/button';
import { HeaderData } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface HeaderProps {
  data: HeaderData;
  className?: string;
}

export function Header({ data, className }: HeaderProps) {
  return (
    <header className={cn('border-b bg-background', className)}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {data.navigationItems.map((item, index) => (
            <NavBarLink key={index} item={item} />
          ))}
        </nav>

        {/* CTA Button */}
        <Button>{data.ctaButtonText}</Button>
      </div>
    </header>
  );
}
