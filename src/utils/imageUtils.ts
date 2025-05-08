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
  // console.log('full path:', path);

  // Make sure path starts with a slash
  let normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // If the path already starts with /images or /videos, don't add another layer... else assume it's an image and add that path
  normalizedPath = (normalizedPath.startsWith('/images/') || normalizedPath.startsWith('/videos/')) ? normalizedPath : `/images/${normalizedPath}`;

  console.log('normalizedPath:', normalizedPath);
  
  // Check if we're in GitHub Pages environment
  const isGitHubPages = typeof window !== 'undefined' && 
    window.location.hostname.includes('github.io');
  
  // For GitHub Pages, try both the root and directly in images
  if (isGitHubPages) {    
    const returnPath = '/webonwater-webonwater'+ normalizedPath;
    // console.log('full path:', returnPath);
    return returnPath;
  }
  else {
    // console.log('full path:', normalizedPath);
    return normalizedPath;
  }
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