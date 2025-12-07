# Coin Siren Landing Page

A modern, high-performance landing page built with Next.js 14, featuring server components, animations, and mobile-responsive design.

## 🚀 Live Demo

[View Live Demo](https://coin-siren-assignment-teal.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Architecture](#architecture)
- [Performance](#performance)
- [Documentation](#documentation)

## ✨ Features

### Core Features

- **Server Components**: Leveraging Next.js 14 Server Components for optimal performance
- **ISR (Incremental Static Regeneration)**: Data revalidation every hour
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout the UI
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Type Safe**: Full TypeScript implementation with strict mode
- **Accessibility**: WCAG 2.1 compliant components

### UI/UX Features

- **Dynamic Header**: Transparent on top, white background when scrolling
- **Mobile Navigation**: Slide-out menu with smooth transitions
- **Auto-scrolling Carousel**: Service cards with infinite scroll
- **Interactive Tooltips**: Context-aware tooltips on key elements
- **Hover Effects**: Smooth transitions and visual feedback
- **Loading States**: Suspense boundaries with skeleton loaders
- **Error Boundaries**: Graceful error handling with user-friendly messages

### Performance Features

- **Component Memoization**: React.memo for expensive components
- **Custom Hooks**: Reusable hooks for scroll detection and auto-scroll
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Images and components loaded on demand

## 🛠 Tech Stack

### Framework & Language

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Reusable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development Tools

- **[ESLint](https://eslint.org/)** - JavaScript/TypeScript linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel functionality

### Fonts

- **[Poppins](https://fonts.google.com/specimen/Poppins)** - Primary font (Google Fonts)
- **[Inter](https://fonts.google.com/specimen/Inter)** - Secondary font (Google Fonts)

## 📁 Project Structure

```
coin-siren-assignment/
├── docs/                           # Documentation files
│   ├── DEPLOYMENT.md              # Deployment guide
│   └── [phase-specific-docs]      # Phase documentation
├── public/                         # Static assets
│   ├── icons/                     # Icon images
│   └── images/                    # Other images
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── api/                   # API routes
│   │   │   └── data/             # Data endpoints
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page (Server Component)
│   │   └── globals.css           # Global styles
│   ├── components/                # React components
│   │   ├── atoms/                # Atomic components
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   └── Logo.tsx
│   │   ├── molecules/            # Composite components
│   │   │   ├── AbilityList.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── FooterCard.tsx
│   │   │   ├── NavBarLink.tsx
│   │   │   └── ServiceCard.tsx
│   │   ├── organisms/            # Complex components
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── HeroSection.tsx
│   │   ├── templates/            # Page templates
│   │   │   └── LandingPageTemplate.tsx
│   │   └── ui/                   # shadcn/ui components
│   ├── hooks/                     # Custom React hooks
│   │   ├── useAutoScroll.ts
│   │   ├── useScrollDetection.ts
│   │   └── index.ts
│   ├── lib/                       # Utility functions
│   │   ├── constants.ts          # App-wide constants
│   │   ├── staticData.ts         # Static content data
│   │   ├── types/                # TypeScript types
│   │   │   ├── common.ts
│   │   │   └── index.ts
│   │   └── utils.ts              # Helper functions
├── .env.production.example        # Production env template
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── .prettierrc                   # Prettier configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── vercel.json                   # Vercel deployment config
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/coin-siren-assignment.git
   cd coin-siren-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.production.example .env.local
   ```

   Update `.env.local` with your values:

   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Code Quality

This project uses:

- **ESLint** for code linting with Next.js and Prettier configs
- **Prettier** for code formatting with Tailwind plugin
- **TypeScript** in strict mode for type safety

### Adding Components

Components follow the **Atomic Design Pattern**:

```typescript
// Atom example
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={cn('px-4 py-2', variant === 'primary' && 'bg-blue-500')}>
      {children}
    </button>
  );
}
```

### Custom Hooks

Create reusable hooks in `src/hooks/`:

```typescript
// Example: useScrollDetection
import { useState, useEffect } from 'react';

export function useScrollDetection(threshold: number = 10): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
```

## 🏗 Build & Deployment

### Production Build

```bash
npm run build
```

**Expected Output:**

```
✓ Compiled successfully
✓ Generating static pages (10/10)

Route (app)                              Size     First Load JS
┌ ○ /                                    96 kB           183 kB
├ ○ /_not-found                          873 B          88.1 kB
└ ○ /api/data                            0 B                0 B

○  (Static)  prerendered as static content
```

### Deploy to Vercel

**Method 1: Dashboard** (Recommended)

1. Push code to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js configuration
4. Add environment variables
5. Deploy!

**Method 2: CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

**Full deployment guide:** See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)

### Environment Variables

**Production variables** (set in Vercel Dashboard):

```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## 🏛 Architecture

### Design Patterns

1. **Atomic Design Pattern**
   - Atoms → Molecules → Organisms → Templates → Pages
   - Promotes component reusability and scalability

2. **Server-First Architecture**
   - Server Components for data fetching
   - Client Components only where interactivity is needed
   - Reduced client-side JavaScript bundle

3. **Separation of Concerns**
   - Constants in `lib/constants.ts`
   - Types in `lib/types/`
   - Utilities in `lib/utils.ts`
   - Hooks in `hooks/`

### Data Flow

```
API Routes (/api/data)
    ↓
Server Component (page.tsx) - ISR (1 hour revalidation)
    ↓
Template Component (LandingPageTemplate.tsx)
    ↓
Organism Components (Header, HeroSection, Footer)
    ↓
Molecule & Atom Components
```

### Key Architectural Decisions

1. **Server Components by default** - Only use 'use client' when necessary
2. **Static data with ISR** - Balance between static and dynamic content
3. **Component memoization** - Prevent unnecessary re-renders
4. **Custom hooks** - Extract reusable logic
5. **Error boundaries** - Graceful error handling at template level

## ⚡ Performance

### Optimization Strategies

1. **Next.js Image Optimization**
   - Automatic WebP/AVIF conversion
   - Responsive images with `srcset`
   - Lazy loading by default

2. **Code Splitting**
   - Automatic route-based splitting
   - Dynamic imports for heavy components

3. **React Optimization**
   - `React.memo` for expensive components
   - Custom hooks to prevent re-renders
   - Proper dependency arrays in useEffect

4. **Caching Strategy**
   - Static assets: 1 year cache (`vercel.json`)
   - API routes: ISR with 1 hour revalidation
   - Images: Immutable cache headers

### Performance Metrics

**Current Build Size:**

- Main Route: **96 kB**
- First Load JS: **183 kB**
- Shared Chunks: **87.2 kB**

**Target Scores:**

- Lighthouse Performance: **90+**
- First Contentful Paint: **< 1.5s**
- Largest Contentful Paint: **< 2.5s**
- Cumulative Layout Shift: **< 0.1**

## 📚 Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Complete deployment guide
- Phase-specific documentation for development workflow

### Key Documentation Sections

- Pre-deployment checklist
- Vercel configuration guide
- Custom domain setup
- Environment variables
- Performance monitoring
- Security headers
- SEO verification
- Troubleshooting

## 🎨 Design System

### Colors

```typescript
// Primary colors
--primary: 220 100% 50%        // Blue
--secondary: 160 84% 39%       // Teal
--accent: 200 98% 39%          // Cyan
--yellow: 48 96% 53%           // Yellow

// Neutral colors
--gray-700: 217 23% 27%        // Dark gray
--footer-text-primary: 225 11% 23%
--footer-text-secondary: 225 8% 40%
```

### Typography

```css
/* Primary Font - Poppins */
font-family: var(--font-poppins);

/* Secondary Font - Inter */
font-family: var(--font-inter);
```

### Spacing & Sizing

Follows Tailwind's default spacing scale with custom additions in `lib/constants.ts`:

```typescript
export const SIZES = {
  LOGO: {
    DESKTOP: { width: 187, height: 34 },
    MOBILE: { width: 140, height: 26 },
  },
  // ... more sizes
};
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using Next.js 14 and Tailwind CSS**
