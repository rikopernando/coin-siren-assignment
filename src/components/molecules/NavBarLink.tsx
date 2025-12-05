import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { NavigationItem } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface NavBarLinkProps {
  item: NavigationItem;
  className?: string;
}

export function NavBarLink({ item, className }: NavBarLinkProps) {
  // If item has children, render as dropdown
  if (item.children && item.children.length > 0) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="lg" className={cn('gap-1 text-white', className)}>
            {item.label}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {item.children.map((child, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link href={child.href || '#'} className="w-full cursor-pointer">
                {child.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Simple link without dropdown
  return (
    <Link href={item.href || '#'}>
      <Button variant="ghost" size="lg" className={className}>
        {item.label}
      </Button>
    </Link>
  );
}
