# Lee Wood Interior Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely redesign the Lee Wood Interior web application from the ground up to an award-level architectural interior studio portfolio with Stitch MCP integration, fixing typography contrast and strictly enforcing the brand logo rule.

**Architecture:** Tailwind CSS v4 design tokens re-anchored to Warm Ivory (`#F3F0E8`), Deep Forest Green (`#062018`), and Muted Bronze (`#B98A4A`). A uniform 12-column global grid (`max-w-[1480px]`) shared across all sections. Reusable architectural layout primitives (asymmetric hero, philosophy manifesto, alternating editorial modules, thin-rule accordions) powering Home, Studio, Services, Gallery, FAQ, and Contact routes.

**Tech Stack:** React 18, React Router v6, Tailwind CSS v4, Lucide React icons, Stitch MCP server.

**Spec:** `docs/superpowers/specs/2026-09-23-lee-wood-interior-redesign-design.md`

## Global Constraints

- **STRICT BRAND RULE**: The logo must **ONLY** say `LEE WOOD INTERIOR`. Never include "Kannur / Kerala", "Interior / Kannur", or any subtitle inside or directly below the logo.
- Location ("Kannur, Kerala") may only appear in body copy, Studio section, Contact page, or the global footer location slot.
- Minimum typography size is `0.75rem` (12px); no UI text or footer text below 12px.
- Text contrast must exceed WCAG 2.2 AA (minimum 4.5:1, target > 7:1 on dark sections).
- Zero SaaS tropes: no neon gradients, no excessive rounded cards, no glassmorphism cards, no generic card grids.
- Global grid: `max-w-[1480px]`, `w-[calc(100%-80px)]` on desktop (≥1024px), `w-[calc(100%-32px)]` on mobile (<768px).

## Review Focus

1. Logo text across header, drawer, and footer contains no location tags.
2. Footer font size is ≥ 12px and has high contrast against `#062018` dark footer background.
3. No horizontal scrollbar at any viewport width (360px, 390px, 768px, 1024px, 1440px).
4. No duplicate images across the Gallery portfolio projects.
5. All navigation links and contact forms function seamlessly without layout shifts or clipping.

---

### Task 1: Stitch MCP Setup & Design System Asset Creation

**Files:**

- Create: `stitch/DESIGN.md`

**Interfaces:**

- Produces: Stitch project ID and remote design system asset with tokens matching the spec.

- [ ] **Step 1: Write `stitch/DESIGN.md` containing the Warm Architectural Minimalism design system**
- [ ] **Step 2: Create Stitch project `Lee Wood Interior — Architectural Studio` using `mcp__stitch__create_project`**
- [ ] **Step 3: Base64-encode and upload `stitch/DESIGN.md` using `mcp__stitch__upload_design_md` and `mcp__stitch__create_design_system_from_design_md`**
- [ ] **Step 4: Generate Home Screen reference in Stitch MCP using `mcp__stitch__generate_screen_from_text`**
- [ ] **Step 5: Commit `stitch/DESIGN.md` and log project ID**

---

### Task 2: Design System Token & Typography Infrastructure in Codebase

**Files:**

- Modify: `src/styles.css`
- Modify: `index.html`

**Interfaces:**

- Produces: `--color-background` (`#F3F0E8`), `--color-foreground` (`#062018`), `--color-bronze` (`#B98A4A`), `--color-muted` (`#68716C`), `--color-footer` (`#062018`), updated typography scales and grid utilities.

- [ ] **Step 1: Verify Google Fonts in `index.html` loads `Manrope` (400, 500, 600) and `Instrument Sans` (400, 500, 600)**
- [ ] **Step 2: Update `@theme inline` and `:root` / `.dark` color tokens in `src/styles.css` to spec values**
- [ ] **Step 3: Replace footer CSS utilities to set font-size to `0.75rem` / `0.8125rem` and high-contrast ivory text**
- [ ] **Step 4: Update global grid utilities (`.site-container`, `.editorial-title`, `.section-title`, `.section-label`)**
- [ ] **Step 5: Verify build with `npm run build`**
- [ ] **Step 6: Commit changes: `git commit -m "style: update design tokens, typography scale, and footer contrast"`**

---

### Task 3: Global Header, Wordmark, and Footer Redesign

**Files:**

- Modify: `src/components/site-chrome.tsx`

**Interfaces:**

- Consumes: Design tokens from `src/styles.css`
- Produces: `Wordmark` (strictly `LEE WOOD INTERIOR`), `SiteHeader`, `SiteFooter`, `PageIntro`, `EditorialCta`, `SectionLabel`.

- [ ] **Step 1: Update `Wordmark` component to render solely `LEE WOOD INTERIOR` with refined tracking and zero subtitles**
- [ ] **Step 2: Update `SiteHeader` with sticky blur, subtle bottom rule, and desktop nav items (`PROJECTS`, `STUDIO`, `SERVICES`, `GALLERY`, `FAQ`, `CONTACT`)**
- [ ] **Step 3: Update `SiteFooter` layout to deep forest `#062018` with top row (brand, nav, Kannur location) and bottom row (utilities)**
- [ ] **Step 4: Update `MobileMenu` with clean full-screen staggered transitions**
- [ ] **Step 5: Verify build with `npm run build`**
- [ ] **Step 6: Commit changes: `git commit -m "feat: redesign Wordmark, SiteHeader, and SiteFooter"`**

