# Deployment Instructions

This project is set up with CI/CD pipelines to automatically deploy to:
- GitHub Pages when changes are pushed to the `develop` branch
- Vercel when changes are pushed to the `main` branch

## GitHub Pages Deployment

The GitHub Pages deployment workflow will:
1. Trigger automatically when code is pushed to the `develop` branch
2. Build the Next.js application
3. Generate static files with `next export`
4. Deploy the static files to the `gh-pages` branch
5. Make the site available at: https://stevegmag.github.io/webonwater-webonwater

### Manual GitHub Pages Deployment

If you need to deploy manually to GitHub Pages, run:

```bash
npm run deploy:github
```

This script will:
1. Build the Next.js application
2. Export static files
3. Add a `.nojekyll` file to prevent GitHub Pages from using Jekyll processing
4. Commit the changes to the repository
5. Push the `/out` directory to the `gh-pages` branch

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

### Vercel Deployment Failing

- Verify that all required secrets are set in your GitHub repository
- Check that your Vercel account has the necessary permissions
- Review the GitHub Actions workflow logs for details on the failure