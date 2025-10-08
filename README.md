# Personal Website

Static CV site for Anthony Ricco, MD.

## Local preview

Open `index.html` directly in a browser or serve the folder with any static server (for example `python3 -m http.server`).

## Deploying to Cloudflare Pages

1. Connect the GitHub repository to a Cloudflare Pages project named `personal-website`.
2. Make sure both the build and deploy commands are empty (clear any previous values like `npx wrangler deploy`).
3. Set the output directory to `.` (the repository root).
4. Trigger a deployment; Pages will publish the static files in this folder.
