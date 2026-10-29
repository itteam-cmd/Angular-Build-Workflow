# Angular Build Workflow — Demo Dashboard

A responsive Angular demo dashboard for practicing GitHub repository workflows and deployment.

## Features
- Responsive dashboard layout
- Sample project status cards and progress bars
- Recent activity panel
- Demo button interaction
- Standalone Angular component and clean project structure

## Requirements
- Node.js (use a current LTS version)
- npm

## Run locally
1. Extract this ZIP.
2. Open the `Angular-Build-Workflow` folder in VS Code.
3. Open Terminal in that folder.
4. Run:

   ```bash
   npm install
   npm start
   ```

5. Open the local address printed by Angular CLI (usually `http://localhost:4200`).

## Build for production
```bash
npm run build
```
The production build is created under `dist/angular-build-workflow/browser`.

## Push to your GitHub repository
Create an empty repository on GitHub, then run these commands from this folder (replace the URL with your own repository's HTTPS URL):

```bash
git init
git add .
git commit -m "Add Angular demo dashboard"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If `origin` already exists, check it with `git remote -v`. To correct it:
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## GitHub Pages deployment
This is a standard Angular app; uploading source code alone does not publish the live website. First build it and configure a deployment workflow for GitHub Pages, or use a supported Angular deployment method. For project/repository pages, confirm the base URL is configured for the repository path before publishing.

## Notes
All names, counts, activity and project rows are sample demo data. Replace them with your own content as needed.
