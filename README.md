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

## Handling Public Assets

This project uses a special approach to handle static assets (images, videos, etc.) when deploying to GitHub Pages. Due to the subdirectory path structure of GitHub Pages, standard references to public assets won't work correctly.

# Using the Fixed Image Path Utility

The previous implementation that used `next/config` with `publicRuntimeConfig` caused runtime errors in newer versions of Next.js. The fixed implementation uses a client-side detection approach that works reliably across all environments.

## Implementation Details

The new implementation:

1. Detects GitHub Pages environment by checking if the current hostname includes 'github.io'
2. Applies the '/webonwater-webonwater' prefix only when on GitHub Pages
3. Works without requiring any special configuration in next.config.js

## How to Use

```tsx
import { getImagePath, getMediaUrl } from '@/utils/imageUtils';

// In your component:
const MyComponent: React.FC = () => {
  return (
    <>
      <img src={getImagePath('/images/example.jpg')} alt="Example" />
      <video>
        <source src={getMediaUrl('/videos/example.mp4')} type="video/mp4" />
      </video>
      <div style={{ backgroundImage: `url(${getImagePath('/images/bg.jpg')})` }}>
        Background Image
      </div>
    </>
  );
};
```

This approach has several advantages:
- Works consistently in both development and production
- No dependency on potentially unsupported Next.js features
- No runtime errors with current Next.js versions
- Simple client-side implementation that's easy to maintain

## Important Notes

- This implementation only adds the path prefix on GitHub Pages
- For local development, paths are used as-is
- The solution ensures images display correctly in both environments

### How It Works

The TypeScript utility function adds the correct base path prefix to your assets depending on the environment:
- In development: `/images/example.jpg`
- On GitHub Pages: `/webonwater-webonwater/images/example.jpg`

See the `ImageExample.tsx` component for more examples of proper asset usage in TypeScript.

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