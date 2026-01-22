# NWRFHP Website Design Specifications
## Complete Redesign Based on World-Class Medical Organization Standards (SLB.com Reference)

---

## 1. OVERALL DESIGN PHILOSOPHY

### Design Approach
- **Modern, Clean, Professional**: Sophisticated corporate aesthetic with medical/healthcare gravitas
- **Trust-Focused**: Design should inspire confidence and credibility in healthcare services
- **Accessible & User-Friendly**: Clear navigation, readable typography, intuitive user experience
- **Performance-Oriented**: Fast loading, optimized images, efficient code

---

## 2. COLOR PALETTE

### Primary Colors
```
Primary Blue: #0F4C81 (Deep professional blue - trust, stability, healthcare)
Secondary Blue: #1E88E5 (Bright accent blue - modern, accessible)
Accent Teal: #00897B (Medical/healthcare association, freshness)
```

### Neutral Colors
```
White: #FFFFFF (Clean backgrounds)
Light Gray: #F5F7FA (Section backgrounds, subtle contrast)
Medium Gray: #E0E5EB (Borders, dividers)
Dark Gray: #263238 (Body text)
Charcoal: #1A1A1A (Headings, emphasis)
```

### Accent Colors
```
Success Green: #43A047 (Positive actions, health indicators)
Alert Orange: #FB8C00 (Important notices)
Error Red: #E53935 (Warnings, critical information)
```

---

## 3. TYPOGRAPHY

### Font Families
```css
Primary Font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Secondary Font: 'Roboto', 'Helvetica Neue', Arial, sans-serif
```

### Type Scale
```css
/* Headings */
H1: 56px / 64px line-height, font-weight: 700, letter-spacing: -0.02em
H2: 40px / 48px line-height, font-weight: 700, letter-spacing: -0.01em
H3: 32px / 40px line-height, font-weight: 600
H4: 24px / 32px line-height, font-weight: 600
H5: 20px / 28px line-height, font-weight: 600
H6: 16px / 24px line-height, font-weight: 600

/* Body Text */
Body Large: 18px / 28px line-height, font-weight: 400
Body Regular: 16px / 24px line-height, font-weight: 400
Body Small: 14px / 20px line-height, font-weight: 400
Caption: 12px / 16px line-height, font-weight: 400
```

---

## 4. LAYOUT & SPACING

### Grid System
```
Container Max-Width: 1440px
Columns: 12-column grid
Gutter: 32px (desktop), 24px (tablet), 16px (mobile)
Margin: 80px (desktop), 40px (tablet), 20px (mobile)
```

### Spacing Scale
```
Space 0: 0px
Space 1: 4px
Space 2: 8px
Space 3: 12px
Space 4: 16px
Space 5: 24px
Space 6: 32px
Space 7: 40px
Space 8: 48px
Space 9: 64px
Space 10: 80px
Space 11: 120px
Space 12: 160px
```

### Section Spacing
```
Section Padding Top/Bottom: 120px (desktop), 80px (tablet), 60px (mobile)
Component Margins: 64px between major sections
```

---

## 5. HEADER / NAVIGATION

### Desktop Header
```
Height: 80px
Background: White with subtle shadow on scroll
Position: Sticky / Fixed on scroll
```

**Structure:**
- Logo (left): 200px width max, SVG format
- Primary Navigation (center/right): Horizontal mega menu
- CTA Buttons (right): "Contact Us" (primary button) + Language selector
- Utility Links: Phone number, WhatsApp (subtle icons)

**Navigation Design:**
```css
Font-size: 16px
Font-weight: 500
Color: #263238
Hover: #0F4C81 with underline animation
Active: #0F4C81 with bottom border indicator
Padding: 28px 20px
Transition: all 0.3s ease
```

**Mega Menu (Dropdown):**
```
Background: White
Shadow: 0 10px 40px rgba(0,0,0,0.1)
Padding: 40px
Grid Layout: 3-4 columns
Animation: Fade in + slide down (0.3s)
```

### Mobile Header
```
Height: 64px
Hamburger Menu: Right-aligned
Mobile Menu: Full-screen overlay with fade-in animation
```

---

## 6. HERO SECTION

### Hero Design
```
Height: 700px (desktop), 600px (tablet), 500px (mobile)
Layout: Full-width with overlay
```

**Content Structure:**
- Large Headline (H1): Left-aligned or centered
- Subheading (Body Large): Supporting text
- Primary CTA Button
- Secondary CTA Button (optional)
- Background: High-quality image with gradient overlay

