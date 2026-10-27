# Design — Cinematic Website Redesign

## Overview

Transform the existing Hisuvai/Ecodry health-mix powder website into a premium, cinematic product experience while preserving all working functionality (router, cart, search, account, WhatsApp checkout). The redesign elevates visual presentation through real product photography, scroll-driven animation, parallax depth, and refined typography — all on the existing vanilla HTML/CSS/JS stack enhanced with GSAP via CDN.

## Constraints & Non-Goals

- **Preserve:** Vanilla JS architecture (no framework migration), existing router/hash navigation, cart/localStorage logic, search overlay, account modal, WhatsApp checkout, data model in `data.js`, SVG artwork system in `art.js` (used as fallback/supplementary).
- **Do not replace:** Original product images (p1–p6.png), logo.png, or product packaging/labels. No stock photos, AI-generated images, or placeholders.
- **Do not add:** Build tools, bundlers, npm dependencies, or frameworks. CDN-only additions are acceptable.
- **Non-goal:** Rewriting the cart/account/search systems. Only the presentation layer changes.

## Technology Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Animation library | GSAP 3 + ScrollTrigger via CDN | No build step needed, vanilla JS compatible, industry standard for scroll-driven animation. Framer Motion requires React — not compatible. |
| Scroll reveals | GSAP ScrollTrigger + IntersectionObserver (existing) | ScrollTrigger for parallax/scrub animations; keep IntersectionObserver `.reveal` pattern for simple fade-ins to avoid over-engineering. |
| Video hero | HTML5 `<video>` with poster fallback | The 4.8 MB MP4 is lightweight enough for autoplay muted loop as hero background. Poster image (p1.png) as fallback. |
| Fonts | Keep Cormorant Garamond + Inter (already loaded) | Already premium pairing; no change needed. |
| Image strategy | Map 6 real photos (p1–p6) to hero + featured products; SVG pouches remain for cart/quickview/search thumbnails | Real photography for primary display areas; SVG for compact UI contexts where photos don't fit. |

## Asset Inventory & Mapping

### Real product images (6 files)
- `p1.png` through `p6.png` — actual product photography
- `logo.png` — brand logo (already used in header, loader, footer)

### Image-to-product mapping
The implementation must visually inspect p1–p6.png and map each to the correct product by matching packaging labels/appearance. Working hypothesis (to verify during implementation):

| Image | Likely Product | Used In |
|---|---|---|
| p1.png | Banana powder (hero[0]) | Hero slide 1, featured card |
| p2.png | Carrot powder (hero[1]) | Hero slide 2, featured card |
| p3.png | Beetroot powder (hero[2]) | Hero slide 3, featured card |
| p4.png | Moringa powder (hero[3]) | Hero slide 4, featured card |
| p5.png | Amla or ABC powder | Featured card |
| p6.png | Another product | Featured card |

Products without a dedicated photo use the closest matching image or the existing SVG pouch in product cards. The hero carousel cycles through the 4 hero products using their mapped photos.

### Video asset
- `VID_20261026_005156_723.mp4` (4.8 MB) — used as cinematic hero background, autoplay muted loop with graceful `<video>` poster fallback.

## Visual Design Direction

### Theme: "Sunlight & Substance"
- Warm, earthy palette preserving the existing green/amber/cream system
- Cinematic depth via layered shadows, gradient lighting overlays, and parallax
- Serif display headlines (Cormorant Garamond) for emotional impact; Inter for UI/body
- Generous whitespace, section breathing room (120–180px vertical padding on desktop)
- Dark cinematic hero → light product sections → dark story/milestone sections → warm footer

### Color system (extend existing CSS variables)
Keep existing tokens. Add cinematic-specific variables:
```
--cinema-dark: #0a1f14     /* deep green-black for dark sections */
--cinema-overlay: rgba(10,31,20,0.55)  /* hero video overlay */
--glow-amber: rgba(245,166,35,0.15)    /* gradient lighting accent */
```

## Section-by-Section Design

### 1. Cinematic Hero
**Goal:** Memorable first screen with video background, layered product imagery, animated headline.

- Full viewport (100svh) `<section>` with `<video>` background (autoplay, muted, loop, playsinline)
- Semi-transparent gradient overlay (dark green → transparent) for text legibility
- Animated headline: split-text reveal with GSAP — words rise + fade in sequence
- Product image (p1.png) floating with subtle parallax on scroll
- CTA button with glow effect
- Scroll indicator at bottom (animated chevron)
- On mobile: video pauses, falls back to poster image (p1.png) for performance

### 2. Featured Products Showcase
**Goal:** Premium product cards using real photography with scroll-triggered reveals.

- Section heading with eyebrow + large serif title
- Grid of product cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card: real product image in clean container with `object-fit: cover`, subtle gradient background, hover lift + image zoom
- ScrollTrigger stagger: cards fade-in with 0.1s offset as they enter viewport
- "Add to cart" and price row preserved from existing pcard component
- Fix: image `src` must use mapped image filename (p1–p6.png), not `${p.id}.png`

### 3. Product Benefits / Key Features
**Goal:** Communicate why these powders matter with icon-led cards.

- Reuse existing "pillars" pattern (3-column grid) but elevate styling
- Each pillar: gradient icon badge, serif heading, body text
- ScrollTrigger reveal: slide-up + fade with stagger
- Background: subtle warm gradient, soft texture

### 4. Brand Story (Immersive)
**Goal:** Full-width visual storytelling section.

- Split layout: large image/scene on one side, narrative text on other
- Parallax: image moves at different rate than text on scroll (GSAP ScrollTrigger scrub)
- "Grown in sunshine, dried by it too" headline
- Existing glass-card content (solar-dried, chemical-free, nutrients) with refined styling
- Dark background variant for dramatic contrast with surrounding light sections

