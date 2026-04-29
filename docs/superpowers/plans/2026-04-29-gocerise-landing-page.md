# GoCerise Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the GoCerise marketing landing page as a Next.js 14 App Router + Tailwind CSS site, pixel-matched to the design handoff.

**Architecture:** Single-page server-rendered layout (`app/page.tsx`) with isolated `'use client'` islands for interactive components (Navbar scroll, Carousel, WaitlistForm, HeroForm, Toast). All static sections are server components. The curtain scroll effect is pure CSS — no JS needed.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, React Testing Library, Jest

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root layout — Inter font, metadata, `<html>`/`<body>` |
| `app/page.tsx` | Server component — assembles all sections in order |
| `app/globals.css` | Tailwind directives, `scroll-behavior: smooth`, base resets |
| `tailwind.config.ts` | Brand color tokens, font family |
| `components/LogoSVG.tsx` | Inline SVG logo — pure server component |
| `components/Navbar.tsx` | Fixed nav with scroll-triggered frosted glass — `'use client'` |
| `components/Toast.tsx` | Slide-up toast notification — `'use client'`, accepts `show` + `message` props |
| `components/HeroForm.tsx` | Hero email pill form — `'use client'`, triggers toast on submit |
| `components/Hero.tsx` | Hero section — server, composes `HeroForm` |
| `components/Carousel.tsx` | 3-slide carousel with auto-advance — `'use client'` |
| `components/HowItWorks.tsx` | "How it works" section — server, composes `Carousel` |
| `components/WaitlistForm.tsx` | Large waitlist email form — `'use client'`, triggers toast on submit |
| `components/Waitlist.tsx` | Waitlist CTA section — server, composes `WaitlistForm` |
| `components/Footer.tsx` | Footer — fully static server component |
| `public/assets/hero-gradient.png` | Copied from design handoff |
| `public/assets/screen-create-list.png` | Copied from design handoff |
| `public/assets/screen-plan-trip.png` | Copied from design handoff |
| `public/assets/screen-optimized-route.png` | Copied from design handoff |
| `__tests__/Carousel.test.tsx` | Unit tests: goToSlide, auto-advance, arrows, dots |
| `__tests__/HeroForm.test.tsx` | Unit tests: submit clears input, shows toast |
| `__tests__/WaitlistForm.test.tsx` | Unit tests: submit clears input, shows toast |
| `__tests__/Navbar.test.tsx` | Unit tests: scroll toggles scrolled class |

---

## Task 1: Scaffold Next.js project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`

- [ ] **Step 1: Scaffold with create-next-app**

Run from `/Users/vivek/Desktop/GoCerise Website`:
```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --no-eslint
```
When prompted "Would you like to use Turbopack?" → No (use standard webpack for compatibility).

Expected output: `Success! Created gocerise-website`

- [ ] **Step 2: Install testing dependencies**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom ts-jest @types/jest
```

- [ ] **Step 3: Create jest.config.ts**

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 4: Create jest.setup.ts**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Add test script to package.json**

In `package.json`, add to `"scripts"`:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 6: Verify scaffold works**

```bash
npm run dev
```
Expected: Server starts at http://localhost:3000 with default Next.js page.

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "chore: scaffold Next.js 14 + Tailwind + Jest"
```

---

## Task 2: Configure Tailwind with brand tokens and copy assets

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Create: `public/assets/` (4 images)

- [ ] **Step 1: Copy assets from design handoff**

```bash
cp -r "design_handoff_gocerise/assets/." "public/assets/"
```

Expected: `public/assets/` contains `hero-gradient.png`, `screen-create-list.png`, `screen-plan-trip.png`, `screen-optimized-route.png`

- [ ] **Step 2: Replace tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF0',
        dark: '#343434',
        green: {
          DEFAULT: '#6A8E24',
          light: '#9AC04D',
        },
        cherry: '#D63D56',
        'logo-red': '#C01B36',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 3: Replace app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

*, *::before, *::after {
  box-sizing: border-box;
}
```

- [ ] **Step 4: Verify Tailwind tokens resolve**

```bash
npm run build
```
Expected: Build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add public/assets tailwind.config.ts app/globals.css
git commit -m "chore: configure Tailwind brand tokens and copy assets"
```

---

## Task 3: LogoSVG component

**Files:**
- Create: `components/LogoSVG.tsx`

- [ ] **Step 1: Create LogoSVG.tsx**

