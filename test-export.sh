#!/bin/bash

# Set environment variables for GitHub Pages export
export GITHUB_PAGES=true
export NODE_ENV=production

# Clean previous build files
rm -rf .next out

# Build and export the application
echo "Building and exporting Next.js application..."
npm run build
npm run export

# Create .nojekyll file to prevent Jekyll processing
touch out/.nojekyll

# Report success
echo "✅ Export completed successfully!"
echo "Static files are available in the 'out' directory"
echo "To test locally, you can run: npx serve out"