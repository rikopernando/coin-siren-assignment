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
    <header className={cn('sticky top-0 z-50', className)}>
      <div className="container mx-auto flex py-2.5 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navigation - centered */}
        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {data.navigationItems.map((item, index) => (
            <NavBarLink key={index} item={item} />
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <Button size="lg">{data.ctaButtonText}</Button>
        </div>
      </div>
    </header>
  );
}
