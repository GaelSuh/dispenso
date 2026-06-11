# Dispenso — Marketing Site

Next.js 15 + React 19 + TailwindCSS + Framer Motion.

## Local development

```bash
cd apps/website
pnpm install        # if you haven't yet — workspace will resolve everything
pnpm dev            # http://localhost:4000
```

## Build

```bash
pnpm build
pnpm start          # production server on port 4000
```

## What's here

- `src/app/` — App Router pages. The `page.tsx` at the root composes
  the marketing sections in order.
- `src/components/` — Atomic primitives (`ui/`), section blocks
  (`sections/`), brand mark (`brand/`), the dashboard mockup
  (`showcase/`), and motion helpers (`motion/`).
- `src/lib/content.ts` — Single source of truth for all marketing
  copy. Edit headlines, prices, FAQ, etc. here.
- `src/lib/seo.ts` — Site-wide SEO defaults + per-page helper.
- `tailwind.config.ts` — The full design system: colors, type
  scale, motion timings, shadows.

## Design system at a glance

- **Brand**: clinical green `#71a22f`, derived ramp in OKLCH for
  perceptual smoothness.
- **Neutrals**: navy-tinted `ink` ramp (not pure greyscale).
- **Accent**: warm amber `#c68a2b`, used sparingly.
- **Type**: Inter Variable via `next/font/google`. Display sizes use
  tightened tracking; body text never goes below 14px.
- **Motion**: 600ms reveal on scroll, 200ms UI transitions, respects
  `prefers-reduced-motion`.

## SEO

- Metadata via `pageMetadata()` in every page.
- Sitemap auto-generated from `src/app/sitemap.ts`.
- `robots.ts` allows all bots.
- JSON-LD SoftwareApplication schema injected at the root layout.
- Add `/og.png` (1200×630) to `public/` for social share previews.

## Notes

- Tracking: none. No Google Analytics, no Segment, no Hotjar.
- Forms (Contact): currently simulate submission with a 700ms delay.
  Wire to the backend's contact endpoint when it lands.
- Update banner: not on the marketing site — that lives in the
  desktop client. This site simply links to `releases/latest`.
