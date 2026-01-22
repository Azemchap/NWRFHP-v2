# NWRFHP Complete Website Redesign - Technical Specification
## Full-Stack Modern Implementation with Shadcn UI & Next.js

---

## EXECUTIVE SUMMARY

This specification outlines a complete redesign of the entire NWRFHP website using:
- **Shadcn UI** (complete component library replacement)
- **Framer Motion** (all animations)
- **Modern flat design** (no shadows, 3D effects, or heavy outlines)
- **African healthcare imagery** from curated sources
- **Best-in-class Next.js libraries**

Design inspiration combines:
- SLB.com (professional, clean corporate aesthetic)
- MyEasyHealth.org (modern healthcare animations and UX)
- Flat, minimal design philosophy

---

## TECHNOLOGY STACK

### Core Framework
```json
{
  "framework": "Next.js ",
  "runtime": "Node.js 20+",
  "packageManager": "pnpm 9+",
  "typescript": "5.3.0+",
  "react": "18.3.0+"
}
```

### UI & Styling
```json
{
  "uiLibrary": "Shadcn UI",
  "styling": "Tailwind CSS 4+",
  "icons": "lucide-react (Shadcn's icon system)",
  "fonts": "@next/font with Inter & Outfit"
}
```

### Animation & Interaction
```json
{
  "animations": "framer-motion 11+",
  "scrollAnimations": "react-intersection-observer",
  "parallax": "framer-motion viewport animations"
}
```

### Form Handling
```json
{
  "forms": "react-hook-form 7.50+",
  "validation": "zod 3.22+",
  "shadcnForms": "@hookform/resolvers"
}
```

### Image Optimization
```json
{
  "images": "next/image (built-in)",
  "placeholder": "plaiceholder for blur effects",
  "optimization": "sharp (automatic with Next.js)"
}
```

### Data Fetching
```json
{
  "client": "@tanstack/react-query 5+",
  "serverActions": "Next.js Server Actions",
  "http": "axios or fetch API"
}
```

---
### Shadcn Configuration (components.json)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## DESIGN SYSTEM - NO SHADOWS/3D

### Core Principles
```
1. FLAT DESIGN
   - No box-shadows (except minimal on modals/dropdowns)
   - No 3D effects or gradients
   - Clean borders instead of elevation
   - Solid colors, no opacity tricks

2. MINIMAL OUTLINES
   - Use border-2 for emphasis
   - Prefer color changes over heavy borders
   - 1px borders for subtle division

3. MODERN INTERACTIONS
   - Color transitions instead of elevation
   - Scale transforms on hover (subtle: 1.02)
   - Opacity changes for states
   - Background color shifts
```

### Component Styling Examples

```typescript
// Flat Button (no shadow)
<Button className="border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
  Click Me
</Button>

// Flat Card (border instead of shadow)
<Card className="border-2 border-border hover:border-primary transition-colors">
  Content
</Card>

// Flat Input (clean, minimal)
<Input className="border border-input focus:border-primary focus:ring-0" />
```

---

## CONTINUED IN NEXT FILE...

This is Part 1 of the technical specification. Part 2 will cover:
- Framer Motion animation specifications
- Complete component library
- Page-by-page implementation
- Image sourcing for African medical content
- Migration guide from existing codebase