**Overlay Gradient:**
```css
background: linear-gradient(
  135deg, 
  rgba(15, 76, 129, 0.85) 0%, 
  rgba(30, 136, 229, 0.75) 100%
);
```

**CTA Buttons:**
```css
Primary Button:
  background: #43A047
  color: white
  padding: 16px 32px
  border-radius: 8px
  font-weight: 600
  hover: transform: translateY(-2px) + shadow increase
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

Secondary Button:
  background: transparent
  border: 2px solid white
  color: white
  padding: 16px 32px
  hover: background: rgba(255,255,255,0.1)
```

---

## 7. CONTENT SECTIONS

### Section Types & Patterns

**Standard Content Section:**
```
Container: Max-width 1200px
Padding: 120px vertical, 40px horizontal
Background: Alternating white / light gray
```

**Two-Column Layout:**
```
Grid: 60/40 or 50/50 split
Gap: 80px
Image: High-quality, rounded corners (12px radius)
Content: Left-aligned, proper line-height
```

**Three-Column Cards:**
```
Grid: 1/3 each column
Gap: 32px
Card Design:
  - Background: White
  - Border: 1px solid #E0E5EB
  - Border-radius: 12px
  - Padding: 40px
  - Hover: Shadow elevation + subtle transform
  - Transition: all 0.3s ease
```

**Stats/Numbers Section:**
```
Layout: Horizontal row of 3-4 stats
Each Stat:
  - Large number: 64px, font-weight: 700, color: #0F4C81
  - Label: 18px, font-weight: 400, color: #263238
  - Icon: Optional, 48px size above number
  - Animation: Count-up on scroll into view
```

---

## 8. CARDS & COMPONENTS

### Card Design System

**Program/Service Card:**
```css
.card {
  background: white;
  border: 1px solid #E0E5EB;
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
    border-color: #0F4C81;
  }
}

.card-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 16px;
}

.card-description {
  font-size: 16px;
  line-height: 24px;
  color: #263238;
  margin-bottom: 24px;
}

.card-cta {
  color: #0F4C81;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    gap: 12px;
  }
}
```

**Icon Cards (Values/Objectives):**
```css
.icon-card {
  text-align: center;
  padding: 48px 32px;
  background: #F5F7FA;
  border-radius: 16px;
  
  .icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, #0F4C81, #1E88E5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  .description {
    font-size: 14px;
    line-height: 22px;
    color: #263238;
  }
}
```

---

## 9. IMAGES & MEDIA

### Image Guidelines
```
Format: WebP with JPEG fallback
Quality: 85% compression
Sizes: Multiple sizes for responsive (srcset)
Loading: Lazy loading for images below fold
Alt Text: Descriptive, accessibility-focused
```

### Image Dimensions
```
Hero Images: 1920x1080px
Section Images: 1200x800px
Card Images: 800x600px
Thumbnail Images: 400x300px
Team Photos: 400x400px (square)
Logo Partners: 200x100px (maintain aspect ratio)
```

### Image Treatment
```css
Border-radius: 12px (large images), 8px (medium), 4px (small)
Hover Effect: Scale 1.05 with overflow hidden on container
Filter: Subtle overlay on hero images for text readability
```

---

## 10. BUTTONS & CTAs

### Button Variants

**Primary Button:**
```css
.btn-primary {
  background: #43A047;
  color: white;
  border: none;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: #388E3C;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(67, 160, 71, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: transparent;
  color: #0F4C81;
  border: 2px solid #0F4C81;
  padding: 14px 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  
  &:hover {
    background: #0F4C81;
    color: white;
  }
}
```

**Text Link Button:**
```css
.btn-link {
  color: #0F4C81;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    text-decoration: underline;
    gap: 12px;
  }
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }
}
```

---

## 11. FOOTER

### Footer Structure
```
Background: #1A1A1A
Color: White/Light gray
Padding: 80px 0 32px
```

**Layout (4 columns):**
1. **About/Logo Column**
   - Organization logo (white version)
   - Brief description (2-3 lines)
   - Social media icons

2. **Quick Links Column**
   - Our Programs
   - About Us
   - Staff Gallery
   - Contact Us

3. **Resources Column**
   - Health Information
   - Universal Health Coverage
   - Infos
   - Animation

