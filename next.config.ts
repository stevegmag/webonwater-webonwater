/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // This ensures your site works on GitHub Pages which uses a subdirectory
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' ? '/webonwater-webonwater' : '',
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' ? '/webonwater-webonwater/' : '',
  
  // Enable static exports
  output: "export",
  
  // Images configuration for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig