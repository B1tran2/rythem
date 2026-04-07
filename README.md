# RYTHEM — Pure Static GitHub Pages Website

This project is now a **pure static website** (no React, no Vite, no npm commands required).

## What changed

The site now runs directly from static files in the repository root:

- `index.html`
- `style.css`
- `script.js`

This makes it compatible with GitHub Pages using:

- **Branch:** `main`
- **Folder:** `/ (root)`

## Final URL

- **https://b1tran2.github.io/rythem/**

## No installation needed

You do **not** need:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run deploy`

Just push the files to GitHub and let GitHub Pages serve them.

## Features kept

- Premium RYTHEM visual identity
- Sections: Home, Catalogue / Shop, Cart, About Us
- Developer POV / Client POV toggle
- Real T-shirt placeholder (easy to replace)
- Interactive demo cart (add/remove)
- Smooth section switching and subtle motion effects

## Image replacement note

To replace the real T-shirt placeholder, edit the relevant placeholder areas in:

- `index.html` (home spotlight)
- `script.js` (catalogue product card template)

## GitHub Pages setup (quick)

1. Open your repository settings on GitHub.
2. Go to **Pages**.
3. Set source to:
   - Branch: `main`
   - Folder: `/ (root)`
4. Save and wait a few minutes.
5. Open: `https://b1tran2.github.io/rythem/`