```tsx
export default function LogoSVG() {
  return (
    <svg
      width="157"
      height="41"
      viewBox="0 0 157 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: 40, width: 'auto' }}
    >
      <g clipPath="url(#clip0_9_113)">
        <path d="M33.2328 21.1791C33.2265 22.8618 32.2362 24.2671 30.6146 24.6992C29.3524 25.0355 27.8459 24.6638 26.9577 23.6629C25.9661 22.5448 25.5981 20.742 26.4422 19.4511C27.1326 18.4421 28.5736 18.2069 29.5593 18.6146L30.0154 18.4878C30.5706 18.36 31.708 18.4858 32.1595 18.8509C32.8551 19.4127 33.2358 20.2786 33.2325 21.1791H33.2328Z" fill="#C01B36"/>
        <path d="M38.618 19.8169C39.609 21.9246 38.3177 24.1785 36.2144 24.7387C35.1396 25.025 34.0232 24.7594 33.1757 24.027C33.9478 22.7978 34.2304 21.6957 33.8971 20.2523C33.7603 19.604 33.4597 19.0415 33.0112 18.556C33.5244 18.2267 34.2361 18.527 34.7533 18.6751L35.879 18.4589C36.223 18.3929 36.5797 18.4186 36.921 18.4793C37.6931 18.6171 38.289 19.1182 38.6174 19.8169H38.618Z" fill="#C01B36"/>
        <path d="M16.5073 11.7725L19.9921 12.1191C20.8005 12.1995 21.4652 12.7911 21.6387 13.5849L24.2439 25.5032C24.432 26.3643 25.1945 26.9779 26.076 26.9779H38.9325C39.8087 26.9779 40.5681 26.3713 40.7616 25.5165L42.4329 18.1333" stroke="#343434" strokeWidth="1.01365" strokeLinecap="round"/>
        <path d="M27.0245 31.7929C27.7943 31.7929 28.4182 31.1689 28.4182 30.3992C28.4182 29.6295 27.7943 29.0055 27.0245 29.0055C26.2548 29.0055 25.6309 29.6295 25.6309 30.3992C25.6309 31.1689 26.2548 31.7929 27.0245 31.7929Z" stroke="#343434" strokeWidth="1.01365"/>
        <path d="M38.0231 31.7929C38.7928 31.7929 39.4168 31.1689 39.4168 30.3992C39.4168 29.6295 38.7928 29.0055 38.0231 29.0055C37.2534 29.0055 36.6294 29.6295 36.6294 30.3992C36.6294 31.1689 37.2534 31.7929 38.0231 31.7929Z" stroke="#343434" strokeWidth="1.01365"/>
        <path d="M29.6104 17.3225C29.7271 16.8113 29.8976 16.1613 30.0548 15.6585C30.2333 15.0913 30.4061 14.5237 30.6727 13.9952C30.9003 13.5444 31.2019 13.1247 31.4855 12.71" stroke="#6A8E24" strokeWidth="1.01365" strokeLinecap="round"/>
        <path d="M34.6285 17.373C34.2989 16.7043 33.9138 15.9883 33.5044 15.3373C33.0353 14.5966 32.5332 13.8863 32.0347 13.1409" stroke="#6A8E24" strokeWidth="1.01365" strokeLinecap="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M31.2927 12.682C30.9467 12.0544 31.2624 11.2713 31.5493 10.6924C32.268 9.32772 33.6884 8.46188 35.1658 8.11421C35.8118 7.95539 36.8902 7.96239 37.4407 8.12755C37.6279 8.18194 37.6476 8.3768 37.6329 8.56031C37.5945 9.1639 37.382 9.78517 37.1521 10.3487C36.3823 12.1301 34.2473 13.6056 32.2687 13.2762C31.8726 13.2249 31.5166 13.0337 31.2961 12.6877L31.2924 12.6817L31.2927 12.682ZM35.6613 9.28535C34.2206 9.87926 33.1035 10.7271 32.1936 11.9893C32.1152 12.0834 31.921 12.362 31.8022 12.2729C31.7668 12.2389 31.7628 12.1548 31.7832 12.0557C31.8126 11.9096 31.8793 11.7514 31.946 11.6153C32.7124 10.0257 34.3684 9.04178 36.049 8.65774C37.5315 8.36312 36.3893 8.96237 35.668 9.28268L35.6613 9.28568V9.28535Z" fill="#6A8E24"/>
      </g>
      <path d="M62.6031 17.4042C62.4866 17.0266 62.3258 16.6887 62.1207 16.3904C61.9203 16.0875 61.6779 15.8288 61.3936 15.6144C61.114 15.4 60.7924 15.2392 60.4288 15.132C60.0653 15.0201 59.6691 14.9642 59.2403 14.9642C58.4713 14.9642 57.7861 15.1576 57.1849 15.5445C56.5836 15.9313 56.1105 16.4999 55.7656 17.2503C55.4254 17.9961 55.2553 18.905 55.2553 19.977C55.2553 21.0583 55.4254 21.9741 55.7656 22.7245C56.1059 23.4749 56.579 24.0459 57.1849 24.4374C57.7908 24.8243 58.4946 25.0177 59.2962 25.0177C60.0233 25.0177 60.6525 24.8779 61.1839 24.5982C61.7199 24.3185 62.1324 23.9224 62.4213 23.4097C62.7103 22.8923 62.8548 22.2864 62.8548 21.5919L63.4421 21.6828H59.5549V19.6554H65.3647V21.3752C65.3647 22.601 65.1037 23.6614 64.5817 24.5563C64.0596 25.4511 63.3419 26.1409 62.4283 26.6257C61.5148 27.1057 60.4661 27.3458 59.2823 27.3458C57.9632 27.3458 56.805 27.0498 55.8076 26.4579C54.8148 25.8613 54.0388 25.0153 53.4795 23.92C52.9248 22.8201 52.6475 21.515 52.6475 20.0049C52.6475 18.849 52.8106 17.8166 53.1369 16.9078C53.4678 15.9989 53.9292 15.2275 54.5212 14.5936C55.1131 13.9551 55.8076 13.4704 56.6046 13.1395C57.4016 12.8039 58.2685 12.6361 59.2054 12.6361C59.9977 12.6361 60.7364 12.7526 61.4216 12.9857C62.1067 13.214 62.715 13.5403 63.2463 13.9644C63.7823 14.3886 64.2228 14.8919 64.5677 15.4746C64.9126 16.0572 65.1386 16.7004 65.2458 17.4042H62.6031ZM72.4451 27.3598C71.3964 27.3598 70.4876 27.1291 69.7185 26.6676C68.9495 26.2062 68.3529 25.5607 67.9287 24.731C67.5093 23.9014 67.2995 22.9319 67.2995 21.8227C67.2995 20.7134 67.5093 19.7416 67.9287 18.9073C68.3529 18.073 68.9495 17.4251 69.7185 16.9637C70.4876 16.5023 71.3964 16.2716 72.4451 16.2716C73.4938 16.2716 74.4027 16.5023 75.1717 16.9637C75.9408 17.4251 76.535 18.073 76.9545 18.9073C77.3787 19.7416 77.5907 20.7134 77.5907 21.8227C77.5907 22.9319 77.3787 23.9014 76.9545 24.731C76.535 25.5607 75.9408 26.2062 75.1717 26.6676C74.4027 27.1291 73.4938 27.3598 72.4451 27.3598ZM72.4591 25.3323C73.0277 25.3323 73.5031 25.1761 73.8853 24.8639C74.2675 24.5469 74.5518 24.1228 74.7383 23.5915C74.9294 23.0601 75.0249 22.4682 75.0249 21.8157C75.0249 21.1585 74.9294 20.5642 74.7383 20.0329C74.5518 19.4969 74.2675 19.0704 73.8853 18.7535C73.5031 18.4365 73.0277 18.2781 72.4591 18.2781C71.8765 18.2781 71.3918 18.4365 71.0049 18.7535C70.6227 19.0704 70.3361 19.4969 70.145 20.0329C69.9586 20.5642 69.8653 21.1585 69.8653 21.8157C69.8653 22.4682 69.9586 23.0601 70.145 23.5915C70.3361 24.1228 70.6227 24.5469 71.0049 24.8639C71.3918 25.1761 71.8765 25.3323 72.4591 25.3323ZM92.1064 17.6628H89.4917C89.4171 17.234 89.2796 16.8542 89.0792 16.5232C88.8788 16.1877 88.6294 15.9034 88.3311 15.6703C88.0328 15.4373 87.6926 15.2625 87.3104 15.146C86.9328 15.0248 86.525 14.9642 86.0869 14.9642C85.3085 14.9642 84.6187 15.1599 84.0175 15.5515C83.4162 15.9383 82.9455 16.5069 82.6052 17.2573C82.265 18.0031 82.0949 18.9143 82.0949 19.9909C82.0949 21.0862 82.265 22.0091 82.6052 22.7595C82.9501 23.5052 83.4209 24.0692 84.0175 24.4514C84.6187 24.8289 85.3062 25.0177 86.0799 25.0177C86.5087 25.0177 86.9095 24.9617 87.2824 24.8499C87.6599 24.7334 87.9979 24.5632 88.2961 24.3395C88.5991 24.1158 88.8531 23.8408 89.0582 23.5145C89.2679 23.1883 89.4124 22.8154 89.4917 22.3959L92.1064 22.4099C92.0085 23.0904 91.7965 23.7289 91.4702 24.3255C91.1486 24.9221 90.7268 25.4488 90.2048 25.9056C89.6828 26.3577 89.0722 26.7119 88.3731 26.9683C87.6739 27.2199 86.8979 27.3458 86.0449 27.3458C84.7865 27.3458 83.6632 27.0545 82.6751 26.4719C81.687 25.8893 80.9087 25.048 80.34 23.948C79.7714 22.848 79.4871 21.529 79.4871 19.9909C79.4871 18.4482 79.7738 17.1292 80.347 16.0339C80.9203 14.9339 81.701 14.0926 82.6891 13.51C83.6772 12.9274 84.7958 12.6361 86.0449 12.6361C86.842 12.6361 87.583 12.7479 88.2682 12.9717C88.9533 13.1954 89.5639 13.524 90.0999 13.9574C90.6359 14.3862 91.0764 14.9129 91.4213 15.5375C91.7708 16.1574 91.9992 16.8658 92.1064 17.6628ZM99.1239 27.3598C98.0473 27.3598 97.1174 27.136 96.3344 26.6886C95.556 26.2365 94.9571 25.598 94.5376 24.773C94.1182 23.9433 93.9084 22.9669 93.9084 21.8436C93.9084 20.739 94.1182 19.7695 94.5376 18.9352C94.9618 18.0963 95.5537 17.4438 96.3134 16.9777C97.0731 16.5069 97.9657 16.2716 98.9911 16.2716C99.6529 16.2716 100.277 16.3788 100.865 16.5932C101.457 16.8029 101.979 17.1292 102.431 17.5719C102.888 18.0147 103.246 18.5787 103.507 19.2638C103.768 19.9443 103.899 20.7553 103.899 21.6968V22.4728H95.0969V20.767H101.473C101.468 20.2822 101.363 19.8511 101.158 19.4736C100.953 19.0914 100.667 18.7908 100.298 18.5717C99.9349 18.3526 99.5108 18.2431 99.026 18.2431C98.5087 18.2431 98.0543 18.369 97.6627 18.6206C97.2712 18.8677 96.9659 19.1939 96.7469 19.5994C96.5325 20.0003 96.423 20.4407 96.4183 20.9208V22.4099C96.4183 23.0345 96.5325 23.5705 96.7609 24.0179C96.9892 24.4607 97.3085 24.8009 97.7187 25.0387C98.1288 25.2717 98.6089 25.3882 99.1589 25.3882C99.5271 25.3882 99.8603 25.3369 100.159 25.2344C100.457 25.1272 100.716 24.9711 100.935 24.766C101.154 24.5609 101.319 24.3069 101.431 24.0039L103.794 24.2696C103.645 24.8942 103.361 25.4395 102.941 25.9056C102.526 26.367 101.995 26.7259 101.347 26.9822C100.699 27.2339 99.9582 27.3598 99.1239 27.3598ZM106.04 27.15V16.4114H108.494V18.2012H108.606C108.802 17.5813 109.137 17.1035 109.613 16.7679C110.093 16.4277 110.64 16.2576 111.256 16.2576C111.395 16.2576 111.552 16.2646 111.724 16.2786C111.901 16.2879 112.048 16.3042 112.164 16.3275V18.6556C112.057 18.6183 111.887 18.5857 111.654 18.5577C111.426 18.5251 111.204 18.5088 110.99 18.5088C110.528 18.5088 110.114 18.609 109.745 18.8094C109.382 19.0052 109.095 19.2778 108.886 19.6274C108.676 19.977 108.571 20.3801 108.571 20.8369V27.15H106.04ZM113.846 27.15V16.4114H116.377V27.15H113.846ZM115.118 14.8873C114.717 14.8873 114.373 14.7544 114.084 14.4888C113.795 14.2184 113.65 13.8945 113.65 13.517C113.65 13.1348 113.795 12.8109 114.084 12.5452C114.373 12.2749 114.717 12.1397 115.118 12.1397C115.524 12.1397 115.869 12.2749 116.153 12.5452C116.442 12.8109 116.586 13.1348 116.586 13.517C116.586 13.8945 116.442 14.2184 116.153 14.4888C115.869 14.7544 115.524 14.8873 115.118 14.8873ZM127.467 19.2499L125.16 19.5015C125.094 19.2685 124.98 19.0494 124.817 18.8444C124.658 18.6393 124.444 18.4738 124.174 18.348C123.903 18.2221 123.572 18.1592 123.181 18.1592C122.654 18.1592 122.212 18.2734 121.853 18.5018C121.498 18.7302 121.324 19.0261 121.328 19.3897C121.324 19.702 121.438 19.956 121.671 20.1517C121.909 20.3475 122.3 20.5083 122.845 20.6341L124.677 21.0256C125.693 21.2447 126.448 21.5919 126.942 22.0673C127.441 22.5428 127.693 23.165 127.697 23.934C127.693 24.6099 127.495 25.2064 127.103 25.7238C126.716 26.2365 126.178 26.6373 125.488 26.9263C124.798 27.2153 124.006 27.3598 123.111 27.3598C121.797 27.3598 120.739 27.0848 119.937 26.5348C119.135 25.9801 118.658 25.2088 118.504 24.2207L120.972 23.983C121.084 24.4677 121.321 24.8336 121.685 25.0806C122.048 25.3276 122.521 25.4511 123.104 25.4511C123.705 25.4511 124.188 25.3276 124.551 25.0806C124.919 24.8336 125.104 24.5283 125.104 24.1647C125.104 23.8571 124.985 23.6031 124.747 23.4027C124.514 23.2023 124.15 23.0485 123.656 22.9413L121.825 22.5567C120.795 22.3423 120.033 21.9811 119.539 21.4731C119.044 20.9604 118.8 20.3125 118.804 19.5295C118.8 18.8677 118.979 18.2944 119.343 17.8096C119.711 17.3203 120.221 16.9427 120.874 16.6771C121.531 16.4067 122.288 16.2716 123.146 16.2716C124.404 16.2716 125.395 16.5396 126.117 17.0756C126.844 17.6116 127.294 18.3363 127.467 19.2499ZM134.538 27.3598C133.462 27.3598 132.532 27.136 131.749 26.6886C130.97 26.2365 130.372 25.598 129.952 24.773C129.533 23.9433 129.323 22.9669 129.323 21.8436C129.323 20.739 129.533 19.7695 129.952 18.9352C130.376 18.0963 130.968 17.4438 131.728 16.9777C132.488 16.5069 133.38 16.2716 134.406 16.2716C135.067 16.2716 135.692 16.3788 136.279 16.5932C136.871 16.8029 137.393 17.1292 137.845 17.5719C138.302 18.0147 138.661 18.5787 138.922 19.2638C139.183 19.9443 139.313 20.7553 139.313 21.6968V22.4728H130.511V20.767H136.887C136.883 20.2822 136.778 19.8511 136.573 19.4736C136.368 19.0914 136.081 18.7908 135.713 18.5717C135.349 18.3526 134.925 18.2431 134.44 18.2431C133.923 18.2431 133.469 18.369 133.077 18.6206C132.686 18.8677 132.38 19.1939 132.161 19.5994C131.947 20.0003 131.837 20.4407 131.833 20.9208V22.4099C131.833 23.0345 131.947 23.5705 132.175 24.0179C132.404 24.4607 132.723 24.8009 133.133 25.0387C133.543 25.2717 134.023 25.3882 134.573 25.3882C134.942 25.3882 135.275 25.3369 135.573 25.2344C135.871 25.1272 136.13 24.9711 136.349 24.766C136.568 24.5609 136.734 24.3069 136.845 24.0039L139.209 24.2696C139.059 24.8942 138.775 25.4395 138.356 25.9056C137.941 26.367 137.409 26.7259 136.762 26.9822C136.114 27.2339 135.373 27.3598 134.538 27.3598Z" fill="#343434"/>
      <defs>
        <clipPath id="clip0_9_113">
          <rect width="26.9389" height="24.3" fill="white" transform="translate(16 8)"/>
        </clipPath>
      </defs>
    </svg>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/LogoSVG.tsx
git commit -m "feat: add LogoSVG component"
```

