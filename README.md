# Anthony Ricco — Personal Site

The `personal-website/` directory contains the HTML/CSS/JS that GitHub publishes. The repository root can now store scratch files without Git trying to manage them. A lightweight `index.html` redirect in the root points browsers at `personal-website/index.html` so existing GitHub Pages links continue to work.

## Layout

- `personal-website/index.html` — main page with CV and overview
- `personal-website/presentations.html` — conference abstracts
- `personal-website/style.css` and `personal-website/script.js` — styling + minimal behavior
- `personal-website/assets/` — icons and the latest CV PDF

## Working locally

Open `personal-website/index.html` in any browser or serve the folder:

```sh
npx serve personal-website
```

## Publishing

Push to GitHub (configure Pages to use the `personal-website` folder). Only files inside `personal-website/` are versioned—everything else in `vibecoding/` is ignored.

## Maintenance tips

- Update `personal-website/index.html` for copy changes.
- Replace `personal-website/assets/Anthony-Ricco-CV-2024.pdf` when a new CV is ready.
- Keep assets lightweight so the redirect stays snappy.
