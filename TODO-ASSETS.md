# Pending Assets

Tracks brand/media assets referenced in code as placeholders. Per `CLAUDE.md` §7 — update this list whenever a new placeholder poster/scene/asset is added or an existing one is finally supplied.

## Spline 3D scenes

| Slot label | Used in | Scene URL | Poster path | Status |
|---|---|---|---|---|
| `SPLINE_HERO_LOGO` | `components/sections/home/hero-section.tsx` | *(empty)* | `/spline-poster-hero-logo.png` | Pending — floating 3D Amigosia logo mark for the hero. Small (~200–280px), poster should be square/transparent-friendly. |
| `SPLINE_DEEPLENS_TEASER` | `components/sections/home/ai-products.tsx` | *(empty)* | `/spline-poster-deeplens.png` | Pending |
| `SPLINE_DEPLOYMIND_TEASER` | `components/sections/home/ai-products.tsx` | *(empty)* | `/spline-poster-deploymind.png` | Pending |

None of the poster images above exist in `public/` yet — `SplineScene` falls back to a centered "Pending Spline Scene" text label until both `scene` and `poster` are supplied.

## Hero background video

`HeroSection` (`components/sections/home/hero-section.tsx`) accepts an optional `backgroundVideo` prop (mp4 URL). Currently unset in `app/page.tsx`, so the hero renders its default mint radial-glow background. To enable: drop a video file in `public/`, then pass `<HeroSection backgroundVideo="/hero-bg.mp4" />` in `app/page.tsx`.

## Client logos

`ClientsImpact` (`components/sections/home/clients-impact.tsx`) renders a `LogoLoop` marquee using styled text (company names) as placeholder logos — no image assets exist for:
- Kudumbashree (Govt. of Kerala)
- Kerala Livestock Development Board
- Logizen LLC (USA)
- KBN Holdings (Qatar)

Once real logo files (SVG/PNG, transparent background) are available, swap the `node`-based `LogoItem`s in `clientLogos` for `src`-based image items.
