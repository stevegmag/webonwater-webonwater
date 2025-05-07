/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable static exports
  output: 'export',
  
  // This ensures your site works on GitHub Pages which uses a subdirectory
  basePath: process.env.GITHUB_PAGES === 'true' ? '/webonwater-webonwater' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/webonwater-webonwater/' : '',
  
  // Images configuration for static export
  images: {
    unoptimized: true,
  },
  
  // Copy public folder contents to the output directory
  // This ensures all assets in public are properly copied to the out directory
  distDir: process.env.GITHUB_PAGES === 'true' ? '.next-gh-pages' : '.next',
  
  // Disable trailing slashes
  trailingSlash: false,
}

module.exports = nextConfig