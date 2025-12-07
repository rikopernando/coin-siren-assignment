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
          'shadow-none group cursor-pointer rounded-xl p-4 transition-all hover:border-primary hover:shadow-lg bg-white',
          className,
        )}>
        <CardContent className="flex flex-col gap-4 p-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <Image width={24} height={24} src={`/icons/${card.iconName}`} alt={card.title} />
          </div>
          <Small className="text-footer-text-primary">{card.title}</Small>
          <div className="flex items-center gap-2">
            <Small className="text-footer-text-secondary">바로가기</Small>
            <Image
              className="transition-transform group-hover:translate-x-1"
              width={20}
              height={20}
              src="/icons/icon-arrow-right-square.webp"
              alt="바로가기"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
