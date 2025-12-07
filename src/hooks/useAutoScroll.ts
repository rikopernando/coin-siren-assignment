import { useEffect, RefObject } from 'react';
import { SCROLL_SETTINGS } from '@/lib/constants';

interface UseAutoScrollOptions {
  interval?: number;
  gap?: number;
  resetThreshold?: number;
}

/**
 * Custom hook to implement auto-scroll functionality for horizontal scrolling containers
 * @param containerRef - Reference to the scrollable container
 * @param options - Configuration options for auto-scroll behavior
 */
export function useAutoScroll(containerRef: RefObject<HTMLDivElement>, options: UseAutoScrollOptions = {}): void {
  const {
    interval = SCROLL_SETTINGS.AUTO_SCROLL_INTERVAL,
    gap = SCROLL_SETTINGS.AUTO_SCROLL_GAP,
    resetThreshold = SCROLL_SETTINGS.AUTO_SCROLL_RESET_THRESHOLD,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const firstCard = container.querySelector('[data-service-card]');
      if (!firstCard) return;

      const cardWidth = firstCard.clientWidth;
      const scrollAmount = cardWidth + gap;

      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Check if we're at or near the end
      if (currentScroll >= maxScroll - resetThreshold) {
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
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [containerRef, interval, gap, resetThreshold]);
}
