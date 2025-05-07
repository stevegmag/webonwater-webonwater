/**
 * Utility functions to handle image and media paths correctly
 * for both development and GitHub Pages environments
 */

/**
 * Gets the proper path for an image in the public folder
 * Works with both development and production (GitHub Pages)
 * 
 * @param {string} path - The path to the image relative to the public folder
 * @returns {string} - The proper path with basePath prefix if needed
 */
export function getImagePath(path: string): string {
  // Make sure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Check if we're in GitHub Pages environment
  const isGitHubPages = typeof window !== 'undefined' && 
    window.location.hostname.includes('github.io');
  
  // Add base path for GitHub Pages
  if (isGitHubPages) {
    return `/webonwater-webonwater${normalizedPath}`;
  }
  
  // Return path as is for development
  return normalizedPath;
}

/**
 * Gets the correct URL for videos or other media in the public folder
 * 
 * @param {string} path - The path to the media file relative to the public folder
 * @returns {string} - The proper URL with basePath prefix if needed
 */
export function getMediaUrl(path: string): string {
  return getImagePath(path);
}

/**
 * Example usage:
 * 
 * import { getImagePath } from '@/utils/imageUtils';
 * 
 * function MyComponent() {
 *   return (
 *     <img src={getImagePath('/images/logo.png')} alt="Logo" />
 *   );
 * }
 */