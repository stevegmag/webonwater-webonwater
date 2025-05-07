# Next.js Project with Automated Deployment

This Next.js project is configured with CI/CD pipelines to automatically deploy to GitHub Pages and Vercel.

## Deployment Setup

- **GitHub Pages**: Automatically deploys from the `develop` branch to https://stevegmag.github.io/webonwater-webonwater
- **Vercel**: Automatically deploys from the `main` branch (once Vercel is configured)

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment Workflows

### GitHub Pages

The project is set up to automatically deploy to GitHub Pages when code is pushed to the `develop` branch. The deployment workflow:

1. Builds the Next.js application with static export
2. Creates the output directory structure
3. Creates a `.nojekyll` file to prevent GitHub Pages from ignoring underscore files
4. Copies all files from the `public` directory to ensure images and videos are included
5. Deploys to the `gh-pages` branch

For manual deployment to GitHub Pages, run:

```bash
npm run deploy:github
```

### Vercel

The project is also configured to deploy to Vercel when code is pushed to the `main` branch (requires Vercel configuration).

For manual deployment to Vercel, run:

```bash
npm run deploy:vercel
```

## Utility Scripts

Several utility scripts are available in the `scripts` directory to help with deployment and testing:

- `npm run test:export` - Test the export process locally
- `npm run verify:assets` - Verify that public assets are correctly copied
- `npm run debug:build` - Diagnose build issues with detailed logging

## Project Structure

```
.
├── .github/workflows/  # GitHub Actions workflows
├── public/             # Static assets (images, videos, etc.)
├── scripts/            # Utility scripts for deployment
├── src/                # Next.js application code
├── .gitignore
├── DEPLOYMENT.md       # Detailed deployment instructions
├── next.config.js      # Next.js configuration
├── package.json
└── README.md           # This file
```

## Important Notes

- The GitHub Pages deployment requires the `gh-pages` branch to be set as the publishing source in GitHub repository settings.
- For local testing of the build output, run `npm run debug:build` to see detailed information about the build process.
- Always ensure that `.nojekyll` file is created in the output directory to prevent GitHub Pages from ignoring files starting with underscore.

For more details on deployment, see [DEPLOYMENT.md](DEPLOYMENT.md).