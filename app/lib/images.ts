/**
 * Centralized image registry with type-safe imports
 * All vite-imagetools imports are handled here to avoid TypeScript issues
 *
 * Add your own images here and import them in your components
 */

import type { ImageOutput } from './imagetools';

// Placeholder image demonstrating vite-imagetools
// @ts-expect-error - Vite imagetools query parameters not recognized by TypeScript module resolution
import placeholderImg from '~/assets/images/placeholder.svg?w=400;800;1200&format=webp&as=picture';

// Export organized by category with proper types
export const examples = {
  placeholder: placeholderImg as ImageOutput[],
};
