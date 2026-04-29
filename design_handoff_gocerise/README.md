# Handoff: GoCerise Landing Page

## Overview
A marketing landing page for **GoCerise** — a grocery price comparison app that helps users "cherry pick" the best grocery prices across nearby stores. The page is designed to drive waitlist signups. It includes a full-viewport hero, a "How it works" interactive carousel, a CTA section, and a branded footer.

---

## About the Design Files
The file `GoCerise Website.html` is a **high-fidelity design reference** built in HTML/CSS/JS. It is a prototype showing the intended look, layout, spacing, typography, colors, and interactions — not production code to be shipped directly.

**Your task:** Recreate this design in your target codebase (React, Next.js, Vue, etc.) using its established patterns, component libraries, and routing conventions. If no framework exists yet, Next.js + Tailwind CSS is recommended.

---

## Fidelity
**High-fidelity.** All colors, typography, spacing, border radii, shadows, and interactions are final and should be matched precisely. Use the token values listed below.

---

## Screens / Views

### 1. Full Page — Desktop (1280px wide)

The page is a single scrolling page with 4 main sections stacked vertically.

---

### Section 1: Hero

**Behavior:** Sticky / pinned. The hero stays fixed at `top: 0` while the curtain content scrolls over it.

**Layout:**
- `position: sticky; top: 0; height: 100vh; width: 100%; z-index: 1; overflow: hidden`
- Content centered both horizontally and vertically (`display: flex; align-items: center; justify-content: center`)

**Background:**
- Source image: `assets/hero-gradient.png` — a blurred mesh gradient (olive green top-left, cherry pink center-right)
- Use as `background: url(...) center/cover no-repeat`

**Title:**
- Text: `"Cherry pick your grocery prices"`
- Font: Inter, 700, 90px, line-height 105%, color `#ffffff`
- `text-align: center; max-width: 800px`
- Wraps naturally — no forced line break

**Email Form (pill):**
- Container: `background: #ffffff; border-radius: 1500px; box-shadow: 0px 4px 10px rgba(0,0,0,0.15); padding: 8px; width: 342px; height: 50px; display: flex; align-items: center`
- Input: `font-size: 15px; color: #343434; placeholder color: rgba(52,52,52,0.5); border: none; outline: none; flex: 1; padding: 0 16px`
- Button: `background: #6A8E24; color: #FFFBF0; font-size: 15px; font-weight: 700; border-radius: 1000px; padding: 8px 16px; height: 34px`
- On submit: clear input, show success toast

---

### Section 2: How It Works (Curtain Content — slides over hero)

Everything from this section downward is wrapped in a `position: relative; z-index: 2; background: #FFFBF0` container — this is the "curtain" that slides over the sticky hero as the user scrolls.

**Layout:**
- `width: 100%; max-width: 1280px; margin: 0 auto; padding: 128px 64px; display: flex; flex-direction: column; align-items: center; gap: 64px; background: #FFFBF0`

**Section Header:**
- Title: `"How it works"` — Inter 700, 50px, color `#343434`, `text-align: center`
- Subtitle: `"Compare prices across stores and find the best route in seconds"` — Inter 400, 30px, color `rgba(52,52,52,0.5)`, `text-align: center`
- Gap between title and subtitle: 32px

**Carousel:**
- Container: `width: 970px; display: flex; align-items: center; gap: 64px; position: relative`
- Left column (step cards): `width: 384px; display: flex; flex-direction: column; gap: 64px`
- Right column (phone image): `flex: 1; display: flex; flex-direction: column; align-items: center; gap: 24px`

**Step Cards (3 total):**
Each card:
- `border-radius: 30px; background: #FFFBF0; box-shadow: 0px 4px 10px rgba(52,52,52,0.15); padding: 32px; min-height: 168px; cursor: pointer`
- Active card: `opacity: 1`
- Inactive cards: `opacity: 0.4; transition: opacity 0.25s ease`
- Title: Inter 700, 30px, color `#343434`
- Description: Inter 400, 15px, line-height 150%, color `#343434`

Step 1 — **Create a list**
- Title: `"Create a list"`
- Desc: `"Create a list, name it, search and add items, and customize your list"`
- Phone image: `assets/screen-create-list.png`

Step 2 — **Plan your trip**
- Title: `"Plan your trip"`
- Desc: `"Set location, choose shopping radius, and select how we find your deals"`
- Phone image: `assets/screen-plan-trip.png`

