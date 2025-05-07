#!/bin/bash

# Set environment variables for GitHub Pages export
export GITHUB_PAGES=true

# Clean previous build files
rm -rf .next out

# Build and export the application 
# With output: 'export' in next.config.js, next build will handle the export
echo "Building and exporting Next.js application..."
npm run build

# Create .nojekyll file to prevent Jekyll processing
touch out/.nojekyll

# Copy all files from public directory to out directory
echo "Copying public assets to out directory..."
cp -r public/* out/ || true

# Report success
echo "✅ Export completed successfully!"
echo "Static files are available in the 'out' directory"
echo "To test locally, you can run: npx serve out"