'use client';

import { Heading1, Heading3 } from '@/components/atoms/Typography';
import { ProfileCarousel } from '@/components/molecules/ProfileCarousel';
import { FeatureCard } from '@/components/molecules/FeatureCard';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { Button } from '@/components/ui/button';
import { LandingPageData } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface HeroSectionProps {
  data: LandingPageData;
  className?: string;
}

export function HeroSection({ data, className }: HeroSectionProps) {
  return (
    <section className={cn('container mx-auto px-6 py-20 md:py-32 lg:px-8', className)}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <Heading1 className="text-white font-bold !leading-[58px]">
            {data.hero.headline.split('\n').map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </Heading1>

          <Heading3 className="text-white">
            {data.hero.subheadline.split('\n').map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </Heading3>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" variant="link" className="p-0 text-[18px] text-white">
              {data.hero.ctaText}
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {data.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Right Column - Profile Carousel */}
        <div className="flex items-center justify-start">
          <ProfileCarousel profiles={data.hero.profileCards || [data.hero.profileCard]} className="w-full" />
        </div>
      </div>

      <div className="mt-12 inline-flex overflow-hidden gap-3">
        {data.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
