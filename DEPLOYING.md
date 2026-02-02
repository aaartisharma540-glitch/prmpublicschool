Deployment for GitHub Pages

This project is a Vite + TypeScript app. GitHub Pages only serves static files, so you must deploy the build output from `dist/` (not the source).

Quick option (recommended):

1. Build locally:
   ```bash
   npm run build
   ```
2. In GitHub: **Settings → Pages** set **Branch: main** and **Folder: /dist**
3. Commit & push your changes (if you changed the source and rebuilt):
   ```bash
   git add . && git commit -m "chore: build for pages" && git push
   ```

Cleaner option (CI deploy - no `dist` committed):

- Use the project GitHub Action (already included) which builds and uploads `dist` and deploys it via `actions/deploy-pages@v4`. The workflow also auto-sets `VITE_BASE` for project sites based on the repository name, so you usually don't need to set it manually.

Vite-specific note (IMPORTANT):

- If your site is hosted under a subpath (e.g. `https://username.github.io/repo-name/`), set the base path before building. Use the `VITE_BASE` env var:

  ```bash
  VITE_BASE="/repo-name/" npm run build
  ```

  Or set `VITE_BASE` in your GitHub Actions build step.

This prevents blank/white screens after a successful deploy.

Extra tip: If you use the GitHub Pages UI approach and the repo is a project site, ensure the Pages `Folder` is set to `/dist`.
