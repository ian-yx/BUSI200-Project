# TarHeel CourseMatch

Kenan-Flagler first-year course intel + peer matching prototype for **BUSI 200 Carolina Changemaking Challenge**.

Live (after Pages is configured): https://ian-yx.github.io/BUSI200-Project/

## Important: do not open root `index.html`

Root `index.html` is only a Vite **dev shell**. It looks blank on purpose.

| Open method | Result |
| --- | --- |
| Double-click root `index.html` | Blank |
| GitHub Pages publishing the **repo root** | Blank (serves the shell + `/src/main.tsx`) |
| `npm run dev` | Works |
| Built files in `docs/` or Actions `dist/` | Works |

## Local

```bash
npm install
npm run dev
```

## Fix GitHub Pages (recommended: /docs)

Built site is committed in `docs/` (with `.nojekyll`).

1. Open repo **Settings → Pages**
2. Under **Build and deployment → Source**, choose **Deploy from a branch** (not GitHub Actions)
3. Branch: **main**
4. Folder: **/docs**
5. Save, wait 1–2 minutes
6. Open https://ian-yx.github.io/BUSI200-Project/

### Alternative: GitHub Actions

If you prefer Actions, keep Source = **GitHub Actions** and use the workflow in `.github/workflows/deploy.yml`.  
Do **not** also leave a branch deploy of `/` (root)—that Jekyll deploy overwrites the real build with the blank source page.