---

### Task 4: Home Page Redesign

**Files:**

- Modify: `src/routes/index.tsx`

**Interfaces:**

- Consumes: `SiteHeader`, `SiteFooter`, `SectionLabel`, `Wordmark` from `src/components/site-chrome.tsx`
- Produces: Home page route (`/`) matching spec sections 7–12.

- [ ] **Step 1: Build asymmetric split Hero (42% text with bronze "Interior" / 58% cinematic photography, "01", scroll cue)**
- [ ] **Step 2: Build Studio Intro split section with overlapping deep-green caption badge and "Built around the way you live."**
- [ ] **Step 3: Build Design Philosophy Manifesto ("02 / HOW WE THINK" with `01 Purpose`, `02 Proportion`, `03 Material`)**
- [ ] **Step 4: Build dark forest Services section (`#062018`) with large image panels for Kitchens, Wardrobes, Living & Work**
- [ ] **Step 5: Build Featured Project spotlight ("THE EVENING RESIDENCE") with credits and CTA**
- [ ] **Step 6: Build Editorial CTA section with full-width tropical backdrop**
- [ ] **Step 7: Verify build with `npm run build`**
- [ ] **Step 8: Commit changes: `git commit -m "feat: redesign Home page with architectural editorial layout"`**

---

### Task 5: Studio / About Page Redesign

**Files:**

- Modify: `src/routes/about.tsx`

**Interfaces:**

- Consumes: `SiteHeader`, `SiteFooter`, `SectionLabel`
- Produces: Studio page route (`/about` or `/studio`) matching spec section 13.

- [ ] **Step 1: Build Hero with "01 / THE STUDIO — Spaces made to belong." (bronze accent) and large photography**
- [ ] **Step 2: Build Philosophy Manifesto section with 3 principles**
- [ ] **Step 3: Build dark forest "03 / LOCAL PRACTICE — Rooted in Kannur." section explaining tropical architectural context**
- [ ] **Step 4: Connect standard Editorial CTA and Footer**
- [ ] **Step 5: Verify build with `npm run build`**
- [ ] **Step 6: Commit changes: `git commit -m "feat: redesign Studio / About page"`**

---

### Task 6: Services Page Redesign

**Files:**

- Modify: `src/routes/services.tsx`

**Interfaces:**

- Consumes: `SiteHeader`, `SiteFooter`, `SectionLabel`
- Produces: Services page route (`/services`) matching spec section 14.

- [ ] **Step 1: Build Hero with "INTERIOR DISCIPLINES — What we shape." (bronze "shape.")**
- [ ] **Step 2: Build 4 alternating large editorial modules (Kitchens, Wardrobes, Living & Media, Complete Interiors)**
- [ ] **Step 3: Build Project Scope grid with clear typography tags**
- [ ] **Step 4: Connect Editorial CTA and Footer**
- [ ] **Step 5: Verify build with `npm run build`**
- [ ] **Step 6: Commit changes: `git commit -m "feat: redesign Services page with alternating editorial sections"`**

---

### Task 7: Gallery & Portfolio Page Redesign

**Files:**

- Modify: `src/routes/gallery.tsx`

**Interfaces:**

- Consumes: `SiteHeader`, `SiteFooter`
- Produces: Gallery route (`/gallery` and `/projects`) matching spec section 15.

- [ ] **Step 1: Build Hero with "LEE WOOD INTERIOR / SELECTED SPACES — INTERIOR PORTFOLIO"**
- [ ] **Step 2: Curate 6 distinct projects without image duplicates, combining 3-col grid, 2-col features, and full-width anchors**
- [ ] **Step 3: Implement image hover zoom and architectural project metadata**
- [ ] **Step 4: Connect Editorial CTA and Footer**
- [ ] **Step 5: Verify build with `npm run build`**
- [ ] **Step 6: Commit changes: `git commit -m "feat: redesign Gallery / Portfolio page with curated asymmetric grid"`**

---

### Task 8: FAQ & Contact Pages Redesign

**Files:**

- Modify: `src/routes/faq.tsx`
- Modify: `src/routes/contact.tsx`

**Interfaces:**

- Consumes: `SiteHeader`, `SiteFooter`
- Produces: FAQ route (`/faq`) and Contact route (`/contact`) matching spec sections 16 & 17.

- [ ] **Step 1: Redesign FAQ with wide horizontal thin-divider accordions for Planning & Services**
- [ ] **Step 2: Redesign Contact page with split layout: left studio address in Kannur, right architectural brief enquiry form**
- [ ] **Step 3: Verify build with `npm run build`**
- [ ] **Step 4: Commit changes: `git commit -m "feat: redesign FAQ and Contact pages"`**

---

### Task 9: Final Quality Gate, Contrast & Viewport Verification

**Files:**

- All routes and components

**Interfaces:**

- Produces: Verified production build, browser screenshots at 1440px and 390px, accessibility contrast audit.

- [ ] **Step 1: Run production build `npm run build` and ensure clean output**
- [ ] **Step 2: Launch Vite preview / dev server and test with Chrome DevTools at 1440px and 390px**
- [ ] **Step 3: Inspect Logo text across all pages to guarantee zero location text**
- [ ] **Step 4: Inspect Footer text contrast and font size (≥12px, >7:1 contrast ratio)**
- [ ] **Step 5: Final git commit and summary report**
