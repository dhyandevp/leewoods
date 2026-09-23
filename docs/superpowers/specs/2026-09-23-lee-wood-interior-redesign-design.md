# Lee Wood Interior — Full Redesign Specification

## 1. Overview & Vision
A complete, ground-up redesign of the **Lee Wood Interior** website into an award-level architectural interior studio portfolio.
- **Atmosphere**: Warm architectural minimalism, tropical modern, cinematic, tactile, quiet luxury.
- **Strict Brand Rule**: The primary logo must **ONLY** read `LEE WOOD INTERIOR`. Under no circumstances will "Kannur / Kerala", "Interior / Kannur", or any subtitle appear in or below the logo. Location information lives solely within body copy, the Contact section, and the global footer.

---

## 2. Design System Tokens & Foundations

### 2.1 Colors
- **Canvas / Primary Background**: Warm Ivory `#F3F0E8` (`oklch(0.955 0.012 85)`)
- **Primary Dark / Forest**: Deep Forest Green `#062018` (`oklch(0.18 0.04 165)`)
- **Accent**: Muted Bronze `#B98A4A` (`oklch(0.64 0.11 68)`) — used sparingly for eyebrows, selected accent words, and critical CTAs.
- **Primary Text**: Deep Forest `#062018`
- **Secondary / Muted Text**: Stone Green `#68716C` (`oklch(0.52 0.012 165)`)
- **Borders & Dividers**: `rgba(6, 32, 24, 0.14)` on light; `rgba(243, 240, 232, 0.16)` on dark.
- **Dark Surface Text**: Warm Ivory `#F3F0E8`

### 2.2 Typography
- **Font Stack**: Clean, refined contemporary sans (`Manrope` primary sans, `Instrument Sans` secondary, loaded via Google Fonts).
- **Scale**:
  - Hero display: `clamp(3.5rem, 7vw, 6.25rem)` (80–100px), regular weight, tight tracking (`-0.025em`).
  - Major section headings: `clamp(2.5rem, 5vw, 4.5rem)` (55–75px).
  - Secondary headings / titles: `1.75rem – 2.5rem` (28–40px).
  - Body copy: `0.9375rem – 1.0625rem` (15–17px), line-height `1.75`.
  - Micro labels / Eyebrows: `0.6875rem – 0.75rem` (11–12px), uppercase, tracking `0.1em`.
  - Global minimum size rule: `0.75rem` (12px) minimum for all navigation and footer utility text, guaranteeing readability and high contrast.

### 2.3 Global Container & Grid
- **Global Container Width**: `max-w-[1480px]`, `w-[calc(100%-80px)]` on desktop (≥1024px), `w-[calc(100%-32px)]` on mobile (<768px), centered `mx-auto`.
- **12-column grid** shared identically by Header, Hero, Studio, Services, Gallery, FAQ, Contact, and Footer.

---

## 3. Structural Components & Layouts

### 3.1 Global Header & Navigation
- **Height**: 76px–84px on desktop, 64px on mobile.
- **Sticky state**: `rgba(243, 240, 232, 0.94)` with `backdrop-filter: blur(10px)` and subtle bottom border.
- **Logo**: `LEE WOOD INTERIOR` only, clean tracking, no subtitles.
- **Links**: `PROJECTS`, `STUDIO`, `SERVICES`, `GALLERY`, `FAQ`, `CONTACT`.
- **Mobile**: Minimalist full-screen overlay menu with staggered fade-in navigation links.

### 3.2 Global Footer
- **Background**: Deep Forest Green `#062018`.
- **Contrast**: Text in `#F3F0E8` and `#F3F0E8/70`, contrast ratio > 10:1.
- **Top Row**: Brand `LEE WOOD INTERIOR © 2026`, Navigation links, and Studio location `KANNUR / KERALA`.
- **Bottom Row**: Studio details, Directions, WhatsApp, Phone, Instagram.

---

## 4. Page Architectures

