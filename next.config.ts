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
};

module.exports = nextConfig;