Step 3 — **Cherry pick deals**
- Title: `"Cherry pick deals"`
- Desc: `"Let the app do the work and find the best deals based on your preferences"`
- Phone image: `assets/screen-optimized-route.png`

**Phone Image Area:**
- Wrap: `position: relative; width: 310px; height: 649px`
- 3 images stacked absolutely (`position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain`)
- Active image: `opacity: 1; transition: opacity 0.4s ease`
- Inactive images: `opacity: 0`
- Note: Screenshots already include the phone bezel — show them as-is

**Dot Navigation:**
- 3 dots, `width: 8px; height: 8px; border-radius: 50%; background: #343434`
- Inactive: `opacity: 0.2`; Active: `opacity: 1`
- `display: flex; gap: 16px; justify-content: center`

**Prev/Next Arrows:**
- Absolutely positioned: prev at `left: -60px`, next at `right: -60px`, vertically centered
- SVG chevron arrows, `width: 20px; height: 20px`, `stroke: #343434`
- `opacity: 0.6` default, `opacity: 1` on hover
- Auto-advance: every 4 seconds

---

### Section 3: Join Early Access Waitlist

**Layout:**
- `width: 100%; max-width: 1280px; margin: 0 auto; padding: 192px 64px; display: flex; flex-direction: column; align-items: center; gap: 128px`
- Background: `linear-gradient(180deg, rgb(214,61,86) 0%, rgb(255,251,240) 100%)`

**Header:**
- Title: `"Join Early Access Waitlist"` — Inter 700, 50px, color `#343434`, centered
- Subtitle: `"Be first to try our app and start saving"` — Inter 400, 30px, color `rgba(52,52,52,0.5)`, centered
- Gap: 32px

**Large Email Form:**
- Container: `background: #ffffff; border-radius: 1500px; box-shadow: 0px 4px 10px rgba(0,0,0,0.15); padding: 16px; width: 683px; height: 100px; display: flex; align-items: center`
- Input: font-size 30px, placeholder `rgba(52,52,52,0.5)`, `padding: 0 32px`, flex: 1
- Button: `background: #6A8E24; color: #FFFBF0; font-size: 30px; border-radius: 1000px; padding: 16px 32px; height: 68px; backdrop-filter: blur(2px)`
- Button text: `"Join Waitlist"`
- On submit: clear input, show success toast

---

### Section 4: Footer

**Layout:**
- `width: 100%; max-width: 1280px; margin: 0 auto; background: rgb(154,192,77); padding: 128px 64px; display: flex; flex-direction: column; gap: 64px`

**Top row:**
- Left: Brand block (`width: 288px`)
  - Brand name: `"GoCerise"` — Inter 700, 30px, `#343434`
  - Tagline: `"Cherry pick your grocery price"` — Inter 400, 20px, `#343434`
  - Gap: 32px between name and tagline
- Right: Links block (`display: flex; gap: 64px; margin-left: auto; flex-wrap: wrap`)
  - **Contact** column (header + two sub-columns)
    - Header: Inter 700, 20px
    - Col 1: Email, Instagram, LinkedIn
    - Col 2: TikTok, Twitter, Facebook
    - Link font: Inter 400, 15px, color `#343434`
  - **Legal & Support** column
    - Header: Inter 700, 20px
    - Links: Privacy Policy, Terms of Service, help@gocerise.com
    - Link font: Inter 400, 15px

**Bottom:**
- Copyright: `"© 2026 GoCerise. All rights reserved."` — Inter 400, 20px, `#343434`, centered

---

## Navbar

**Behavior:**
- `position: fixed; top: 0; left: 0; right: 0; z-index: 200; padding: 24px 32px 0`
- Transparent background + no shadow **while the hero is visible**
- Once scrolled past `window.innerHeight * 0.85`: transition to `background: rgba(255,251,240,0.92); backdrop-filter: blur(12px); box-shadow: 0px 4px 10px rgba(52,52,52,0.15)`
- Transition: `background 0.45s ease, box-shadow 0.45s ease`
- Inner: `max-width: 1216px; margin: 0 auto; border-radius: 100px; padding: 16px`

**Logo:**
- Use provided SVG (see `GoCerise Website.html` — full SVG inline in the `<a class="logo">` element)
- Logo container: `border-radius: 999px; padding: 6px 12px 6px 6px; transition: background-color 0.25s ease`
- On hover: `background-color: rgba(0,0,0,0.08)` — pill-shaped backdrop, no color change to logo itself

