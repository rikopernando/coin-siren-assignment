'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { ProfileCard as ProfileCardType } from '@/lib/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { ProfileCard } from './ProfileCard';

export interface ProfileCarouselProps {
  profiles: ProfileCardType[];
  className?: string;
}

export function ProfileCarousel({ profiles, className }: ProfileCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn('relative w-full max-w-md mx-auto', className)}>
      {/* Carousel Container - stacked cards */}
      <div className="relative h-[450px]">
        <div ref={emblaRef} className="overflow-visible h-full">
          <div className="flex h-full items-center">
            {profiles.map((profile, index) => {
              const isActive = selectedIndex === index;
              const isPrev = selectedIndex === index + 1 || (selectedIndex === 0 && index === profiles.length - 1);
              const isNext = selectedIndex === index - 1 || (selectedIndex === profiles.length - 1 && index === 0);

              return (
                <div
                  key={index}
                  className={cn(
                    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out',
                    // Active card - centered, full size, on top
                    isActive && 'z-30 scale-100 translate-x-[-50%] opacity-100',
                    // Previous card - left side, half hidden under active card
                    isPrev && 'z-10 scale-x-95 scale-y-90 translate-x-[-92%] opacity-80',
                    // Next card - right side, half hidden under active card
                    isNext && 'z-10 scale-x-95 scale-y-90 translate-x-[-4%] opacity-80',
                    // Other cards - completely hidden
                    !isActive && !isPrev && !isNext && 'z-0 scale-75 translate-x-[-50%] opacity-0 pointer-events-none',
                  )}>
                  <ProfileCard profile={profile} className="w-[292px] shadow-2xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-20 top-1/2 -translate-y-1/2 z-40 rounded-full bg-background/80 backdrop-blur hover:bg-background"
        onClick={scrollPrev}>
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-20 top-1/2 -translate-y-1/2 z-40 rounded-full bg-background/80 backdrop-blur hover:bg-background"
        onClick={scrollNext}>
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {profiles.map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              selectedIndex === index ? 'w-8 bg-primary' : 'bg-muted-foreground/30',
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
