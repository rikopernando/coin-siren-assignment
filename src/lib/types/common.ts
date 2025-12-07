/**
 * Common utility types used across the application
 */

// Size type for consistent dimensions
export interface Size {
  width: number;
  height: number;
}

// Animation timing types
export type AnimationDuration = 'fast' | 'normal' | 'slow';

// Component size variants
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';

// Responsive breakpoint keys
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Z-index levels for consistent layering
export type ZIndexLevel = 'base' | 'dropdown' | 'sticky' | 'header' | 'modal' | 'sheet' | 'tooltip';

// Generic key-value map type
export type KeyValueMap<T = string> = Record<string, T>;

// Readonly deep partial type
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
