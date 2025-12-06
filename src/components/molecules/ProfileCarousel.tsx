'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ProfileCard as ProfileCardType } from '@/lib/types';
import { ProfileCard } from './ProfileCard';

export interface ProfileCarouselProps {
  profiles: ProfileCardType[];
  className?: string;
}

export function ProfileCarousel({ profiles, className }: ProfileCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
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

  // Helper function to get relative position of a card
  const getCardPosition = (index: number) => {
    const diff = index - selectedIndex;
    const total = profiles.length;

    // Handle wrap-around for looping
    if (diff === -1 || diff === total - 1) {
      return -1; // Previous card
    } else if (diff === 1 || diff === 1 - total) {
      return 1; // Next card
    } else if (diff === 0) {
      return 0; // Active card
    }
    return null; // Hidden card
  };

  return (
    <div className={cn('relative w-full mx-auto', className)}>
      {/* Hidden Embla Container for state management */}
      <div className="sr-only" ref={emblaRef}>
        <div className="flex">
          {profiles.map((_, index) => (
            <div key={index} className="flex-[0_0_100%]" />
          ))}
        </div>
      </div>

      {/* Visual Carousel Container - stacked cards */}
      <div className="relative">
        <div className="relative h-full overflow-visible">
          <div className="flex h-full items-center justify-center">
            {profiles.map((profile, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              const isPrev = position === -1;
              const isNext = position === 1;

              return (
                <div
                  key={index}
                  className={cn(
                    'absolute left-1/2 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out',
                    // Active card - centered, full size, on top
                    isActive && 'z-30 scale-100 -translate-x-1/2 opacity-100',
                    // Previous card - left side, half hidden under active card
                    isPrev && 'z-10 scale-y-90 scale-x-100 -translate-x-[92%] opacity-85',
                    // Next card - right side, half hidden under active card
                    isNext && 'z-10 scale-y-90 scale-x-100 translate-x-[-4%] opacity-85',
                    // Other cards - completely hidden
                    position === null && 'z-0 scale-75 -translate-x-1/2 opacity-0 pointer-events-none',
                  )}>
                  <ProfileCard profile={profile} className="w-[292px] min-h-[400px] shadow-2xl" isActive={isActive} />
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
        className="absolute -left-[16px] top-1/2 -translate-y-1/2 z-40 border-0 text-white bg-transparent hover:text-primary-foreground rounded-full"
        onClick={scrollPrev}>
        <ChevronLeft className="!h-8 !w-8" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-[24px] top-1/2 -translate-y-1/2 z-40 border-0 text-white bg-transparent hover:text-primary-foreground rounded-full"
        onClick={scrollNext}>
        <ChevronRight className="!h-8 !w-8" />
      </Button>
    </div>
  );
}
