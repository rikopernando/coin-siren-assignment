/**
 * Application-wide constants
 */

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 300,
  NORMAL: 500,
  SLOW: 800,
  AUTO_SCROLL: 5000,
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Scroll Settings
export const SCROLL_SETTINGS = {
  HEADER_SCROLL_THRESHOLD: 10,
  AUTO_SCROLL_INTERVAL: 5000,
  AUTO_SCROLL_GAP: 16, // gap-4 = 16px
  AUTO_SCROLL_RESET_THRESHOLD: 10,
} as const;

// Component Sizes
export const SIZES = {
  LOGO: {
    DESKTOP: { width: 187, height: 34 },
    MOBILE: { width: 140, height: 26 },
    FOOTER_DESKTOP: { width: 187, height: 34 },
    FOOTER_MOBILE: { width: 150, height: 28 },
  },
  AVATAR: {
    DESKTOP: { width: 120, height: 120 },
    MOBILE: { width: 64, height: 64 },
  },
  ICON: {
    SMALL: { width: 20, height: 20 },
    MEDIUM: { width: 24, height: 24 },
    LARGE: { width: 32, height: 32 },
  },
  CARD: {
    PROFILE: { width: 292, minHeight: 400 },
    SERVICE_DESKTOP: { width: 332, height: 88 },
    SERVICE_MOBILE: { width: 280, height: 76 },
  },
} as const;

// Z-Index Scale
export const Z_INDEX = {
  BASE: 0,
  DROPDOWN: 10,
  STICKY: 50,
  HEADER: 999,
  MODAL: 1000,
  SHEET: 9999,
  TOOLTIP: 10000,
} as const;

// Timing
export const TIMING = {
  DEBOUNCE_DEFAULT: 300,
  THROTTLE_DEFAULT: 100,
  TOOLTIP_DELAY: 800,
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  API: {
    DATA: '/api/data',
    HEADER: '/api/data/header',
    HERO: '/api/data/hero',
    FEATURES: '/api/data/features',
    SERVICES: '/api/data/services',
  },
} as const;
