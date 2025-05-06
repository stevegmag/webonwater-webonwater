import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

// Repository name for GitHub Pages
const repoName = 'webonwater-webonwater';

const nextConfig: NextConfig = {
  /* config options here */
  output: isGithubPages ? 'export' : undefined,
  // Configure basePath and assetPrefix for GitHub Pages
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  // Do NOT set distDir for GitHub Pages - let Next.js use its default
  // distDir: isGithubPages ? 'out' : '.next',
  
  // Enable source maps in production for better error tracking
  productionBrowserSourceMaps: isProduction,
  
  // Disable React StrictMode in production for better performance
  reactStrictMode: !isProduction,
  
  // Compress assets in production
  compress: isProduction,
  
  // Disable powered by header in production
  poweredByHeader: !isProduction,
};

export default nextConfig;
