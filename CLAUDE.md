# NWRFHP Website - Claude Project Guide

## Project Overview

This is the official website for the **North West Regional Fund for Health Promotion (NWRFHP)**, a public corporate dialogue structure established in Cameroon to promote sustainable quality healthcare in the North West Region.

### Organization Background
- **Founded:** 1987 (as North West Pro Pharmacy)
- **Transformed:** 2012 (into Public Interest Group under Law No.2010/023)
- **Location:** Bamenda, North West Region, Cameroon
- **Coverage:** 217 community pharmacies serving 2.2 million people across 19 health districts

## Tech Stack

- **Framework:** Next.js 15.2.4 (App Router)
- **Styling:** Tailwind CSS v4.1 with @theme configuration
- **UI Components:** Shadcn UI (Button, Card, Sheet, Badge, etc.)
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Package Manager:** npm

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── programs/          # Programs listing & detail pages
│   │   └── [id]/         # Dynamic program pages
│   ├── team/              # Team listing & detail pages
│   │   └── [slug]/       # Dynamic team member pages
│   ├── globals.css        # Global styles & Tailwind theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Hero, Stats, Mission, Programs, CTA
│   ├── shared/            # Reusable components
│   └── ui/                # Shadcn UI components
├── config/
│   └── site.ts            # Centralized site configuration
├── data/
│   └── team.json          # Team members data
└── lib/
    └── utils.ts           # Utility functions
```

## Key Configuration Files

### Site Configuration (`src/config/site.ts`)

Central configuration for all contact info, social links, and organization details. Update this file to change information site-wide:

- Phone numbers
- Email addresses
- WhatsApp contact
- Social media links
- Location/address
- Organization stats
- Navigation links

### Global Styles (`src/app/globals.css`)

Contains:
- Tailwind CSS v4 @theme configuration
- Custom color palette (primary, accent, neutral)
- Container class for layout centering
- Typography utilities

## Design System

### Colors
- **Primary:** Blue tones (#0077B6 base)
- **Accent:** Green/teal tones (#2A9D8F base)
- **Neutral:** Gray scale for text and backgrounds

### Typography
- Font: System fonts (Inter recommended)
- Headings: Bold, tracking-tight
- Body: Regular weight, relaxed line-height

### Components
- Rounded corners (2xl for cards, full for badges)
- Subtle shadows with hover effects
- Glassmorphism for overlays
- Framer Motion animations throughout

## Common Tasks

### Adding a New Team Member
1. Add entry to `src/data/team.json`
2. Include: id, name, role, image path, date, slug
3. Add image to `public/images/`

### Adding a New Program
1. Add program data to `src/app/programs/[id]/page.tsx` in `programsData` object
2. Include: id, title, subtitle, description, image, icon, color, overview, features, stats, benefits

### Updating Contact Information
1. Edit `src/config/site.ts`
2. All components automatically use the updated values

### Adding New Pages
1. Create folder in `src/app/`
2. Add `page.tsx` with "use client" directive for animations
3. Import components from `@/components/`

## Important Notes

1. **Images:** All images are in `public/images/`. Use Next.js `Image` component.

2. **Animations:** Use Framer Motion's `motion` components with `whileInView` for scroll animations.

3. **Responsive Design:** Mobile-first approach. Use Tailwind breakpoints (sm, md, lg, xl).

4. **SEO:** Add metadata exports to page files for SEO optimization.

5. **Container:** Use the `.container` class for consistent page width and centering.

## Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## External Resources

- [NWRFHP Official Website](https://www.nwrfundforhealth.org/)
- [LinkedIn](https://cm.linkedin.com/company/nwrfhp-pig)
- Tailwind CSS v4 Documentation
- Framer Motion Documentation
- Shadcn UI Components
