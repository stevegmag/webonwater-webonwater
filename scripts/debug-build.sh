#!/bin/bash

# Set environment variables for GitHub Pages export
export GITHUB_PAGES=true
export NODE_ENV=production
export DEBUG=true

# Show current directory and Next.js configuration
echo "Current directory: $(pwd)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Next.js config:"
cat next.config.js

# Clean previous build files
echo "Cleaning previous build files..."
rm -rf .next out
echo "Done cleaning."

# List project directories
echo "Project directories before build:"
ls -la

# Build the application with verbose logging
echo "Building Next.js application..."
npm run build --verbose

# Check if out directory was created
echo "Checking for 'out' directory after build..."
if [ -d "out" ]; then
  echo "✅ 'out' directory exists."
  echo "Contents of 'out' directory:"
  ls -la out
else
  echo "❌ 'out' directory does not exist."
  echo "Contents of current directory:"
  ls -la
  
  echo "Contents of .next directory (if it exists):"
  if [ -d ".next" ]; then
    ls -la .next
  else
    echo ".next directory does not exist."
  fi
fi

# Create out directory if it doesn't exist
echo "Creating 'out' directory if it doesn't exist..."
mkdir -p out

# Create .nojekyll file
echo "Creating .nojekyll file..."
touch out/.nojekyll

# Copy public assets
echo "Copying public assets to out directory..."
if [ -d "public" ]; then
  cp -r public/* out/ || true
  echo "✅ Public assets copied."
else
  echo "❌ Public directory does not exist."
fi

echo "Final contents of 'out' directory:"
ls -la out

echo "Debug build process completed."