4. **Contact Column**
   - Phone: +237651421052
   - WhatsApp link
   - Email address
   - Physical address

**Bottom Bar:**
```
Border-top: 1px solid rgba(255,255,255,0.1)
Padding: 24px 0
Text: Copyright © 2025 NWRFHP, All rights reserved.
```

### Footer Styling
```css
.footer {
  background: #1A1A1A;
  color: #E0E5EB;
  
  h4 {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  
  a {
    color: #E0E5EB;
    text-decoration: none;
    font-size: 14px;
    line-height: 32px;
    transition: color 0.3s ease;
    
    &:hover {
      color: #1E88E5;
    }
  }
  
  .social-icons {
    display: flex;
    gap: 16px;
    
    a {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover {
        background: #1E88E5;
      }
    }
  }
}
```

---

## 12. ANIMATIONS & INTERACTIONS

### Page Load Animations
```javascript
// Fade in on scroll
Elements fade in with slight upward movement when entering viewport
Duration: 0.6s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### Micro-interactions
```
Button Hover: Elevation + slight scale
Card Hover: Elevation + transform translateY(-8px)
Link Hover: Color change + underline animation
Image Hover: Scale 1.05 within container
Menu Hover: Underline slide from left
```

### Scroll Behaviors
```
Smooth scroll: Enabled
Sticky header: Appears on scroll up, hides on scroll down
Progress indicator: Optional top bar showing read progress
Parallax: Subtle on hero section (optional)
```

---

## 13. RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+

/* Media Queries */
@media (max-width: 767px) {
  /* Mobile styles */
  - Single column layouts
  - Hamburger menu
  - Reduced padding (60px vertical)
  - Font sizes scaled down 10-20%
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet styles */
  - 2 column layouts where applicable
  - Adjusted spacing
}

@media (min-width: 1024px) {
  /* Desktop styles */
  - Multi-column layouts
  - Full mega menu
  - Hover states active
}
```

---

## 14. ACCESSIBILITY (WCAG 2.1 AA)

### Requirements
```
Color Contrast: Minimum 4.5:1 for normal text, 3:1 for large text
Focus States: Visible keyboard focus indicators on all interactive elements
Alt Text: All images must have descriptive alt text
Semantic HTML: Proper heading hierarchy (H1 → H6)
ARIA Labels: For icons, buttons, and interactive elements
Keyboard Navigation: All functionality accessible via keyboard
Screen Reader: Content must be screen reader friendly
```

### Implementation
```css
/* Focus visible for keyboard users */
:focus-visible {
  outline: 3px solid #1E88E5;
  outline-offset: 2px;
}

/* Skip to content link */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: #0F4C81;
  color: white;
  padding: 8px;
  z-index: 100;
  
  &:focus {
    top: 0;
  }
}
```

---

## 15. PERFORMANCE REQUIREMENTS

### Page Load Targets
```
First Contentful Paint (FCP): < 1.8s
Largest Contentful Paint (LCP): < 2.5s
Time to Interactive (TTI): < 3.8s
Cumulative Layout Shift (CLS): < 0.1
```

### Optimization Strategies
```
- Image optimization: WebP format, lazy loading
- Code splitting: Load only necessary JavaScript
- Minification: CSS, JavaScript minified
- Caching: Browser caching for static assets
- CDN: Use CDN for faster global delivery
- Font loading: Font-display: swap
```

---

## 16. SPECIFIC PAGE DESIGNS

### Homepage
**Sections (in order):**
1. Hero Section - Full width with CTA
2. Organization Overview - 2-column text + image
3. Mission/Vision/Values - 3-column cards
4. Key Statistics - 4-stat horizontal display
5. Programs Overview - 3-column cards with images
6. Impact Stories - Carousel or grid
7. Partner Logos - Horizontal scrolling strip
8. Newsletter/CTA Section - Centered with form
9. Footer

### Programs Page
**Structure:**
1. Page Header - Title + breadcrumb
2. Programs Grid - 3-column card layout
3. Filtering Options - Category filters (sticky sidebar)
4. Detailed Program Cards - Expandable on click
5. Related Programs - Bottom carousel

### About Page
**Structure:**
1. Hero - Organization story
2. Timeline - Visual history timeline
3. Mission/Vision/Values - Detailed sections
4. Leadership Team - Grid with photos + bios
5. Achievements - Stats + visual highlights
6. Contact CTA

---

## 17. COMPONENT LIBRARY

### Reusable Components Needed

