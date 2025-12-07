import { useState, useEffect } from 'react';
import { SCROLL_SETTINGS } from '@/lib/constants';

/**
 * Custom hook to detect if the page has been scrolled past a threshold
 * @param threshold - The scroll position threshold in pixels (default: 10)
 * @returns boolean indicating if scrolled past threshold
 */
export function useScrollDetection(threshold: number = SCROLL_SETTINGS.HEADER_SCROLL_THRESHOLD): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
