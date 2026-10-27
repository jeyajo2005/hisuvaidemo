# Requirements — Cinematic Website Redesign

## REQ-1: Cinematic Hero Section
The website must open with a full-screen cinematic hero featuring a video background (VID_20261026_005156_723.mp4) with graceful poster fallback, an animated headline with split-text reveal, a floating product image with parallax, and a clear CTA. On mobile, the video falls back to a poster image for performance.

## REQ-2: Use Real Product Assets
All 6 product images (p1–p6.png) and the logo must be used throughout the website. Product cards, hero carousel, and featured sections must display real product photography — never stock photos, AI-generated images, or placeholders. Original packaging and labels must not be altered. An image-to-product mapping must be established and applied consistently.

## REQ-3: Featured Products Showcase
A featured products section must display product cards in a responsive grid (3/2/1 columns) with real images, scroll-triggered stagger entrance animations, hover lift + image zoom effects, price, and "Add to cart" functionality preserved from the existing system.

## REQ-4: Product Benefits Section
A benefits/key features section must present 3 value propositions with gradient icon badges, serif headings, and scroll-triggered reveal animations.

## REQ-5: Brand Story with Immersive Visuals
A brand story section must use split-layout with parallax (image moves at different rate than text on scroll), the "Grown in sunshine, dried by it too" narrative, and the existing glass-card content (solar-dried, chemical-free, nutrients).

## REQ-6: Scroll-Driven Product Showcase
A scroll-driven product gallery must use GSAP ScrollTrigger pinning to translate product images horizontally as the user scrolls vertically. On mobile, this converts to a swipeable carousel without pinning.

## REQ-7: Milestones and Trust Section
The existing milestones section must be retained with its dark green background, glowing orb, and parallax arch images. The stats counter animation must be preserved.

## REQ-8: How to Use Section
The existing sticky-scroll 4-step "from pouch to glass" experience must be retained and refined with smoother GSAP-driven pouch animation and better step card styling.

## REQ-9: Final CTA and Footer
A warm closing CTA with "Bring the sunshine home" headline, amber glow button, sun graphic, and wave transition must precede the footer. Footer columns (shop, help, contact), social links, and copyright must be preserved.

## REQ-10: Preserve Existing Functionality
The hash-based router, cart with localStorage, search overlay, account modal, WhatsApp checkout, wishlist, and all data in data.js must remain fully functional. Only the presentation layer changes.

## REQ-11: Animation with Reduced-Motion Support
All scroll-triggered animations, parallax, and entrance effects must use GSAP + ScrollTrigger via CDN. Every animation must be disabled when `prefers-reduced-motion: reduce` is active, showing content immediately.

## REQ-12: Responsive Design
The website must be fully responsive across mobile (<640px), tablet (640–768px), laptop (768–1024px), and desktop (>1024px). Parallax and pinning are disabled on tablet/mobile. Grids collapse to fewer columns. Video hero falls back to poster image on mobile.

## REQ-13: Bug Fixes
Fix broken product image paths (code references `${p.id}.png` but files are `p1–p6.png`), restore the hero section (currently has broken inline HTML with `${ICON.arrow}` literal), remove the extra `</div>` in `pcard()`, and add missing DOM containers for `#how`, `#cats`, and `#featured` sections.

## REQ-14: Performance
Animations must use `will-change` sparingly, ScrollTrigger reveal animations use `once: true`, the video uses `preload="metadata"` with a poster image, and below-fold images use `loading="lazy"`. No heavy `backdrop-filter` stacks on animated elements.
