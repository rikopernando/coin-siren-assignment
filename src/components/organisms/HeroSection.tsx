'use client';

import { Heading1, Heading2, Lead } from '@/components/atoms/Typography';
import { ProfileCard } from '@/components/molecules/ProfileCard';
import { Button } from '@/components/ui/button';
import { HeroSection as HeroSectionType } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface HeroSectionProps {
  data: HeroSectionType;
  className?: string;
}

export function HeroSection({ data, className }: HeroSectionProps) {
  return (
    <section className={cn('container mx-auto px-4 py-16 md:py-24', className)}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <Heading1 className="leading-tight">
            {data.headline.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </Heading1>

          <Lead className="text-muted-foreground">
            {data.subheadline.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.subheadline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </Lead>

          <div className="flex items-center gap-4">
            <Heading2 className="text-xl font-medium">{data.ctaText}</Heading2>
            <Button size="lg">개발자 채용하기</Button>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div className="flex items-center justify-center lg:justify-end">
          <ProfileCard profile={data.profileCard} className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
