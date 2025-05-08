/**
 * @type {import('next').NextConfig}
 */
const basePath = process.env.GITHUB_PAGES === 'true' ? '/webonwater-webonwater' : '';
const assetPrefix = process.env.GITHUB_PAGES === 'true' ? '/webonwater-webonwater/' : '';

const nextConfig = {
  reactStrictMode: true,
  
  // Enable static exports
  output: 'export',
  
  // Set the base path for all routes
  basePath,
  
  // Set the asset prefix for all static assets
  assetPrefix,
  
  // Images configuration for static export
  images: {
    unoptimized: true,
  },
  
  // Disable trailing slashes
  trailingSlash: false,
  
  // Make environment variables available to the browser
  env: {
    NEXT_PUBLIC_GITHUB_PAGES: process.env.GITHUB_PAGES
  }
};

module.exports = nextConfig;