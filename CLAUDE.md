# Motoniq Landing — Design System

## Stack

- **Framework**: Next.js (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with `@theme` design tokens
- **Fonts**: Suisse Intl (primary), PP Fraktion Mono (decorative/labels)
- **Utilities**: `cn()` via clsx + tailwind-merge (extended for custom tokens)

---

## Colours

| Token          | Hex       | Usage                        |
| -------------- | --------- | ---------------------------- |
| `mono-100`     | `#eff4f9` | Background, light surfaces   |
| `mono-200`     | `#dfe9ed` | Borders, dividers, chips     |
| `mono-300`     | `#c3c7cc` | Subtle strokes               |
| `mono-400`     | `#989b9d` | Disabled text                |
| `mono-500`     | `#6c6e70` | Secondary / caption text     |
| `mono-600`     | `#424242` | Body text (about sections)   |
| `mono-700`     | `#151515` | Primary text, dark surfaces  |
| `yellow-100`   | `#c3fd10` | Accent (primary button hover, mission label) |
| `blue-100`     | `#3524f6` | Reserved accent              |
| `red-100`      | `#f21627` | Reserved accent              |

---

## Typography

All tokens are defined in `src/app/globals.css` under `@theme`.
Apply via Tailwind utility class (e.g. `text-h1`, `text-b2`).
**Never hardcode font sizes** — always use the token class.

> ⚠️ `tailwind-merge` is extended in `src/utils/cn.ts` to recognise all custom
> `text-*` size tokens as font-size utilities. Add any new tokens there too.

### Headings — Suisse Intl, weight 600

| Class     | Size | Line Height | Tracking  |
| --------- | ---- | ----------- | --------- |
| `text-h1` | 48px | 60px        | -0.01em   |
| `text-h2` | 40px | 48px        | -0.01em   |
| `text-h3` | 32px | 40px        | -0.01em   |
| `text-h4` | 24px | 32px        | -0.01em   |
| `text-h5` | 18px | 26px        | -0.01em   |
| `text-h6` | 16px | 24px        | -0.01em   |

### Body — Suisse Intl, weight 400

| Class     | Size | Line Height | Tracking  |
| --------- | ---- | ----------- | --------- |
| `text-b1` | 18px | 26px        | -0.01em   |
| `text-b2` | 16px | 24px        | -0.01em   |

### Decorative — PP Fraktion Mono, weight 400

Pair with `font-pp-fraktion-mono` and `uppercase`.

| Class     | Size | Line Height | Tracking  |
| --------- | ---- | ----------- | --------- |
| `text-d1` | 18px | 24px        | -0.01em   |
| `text-d2` | 16px | 24px        | -0.01em   |
| `text-d3` | 14px | 20px        | -0.01em   |
| `text-d4` | 12px | 18px        | -0.01em   |

### Captions — Suisse Intl, weight 400

| Class     | Size | Line Height | Tracking  |
| --------- | ---- | ----------- | --------- |
| `text-c1` | 14px | 22px        | -0.01em   |
| `text-c2` | 12px | 18px        | -0.01em   |

---

## Spacing

4px base unit. Only these steps are available (Tailwind defaults are reset).

| Class  | Value |
| ------ | ----- |
| `1`    | 4px   |
| `2`    | 8px   |
| `3`    | 12px  |
| `4`    | 16px  |
| `5`    | 20px  |
| `6`    | 24px  |
| `8`    | 32px  |
| `10`   | 40px  |
| `12`   | 48px  |
| `16`   | 64px  |
| `20`   | 80px  |
| `24`   | 96px  |
| `32`   | 128px |
| `64`   | 256px |

---

## Border Radius

4px base unit. Only these steps are available (Tailwind defaults are reset).

| Class        | Value |
| ------------ | ----- |
| `rounded-1`  | 4px   |
| `rounded-2`  | 8px   |
| `rounded-3`  | 12px  |
| `rounded-4`  | 16px  |
| `rounded-6`  | 24px  |
| `rounded-8`  | 32px  |
| `rounded-12` | 48px  |

Add `squircle` alongside any `rounded-*` class for CSS squircle corners
(Chrome 132+, Safari 18+).

---

## Responsive Breakpoints

| Prefix | Breakpoint |
| ------ | ---------- |
| —      | Mobile (default, 375px) |
| `md:`  | Tablet (768px+)         |
| `lg:`  | Desktop (1024px+)       |

Max-width container: `mx-auto w-full max-w-[900px]`
Horizontal page padding: `px-6` (mobile) → `px-12` (md+)

---

## Components

### `<Button>`

```tsx
import { Button } from "@/components/button";

<Button variant="primary">Label</Button>
<Button variant="secondary">Label</Button>
<Button variant="primary" disabled>Label</Button>
```

| Variant     | Default                        | Hover                          | Disabled                       |
| ----------- | ------------------------------ | ------------------------------ | ------------------------------ |
| `primary`   | bg mono-700, text mono-100     | bg yellow-100, text mono-700   | bg mono-200, text mono-400     |
| `secondary` | bg mono-200, text mono-600     | bg mono-700, text mono-100     | bg mono-200, text mono-400     |

Typography: D4 — PP Fraktion Mono, 12px, uppercase.
Shape: `rounded-2` border, `px-3 py-1`.

---

### `<Label>`

Visually identical to Button/Secondary. No `href` → static `<span>`. With `href` → `<a>` with hover effect.

```tsx
import { Label } from "@/components/label";

<Label>USA · London · Singapore</Label>
<Label href="mailto:contact@motonic.ai">contact@motonic.ai</Label>
```

Typography: D4 — PP Fraktion Mono, 12px, uppercase.

---

## Utilities

### `cn(...inputs)`

`src/utils/cn.ts` — clsx + tailwind-merge. Extended to treat all custom
`text-{scale}` tokens as font-size utilities so they are never incorrectly
dropped when used alongside `text-{colour}` classes.

When adding a new `text-*` size token to `globals.css`, also add it to the
`font-size` group in `cn.ts`.

---

## Conventions

- **Body text** uses `text-justify hyphens-auto` for justified layout with proper hyphenation.
- **Body colour hierarchy**: headings `text-mono-700`, body copy `text-mono-600`.
- **Decorative labels** (section eyebrows, "Our Mission", "Motoniq Labs") use
  `font-pp-fraktion-mono text-[14px] leading-[20px] tracking-[-0.01em] uppercase` — D3 size, applied inline where semantic context differs from Button/Label components.
- **Dividers**: `h-px bg-mono-200`. Vertical dividers in flex-row:
  `h-px w-full md:h-auto md:w-px md:self-stretch bg-mono-200`.
