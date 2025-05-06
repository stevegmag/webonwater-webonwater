import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  output: isGithubPages ? 'export' : undefined,
  // Configure basePath and assetPrefix for GitHub Pages
  basePath: isGithubPages ? '/webonwater-webonwater' : '',
  assetPrefix: isGithubPages ? '/webonwater-webonwater/' : '',
  images: isGithubPages ? {
    unoptimized: true,
  } : {},
};

export default nextConfig;
