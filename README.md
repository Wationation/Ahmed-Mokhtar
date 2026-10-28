# صيدلية احمد مختار — deepseeksite

A rebuilt, upgraded version of the original pharmacy UI
Same content, same rules (Egyptian Arabic default + English, no fake content, admin-editable hooks) — with a stronger design system and real UX features.

- Name is always **احمد مختار** (never transliterated).
- Content strings are the originals from `../src/strings.js`; only UI-chrome labels (menu, theme, back-to-top) were added.
- Brand ink `#012CC8` sampled from `logo/ahmedmokhtarlogo.png`, extended into a full token system.

## What's better than the original

**Design**
- Cairo typeface for proper Arabic/Latin typography (the original used system fonts).
- Full light **and dark** theme from one token layer (`data-theme`), applied before first paint (no flash).
- Hero: animated aurora blobs, plus-sign pattern, gradient display type, and an illustrated visual card (CSS/SVG pharmacy cross + floating capsules) instead of a plain dashed box.
- Every section restyled with the same layout intent (grey brands band + tiles, sticky FAQ side, dark visit panel).

**UX**
- Working **mobile navigation** (slide-in drawer, scroll lock, Escape/overlay close) — the original hid the nav on mobile with no replacement.
- Scroll-spy nav highlighting, scroll-reveal animations with stagger, floating back-to-top button.
- Animated accordion FAQ (grid-rows transition, rotating plus) instead of static `<details>`.
- Language & theme toggles persist in `localStorage`; theme follows the OS by default.

**Engineering**
- Split into small components (`src/components/*`) + reusable hooks (`src/hooks.js`).
- Logical CSS properties everywhere (`inset-inline`, `margin-inline`) so RTL/LTR render correctly from one stylesheet.
- Accessibility: skip link, `aria-expanded`/`aria-current`, labelled icon buttons, focus management in the drawer, `prefers-reduced-motion` support.
- Zero extra dependencies for the site (server has its own `express` + `multer`).
- All `data-editable="..."` hooks kept (and kept compatible) for the future admin panel.

## Admin panel (`server/`)

A Node.js (Express) server that serves the admin panel, stores content in `server/data/content.json`, hosts uploaded images, and (in production) serves the built site.

```bash
cd server
npm install
npm start          # or: npm run dev  (auto-restart on change)
```

Then open **http://localhost:8787/admin** and log in.

What the admin can control:

| Section | Controls |
|---|---|
| الهيرو | Title, subtitle, both button labels, image-note texts (AR + EN) |
| صورة الهيرو | Upload / replace / remove the hero image (png/jpeg/webp/gif/avif, max 6MB) |
| الملاحظات التوضيحية | Show/hide the three explanatory notes (hero image note, visit social note, footer social note) |
| الفوتر | Footer line, rights line, social note (AR + EN) |
| السوشيال ميديا | Facebook / WhatsApp URLs — buttons open them in a new tab once set |

The panel has a **live preview** pane (point it at the dev server or `/`), a sticky save bar, and per-language tabs. The whole interface is bilingual — switching to **English** translates every section and flips the panel to LTR — and it ships with a **light/dark theme** toggle (follows the OS by default, then remembers your choice).

**Dev flow** — two terminals:

```bash
cd server && npm start        # API + admin on :8787
npm run dev                   # site on Vite — /api and /uploads are proxied to :8787
```

**Production flow** — one process:

```bash
npm run build                 # builds dist/
cd server && npm start        # serves site + API + admin on :8787
```

Environment variables: `PORT` (default `8787`) and `ADMIN_PASSWORD` (default `admin123` — **change it before exposing the server**).

```powershell
$env:ADMIN_PASSWORD = "your-strong-password"; npm start
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages

Cloudflare Pages builds the site from source — no build output is committed.

1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 — `.nvmrc` is included, or set `NODE_VERSION=20`.
4. Save and deploy — every push to `main` redeploys automatically.

Single page, no client-side router → no `_redirects`/SPA fallback needed. On Pages, the `/api/content` call 404s and the site silently falls back to `src/strings.js`, so the static host works standalone.

## Project structure

```
index.html             # fonts + pre-paint theme/lang script
public/logo.png
src/
  App.jsx              # composition only
  strings.js           # AR + EN copy, single source (fallbacks)
  content.js           # merges admin overrides from /api/content over strings.js
  hooks.js             # useLang / useTheme / useReveal / useScrollSpy / useSiteContent ...
  icons.jsx            # inline SVG icon set
  index.css            # token system + all styling
  components/
    Header.jsx  Hero.jsx  Brands.jsx  Faq.jsx  Visit.jsx  Footer.jsx
    BackToTop.jsx  SectionHead.jsx
server/
  index.js             # Express API + admin host + static site
  default-content.js   # admin defaults, derived from src/strings.js
  admin/               # admin UI (plain HTML/CSS/JS, no build step)
  data/content.json    # saved content (created at runtime, gitignored)
  uploads/             # uploaded hero images (runtime, gitignored)
```

## Notes

- Placeholders use the literal `[INSERT ... HERE]` form; nothing is fabricated.
- If the API is unreachable, the site silently falls back to `src/strings.js`.
- `footer` year is computed at runtime.
- Deploys the same way as the original for the static site: Cloudflare Pages, build `npm run build`, output `dist`. The admin panel needs a Node host (any VPS/Node platform) if you want it online.
