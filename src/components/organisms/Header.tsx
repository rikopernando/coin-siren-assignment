'use client';

import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
        className,
      )}>
      <div className="container mx-auto flex py-2.5 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo variant={isScrolled ? 'light' : 'dark'} />
        </div>

        {/* Navigation - centered */}
        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {data.navigationItems.map((item, index) => (
            <NavBarLink key={index} item={item} isScrolled={isScrolled} />
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <Button variant={isScrolled ? 'secondary' : 'default'} size="lg">
            {data.ctaButtonText}
          </Button>
        </div>
      </div>
    </header>
  );
}