### 4.1 Home Page
1. **Hero**: Asymmetric split (42% text, 58% cinematic image). Headline: "Lee Wood [Interior]" with "Interior" highlighted in Bronze. Action: "VIEW PROJECTS →". Subtle "01" and scroll indicator.
2. **Studio Intro**: Split composition. Left: large interior image with overlapping deep-green caption badge. Right: "01 / THE STUDIO — Built around the way you live." and "MEET THE STUDIO →".
3. **Design Philosophy Manifesto**: "02 / HOW WE THINK — The room leads the design." Three structured principles:
   - `01 Purpose`: Architecture starts from habit, movement, and light.
   - `02 Proportion`: Balance between architectural volume and negative space.
   - `03 Material`: Solid teak, honest stone, textured linens, and brass accents.
4. **Services (Dark Section)**: Deep forest `#062018`. Heading: "Spaces with purpose." Three large image-driven editorial panels:
   - Modular Kitchens
   - Wardrobes
   - Living & Work
5. **Featured Project**: Asymmetrical spotlight on "THE EVENING RESIDENCE" with cinematic photography and project credits.
6. **Editorial CTA**: Full-width tropical residence background, dark text overlay, actions: "START AN ENQUIRY →" and "GET DIRECTIONS".

### 4.2 Studio / About Page
- **Hero**: "01 / THE STUDIO — Spaces made [to belong.]" with large editorial imagery.
- **Manifesto & Principles**: In-depth breakdown of the studio's craft philosophy.
- **03 / Local Practice**: Dark forest section detailing the practice rooted in Kannur, tropical climate responses, local craftsmanship, and material honesty.

### 4.3 Services Page
- **Hero**: "INTERIOR DISCIPLINES — What we [shape.]"
- **Alternating Editorial Modules**:
  1. Modular Kitchens (image left, copy right)
  2. Bespoke Wardrobes (image right, copy left)
  3. Living & Media (image left, copy right)
  4. Complete Interiors (image right, copy left)
- **Project Scope Grid**: Clean typography list of residential, commercial, custom furniture, and spatial detailing capabilities.

### 4.4 Gallery / Portfolio Page
- **Hero**: "LEE WOOD INTERIOR / SELECTED SPACES — INTERIOR PORTFOLIO".
- **Curated Asymmetric Grid**: 6 distinct projects without image duplicates, mixing 3-col grids, 2-col features, and full-width focal anchors with smooth hover zoom.

### 4.5 FAQ Page
- **Hero**: "QUESTIONS / PROCESS / SCOPE — FREQUENTLY ASKED QUESTIONS".
- **Sections**: "Planning" and "Services".
- **Accordion Design**: Wide horizontal editorial accordions with minimal 1px dividing lines, smooth height animations, zero SaaS card styling.

### 4.6 Contact Page
- **Hero**: "PROJECT ENQUIRIES — LET'S SHAPE YOUR [space.]"
- **Split Section**:
  - Left: Studio address (Pialathara, Cheruthazham, Kannur District, Kerala 670741), Google Maps link, Instagram link, phone, and cinematic architectural photograph.
  - Right: Architectural brief enquiry form with clean borderless/underlined input styling.

---

## 5. Stitch MCP Integration
1. **Design System Creation**:
   - Create project `Lee Wood Interior — Architectural Studio` via `mcp__stitch__create_project`.
   - Upload full `DESIGN.md` defining Warm Ivory, Deep Forest, Muted Bronze, typography, and spacing tokens via `mcp__stitch__upload_design_md`.
2. **Screen Generation**:
   - Generate screens for Home (Hero & Studio), Services (Dark panels), and Contact/Portfolio in Stitch MCP as visual references.

---

## 6. Implementation Integrity & Verification
- Strict responsive testing at 1440px, 1024px, 768px, and 390px viewports.
- No SaaS styling, no duplicate cards, no horizontal overflow.
- WCAG 2.2 AA compliant contrast for all text (especially footer and dark sections).
