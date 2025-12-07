import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { FooterCard as FooterCardType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Small } from '@/components/atoms/Typography';

export interface FooterCardProps {
  card: FooterCardType;
  className?: string;
}

export function FooterCard({ card, className }: FooterCardProps) {
  return (
    <Link href={card.link}>
      <Card
        className={cn(
          'shadow-none group cursor-pointer rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all hover:border-primary hover:shadow-lg bg-white',
          className,
        )}>
        <CardContent className="flex flex-col gap-2.5 sm:gap-4 p-0">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gray-100">
            <Image width={20} height={20} src={`/icons/${card.iconName}`} alt={card.title} className="sm:w-6 sm:h-6" />
          </div>
          <Small className="text-footer-text-primary text-xs sm:text-sm leading-tight">{card.title}</Small>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Small className="text-footer-text-secondary text-xs">바로가기</Small>
            <Image
              className="transition-transform group-hover:translate-x-1 w-4 h-4 sm:w-5 sm:h-5"
              width={16}
              height={16}
              src="/icons/icon-arrow-right-square.webp"
              alt="바로가기"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
