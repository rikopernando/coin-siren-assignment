'use client';

import { Menu } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { NavBarLink } from '@/components/molecules/NavBarLink';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HeaderData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useScrollDetection } from '@/hooks';
import { SIZES } from '@/lib/constants';

export interface HeaderProps {
  data: HeaderData;
  className?: string;
}

export function Header({ data, className }: HeaderProps) {
  const isScrolled = useScrollDetection();

  return (
    <header
      className={cn(
        'sticky top-0 z-[999] transition-all duration-300',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
        className,
      )}>
      <div className="container mx-auto flex py-2.5 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo variant={isScrolled ? 'light' : 'dark'} {...SIZES.LOGO.MOBILE} />
        </div>

        {/* Navigation - centered - Desktop only */}
        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {data.navigationItems.map((item, index) => (
            <NavBarLink key={index} item={item} isScrolled={isScrolled} />
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex flex-shrink-0">
          <Button variant={isScrolled ? 'secondary' : 'default'} size="lg">
            {data.ctaButtonText}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn('transition-colors', isScrolled ? 'text-primary-foreground' : 'text-white')}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="z-[9999]">
            <nav className="flex flex-col gap-4 mt-8">
              {data.navigationItems.map((item, index) => (
                <NavBarLink key={index} item={item} isScrolled={true} className="justify-start" />
              ))}
              <Button variant="secondary" size="lg" className="mt-4">
                {data.ctaButtonText}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
