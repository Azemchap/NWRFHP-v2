# NWRFHP Website - Development Guide

## Project Overview

North West Regional Fund for Health Promotion (NWRFHP) website - a Next.js 15 application for promoting healthcare services in Cameroon's North West Region.

**Tech Stack:**
- Next.js 15.5.9 (App Router)
- React 18.3
- TypeScript (strict mode)
- Tailwind CSS 4
- Framer Motion 12
- shadcn/ui components
- Radix UI primitives

## Design Style Guide

### Primary Color: rgb(0, 20, 220) - #0014DC

A vibrant, international blue used throughout the application for primary actions, brand identity, and accent elements.

**Color Palette:**
```css
--color-primary-50: #e6e8ff
--color-primary-100: #c0c5ff
--color-primary-200: #959eff
--color-primary-300: #6977ff
--color-primary-400: #3d50ff
--color-primary-500: #0014dc  /* Main primary blue */
--color-primary-600: #0010b8
--color-primary-700: #000c94
--color-primary-800: #000870
--color-primary-900: #00044c
--color-primary-950: #000228
```

**Accent Color (Teal):**
```css
--color-accent-500: #00d1a7  /* Healthcare fresh teal */
```

### Typography

- **Font Family:** Inter (sans-serif), JetBrains Mono (monospace)
- **Headings:** Bold, tight leading (1.1-1.2)
- **Body:** 16px base, relaxed leading

### Design Principles

1. **World-Class Standards:** Modern, clean, professional design inspired by SLB and international healthcare organizations
2. **Animations:** Subtle, purposeful animations using Framer Motion
3. **Accessibility:** WCAG 2.1 compliant color contrast and keyboard navigation
4. **Mobile-First:** Responsive design starting from mobile breakpoints
5. **Performance:** Optimized images, lazy loading, efficient bundle sizes

### Component Patterns

**Page Heroes:**
- Full-height or 60vh minimum
- Background image with gradient overlay
- Animated background elements (blurred circles)
- Staggered text animations
- CTA buttons with hover states

**Cards:**
- Rounded corners (rounded-2xl to rounded-3xl)
- Subtle shadows with hover elevation
- Border on hover for definition
- Icon badges with gradient backgrounds

**Buttons:**
- Primary: Gradient blue background with glow shadow on hover
- Secondary: Outline style with fill on hover
- All buttons have smooth transitions (0.3s)

**Sections:**
- Consistent padding (py-16 lg:py-24)
- Container max-width 1440px
- Responsive grid layouts (1-2-3-4 columns)
- Section headers with badge, title, description pattern

### Animation Guidelines

**Use Framer Motion for:**
- Scroll-triggered animations (useInView)
- Page transitions
- Hover effects on cards and buttons
- Staggered list animations

**Animation Presets (src/lib/animations.ts):**
- `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `slideInUp`, `slideInDown`
- `scaleIn`, `popIn`
- `staggerContainer`, `staggerItem`
- `cardHover`, `hoverScale`

**Settings:**
- `viewport={{ once: true }}` for scroll animations
- Ease curve: `[0.22, 1, 0.36, 1]` (smooth ease-out)
- Duration: 0.5-0.8s for most animations

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with 10 sections
│   ├── health/            # UHC page (modernized)
│   ├── programs/          # Programs list & slug pages
│   ├── team/              # Team list & slug pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── gallery/           # Gallery page
├── components/
│   ├── sections/          # Homepage sections
│   │   ├── hero.tsx
│   │   ├── about-preview.tsx
│   │   ├── services.tsx
│   │   ├── impact.tsx
│   │   ├── mission.tsx
│   │   ├── testimonials.tsx
│   │   ├── partners.tsx
│   │   ├── news.tsx
│   │   ├── faq.tsx
│   │   └── cta.tsx
│   ├── shared/            # Reusable components
│   │   ├── page-hero.tsx
│   │   ├── section-wrapper.tsx
│   │   └── animated-card.tsx
│   ├── layout/            # Header & Footer
│   └── ui/                # shadcn UI components
├── config/
│   └── site.ts            # Centralized site configuration
├── data/
│   ├── team.json          # Team members data
│   └── programs.ts        # Programs data with types
├── lib/
│   ├── animations.ts      # Framer Motion animation presets
│   └── utils.ts           # Utility functions
└── app/globals.css        # Global styles & Tailwind theme
```

## Key Configuration

**Site Config (src/config/site.ts):**
- Organization info, contact details
- Social media links
- Statistics (217 pharmacies, 850+ health workers, etc.)
- Navigation and footer links

**Programs Data (src/data/programs.ts):**
- 6 healthcare programs with full details
- Slug-based routing for individual pages
- Icons, colors, stats, features, objectives

**Team Data (src/data/team.json):**
- 40+ team members
- Slug-based routing for profiles
- Photos, roles, department info

## Development Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## Key Files to Know

- `/src/app/globals.css` - Theme colors, animations, utilities
- `/src/lib/animations.ts` - Animation presets
- `/src/config/site.ts` - Site-wide configuration
- `/src/components/shared/page-hero.tsx` - Reusable hero component
- `/src/data/programs.ts` - Programs data and types

## Common Patterns

**Creating a new page with hero:**
```tsx
import { PageHero } from "@/components/shared/page-hero";
import { Icon } from "lucide-react";

export default function NewPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <PageHero
        badge={{ icon: Icon, text: "Badge Text" }}
        title="Page Title"
        titleHighlight="Highlighted"
        description="Page description text"
        backgroundImage="/images/background.jpg"
        overlay="gradient"
      >
        {/* CTA buttons */}
      </PageHero>
      {/* Page content */}
    </div>
  );
}
```

**Adding animations to a section:**
```tsx
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {/* Content */}
    </motion.div>
  ))}
</motion.div>
```

## Deployment

The site is configured for Vercel deployment:
- Automatic builds on push
- next-sitemap for SEO
- Image optimization enabled
- ISR for dynamic pages

## Notes

- All pages use the vibrant primary blue (#0014DC) consistently
- Animations should be subtle and enhance UX, not distract
- Mobile navigation has slide animations
- Dark mode is supported via CSS variables
- Use the PageHero component for consistent page headers
