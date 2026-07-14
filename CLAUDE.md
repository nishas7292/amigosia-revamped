# CLAUDE.md — Amigosia Website Master Build Spec

You are building the marketing website for **Amigosia Private Limited** (www.amigosia.com), a product-centric software company from Kerala, India, with two flagship in-house AI products (DeepLens, DeployMind). The reference quality bar is https://webandcrafts.com — a light, premium, motion-rich corporate site. All page copy lives in `content/site-content.md`; never invent facts, clients, dates, or product claims not present there.

## 1. Stack (fixed — do not substitute)

- **Next.js 15, App Router, TypeScript, strict mode.** React Server Components by default; `"use client"` only for interactive/animated components.
- **Tailwind CSS 4** with design tokens defined as CSS variables in `globals.css` (see §3).
- **shadcn/ui** as the component foundation (button, input, textarea, card, navigation-menu, sheet, accordion, badge). Initialize with the neutral base color, then override tokens.
- **Motion (framer-motion)** for all component and scroll animations.
- **Lenis** (`lenis/react`) for smooth scrolling, mounted once in the root layout.
- **ReactBits** (reactbits.dev) patterns for: animated text reveal, count-up stats, logo marquee, spotlight/glare cards. Re-implement or copy the component into `components/reactbits/` — do not add unmaintained npm wrappers.
- **Spline** (`@splinetool/react-spline/next`) for 3D scenes. Scenes are authored externally; components must accept a `scene` URL prop and render a **static poster-image fallback** until the runtime lazy-loads. Never block LCP on Spline.
- **Resend** for the contact form (server action). Env: `RESEND_API_KEY`, `CONTACT_TO=admin@amigosia.com`.
- **Deployment:** Vercel. Use `next/image` for every raster image.

Do NOT add: Redux, styled-components, GSAP (Motion covers our needs), a CMS, or any UI kit beyond shadcn + the copied ReactBits components.

## 2. Repository layout

```
app/
  layout.tsx            # fonts, Lenis provider, Navbar, Footer, metadata defaults
  page.tsx              # Home
  about/page.tsx
  ai-products/page.tsx  # flagship page — highest polish
  products/page.tsx
  services/page.tsx
  clients/page.tsx
  contact/page.tsx
  sitemap.ts  robots.ts  opengraph-image.tsx
components/
  layout/   (navbar, footer, section, container)
  motion/   (fade-in, stagger, count-up, marquee, text-reveal, parallax)
  sections/ (one file per homepage/inner-page section)
  spline/   (spline-scene.tsx with poster fallback + reduced-motion guard)
  ui/       (shadcn)
content/
  site-content.md       # canonical copy — single source of truth
lib/  public/
```

## 3. Design tokens — light, clean, mint

Brand primary: **#a6e8cd** (mint). It is a *surface/highlight* color, not an interactive color — it fails WCAG contrast on white. All interactive elements and accent text use deep emerald.

```css
:root {
  --mint:        #a6e8cd;  /* brand surfaces, highlights, glows, chart fills */
  --mint-soft:   #e7f9f1;  /* tinted section backgrounds */
  --emerald:     #0e7a5f;  /* links, buttons, accent text — passes AA on white */
  --emerald-dark:#0a5c48;  /* button hover */
  --ink:         #0b1512;  /* headings, near-black with green undertone */
  --body:        #3f4d48;  /* body text */
  --muted:       #6b7a74;
  --surface:     #ffffff;
  --surface-alt: #f6faf8;  /* alternating section bands */
  --border:      #e3ece8;
}
```

Rules:
- White page base; alternate sections between `--surface` and `--surface-alt`/`--mint-soft` bands (WAC-style rhythm). No dark sections except the pre-footer CTA, which may be `--ink` with mint accents for contrast punch.
- Buttons: primary = emerald bg / white text; secondary = white bg / emerald border+text. Mint may appear as button glow/hover halo only.
- Mint usage: stat-card backgrounds, badge fills, decorative blobs/gradients (`radial-gradient` mint → transparent), icon tiles, hover glows, timeline dots, chart strokes.
- Typography: headings **"Instrument Sans"** or **"General Sans"** (fallback: Inter) — tight tracking, weights 500–600 (never 800 blocky). Body: Inter 400/16px, 1.7 line-height. Type scale: 15/17/20/24/32/44/64 with `clamp()` for the two largest.
- Radius 12–16px cards, 999px pills. Shadows: soft, tinted `rgba(14,122,95,.08)` — never harsh black.
- Spacing: sections `py-24 md:py-32`; max content width 1200px (`Container` component).

## 4. Motion rules (apply globally)

