'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heading1, Heading3 } from '@/components/atoms/Typography';
import { ProfileCarousel } from '@/components/molecules/ProfileCarousel';
import { FeatureCard } from '@/components/molecules/FeatureCard';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { Button } from '@/components/ui/button';
import { LandingPageData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { fadeInUpVariants, fadeInVariants } from '@/lib/animations';

export interface HeroSectionProps {
  data: LandingPageData;
  className?: string;
}

export function HeroSection({ data, className }: HeroSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const headlineInView = useInView(headlineRef, { once: true });
  const subheadlineInView = useInView(subheadlineRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });

  // Auto-scroll services every 5 seconds
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const firstCard = container.querySelector('[data-service-card]');
      if (!firstCard) return;

      const cardWidth = firstCard.clientWidth;
      const gap = 16; // gap-4 = 16px
      const scrollAmount = cardWidth + gap;

      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Check if we're at or near the end
      if (currentScroll >= maxScroll - 10) {
        // Reset to start
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // Scroll to next card
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className={cn('py-20 md:py-40', className)}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.div
              ref={headlineRef}
              initial="hidden"
              animate={headlineInView ? 'visible' : 'hidden'}
              variants={fadeInUpVariants}>
              <Heading1 id="hero-headline" className="text-white font-bold !leading-[58px]">
                {data.hero.headline.split('\n').map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </Heading1>
            </motion.div>

            <motion.div
              ref={subheadlineRef}
              initial="hidden"
              animate={subheadlineInView ? 'visible' : 'hidden'}
              variants={fadeInUpVariants}>
              <Heading3 id="hero-subheadline" className="text-white">
                {data.hero.subheadline.split('\n').map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </Heading3>

              <div id="hero-cta" className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" variant="link" className="p-0 text-[18px] text-white">
                  {data.hero.ctaText}
                </Button>
              </div>
            </motion.div>

            <motion.div
              ref={featuresRef}
              id="feature-card-wrapper"
              className="!mt-12 grid gap-16 md:grid-cols-3"
              initial="hidden"
              animate={featuresInView ? 'visible' : 'hidden'}
              variants={fadeInVariants}>
              {data.features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Carousel */}
          <div className="-mt-20 flex items-center justify-start">
            <ProfileCarousel profiles={data.hero.profileCards || [data.hero.profileCard]} className="w-full" />
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Services */}
      <motion.div
        ref={servicesRef}
        id="service-card-wrapper"
        className="mt-12 w-full"
        initial="hidden"
        animate={servicesInView ? 'visible' : 'hidden'}
        variants={fadeInVariants}>
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
          <div className="mx-auto max-w-7xl">
            <div className="inline-flex gap-4 px-6 lg:px-8 pb-4">
              {data.services.map((service) => (
                <ServiceCard key={service.id} service={service} className="flex-shrink-0" data-service-card />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
