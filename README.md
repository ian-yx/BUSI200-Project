# TarHeel CourseMatch

Kenan-Flagler first-year course intel + peer matching prototype for **BUSI 200 Carolina Changemaking Challenge**.

Stack: React · TypeScript · Vite · Tailwind CSS · lucide-react · localStorage

## Why the page looks blank if you open `index.html`

The root `index.html` is only a Vite **source shell** (`<div id="root">` + `/src/main.tsx`). It is not a finished website.

| How you open it | Result |
| --- | --- |
| Double-click `index.html` / open as a file | Blank — browser cannot run TypeScript / Vite modules |
| GitHub Pages from repo root | Blank — `dist/` is gitignored, so Pages serves the source shell |
| `npm run dev` | Works — Vite compiles React live |
| GitHub Pages from built `dist/` (Actions below) | Works |

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://127.0.0.1:5173/`). Do **not** open `index.html` directly.

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Push to `main` (this repo includes `.github/workflows/deploy.yml`).
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the workflow succeeds, site URL:
   `https://ian-yx.github.io/BUSI200-Project/`

## Data notes

Course facts are drawn from the UNC Catalog, Kenan-Flagler Assured Enrollment / FBA pages, and public syllabi. Peer tips and match profiles are illustrative.