### 5. Product Showcase (Scroll Animation)
**Goal:** Horizontal scroll or pinned scroll-driven product gallery.

- Pinned section: as user scrolls, product images slide horizontally with parallax
- Each product image in an elegant frame with product name overlay
- GSAP ScrollTrigger with `pin: true` and horizontal translation tied to scroll progress
- On mobile: convert to horizontal swipe carousel (no pin, simpler transform)

### 6. Milestones / Trust Section
**Goal:** Build credibility with visual recognition highlights.

- Dark green background (existing `.miles` gradient) — keep the glowing orb
- Real product imagery integrated where possible
- ScrollTrigger: arch images parallax up/down, text fades in
- Stats counter animation preserved (existing `runCounters`)

### 7. How to Use (4 Steps)
**Goal:** Keep the sticky-scroll "from pouch to glass" experience, refined.

- Existing sticky scroll design is good — keep the structure
- Enhance: smoother GSAP-driven pouch rotation/scale
- Step cards: refined shadows, better entrance animation
- The SVG pouch remains here (it's instructional, not a product photo)

### 8. Final CTA + Footer
**Goal:** Warm, inviting close with clear action.

- Large serif headline "Bring the sunshine home"
- Amber CTA button with glow
- Sun graphic + wave transition (existing, refined)
- Footer columns preserved (shop, help, contact) with improved styling
- Social links with hover animations

### 9. About Page
**Goal:** Immersive brand narrative with parallax imagery.

- Page hero with gradient background (existing pattern, refined)
- Pillars, stats, timeline sections — scroll reveals enhanced
- Visit section with greenhouse scene + glass card + map (existing, refined)

### 10. Products Page
**Goal:** Clean, filterable product grid with real images.

- Page hero (existing pattern, refined)
- Filter chips + sort (existing, preserved)
- Product grid: real images with clean containers, hover effects
- Quick view modal: real product image + details (existing modal structure)

## Animation Strategy

### GSAP Setup (CDN)
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
```
- `gsap.registerPlugin(ScrollTrigger)`
- Respect `prefers-reduced-motion`: skip all GSAP animations, show content immediately

### Animation inventory
| Effect | Where | Method |
|---|---|---|
| Headline split-text reveal | Hero, section headings | GSAP timeline: stagger words/lines with y + opacity |
| Card stagger entrance | Featured products, pillars | ScrollTrigger batch: fade + slide-up, stagger 0.1s |
| Parallax | Brand story image, milestone arches, visit image | ScrollTrigger scrub: translateY tied to scroll |
| Pinned horizontal scroll | Product showcase | ScrollTrigger pin + horizontal x translation |
| Hero product float | Hero product image | GSAP: gentle yoyo float (existing CSS floaty, enhanced) |
| Section transitions | Between all sections | Background gradient transitions via ScrollTrigger callbacks |
| Hover lift | Product cards, buttons | CSS transitions (existing, refined) |
| Counter animation | Stats | Existing `runCounters` (keep) |

### Performance guardrails
- All GSAP animations use `will-change` sparingly (only on animated elements)
- ScrollTrigger with `once: true` where possible (reveal animations don't repeat)
- `pin` only on one section (product showcase) to avoid jank
- Video: `preload="metadata"`, poster image for instant first paint
- Images: `loading="lazy"` on below-fold product images
- No `backdrop-filter` heavy blur stacks on animated elements

## Responsive Design

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Full parallax, 3-col grids, pinned horizontal scroll |
| Laptop (768–1024px) | Parallax reduced, 2-col grids, pinned scroll simplified |
| Tablet (640–768px) | Minimal parallax, 2-col grids, no pinning |
| Mobile (<640px) | No parallax/pinning, 1-col grids, video → poster image, swipe carousels |

## Bug Fixes (Required)

1. **Product image paths:** Fix `pcard()` to use mapped image filenames (p1–p6.png) instead of `js/assets/${p.id}.png`.
2. **Hero section HTML:** Restore hero to be populated by `renderHero()` — remove broken inline HTML with `${ICON.arrow}` literal.
3. **Malformed pcard markup:** Remove extra `</div>` closing tag in `pcard()` function.
4. **Missing `#how` and `#cats` and `#featured` sections:** The index.html home view only has a hero — the "how to use", "categories", and "featured" sections need to be present in the DOM for `renderHow()`, `renderCats()`, `renderFeatured()` to populate. These sections exist in the JS but have no corresponding container elements in the HTML.

## File Change Plan

| File | Changes |
|---|---|
| `index.html` | Add GSAP CDN scripts, fix hero section (restore JS-populated container), add missing section containers (`#how`, `#cats`, `#featured`), add cinematic hero video element, add video source |
| `css/styles.css` | Add cinematic hero styles, parallax layer styles, refined product card styles (real images), section transition gradients, responsive overrides, reduced-motion media query |
| `js/app.js` | Fix `pcard()` image path + markup, add image mapping object, integrate GSAP ScrollTrigger animations, add parallax setup, add hero video handling, enhance `renderHero()` for cinematic layout |
| `js/data.js` | Add `productImages` mapping object (product id → image filename) |
| `js/art.js` | No changes (SVG artwork preserved as fallback) |

## Accessibility

- All animations respect `prefers-reduced-motion`
- Video has `aria-hidden="true"` (decorative background)
- Product images have descriptive `alt` text
- Text contrast meets WCAG AA on all backgrounds (verify dark hero overlay)
- Focus states preserved (existing `:focus-visible` outline)
- Skip-to-content link preserved
