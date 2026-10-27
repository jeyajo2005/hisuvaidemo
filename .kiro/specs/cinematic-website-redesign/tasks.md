# Implementation Plan: Cinematic Website Redesign

## Overview

Transform the existing Hisuvai/Ecodry health-mix powder website into a premium, cinematic product experience. The redesign elevates visual presentation through real product photography, scroll-driven GSAP animations, parallax depth, and refined typography — all on the existing vanilla HTML/CSS/JS stack enhanced with GSAP via CDN. All existing functionality (router, cart, search, account, WhatsApp checkout) must be preserved.

## Tasks

### 1. Foundation, Bug Fixes & GSAP Setup

- [ ] Foundation: Fix the home view in index.html by removing the broken inline hero HTML containing a `${ICON.arrow}` template literal and replacing it with a clean `<section class="hero" id="hero"></section>` container that renderHero() in app.js will populate. Add missing DOM containers to the home view: `<section class="how" id="how"></section>`, `<section class="cats" id="cats"></section>`, `<section class="featured" id="featured"></section>`, and `<section class="showcase" id="showcase"></section>`. Add GSAP and ScrollTrigger CDN script tags before app.js in index.html (gsap@3.12.5 and ScrollTrigger@3.12.5 from jsdelivr). Add a productImages mapping object to data.js mapping each product id to the correct image filename (p1–p6.png) by visually inspecting each image to match packaging labels — 12 products but only 6 images so unmapped products use the closest visual match. Fix pcard() in app.js: change image src from `js/assets/${p.id}.png` to use the productImages mapping and remove the extra closing `</div>` tag. Add gsap.registerPlugin(ScrollTrigger) and ensure the existing reduce variable gates all GSAP animations.

### 2. Cinematic Hero Section

- [ ] Hero: Modify renderHero() in app.js to generate a cinematic hero with a full-screen video background (autoplay, muted, loop, playsinline, poster=p1.png) using VID_20261026_005156_723.mp4 and a semi-transparent dark gradient overlay for text legibility. Add an animated headline with GSAP split-text reveal where words/lines rise and fade in sequence after the loader finishes. Keep the hero cycling through 4 products (banana, carrot, beetroot, moringa) with mapped product images and changing headline text, preserving existing carousel/dots/swipe functionality layered over the video. Add a floating product image with subtle parallax on scroll via GSAP ScrollTrigger scrub. Add a scroll indicator at the bottom (animated chevron). Add CSS in styles.css for video positioning, overlay gradient, headline typography (large serif, white, clamp sizing), product image float, and scroll indicator. On mobile (max-width 640px): hide video, show poster image as background, disable parallax, keep headline and CTA.

### 3. Product Sections: Featured Showcase & Horizontal Gallery

- [ ] Products: Update renderFeatured() in app.js to use real product images from the productImages mapping in clean containers with object-fit cover, subtle gradient backgrounds, and hover lift plus image zoom. Keep existing Add to cart button, price, wishlist heart, and category tag. Add GSAP ScrollTrigger stagger entrance (fade-in + slide-up, 0.1s stagger, once true). Update CSS for refined pcard and p-media styles with clean image containers, rounded corners, subtle shadows, warm gradients, and hover effects. Make the grid responsive (3 cols desktop, 2 tablet, 1 mobile). Create a new renderShowcase() function that builds a pinned horizontal scroll gallery where product images slide horizontally as the user scrolls vertically, each in an elegant frame with product name and category overlay, using GSAP ScrollTrigger pin true and horizontal x translation tied to scroll progress. Add showcase section container to index.html and call renderShowcase() in init. On tablet/mobile (max-width 1024px): convert to horizontal swipe carousel with overflow-x auto and scroll-snap. Add CSS for showcase frames, name overlays, and responsive fallback.

### 4. Brand Story, Benefits & Milestones

