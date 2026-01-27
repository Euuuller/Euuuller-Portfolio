import { useState, useEffect } from 'react';
import { debounce } from '../utils/performance';

/**
 * Custom hook for responsive media queries with debouncing
 * @param query - CSS media query string (e.g., '(max-width: 768px)')
 * @param debounceMs - Debounce delay in milliseconds (default: 150ms)
 * @returns boolean indicating if the media query matches
 */
export const useMediaQuery = (query: string, debounceMs: number = 150): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Create debounced handler
    const handler = debounce(() => setMatches(media.matches), debounceMs);

    // Use modern API if available, fallback to deprecated one
    if (media.addEventListener) {
      media.addEventListener('change', handler);
      return () => media.removeEventListener('change', handler);
    } else {
      // @ts-ignore - Fallback for older browsers
      media.addListener(handler);
      // @ts-ignore
      return () => media.removeListener(handler);
    }
  }, [query, debounceMs]);

  return matches;
};

/**
 * Predefined breakpoint hooks for common use cases
 */
export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
export const useIsTablet = () => useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1025px)');
export const usePrefersDarkMode = () => useMediaQuery('(prefers-color-scheme: dark)');
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');
