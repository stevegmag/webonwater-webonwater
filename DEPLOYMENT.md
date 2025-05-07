# Deployment Instructions

This project is set up with CI/CD pipelines to automatically deploy to:
- GitHub Pages when changes are pushed to the `develop` branch
- Vercel when changes are pushed to the `main` branch

## GitHub Pages Deployment

The GitHub Pages deployment workflow will:
1. Trigger automatically when code is pushed to the `develop` branch
2. Build the Next.js application with static export (using `output: 'export'` in next.config.js)
3. Create the `out` directory if it doesn't exist
4. Add a `.nojekyll` file to prevent GitHub Pages from using Jekyll processing
5. Copy the entire `public` directory to the output directory
6. Deploy the static files to the `gh-pages` branch
7. Make the site available at: https://stevegmag.github.io/webonwater-webonwater

### Manual GitHub Pages Deployment

If you need to deploy manually to GitHub Pages, run:

```bash
npm run deploy:github
```

This script will:
1. Build the Next.js application with static export (using `output: 'export'` in next.config.js)
2. Create the `out` directory if it doesn't exist
3. Add a `.nojekyll` file to prevent GitHub Pages from using Jekyll processing
4. Copy the entire `public` directory to the `out` directory
5. Commit the changes to the repository
6. Push the `/out` directory to the `gh-pages` branch

### Handling Images and Static Assets

Due to GitHub Pages serving the site from a subdirectory (`/webonwater-webonwater`), standard references to public assets won't work correctly. This project includes TypeScript utilities to handle this:

1. Use the provided utility functions for all assets:

```typescript
import { getImagePath, getMediaUrl } from '@/utils/imageUtils';

// Images
<img src={getImagePath('/images/logo.png')} alt="Logo" />

// Videos
<video controls>
  <source src={getMediaUrl('/videos/demo.mp4')} type="video/mp4" />
</video>

// CSS background images
<div style={{ backgroundImage: `url(${getImagePath('/bg.jpg')})` }}></div>
```

2. This ensures assets work in both environments:
   - Development: `/images/logo.png`
   - Production: `/webonwater-webonwater/images/logo.png`

## Vercel Deployment

The Vercel deployment workflow will:
1. Trigger automatically when code is pushed to the `main` branch
2. Use Vercel CLI to deploy the application to production

### Manual Vercel Deployment

To deploy manually to Vercel, run:

```bash
npm run deploy:vercel
```

This requires the Vercel CLI to be installed and authenticated.

### Vercel Setup

To set up Vercel deployment:

1. Create a Vercel account if you don't have one
2. Install Vercel CLI: `npm install -g vercel`
3. Log in to Vercel: `vercel login`
4. Link your project: `vercel link`
5. Add the following secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

You can get these values by running:
```bash
vercel link
```

## Environment Variables

For proper GitHub Pages deployment, make sure to set the `GITHUB_PAGES` environment variable to `true` when building for GitHub Pages. This is already configured in the GitHub Actions workflow.

## Troubleshooting

### GitHub Pages Not Deploying

- Check that the `gh-pages` branch exists
- Verify in repository settings that GitHub Pages is set to deploy from the `gh-pages` branch
- Check the GitHub Actions workflow logs for any errors
- Verify that images are using the `getImagePath` utility function

### Missing Images or Assets

- Make sure all assets are referenced using the `getImagePath` or `getMediaUrl` utility functions
- Check that the public directory is being correctly copied to the output directory
- Inspect network requests in the browser to see the actual paths being requested

### Vercel Deployment Failing

- Verify that all required secrets are set in your GitHub repository
- Check that your Vercel account has the necessary permissions
- Review the GitHub Actions workflow logs for details on the failure