---

## Task 4: Toast component

**Files:**
- Create: `components/Toast.tsx`
- Create: `__tests__/Toast.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/Toast.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import Toast from '@/components/Toast'

describe('Toast', () => {
  it('is hidden when show is false', () => {
    render(<Toast show={false} message="Test message" />)
    const toast = screen.getByText('Test message')
    expect(toast.parentElement).toHaveStyle({ transform: 'translateX(-50%) translateY(100px)' })
  })

  it('is visible when show is true', () => {
    render(<Toast show={true} message="Test message" />)
    const toast = screen.getByText('Test message')
    expect(toast.parentElement).toHaveStyle({ transform: 'translateX(-50%) translateY(0)' })
  })

  it('renders the message text', () => {
    render(<Toast show={true} message="🍒 You're on the list!" />)
    expect(screen.getByText("🍒 You're on the list!")).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="Toast" --no-coverage
```
Expected: FAIL — `Cannot find module '@/components/Toast'`

- [ ] **Step 3: Create Toast.tsx**

```tsx
'use client'

interface ToastProps {
  show: boolean
  message: string
}

export default function Toast({ show, message }: ToastProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: show ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(100px)',
        background: '#343434',
        color: '#FFFBF0',
        padding: '14px 28px',
        borderRadius: 100,
        fontSize: 15,
        fontWeight: 600,
        boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
        zIndex: 999,
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        pointerEvents: 'none',
      }}
    >
      {message}
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="Toast" --no-coverage
```
Expected: PASS — 3 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/Toast.tsx __tests__/Toast.test.tsx
git commit -m "feat: add Toast component"
```

---

## Task 5: Navbar component

**Files:**
- Create: `components/Navbar.tsx`
- Create: `__tests__/Navbar.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/Navbar.test.tsx`:
```tsx
import { render, screen, act } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders logo, nav links and CTA', () => {
    render(<Navbar />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Join Waitlist')).toBeInTheDocument()
  })

  it('adds scrolled class when scrollY exceeds 85% of viewport height', () => {
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true })
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).not.toContain('scrolled-active')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 700, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav.className).toContain('scrolled-active')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="Navbar" --no-coverage
```
Expected: FAIL — `Cannot find module '@/components/Navbar'`

- [ ] **Step 3: Create Navbar.tsx**

```tsx
'use client'

