# Deployment Scripts

This directory contains utility scripts for deploying and testing the Next.js application.

## Available Scripts

### `test-export.sh`

Tests the export process for GitHub Pages deployment. This script:
- Sets the GITHUB_PAGES environment variable to true
- Builds the Next.js application with static export
- Creates a .nojekyll file in the output directory
- Copies public assets to the output directory

Run with:
```bash
npm run test:export
```

### `verify-public-assets.sh`

Verifies that all files from the public directory are correctly copied to the output directory. This script:
- Builds the application for GitHub Pages
- Lists all files in the public directory
- Lists all files in the output directory
- Helps identify any missing files

Run with:
```bash
npm run verify:assets
```

## Usage Notes

- Make sure scripts are executable: `chmod +x scripts/*.sh`
- These scripts are meant for local testing and verification
- The GitHub Actions workflow handles deployment automatically