#!/bin/bash

# Set environment variables for GitHub Pages export
export GITHUB_PAGES=true

# Clean previous build files
rm -rf .next out .next-gh-pages

# Build and export the application 
echo "Building and exporting Next.js application..."
npm run build

# Create .nojekyll file to prevent Jekyll processing
touch out/.nojekyll

# Copy all files from public directory to out directory
echo "Copying public assets to out directory..."
cp -r public/* out/ || true

# Check if public assets were correctly copied
echo "Verifying public assets in output directory..."
echo "----------------------------------------"
echo "Files in public directory:"
find public -type f | sort
echo "----------------------------------------"
echo "Files in out directory (should include all public files):"
find out -type f | sort
echo "----------------------------------------"

# Report success
echo "✅ Export completed successfully!"
echo "Static files are available in the 'out' directory"
echo "To test locally, you can run: npx serve out"