import { useEffect, useState } from 'react'
import LogoSVG from './LogoSVG'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: '24px 32px 0',
        pointerEvents: 'none',
      }}
    >
      <nav
        role="navigation"
        className={scrolled ? 'scrolled-active' : ''}
        style={{
          pointerEvents: 'all',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 100,
          padding: '16px',
          maxWidth: 1216,
          margin: '0 auto',
          transition: 'background 0.45s ease, box-shadow 0.45s ease, backdrop-filter 0.45s ease',
          background: scrolled ? 'rgba(255,251,240,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0px 4px 10px rgba(52,52,52,0.15)' : 'none',
        }}
      >
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
            padding: '6px 12px 6px 6px',
            borderRadius: 999,
            backgroundColor: 'transparent',
            transition: 'background-color 0.25s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <LogoSVG />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a
            href="#how"
            className="nav-link"
            style={{ fontSize: 15, color: '#343434', textDecoration: 'none', padding: '8px 16px', borderRadius: 1000, transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(52,52,52,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            How it works
          </a>
          <a
            href="#about"
            className="nav-link"
            style={{ fontSize: 15, color: '#343434', textDecoration: 'none', padding: '8px 16px', borderRadius: 1000, transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(52,52,52,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            About us
          </a>
          <a
            href="#waitlist"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: '#FFFBF0',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: 1000,
              background: '#6A8E24',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Join Waitlist
          </a>
        </div>
      </nav>
    </div>
  )
}
```

- [ ] **Step 4: Add mobile responsive styles to globals.css**

Append to `app/globals.css`:
```css
@media (max-width: 767px) {
  .nav-link { display: none !important; }
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npm test -- --testPathPattern="Navbar" --no-coverage
```
Expected: PASS — 2 tests passing

- [ ] **Step 6: Commit**

```bash
git add components/Navbar.tsx __tests__/Navbar.test.tsx app/globals.css
git commit -m "feat: add Navbar with scroll transition"
```

---

## Task 6: HeroForm component

**Files:**
- Create: `components/HeroForm.tsx`
- Create: `__tests__/HeroForm.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/HeroForm.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeroForm from '@/components/HeroForm'

describe('HeroForm', () => {
  it('renders email input and submit button', () => {
    render(<HeroForm />)
    expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Join Waitlist' })).toBeInTheDocument()
  })

  it('clears the input on submit', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    const input = screen.getByPlaceholderText('Enter your email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(input).toHaveValue('')
  })

  it('shows toast after submit', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    await user.type(screen.getByPlaceholderText('Enter your email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(screen.getByText("🍒 You're on the list! We'll be in touch.")).toBeInTheDocument()
  })

  it('does not submit when input is empty', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(screen.queryByText("🍒 You're on the list! We'll be in touch.")).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="HeroForm" --no-coverage
```
Expected: FAIL — `Cannot find module '@/components/HeroForm'`

- [ ] **Step 3: Create HeroForm.tsx**

```tsx
'use client'

import { useState } from 'react'
import Toast from './Toast'

export default function HeroForm() {
  const [email, setEmail] = useState('')
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setEmail('')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3500)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          borderRadius: 1500,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
          padding: 8,
          width: 342,
          height: 50,
        }}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'Inter, sans-serif',
            fontSize: 15,
            color: '#343434',
            padding: '0 16px',
          }}
        />
        <button
          type="submit"
          style={{
            flexShrink: 0,
            background: '#6A8E24',
            color: '#FFFBF0',
            border: 'none',
            borderRadius: 1000,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 15,
            padding: '8px 16px',
            height: 34,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Join Waitlist
        </button>
      </form>
      <Toast show={showToast} message="🍒 You're on the list! We'll be in touch." />
    </>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="HeroForm" --no-coverage
```
Expected: PASS — 4 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/HeroForm.tsx __tests__/HeroForm.test.tsx
git commit -m "feat: add HeroForm component"
```

---

## Task 7: Hero section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create Hero.tsx**

```tsx
import HeroForm from './HeroForm'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: "url('/assets/hero-gradient.png') center/cover no-repeat",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 64,
          padding: '0 20px',
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontWeight: 700,
            lineHeight: '105%',
            textAlign: 'center',
            color: '#fff',
            maxWidth: 800,
          }}
        >
          Cherry pick your grocery prices
        </h1>
        <HeroForm />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add hero title responsive styles to globals.css**

Append to `app/globals.css`:
```css
.hero-title { font-size: 90px; }

@media (max-width: 1023px) {
  .hero-title { font-size: 56px; }
}

@media (max-width: 767px) {
  .hero-title { font-size: 38px; }
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx app/globals.css
git commit -m "feat: add Hero section"
```

---

## Task 8: Carousel component

**Files:**
- Create: `components/Carousel.tsx`
- Create: `__tests__/Carousel.test.tsx`

- [ ] **Step 1: Write the failing tests**

Create `__tests__/Carousel.test.tsx`:
```tsx
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Carousel from '@/components/Carousel'

const steps = [
  { title: 'Create a list', desc: 'Create a list, name it, search and add items, and customize your list', image: '/assets/screen-create-list.png', alt: 'Create a list screen' },
  { title: 'Plan your trip', desc: 'Set location, choose shopping radius, and select how we find your deals', image: '/assets/screen-plan-trip.png', alt: 'Plan your trip screen' },
  { title: 'Cherry pick deals', desc: 'Let the app do the work and find the best deals based on your preferences', image: '/assets/screen-optimized-route.png', alt: 'Cherry pick deals screen' },
]

describe('Carousel', () => {
  beforeEach(() => jest.useFakeTimers())
  afterEach(() => jest.useRealTimers())

  it('renders all 3 step card titles', () => {
    render(<Carousel steps={steps} />)
    expect(screen.getByText('Create a list')).toBeInTheDocument()
    expect(screen.getByText('Plan your trip')).toBeInTheDocument()
    expect(screen.getByText('Cherry pick deals')).toBeInTheDocument()
  })

  it('first slide is active by default', () => {
    render(<Carousel steps={steps} />)
    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveStyle({ opacity: '1' })
    expect(images[1]).toHaveStyle({ opacity: '0' })
    expect(images[2]).toHaveStyle({ opacity: '0' })
  })

  it('clicking a step card activates that slide', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<Carousel steps={steps} />)
    await user.click(screen.getByText('Plan your trip'))
    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveStyle({ opacity: '0' })
    expect(images[1]).toHaveStyle({ opacity: '1' })
  })

  it('next arrow advances to slide 2', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<Carousel steps={steps} />)
    await user.click(screen.getByLabelText('Next'))
    const images = screen.getAllByRole('img')
    expect(images[1]).toHaveStyle({ opacity: '1' })
  })

  it('prev arrow wraps from slide 0 to slide 2', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<Carousel steps={steps} />)
    await user.click(screen.getByLabelText('Previous'))
    const images = screen.getAllByRole('img')
    expect(images[2]).toHaveStyle({ opacity: '1' })
  })

  it('auto-advances every 4 seconds', () => {
    render(<Carousel steps={steps} />)
    act(() => jest.advanceTimersByTime(4000))
    const images = screen.getAllByRole('img')
    expect(images[1]).toHaveStyle({ opacity: '1' })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="Carousel" --no-coverage
```
Expected: FAIL — `Cannot find module '@/components/Carousel'`

- [ ] **Step 3: Create Carousel.tsx**

```tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Step {
  title: string
  desc: string
  image: string
  alt: string
}

interface CarouselProps {
  steps: Step[]
}

export default function Carousel({ steps }: CarouselProps) {
  const [active, setActive] = useState(0)
  const total = steps.length

  const goToSlide = (n: number) => setActive(((n % total) + total) % total)

  useEffect(() => {
    const timer = setInterval(() => goToSlide(active + 1), 4000)
    return () => clearInterval(timer)
  }, [active])

  return (
    <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: 970, gap: 64, position: 'relative' }}
           className="carousel-inner">

        {/* Prev arrow */}
        <button
          onClick={() => goToSlide(active - 1)}
          aria-label="Previous"
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: -60, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', opacity: 0.6, transition: 'opacity 0.2s', zIndex: 10 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="#343434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Step cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 64, width: 384, flexShrink: 0 }}
             className="steps-col">
          {steps.map((step, i) => (
            <div
              key={step.title}
              onClick={() => goToSlide(i)}
              style={{
                borderRadius: 30,
                background: '#FFFBF0',
                boxShadow: '0px 4px 10px rgba(52,52,52,0.15)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                cursor: 'pointer',
                minHeight: 168,
                opacity: i === active ? 1 : 0.4,
                transition: 'opacity 0.25s ease',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 30, color: '#343434', lineHeight: '100%' }}
                   className="step-card-title">{step.title}</div>
              <div style={{ fontSize: 15, lineHeight: '150%', color: '#343434' }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Phone column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <div style={{ position: 'relative', width: 310, height: 649 }} className="phone-wrap">
            {steps.map((step, i) => (
              <Image
                key={step.image}
                src={step.image}
                alt={step.alt}
                width={310}
                height={649}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  opacity: i === active ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              />
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#343434',
                  opacity: i === active ? 1 : 0.2,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'opacity 0.2s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={() => goToSlide(active + 1)}
          aria-label="Next"
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: -60, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', opacity: 0.6, transition: 'opacity 0.2s', zIndex: 10 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="#343434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="Carousel" --no-coverage
```
Expected: PASS — 6 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/Carousel.tsx __tests__/Carousel.test.tsx
git commit -m "feat: add Carousel component"
```

---

## Task 9: HowItWorks section

**Files:**
- Create: `components/HowItWorks.tsx`

- [ ] **Step 1: Create HowItWorks.tsx**

```tsx
import Carousel from './Carousel'

const STEPS = [
  {
    title: 'Create a list',
    desc: 'Create a list, name it, search and add items, and customize your list',
    image: '/assets/screen-create-list.png',
    alt: 'Create a list screen',
  },
  {
    title: 'Plan your trip',
    desc: 'Set location, choose shopping radius, and select how we find your deals',
    image: '/assets/screen-plan-trip.png',
    alt: 'Plan your trip screen',
  },
  {
    title: 'Cherry pick deals',
    desc: 'Let the app do the work and find the best deals based on your preferences',
    image: '/assets/screen-optimized-route.png',
    alt: 'Cherry pick deals screen',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        padding: '128px 64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 64,
        background: '#FFFBF0',
      }}
      className="how-section"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 50, lineHeight: '100%', color: '#343434', textAlign: 'center' }}
            className="section-title">
          How it works
        </h2>
        <p style={{ fontSize: 30, lineHeight: '100%', color: 'rgba(52,52,52,0.5)', textAlign: 'center' }}
           className="section-subtitle">
          Compare prices across stores and find the best route in seconds
        </p>
      </div>
      <Carousel steps={STEPS} />
    </section>
  )
}
```

- [ ] **Step 2: Add responsive styles for HowItWorks to globals.css**

Append to `app/globals.css`:
```css
@media (max-width: 1023px) {
  .how-section { padding: 80px 32px !important; gap: 48px !important; }
  .section-title { font-size: 38px !important; }
  .section-subtitle { font-size: 20px !important; }
  .carousel-inner { width: 100% !important; flex-direction: column !important; align-items: center !important; gap: 40px !important; }
  .steps-col { width: 100% !important; max-width: 500px !important; gap: 16px !important; }
  .step-card-title { font-size: 22px !important; }
  .phone-wrap { width: 260px !important; height: 545px !important; }
}

@media (max-width: 767px) {
  .how-section { padding: 64px 20px !important; }
  .section-title { font-size: 30px !important; }
  .section-subtitle { font-size: 16px !important; }
  .phone-wrap { width: 220px !important; height: 461px !important; }
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add components/HowItWorks.tsx app/globals.css
git commit -m "feat: add HowItWorks section"
```

---

## Task 10: WaitlistForm component

**Files:**
- Create: `components/WaitlistForm.tsx`
- Create: `__tests__/WaitlistForm.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/WaitlistForm.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WaitlistForm from '@/components/WaitlistForm'

describe('WaitlistForm', () => {
  it('renders email input and submit button', () => {
    render(<WaitlistForm />)
    expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Join Waitlist' })).toBeInTheDocument()
  })

  it('clears the input on submit', async () => {
    const user = userEvent.setup()
    render(<WaitlistForm />)
    const input = screen.getByPlaceholderText('Enter your email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(input).toHaveValue('')
  })

  it('shows toast after submit', async () => {
    const user = userEvent.setup()
    render(<WaitlistForm />)
    await user.type(screen.getByPlaceholderText('Enter your email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(screen.getByText("🍒 You're on the list! We'll be in touch.")).toBeInTheDocument()
  })

  it('does not submit when input is empty', async () => {
    const user = userEvent.setup()
    render(<WaitlistForm />)
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(screen.queryByText("🍒 You're on the list! We'll be in touch.")).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="WaitlistForm" --no-coverage
```
Expected: FAIL — `Cannot find module '@/components/WaitlistForm'`

- [ ] **Step 3: Create WaitlistForm.tsx**

```tsx
'use client'

import { useState } from 'react'
import Toast from './Toast'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setEmail('')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3500)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          borderRadius: 1500,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
          padding: 16,
          width: 683,
          height: 100,
        }}
        className="waitlist-form"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'Inter, sans-serif',
            fontSize: 30,
            color: '#343434',
            padding: '0 32px',
          }}
          className="waitlist-input"
        />
        <button
          type="submit"
          style={{
            flexShrink: 0,
            background: '#6A8E24',
            color: '#FFFBF0',
            border: 'none',
            borderRadius: 1000,
            fontFamily: 'Inter, sans-serif',
            fontSize: 30,
            padding: '16px 32px',
            height: 68,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(2px)',
          }}
          className="waitlist-btn"
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Join Waitlist
        </button>
      </form>
      <Toast show={showToast} message="🍒 You're on the list! We'll be in touch." />
    </>
  )
}
```

- [ ] **Step 4: Add responsive styles to globals.css**

Append to `app/globals.css`:
```css
@media (max-width: 1023px) {
  .waitlist-form { width: 100% !important; max-width: 560px !important; height: 80px !important; }
  .waitlist-input { font-size: 20px !important; }
  .waitlist-btn { font-size: 20px !important; height: 54px !important; }
}

@media (max-width: 767px) {
  .waitlist-form { flex-direction: column !important; height: auto !important; border-radius: 24px !important; padding: 12px !important; gap: 10px !important; align-items: stretch !important; max-width: 340px !important; }
  .waitlist-input { font-size: 16px !important; padding: 12px 16px !important; }
  .waitlist-btn { font-size: 16px !important; height: 48px !important; border-radius: 16px !important; }
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npm test -- --testPathPattern="WaitlistForm" --no-coverage
```
Expected: PASS — 4 tests passing

- [ ] **Step 6: Commit**

```bash
git add components/WaitlistForm.tsx __tests__/WaitlistForm.test.tsx app/globals.css
git commit -m "feat: add WaitlistForm component"
```

---

## Task 11: Waitlist section

**Files:**
- Create: `components/Waitlist.tsx`

- [ ] **Step 1: Create Waitlist.tsx**

```tsx
import WaitlistForm from './WaitlistForm'

export default function Waitlist() {
  return (
    <section
      id="waitlist"
      style={{
        width: '100%',
        background: 'linear-gradient(180deg, rgb(214,61,86) 0%, rgb(255,251,240) 100%)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '192px 64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 128,
        }}
        className="waitlist-inner"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          <h2 style={{ fontWeight: 700, fontSize: 50, color: '#343434', textAlign: 'center' }}
              className="section-title">
            Join Early Access Waitlist
          </h2>
          <p style={{ fontSize: 30, color: 'rgba(52,52,52,0.5)', textAlign: 'center' }}
             className="section-subtitle">
            Be first to try our app and start saving
          </p>
        </div>
        <WaitlistForm />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add responsive styles to globals.css**

Append to `app/globals.css`:
```css
@media (max-width: 1023px) {
  .waitlist-inner { padding: 100px 32px !important; }
}

@media (max-width: 767px) {
  .waitlist-inner { padding: 80px 20px !important; gap: 48px !important; }
}
```

- [ ] **Step 3: Commit**

```bash
git add components/Waitlist.tsx app/globals.css
git commit -m "feat: add Waitlist section"
```

---

## Task 12: Footer component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create Footer.tsx**

```tsx
export default function Footer() {
  return (
    <footer
      id="about"
      style={{
        width: '100%',
        background: '#9AC04D',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '128px 64px',
          display: 'flex',
          flexDirection: 'column',
          gap: 64,
        }}
        className="footer-inner"
      >
        <div style={{ display: 'flex', flexDirection: 'row', gap: 64 }} className="footer-main">
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: 288 }}>
            <div style={{ fontWeight: 700, fontSize: 30, color: '#343434' }}>GoCerise</div>
            <div style={{ fontSize: 20, color: '#343434' }}>Cherry pick your grocery price</div>
          </div>

          {/* Links */}
          <div style={{ flex: 1, display: 'flex', gap: 64, marginLeft: 'auto', flexWrap: 'wrap' }}
               className="footer-links">
            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: '#343434' }}>Contact</div>
              <div style={{ display: 'flex', gap: 64 }} className="footer-contact-cols">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: 'Email', href: 'mailto:help@gocerise.com' },
                    { label: 'Instagram', href: '#' },
                    { label: 'LinkedIn', href: '#' },
                  ].map(link => (
                    <a key={link.label} href={link.href}
                       style={{ fontSize: 15, color: '#343434', textDecoration: 'none', transition: 'opacity 0.2s' }}
                       onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                       onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                      {link.label}
                    </a>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: 'TikTok', href: '#' },
                    { label: 'Twitter', href: '#' },
                    { label: 'Facebook', href: '#' },
                  ].map(link => (
                    <a key={link.label} href={link.href}
                       style={{ fontSize: 15, color: '#343434', textDecoration: 'none', transition: 'opacity 0.2s' }}
                       onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                       onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal & Support */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginLeft: 'auto' }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: '#343434' }}>Legal &amp; Support</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Terms of Service', href: '#' },
                  { label: 'help@gocerise.com', href: 'mailto:help@gocerise.com' },
                ].map(link => (
                  <a key={link.label} href={link.href}
                     style={{ fontSize: 15, color: '#343434', textDecoration: 'none', transition: 'opacity 0.2s' }}
                     onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                     onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ fontSize: 20, color: '#343434', textAlign: 'center' }}>
          © 2026 GoCerise. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Add responsive styles to globals.css**

Append to `app/globals.css`:
```css
@media (max-width: 1023px) {
  .footer-inner { padding: 80px 32px !important; }
  .footer-main { flex-direction: column !important; gap: 40px !important; }
  .footer-links { margin-left: 0 !important; flex-wrap: wrap !important; gap: 40px !important; }
}

@media (max-width: 767px) {
  .footer-inner { padding: 64px 20px !important; }
  .footer-contact-cols { flex-direction: column !important; gap: 8px !important; }
}
```

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx app/globals.css
git commit -m "feat: add Footer component"
```

---

## Task 13: Assemble app/page.tsx and layout

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'GoCerise — Cherry pick your grocery prices',
  description: 'Compare grocery prices across nearby stores and find the best deals in seconds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: '#FFFBF0', color: '#343434', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Replace app/page.tsx**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Curtain — slides over sticky hero */}
      <div style={{ position: 'relative', zIndex: 2, background: '#FFFBF0' }}>
        <HowItWorks />
        <Waitlist />
        <Footer />
      </div>
    </>
  )
}
```

- [ ] **Step 3: Configure next.config.ts to allow local asset images**

Replace `next.config.ts`:
```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

- [ ] **Step 4: Run full test suite**

```bash
npm test -- --no-coverage
```
Expected: All tests pass.

- [ ] **Step 5: Start dev server and verify visually**

```bash
npm run dev
```
Open http://localhost:3000. Verify:
- Navbar is transparent over hero, turns frosted when scrolling
- Hero shows gradient background, title, and email form
- Scrolling reveals the curtain (How it works, Waitlist, Footer)
- Carousel slides, auto-advances, arrows and dots work
- Both email forms clear on submit and show toast
- Footer renders correctly with green background

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx app/page.tsx next.config.ts
git commit -m "feat: assemble full page layout"
```

---

## Task 14: Final build check and run all tests

- [ ] **Step 1: Run full test suite**

```bash
npm test -- --no-coverage
```
Expected: All tests pass.

- [ ] **Step 2: Production build**

```bash
npm run build
```
Expected: Build succeeds with no errors or type errors.

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "chore: verify build and all tests pass"
```