# RYTHEM Frontend (Vite + React)

This is a **frontend-only** class project and is ready for static deployment on **GitHub Pages**.

## Confirmed project values

- GitHub username: `b1tran2`
- Repository name: `rythem`
- Vite base path: `'/rythem/'`
- Final target URL: `https://b1tran2.github.io/rythem/`

---

## Deployment checklist (beginner friendly)

Use this checklist in order:

1. Confirm your repository on GitHub is named exactly **`rythem`**.
2. Confirm `vite.config.js` contains exactly `base: '/rythem/'`.
3. Confirm `package.json` has:
   - `predeploy`: `npm run build`
   - `deploy`: `gh-pages -d dist`
   - `gh-pages` in `devDependencies`
4. Push your latest code to GitHub (`main` branch).
5. Run deploy command locally (see exact commands below).
6. In GitHub: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**
7. Wait for publishing to finish, then open:
   - `https://b1tran2.github.io/rythem/`

---

## Exact commands to run

Run these commands from the project root folder:

```bash
npm install
npm run deploy
```

What happens:

- `npm run deploy` automatically runs `npm run build` first (`predeploy`).
- Vite generates the static output in `dist/`.
- `gh-pages` publishes `dist/` to the `gh-pages` branch.

---

## Build output folder

After build, the generated static site folder is:

- `dist/`

You do **not** need to manually upload `dist/` when using `npm run deploy`.

---

## GitHub Pages timing

After `npm run deploy`, GitHub Pages usually updates in about **1–5 minutes**.
Sometimes it can take up to **10 minutes**.

If the page is not updated yet:

1. Refresh after 1–2 minutes.
2. Check **Settings → Pages** for deployment status.
3. Check the latest commit in the `gh-pages` branch.

---

## If `npm install` fails

Try these steps in order:

1. Check internet connection.
2. Run:

   ```bash
   npm cache clean --force
   npm install
   ```

3. If it still fails, delete lock/modules and retry:

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. If you are behind a school/company proxy, configure npm proxy settings or try a different network.
5. If a package registry is blocked on your machine, use a personal network and run install again.

---

## Routing compatibility note

This project does **not** depend on backend routing.
It uses section-based UI state (not path-based React Router pages), so it is compatible with GitHub Pages static hosting.

---

## Final URL (confirmed)

Your public site URL is:

- **https://b1tran2.github.io/rythem/**
