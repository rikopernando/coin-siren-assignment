'use client';

import { FooterCard } from '@/components/molecules/FooterCard';
import { FooterData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Small, Muted } from '@/components/atoms/Typography';
import { Logo } from '@/components/atoms/Logo';

export interface FooterProps {
  data: FooterData;
  className?: string;
}

export function Footer({ data, className }: FooterProps) {
  return (
    <footer className={cn('bg-footer py-12 sm:py-16', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Top Section: Logo, Description, Contact & Cards */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr,2fr]">
          {/* Left: Logo & Contact Info */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <Logo width={150} height={28} variant="light" className="sm:w-[187px] sm:h-[34px]" />
            <Small className="max-w-full sm:max-w-[240px] text-footer-text-primary text-sm">{data.description}</Small>
            <div className="flex flex-col gap-1 text-sm">
              <Muted className="text-footer-text-secondary">{data.phone}</Muted>
              <Muted className="text-footer-text-secondary">{data.email}</Muted>
            </div>
          </div>

          {/* Right: Footer Cards Grid */}
          <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
            {data.cards.map((card) => (
              <FooterCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr,2fr]">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Small className="text-footer-text-primary text-xs sm:text-sm">상호명</Small>
              <Muted className="text-footer-text-secondary text-xs sm:text-sm">{data.companyInfo.name}</Muted>
              <Muted className="text-footer-text-secondary text-xs sm:text-sm">{data.indiaInfo.name}</Muted>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Small className="text-footer-text-primary text-xs sm:text-sm">대표 CEO</Small>
              <Muted className="text-footer-text-secondary text-xs sm:text-sm">{data.companyInfo.ceo}</Muted>
              <Muted className="text-footer-text-secondary text-xs sm:text-sm">{data.indiaInfo.ceo}</Muted>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1.5 sm:space-y-2 col-span-1">
              <Small className="text-footer-text-primary text-xs sm:text-sm">사업자등록번호 CIN</Small>
              <Muted className="text-footer-text-secondary text-xs sm:text-sm">
                {data.companyInfo.registrationNumber}
              </Muted>
              <Muted className="text-footer-text-secondary text-xs sm:text-sm">
                {data.indiaInfo.registrationNumber}
              </Muted>
            </div>
            <div className="space-y-1.5 sm:space-y-2 col-span-1 sm:col-span-1 lg:col-span-3">
              <Small className="text-footer-text-primary text-xs sm:text-sm">주소 ADDRESS</Small>
              <Muted className="text-footer-text-secondary text-xs sm:text-sm">{data.companyInfo.address}</Muted>
              <Muted className="text-footer-text-secondary text-xs sm:text-sm max-w-full lg:max-w-[460px]">
                {data.indiaInfo.address}
              </Muted>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 sm:mt-12">
          <Muted className="text-footer-text-secondary text-xs sm:text-sm">{data.copyright}</Muted>
        </div>
      </div>
    </footer>
  );
}
