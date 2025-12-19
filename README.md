# React Router + Tailwind CSS Template

A production-ready template for building modern web applications with React Router 7, Tailwind CSS 4, TypeScript, and a comprehensive development toolchain.

## Features

- **React Router 7** - Latest version with file-based routing and automatic route discovery
- **Tailwind CSS 4** - Modern utility-first CSS framework with custom typography
- **TypeScript** - Full type safety across the application
- **Dark Mode** - Built-in theme support with smooth transitions
- **Image Optimization** - Automatic image processing with vite-imagetools
- **MDX Support** - Write content with markdown and React components
- **Testing** - Vitest setup with React Testing Library
- **Code Quality** - ESLint, Prettier, and pre-commit hooks
- **Responsive Design** - Beautiful layout that works on all devices

## Getting Started

### Prerequisites

- Node.js >= 24.0.0 (use nvm for version management)

### Installation

1. Clone or copy this template

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Lint code with ESLint
- `npm run typecheck` - Check TypeScript types

### Project Structure

```
.
├── app/
│   ├── assets/         # Static assets (images, etc.)
│   ├── components/     # Reusable React components
│   ├── config/         # Configuration files (feature flags, etc.)
│   ├── lib/            # Utility functions and helpers
│   ├── routes/         # File-based routing (add .tsx or .mdx files here)
│   ├── services/       # Business logic and data fetching (optional)
│   ├── styles/         # Global styles and CSS
│   ├── root.tsx        # Root component with layout
│   └── routes.ts       # Route configuration with auto-discovery
├── public/             # Static files served as-is
└── ...config files
```

### Adding New Pages

#### Option 1: TypeScript/TSX Pages

Create a new file in `app/routes/`:

```tsx
// app/routes/about.tsx
import { Container } from '~/components/Container'

export default function About() {
  return (
    <Container className="mt-9">
      <h1 className="text-4xl font-bold">About Page</h1>
      <p className="mt-6 text-base">Your content here</p>
    </Container>
  )
}
```

The route will automatically be available at `/about`.

#### Option 2: MDX Pages

Create a new MDX file in `app/routes/`:

```mdx
// app/routes/blog.mdx
---
title: My Blog
description: A blog post written in MDX
date: 2024-01-01
---

# My Blog

Content with **markdown** and React components!
```

### Feature Flags

Enable/disable sections using feature flags in `app/config/featureFlags.ts`:

```typescript
const featureFlags = {
    showArticles: true,    // Show articles section
    showProjects: true,    // Show projects section
    // ... add your own flags
};
```

Use them in components:

```tsx
import featureFlags from '~/config/featureFlags'

{featureFlags.showArticles && <ArticlesSection />}
```

### Styling

The template uses Tailwind CSS with custom configurations:

- **Custom Colors** - Zinc color palette with teal accents
- **Typography Plugin** - Beautiful typography for prose content
- **Dark Mode** - Automatic theme switching with ThemeProvider
- **Responsive** - Mobile-first design approach

Edit `tailwind.config.js` to customize colors, fonts, and design tokens.

### Image Optimization

Images are automatically optimized using vite-imagetools:

```tsx
// Import with transformation queries
import image from '~/assets/images/photo.jpg?w=800;1200&format=webp'

// Use in components
<img src={image[0].src} srcSet={image.map(i => `${i.src} ${i.w}w`).join(', ')} />
```

Images are automatically resized, converted to WebP, and optimized.

### Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With UI
npm run test:ui
```

Write tests next to your components:

```tsx
// app/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('renders button', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

## Customization

### Update Site Content

1. Edit `app/routes/_index.tsx` for the home page
2. Update `app/components/Footer.tsx` for footer content
3. Modify `app/components/Header.tsx` for navigation

### Update Metadata

Edit `package.json`:
- `name` - Your project name
- `description` - Your project description

### Add Your Content

- Add routes in `app/routes/`
- Add components in `app/components/`
- Add images in `app/assets/images/`
- Update `app/lib/images.ts` if using imagetools

*I like and recommend [Tailwind Plus](https://tailwindcss.com/plus) for component libraries.*

## Optional Packages

The following packages were intentionally excluded but can be added when needed:

### Suggested Additions

#### `react-lazy-load-image-component`
```bash
npm install react-lazy-load-image-component
npm install -D @types/react-lazy-load-image-component
```
**When to add:** Building image galleries, photo portfolios, or pages with many images that benefit from lazy loading for performance.

#### `react-swipeable`
```bash
npm install react-swipeable
```
**When to add:** Adding touch/swipe gestures for mobile carousels, image galleries, or interactive slide components.

## Included and Demonstrated

The template includes and actively demonstrates these features on the home page:

### `@tailwindcss/typography`
- **Status:** Actively used with `prose` classes in the Typography Plugin demo section
- **Keep if:** You're building a blog, documentation site, or any content-heavy pages
- **Remove if:** You're building a pure application UI without prose content
- **To remove:** `npm uninstall @tailwindcss/typography` and update `tailwind.config.js`

### `vite-imagetools`
- **Status:** Actively used to optimize and display the placeholder image
- **Keep if:** You plan to use images (recommended - setup is complex)
- **Remove if:** Building a text-only application
- **Size impact:** ~2MB
- **To remove:** `npm uninstall vite-imagetools` and update `vite.config.ts`

### MDX Support (`@mdx-js/rollup`, `remark-*`)
- **Status:** Actively demonstrated with the `/example` page
- **Keep if:** You want to write content in MDX (markdown + React components)
- **Remove if:** Pure TypeScript/TSX workflow preferred
- **Size impact:** ~3MB
- **To remove:** `npm uninstall @mdx-js/rollup remark-frontmatter remark-mdx-frontmatter` and update `vite.config.ts`

### Link Checking (`cheerio`, `linkinator`)
- **Status:** Only used in optional scripts (`check:links`, `check:external-links`)
- **Keep if:** You want automated link validation for production sites
- **Remove if:** Not needed for your workflow
- **Size impact:** ~5MB
- **To remove:** `npm uninstall cheerio linkinator @types/cheerio`

## Deployment

### Fly.io (Recommended)

The template includes a `Dockerfile` and `fly.toml`:

```bash
# Install flyctl
brew install flyctl

# Login
fly auth login

# Deploy
fly launch
fly deploy
```

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Deploy the `build/` directory to any Node.js hosting platform.

## Node.js Version

This project requires Node.js >= 24.0.0

- Version specified in `.nvmrc`
- Use `nvm use` to switch versions
- Automatically checked before dev/build

## Clean Up

This template includes infrastructure from the original project. You may want to remove:

- Unused components in `app/components/`
- Unused services in `app/services/`
- GitHub Actions in `.github/` (customize for your needs)
- Deployment config in `fly.toml` (if not using Fly.io)

## License

MIT - Use freely for any project