**Nav links:**
- `"How it works"` → scrolls to How It Works section
- `"About us"` → scrolls to Footer
- `"Join Waitlist"` → scrolls to Waitlist section (styled as green pill CTA)
- Link font: Inter 400, 15px, `#343434`, `padding: 8px 16px; border-radius: 1000px`
- Hover: `background: rgba(52,52,52,0.06)`
- CTA button: `background: #6A8E24; color: #FFFBF0; font-weight: 700; border-radius: 1000px`

---

## Interactions & Behavior

| Interaction | Detail |
|---|---|
| Curtain scroll | Hero is `position: sticky; top: 0; z-index: 1`. All content after hero has `position: relative; z-index: 2; background: #FFFBF0`. No JS needed — pure CSS stacking. |
| Carousel | 3 slides. Clicking a step card, dot, or arrow updates active slide. Images crossfade (`opacity` transition 0.4s). Auto-advances every 4s. |
| Navbar transition | JS scroll listener toggles `.scrolled` class at 85% of viewport height. |
| Waitlist form submit | Prevents default, clears input, shows toast notification. |
| Toast | Fixed bottom-center. Slides up with `transform: translateY`. Shows for 3.5s. Text: `"🍒 You're on the list! We'll be in touch."` |
| Logo hover | Pill-shaped background fades in on the `<a>` wrapper. `background-color: rgba(0,0,0,0.08); border-radius: 999px; transition: 0.25s ease` |

---

## Responsive Behavior

| Breakpoint | Changes |
|---|---|
| Tablet `≤ 1023px` | Hero full-height (`100svh`). Carousel stacks vertically (steps above, phone below). Fonts scale down (title 56px → 38px on mobile). Waitlist form max-width 560px. Footer stacks vertically. |
| Mobile `≤ 767px` | Hero title 38px. Nav links hidden (show only logo + CTA). Waitlist form stacks vertically as column. Phone image 220×461px. Footer collapses further. |

---

## Design Tokens

### Colors
| Token | Value | Usage |
|---|---|---|
| `cream` | `#FFFBF0` | Page background, text on dark |
| `dark` | `#343434` | Body text, dark elements |
| `green` | `#6A8E24` | CTA buttons, active states |
| `green-light` | `#9AC04D` | Footer background |
| `cherry` | `#D63D56` | Gradient section start |
| `logo-red` | `#C01B36` | Cherry logo fills |

### Typography
| Role | Font | Weight | Size |
|---|---|---|---|
| Hero title | Inter | 700 | 90px |
| Section title | Inter | 700 | 50px |
| Section subtitle | Inter | 400 | 30px |
| Step card title | Inter | 700 | 30px |
| Step card desc | Inter | 400 | 15px |
| Nav link | Inter | 400 | 15px |
| Nav CTA | Inter | 700 | 15px |
| Footer brand | Inter | 700 | 30px |
| Footer link | Inter | 400 | 15px |
| Copyright | Inter | 400 | 20px |

### Spacing
- Section padding: `128px 64px`
- Hero CTA section: `192px 64px`
- Card padding: `32px`
- Card border-radius: `30px`
- Nav border-radius: `100px`
- Button border-radius: `1000px` (pill)

### Shadows
- Cards: `0px 4px 10px rgba(52,52,52,0.15)`
- Forms: `0px 4px 10px rgba(0,0,0,0.15)`
- Navbar (scrolled): `0px 4px 10px rgba(52,52,52,0.15)`

---

## Assets

| File | Usage |
|---|---|
| `assets/hero-gradient.png` | Hero section background image |
| `assets/screen-create-list.png` | Carousel slide 1 — phone screenshot (includes bezel) |
| `assets/screen-plan-trip.png` | Carousel slide 2 — phone screenshot (includes bezel) |
| `assets/screen-optimized-route.png` | Carousel slide 3 — phone screenshot (includes bezel) |
| Logo SVG | Inline in HTML — see `<a class="logo">` in `GoCerise Website.html` |

---

## Files

| File | Description |
|---|---|
| `GoCerise Website.html` | Full high-fidelity prototype — single HTML file with all CSS and JS inline |
| `assets/` | Image assets used in the design |
| `README.md` | This document |

---

## Notes for Developer

- The HTML prototype is self-contained and can be opened directly in a browser for reference
- The logo SVG is inlined in the HTML — copy it verbatim from the `<a class="logo">` element
- The curtain reveal effect requires no JS — it's purely CSS stacking (`sticky` + `z-index`)
- All email form submissions are currently front-end only (no backend) — wire up to your waitlist service (e.g. Mailchimp, Resend, custom API)
- Font: Load **Inter** from Google Fonts with weights 400, 600, 700
