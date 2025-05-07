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

# Report success
echo "✅ Export completed successfully!"
echo "Static files are available in the 'out' directory"
echo "To test locally, you can run: npx serve out"