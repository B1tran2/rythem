# RYTHEM Frontend (Vite + React)

This is a **frontend-only** class project and is ready to deploy as a static site on **GitHub Pages**.

## Repository name to use in Vite base path
Use this exact repository name:

- `rythem`

The Vite config is set to:

- `base: '/rythem/'`

If you rename the repository later, you must update `base` in `vite.config.js`.

---

## Local development

```bash
npm install
npm run dev
```

Local URL:

- `http://localhost:5173`

---

## Build for production (static)

```bash
npm run build
```

Generated folder:

- `dist/`

This `dist/` folder is the static site output used for deployment.

Routing note: this project uses section-based UI state (not React Router paths), so it is already compatible with GitHub Pages static hosting.

---

## Deploy to GitHub Pages (recommended simple flow)

This project includes:

- `npm run deploy`

It uses `gh-pages` to publish `dist/` to a `gh-pages` branch.

### Steps

1. Push this project to GitHub in a repo named **`rythem`**.
2. Run:

   ```bash
   npm install
   npm run deploy
   ```

3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - **Source:** `Deploy from a branch`
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Save.

GitHub will publish your site.

---

## Final public URL format

Your final URL will be:

- `https://USERNAME.github.io/rythem/`

Replace `USERNAME` with your GitHub username.

---

## What you need to push/upload after these changes

Push all project files (including config changes) to your GitHub repository, then run `npm run deploy` from your local machine.

You do **not** upload `dist/` manually when using `npm run deploy`; the command publishes it automatically to `gh-pages`.