- [ ] Story: Refine the benefits/pillars section CSS with improved gradient icon badges, serif headings, and GSAP scroll-triggered slide-up plus fade stagger for each pillar. Enhance the brand story/visit section with parallax using GSAP ScrollTrigger scrub so the image moves at a different rate than the text, and refine the glass-card styling. Add a dark background variant for the brand story section for dramatic contrast. Refine the milestones section: keep the dark green background and glowing orb, enhance parallax on arch images via GSAP ScrollTrigger, and ensure the stats counter animation still works. Ensure all section headings follow the eyebrow plus large serif title pattern consistently.

### 5. How-to-Use, CTA, Footer & About Page

- [ ] Polish: Enhance the how-to-use section by making the pouch rotation/scale smoother using GSAP (replacing or augmenting the existing manual transform logic in updateHow) and refining step card styling and entrance animations. Refine the final CTA with a large serif headline "Bring the sunshine home", amber glow button effect, and sun graphic animation refinement. Keep the existing footer structure but refine wave transition, column styling, social link hover animations, and bottom bar. Enhance the about page with page hero refinement, scroll reveals for pillars/stats/timeline, and parallax on the visit section. Add scroll-triggered background gradient transitions between sections using subtle warm shifts via ScrollTrigger callbacks.

### 6. Responsive, Reduced Motion & Performance

- [ ] Responsive: Add responsive breakpoints — mobile (max-width 640px) with 1-col grids, poster image hero, no parallax/pinning, swipe carousels; tablet (641-768px) with 2-col grids, minimal parallax; laptop (769-1024px) with reduced parallax; desktop (1025px+) with full experience. Check every section at each breakpoint. Add a prefers-reduced-motion media query that disables all GSAP animations, shows content immediately, and stops video autoplay. Ensure the website is fully usable without animation. Performance: add loading lazy to below-fold images, preload metadata on the video, minimize will-change usage to only actively animated elements, use once true on ScrollTrigger reveal animations, and remove unnecessary backdrop-filter blur stacks on animated elements.

### 7. Final Quality Check & Refinement

- [ ] QA: Open the project in a browser and inspect every section visually (hero, featured products, showcase gallery, benefits, brand story, milestones, how-to-use, CTA, footer, about page, products page) and refine weak areas including spacing, typography, animations, image loading, and navigation. Fix any console errors, broken asset paths, and layout issues. Verify all product images (p1-p6.png) load correctly and are mapped to the right products. Verify text contrast meets WCAG AA on all backgrounds especially the dark hero overlay, and ensure focus states are visible. Verify all existing functionality still works: hash router navigation (home/products/about), cart add/remove/checkout via WhatsApp, search overlay, account modal sign-in/sign-up, wishlist, filter chips and sorting on products page, and quick view modal. Run through a complete purchase flow to confirm nothing is broken.

## Task Dependency Graph

- Task 1 (Foundation) has no dependencies and must complete first.
- Task 2 (Cinematic Hero) depends on Task 1.
- Task 3 (Product Sections) depends on Task 1.
- Task 4 (Brand Story, Benefits & Milestones) depends on Task 1.
- Task 5 (How-to-Use, CTA, Footer & About) depends on Tasks 2, 3, and 4.
- Task 6 (Responsive, Reduced Motion & Performance) depends on Tasks 2, 3, 4, and 5.
- Task 7 (Final Quality Check) depends on all previous tasks (1-6).

## Notes

- All tasks modify the same set of files (index.html, css/styles.css, js/app.js, js/data.js) so tasks 2-4 that depend on task 1 should be executed sequentially to avoid file conflicts, despite the dependency graph allowing parallel execution.
- The spec design document is at .kiro/specs/cinematic-website-redesign/design.md and requirements at .kiro/specs/cinematic-website-redesign/requirements.md.
- The project is a vanilla HTML/CSS/JS site with no build tools. Do not add npm dependencies or frameworks. GSAP is loaded via CDN only.
