# RYTHEM Frontend (GitHub Pages + Local Demo)

A frontend-only class project for a live classroom presentation.

## GitHub Pages note

This version is configured to run correctly on GitHub Pages.

- Repository base path: `/rythem/`
- Final public URL: **https://b1tran2.github.io/rythem/**

If the page is blank on GitHub Pages, make sure you deployed the latest build after this base-path fix.

## Quick Start (only 2 required commands)

```bash
npm install
npm run dev
```

Then open:

- `http://localhost:5173`

That is all you need for the demo.

For GitHub Pages publish:

```bash
npm run deploy
```

---

## What this project includes

- Premium single-page showcase experience
- Core demo sections:
  - Home
  - Catalogue / Shop
  - Cart
  - About Us
- Developer POV / Client POV toggle for presentation mode switching
- No backend, no payment, no auth

---

## Beginner local setup guide

1. Install Node.js LTS (if not installed already).
2. Open this project folder in a terminal.
3. Run `npm install` once.
4. Run `npm run dev`.
5. Open `http://localhost:5173`.

To stop the local server, press `Ctrl + C` in the terminal.

---

## Presentation checklist (2 minutes before class)

- [ ] Run `npm run dev` and confirm the page opens.
- [ ] Test top navigation tabs:
  - [ ] Home
  - [ ] Catalogue
  - [ ] Cart
  - [ ] About Us
- [ ] Toggle **Developer POV / Client POV** and verify notes appear/disappear clearly.
- [ ] Add a few items in Catalogue and check Cart update works.
- [ ] Keep browser zoom at 100% for best visual balance.
- [ ] Use full-screen browser mode for presentation.

---

## Demo Flow

Recommended order in class:

1. **Home** (brand intro + hero impact)
2. **Catalogue / Shop** (show filters and product cards)
3. **DEV / CLIENT toggle** (show notes on/off)
4. **Cart** (add/remove items live)
5. **About Us** (close with brand story)

---

## Real T-shirt image replacement (easy)

Current placeholder is in `src/App.jsx` inside:

- Home spotlight block
- Catalogue card for **RYTHEM Origin Tee**

Quick replacement steps:

1. Add your real image file (example):
   - `src/assets/origin-tee.jpg`
2. Replace the placeholder box in `src/App.jsx` with an `<img>` using that file.
3. Save the file; Vite auto-refreshes the page.

Tip: Use a clean PNG/JPG with good lighting for a premium look.

---

## If something fails

### `npm install` fails

- Check internet connection.
- Try:

  ```bash
  npm cache clean --force
  npm install
  ```

### `npm run dev` fails

- Run `npm install` again.
- Ensure Node.js is installed (`node -v`).

---

## Notes

- Website content is fully in English.
- This project is intentionally local-first for a reliable classroom demo.
