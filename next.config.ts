import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'webonwater-webonwater';

const nextConfig: NextConfig = {
  // Set output to 'export' for static site generation
  output: isGithubPages ? 'export' : undefined,
  
  // Configure basePath and assetPrefix for GitHub Pages
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  
  // Enable trailing slashes for GitHub Pages
  trailingSlash: isGithubPages,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