**1. Breadcrumb**
```tsx
<Breadcrumb>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem>Programs</BreadcrumbItem>
  <BreadcrumbItem active>Essential Medicines</BreadcrumbItem>
</Breadcrumb>
```

**2. Accordion**
```
- Smooth expand/collapse animation
- Plus/minus icon toggle
- One open at a time (optional)
- Fully keyboard accessible
```

**3. Modal/Dialog**
```
- Centered overlay
- Backdrop blur
- Close on ESC key
- Trap focus within modal
- Smooth fade in/out
```

**4. Image Gallery**
```
- Grid layout
- Lightbox on click
- Next/previous navigation
- Touch swipe support (mobile)
```

**5. Testimonial Carousel**
```
- Auto-rotation (5s interval)
- Navigation dots
- Previous/next arrows
- Pause on hover
- Swipe support
```

---

## 18. FORM DESIGN

### Contact Form
```css
.form-group {
  margin-bottom: 24px;
  
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1A1A1A;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #E0E5EB;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #0F4C81;
      box-shadow: 0 0 0 3px rgba(15, 76, 129, 0.1);
    }
    
    &::placeholder {
      color: #9E9E9E;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
  
  .error {
    color: #E53935;
    font-size: 14px;
    margin-top: 4px;
  }
}
```

---

## 19. ICONS & GRAPHICS

### Icon System
```
Library: Lucide Icons or Heroicons
Size: 24px (standard), 32px (large), 48px (extra large)
Style: Outline style, 2px stroke width
Color: Match text color or use primary blue
```

### Icon Usage
```
Navigation: 24px icons for menu items
Cards: 48px icons for feature highlights
Buttons: 20px icons inside buttons
Social Media: 24px in footer
```

---

## 20. TECHNICAL SPECIFICATIONS

### Technology Stack Recommendations
```
Framework: Next.js 14+ or React 18+
Styling: Tailwind CSS + Custom CSS modules
Animations: Framer Motion or GSAP
Forms: React Hook Form + Zod validation
Image Optimization: Next/Image or modern <picture> element
Build Tool: Vite or Next.js built-in
Testing: Jest + React Testing Library
```

### Browser Support
```
Chrome/Edge: Last 2 versions
Firefox: Last 2 versions
Safari: Last 2 versions
Mobile Safari/Chrome: Last 2 versions
```

---

## 21. CONTENT GUIDELINES

### Writing Style
```
Tone: Professional, compassionate, trustworthy
Voice: Active voice, clear, concise
Paragraph Length: 2-4 sentences maximum
Headings: Clear, descriptive, keyword-rich
Lists: Use bullet points for easy scanning
```

### Image Guidelines
```
People Photos: Authentic, diverse representation
Medical Imagery: Professional, high-quality
Facilities: Well-lit, clean, modern
Charts/Graphs: Simple, easy to understand
```

---

## 22. SEO REQUIREMENTS

### Meta Tags
```html
<title>Specific, descriptive, 50-60 characters</title>
<meta name="description" content="155-160 characters">
<meta property="og:image" content="1200x630px">
<link rel="canonical" href="...">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "North West Regional Fund For Health Promotion",
  "url": "https://nwrfundforhealth.org"
}
```

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Foundation
- [ ] Set up color system
- [ ] Implement typography scale
- [ ] Create grid system
- [ ] Build component library
- [ ] Establish spacing system

### Phase 2: Core Components
- [ ] Header/Navigation
- [ ] Footer
- [ ] Buttons & CTAs
- [ ] Cards
- [ ] Forms

### Phase 3: Page Layouts
- [ ] Homepage
- [ ] Programs page
- [ ] About page
- [ ] Contact page
- [ ] Gallery page

### Phase 4: Polish
- [ ] Animations & transitions
- [ ] Responsive design testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Cross-browser testing

---

## FINAL NOTES

This design system is inspired by SLB.com's professional, clean, and modern approach while being adapted for a healthcare/medical organization. The specifications prioritize:

1. **Trust & Credibility**: Professional design that inspires confidence
2. **Accessibility**: WCAG 2.1 AA compliance for all users
3. **Performance**: Fast loading, optimized for all devices
4. **Scalability**: Component-based system for easy updates
5. **User Experience**: Clear navigation, readable content, intuitive interactions

The design should feel:
- Modern yet timeless
- Professional yet approachable
- Clean yet warm
- Technical yet human-centered
