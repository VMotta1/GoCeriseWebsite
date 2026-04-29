# Design Spec: GoCerise Landing Page

**Date:** 2026-04-29
**Status:** Approved
**Stack:** Next.js 14 App Router + Tailwind CSS

---

## Overview

A marketing landing page for GoCerise — a grocery price comparison app. The page is a single scrolling page driving waitlist signups. It is implemented from the high-fidelity design handoff at `design_handoff_gocerise/`.

---

## Architecture

### Project Structure

```
GoCerise Website/
├── app/
│   ├── layout.tsx          # Root layout — Inter font (400/700), metadata, globals
│   ├── page.tsx            # Server component — assembles all sections
│   └── globals.css         # Tailwind base + CSS custom properties
├── components/
│   ├── Navbar.tsx          # 'use client' — scroll listener, sticky transition
│   ├── Hero.tsx            # Server — static markup, contains HeroForm
│   ├── HeroForm.tsx        # 'use client' — email input, submit, toast
│   ├── HowItWorks.tsx      # Server wrapper — contains Carousel
│   ├── Carousel.tsx        # 'use client' — slide state, auto-advance, arrows, dots
│   ├── Waitlist.tsx        # Server wrapper — contains WaitlistForm
│   ├── WaitlistForm.tsx    # 'use client' — email input, submit, toast
│   ├── Footer.tsx          # Server — fully static
│   ├── Toast.tsx           # 'use client' — slide-up toast notification
│   └── LogoSVG.tsx         # Server — inline SVG from prototype
├── public/
│   └── assets/             # Copied from design_handoff_gocerise/assets/
├── tailwind.config.ts
└── next.config.ts
```

### Server / Client Split

| Component | Reason for client boundary |
|---|---|
| `Navbar` | `scroll` event listener |
| `HeroForm` | `useState` for input, toast trigger |
| `Carousel` | `useState` for active slide, `setInterval` auto-advance |
| `WaitlistForm` | `useState` for input, toast trigger |
| `Toast` | `useState` for show/hide animation |

All other components are server components.

---

## Sections

### Navbar
- `position: fixed; top: 0; z-index: 200; padding: 24px 32px 0`
- Transparent while hero is visible. Transitions to `bg-cream/92 backdrop-blur-md shadow` once `scrollY > window.innerHeight * 0.85`
- Transition: `background 0.45s ease, box-shadow 0.45s ease`
- Links: "How it works" → `#how`, "About us" → `#about`, "Join Waitlist" → `#waitlist` (green pill CTA)
- Mobile (≤767px): nav links hidden, show only logo + CTA

### Hero
- `position: sticky; top: 0; height: 100vh; z-index: 1`
- Background: `public/assets/hero-gradient.png` as `background: url(...) center/cover`
- Title: "Cherry pick your grocery prices" — Inter 700, 90px, white, max-width 800px
- Email form pill: white pill 342×50px, green "Join Waitlist" button
- On submit: clear input, show toast "🍒 You're on the list! We'll be in touch."

### Curtain (wraps all sections below hero)
- `position: relative; z-index: 2; background: #FFFBF0`
- Pure CSS stacking — no JS. The curtain slides over the sticky hero as the user scrolls.

### How It Works
- Background: `#FFFBF0`, `padding: 128px 64px`, `max-width: 1280px`
- Header: "How it works" (50px/700) + subtitle (30px/400/50% opacity)
- Carousel: 3 step cards (left, 384px wide) + phone image stack (right, 310×649px)
- Step cards: `border-radius: 30px`, shadow, active `opacity: 1`, inactive `opacity: 0.4`
- Phone images: absolutely stacked, crossfade via `opacity` transition 0.4s
- Dots: 3 × 8px circles, `opacity: 0.2` inactive / `opacity: 1` active
- Arrows: SVG chevrons at `left: -60px` / `right: -60px`, vertically centered
- Auto-advance: every 4s via `setInterval`

Steps:
1. "Create a list" → `assets/screen-create-list.png`
2. "Plan your trip" → `assets/screen-plan-trip.png`
3. "Cherry pick deals" → `assets/screen-optimized-route.png`

### Waitlist CTA
- Background: `linear-gradient(180deg, rgb(214,61,86) 0%, rgb(255,251,240) 100%)`
- `padding: 192px 64px`, `max-width: 1280px`
- Header: "Join Early Access Waitlist" + "Be first to try our app and start saving"
- Large email form pill: 683×100px, font-size 30px, "Join Waitlist" button

### Footer
- Background: `#9AC04D` (green-light), `padding: 128px 64px`, `max-width: 1280px`
- Top row: brand block (left, 288px) + links block (right, flex gap-64px)
  - Brand: "GoCerise" (700/30px) + tagline (400/20px)
  - Contact column: Email, Instagram, LinkedIn / TikTok, Twitter, Facebook
  - Legal & Support column: Privacy Policy, Terms of Service, help@gocerise.com
- Bottom: "© 2026 GoCerise. All rights reserved." centered, 400/20px

---

## Design Tokens (Tailwind theme extensions)

```ts
colors: {
  cream: '#FFFBF0',
  dark: '#343434',
  green: { DEFAULT: '#6A8E24' },
  'green-light': '#9AC04D',
  cherry: '#D63D56',
  'logo-red': '#C01B36',
}
```

Shadows, border-radii, and pixel-specific dimensions (e.g. `w-[342px]`, `h-[649px]`) use Tailwind arbitrary values.

---

## Responsive Behavior

| Breakpoint | Key changes |
|---|---|
| Desktop `≥1024px` | Full spec layout |
| Tablet `≤1023px` | Hero title 56px, carousel stacks vertically, waitlist form max-w-[560px], footer stacks vertically |
| Mobile `≤767px` | Hero title 38px, nav links hidden, waitlist form stacks as column, phone 220×461px |

---

## Interactions

| Interaction | Implementation |
|---|---|
| Curtain scroll | Pure CSS: `sticky + z-index` stacking. No JS. |
| Carousel | `useState`, `setInterval` auto-advance 4s, same `goToSlide(n)` for cards/dots/arrows |
| Navbar transition | `scroll` listener, toggle class at 85% viewport height |
| Form submit | `preventDefault`, clear input, trigger toast |
| Toast | Fixed bottom-center, `translateY` slide-up, shows 3.5s |
| Logo hover | Pill background fades in: `bg-black/8 rounded-full transition-colors` |

---

## Assets

| File | Usage |
|---|---|
| `public/assets/hero-gradient.png` | Hero background |
| `public/assets/screen-create-list.png` | Carousel slide 1 |
| `public/assets/screen-plan-trip.png` | Carousel slide 2 |
| `public/assets/screen-optimized-route.png` | Carousel slide 3 |
| `components/LogoSVG.tsx` | Inline SVG from prototype |

---

## Out of Scope

- Backend / waitlist service integration (Mailchimp, Resend, custom API) — forms are front-end only
- Analytics, SEO beyond basic metadata
- Dark mode