- Every section's content enters with fade-up (`y: 24 → 0`, opacity, 0.6s, ease `[0.22, 1, 0.36, 1]`), staggered 0.08s between children, triggered at `whileInView` with `viewport={{ once: true, margin: "-80px" }}`.
- Hero headline uses word-by-word text reveal (ReactBits SplitText pattern).
- Stats use CountUp on scroll-into-view.
- Client/recognition logos use an infinite CSS marquee (pause on hover).
- Cards get subtle hover lift (`y: -4`, shadow deepen) + mint border glow.
- Honor `prefers-reduced-motion`: disable Lenis, replace all entrance animation with simple opacity, render Spline posters instead of runtimes.
- Nothing autoplays sound; no scroll-jacking; horizontal scrollers must also work with native drag on touch.

## 5. Page specs

### Home (`/`) — section order
1. **Hero** — full-viewport, white with a large mint radial glow. H1: "Building Scalable Digital Products for Startups, Enterprises, and Global Partners" (word reveal). Subheadline per content file. CTAs: [Explore Our AI Products → /ai-products] (primary), [Talk to Us → /contact] (secondary). Right/background: Spline scene slot `SPLINE_HERO` (abstract network/graph of nodes — DeepLens metaphor) with poster fallback.
2. **Trust strip** — "Recognized by Start-up India · Kerala Start-up Mission" + client logo marquee (Kudumbashree, Kerala Livestock Development Board, Logizen LLC, KBN Holdings). Grayscale logos, color on hover.
3. **Who We Are** intro band (mint-soft bg) with [Learn More About Us →].
4. **AI Flagship Products** — the centerpiece. Two large alternating feature rows (DeepLens, DeployMind) with copy from content file, feature bullets as check-list, Spline slots `SPLINE_DEEPLENS_TEASER` / `SPLINE_DEPLOYMIND_TEASER`, and per-product CTA. Section CTA: [View All AI Products →].
5. **Products preview** — bento grid of 5 cards (PocketMart, NearByEstate, Near2Me, Cloud Kitchen Platform, DigiCoupon), varying spans, icon tiles on mint.
6. **Services preview** — 5 service cards, [See Our Expertise →].
7. **Impact / Clients** — client-relationship table rendered as cards + stat strip if numbers provided.
8. **Closing CTA** — dark ink band, "Have a Product in Mind?", [Start a Conversation].

### AI Products (`/ai-products`) — highest-effort page
- Hero: "AI Products / Built in-house. Real engineering, not wrappers."
- **DeepLens** block: problem → solution narrative; "How it works" as a 3-step (Map / Detect / Analyze) scroll-progress stepper — as the user scrolls, steps activate sequentially (Motion `useScroll` + sticky column; no GSAP). Differentiators, Roadmap, Enterprise & privacy subsections. CTA: demo link deeplens.near2me.app + [Request a Demo].
- **DeployMind** block: same structure (Connect / Generate / Go live), "What you get" checklist, "By the numbers" stat strip (minutes · zero DevOps · 4 clouds), Spline slot `SPLINE_DEPLOYMIND_FLOW` (repo → pipeline → cloud).

### About — company story, recognition badges, team grid placeholder, animated vertical timeline (Sept 2022 → 2024 → Oct 2025 → 2026) with mint dots and scroll-draw line.
### Products — 5 product cards expanded, consistent template so new products drop in easily.
### Services — expertise stack groups (Design & Frontend / Backend / Database & Cloud / AI Systems) as tag clouds + 5 service offerings; cross-link AI expertise to DeepLens/DeployMind ("see this in action →").
### Clients — 4 client case cards from content file. No invented metrics or testimonials.
### Contact — split layout: left = address/email/phone from content file; right = form (Name, Email, Company, Message) via server action + Resend, with success/error states and honeypot spam field.

### Navigation
`Home | About | AI Products | Products | Services | Clients | Contact` — AI Products directly after About. Sticky navbar: transparent over hero → white blurred with border after 24px scroll. Mobile: shadcn Sheet drawer. CTA button "Talk to Us" persistent in navbar.

## 6. Performance & SEO budgets (hard requirements)

- Lighthouse mobile ≥ 90 across all categories on every page.
- LCP element is always text or a `next/image` poster — never a Spline canvas. Spline runtimes load via dynamic import on visibility (IntersectionObserver) and only on `(min-width: 768px)` + no reduced-motion.
- Per-page `metadata` export: unique title (`… | Amigosia`), description, OpenGraph. JSON-LD `Organization` on home. `sitemap.ts` + `robots.ts`.
- All images have explicit dimensions and descriptive alt text. Fonts via `next/font` (no layout shift).

## 7. Working conventions for the agent

- Build order: tokens/layout shell → motion primitives → Home → AI Products → remaining pages → contact form → SEO/perf pass.
- One section = one component file; pages compose sections. Keep components < 200 lines.
- After each page, run `npm run build` and fix all type/lint errors before moving on.
- Use placeholder poster images (solid mint-soft with centered label) wherever a Spline URL or brand asset is pending; list every pending asset in `TODO-ASSETS.md`.
- Commit per completed section with conventional commit messages.
