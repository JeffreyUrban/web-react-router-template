/**
 * Centralized image registry with type-safe imports
 *
 * Note: SVGs are imported as-is since they're already vector graphics.
 * For raster images (PNG, JPG), you can use vite-imagetools query parameters.
 * Example: import photo from '~/assets/images/photo.jpg?w=400;800;1200&format=webp'
 *
 * Add your own images here and import them in your components
 */

// Placeholder image - SVGs are imported directly (no vite-imagetools needed)
import placeholder from '~/assets/images/placeholder.svg';

// Export organized by category
export const examples = {
  placeholder,
};
