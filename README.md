# RYTHEM Frontend (Vite + React)

This is a **frontend-only** class project ready for **GitHub Pages**.

## Quick Start

1. Open this project folder in a terminal.
2. Run `npm install`.
3. Run `npm run deploy`.
4. In GitHub → **Settings → Pages** set:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Open: **https://b1tran2.github.io/rythem/**

---

## Confirmed setup values

- GitHub username: `b1tran2`
- Repository name: `rythem`
- Vite base path: `'/rythem/'`
- Deploy command: `gh-pages -d dist`
- Final public URL: **https://b1tran2.github.io/rythem/**

---

## Exact commands to run

### macOS / Linux

```bash
npm install
npm run deploy
```

### Windows PowerShell

```powershell
npm install
npm run deploy
```

---

## How to know `npm install` worked

`npm install` is successful when:

- The command ends without `npm ERR!` lines.
- You see a summary like packages added/audited.
- A `node_modules` folder is created in the project.
- A `package-lock.json` file is created or updated.

---

## How to know `npm run deploy` worked

`npm run deploy` is successful when:

- You see the build step complete first (`vite build`).
- A `dist/` folder is generated.
- You see output from `gh-pages` publishing to the `gh-pages` branch.
- On GitHub, the `gh-pages` branch appears/updates with a recent commit.

Then wait **1–5 minutes** (sometimes up to **10 minutes**) and open:

- **https://b1tran2.github.io/rythem/**

---

## Deployment checklist (simple)

1. Repo name is exactly **`rythem`**.
2. `vite.config.js` contains `base: '/rythem/'`.
3. `package.json` contains:
   - `predeploy`: `npm run build`
   - `deploy`: `gh-pages -d dist`
   - `gh-pages` in `devDependencies`
4. GitHub Pages is set to:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`

---

## Troubleshooting

### 1) `vite: not found`

Cause: dependencies were not installed correctly.

Fix:

```bash
npm install
```

If it still fails:

```bash
npm cache clean --force
npm install
```

### 2) Blank page after deployment

Most common causes:

- Wrong Vite `base` value.
- Browser is showing old cached files.
- Deployment has not finished yet.

Fix:

1. Confirm `vite.config.js` has `base: '/rythem/'`.
2. Wait up to 10 minutes.
3. Hard refresh browser (`Ctrl+F5` or `Cmd+Shift+R`).
4. Re-run:

   ```bash
   npm run deploy
   ```

### 3) Wrong GitHub Pages branch selected

Fix:

1. Go to GitHub → **Settings → Pages**.
2. Set:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Save and wait a few minutes.

---

## Routing compatibility note

This project does **not** use backend routing.
It uses section-based UI state (no React Router path dependency), so it is compatible with GitHub Pages static hosting.

---

## Final URL (confirmed)

- **https://b1tran2.github.io/rythem/**
