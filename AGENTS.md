# AGENTS.md — Amigosia Website (Antigravity / any coding agent)

**Read `CLAUDE.md` in the repo root first. It is the complete, authoritative build spec** — stack, design tokens, page specs, motion rules, and performance budgets. This file adds only the rules of engagement.

## Ground rules
1. **Content is law.** All copy comes from `content/site-content.md`. Never invent clients, dates, metrics, testimonials, or product claims. If copy for a section is missing, insert an obvious `{/* TODO: copy */}` placeholder and log it in `TODO-ASSETS.md`.
2. **Stack is frozen.** Next.js 15 + TypeScript + Tailwind 4 + shadcn/ui + Motion + Lenis + Spline (`@splinetool/react-spline/next`) + Resend. Do not introduce other UI kits, animation libraries, or state managers.
3. **Design tokens are frozen.** Mint `#a6e8cd` = surfaces/highlights only; emerald `#0e7a5f` = all interactive elements; light theme throughout. Check every text/background pair against WCAG AA before styling.
4. **Spline scenes are external.** Build `components/spline/spline-scene.tsx` once: props `{scene, poster, label}`; renders the poster `next/image` immediately, lazy-loads the runtime on visibility, skips the runtime entirely on mobile (<768px) or `prefers-reduced-motion`. Use placeholder posters until real scene URLs are supplied.

## Verification loop (especially for browser-in-the-loop agents)
After building or editing any section:
- Run `npm run build` — zero type/lint errors.
- Open the page at 1440px and 390px widths; verify: no horizontal overflow, entrance animations fire once, navbar transitions on scroll, marquee loops seamlessly, hover states work.
- Check `prefers-reduced-motion: reduce` renders a fully readable static page.
- Run Lighthouse (mobile) on Home and AI Products after major changes; budget ≥90 everywhere. If Spline drags performance, it loads later/smaller — never delete the section.

## Task granularity
Work section-by-section, in the build order defined in CLAUDE.md §7. One section per commit. Do not refactor unrelated files while completing a section task.
