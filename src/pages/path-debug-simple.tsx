import React, { useEffect, useState } from 'react';
import { getImagePath } from '../utils/imageUtils';

/**
 * A simple debug page that doesn't use any complex components
 */
const SimplePathDebugPage: React.FC = () => {
  const [isGitHubPages, setIsGitHubPages] = useState(false);
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsGitHubPages(window.location.hostname.includes('github.io'));
      setLocation(window.location.toString());
      
      // Log some useful debug info
      console.log('Simple Path Debug Info:');
      console.log('Current URL:', window.location.toString());
      console.log('Is GitHub Pages:', window.location.hostname.includes('github.io'));
    }
  }, []);

  // Test paths
  const imagePath1 = getImagePath('/images/web_on_water_logo.png');
  const imagePath2 = getImagePath('images/web_on_water_logo.png');
  const videoPath1 = getImagePath('/videos/hero-background.mp4');
  const videoPath2 = getImagePath('videos/hero-background.mp4');

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Simple Path Debug</h1>
      
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <h2>Environment Info</h2>
        <p><strong>Is GitHub Pages:</strong> {isGitHubPages ? 'Yes' : 'No'}</p>
        <p><strong>Current URL:</strong> {location}</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Image Path Tests</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Path 1: /images/example.jpg</h3>
          <p>Resolved to: {imagePath1}</p>
          <img 
            src={imagePath1} 
            alt="Test image 1" 
            style={{ maxWidth: '300px', border: '1px solid #ccc' }} 
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Path 2: images/example.jpg</h3>
          <p>Resolved to: {imagePath2}</p>
          <img 
            src={imagePath2} 
            alt="Test image 2" 
            style={{ maxWidth: '300px', border: '1px solid #ccc' }} 
          />
        </div>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Video Path Tests</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Path 1: /videos/example.mp4</h3>
          <p>Resolved to: {videoPath1}</p>
          <video 
            controls 
            width="400" 
            height="300" 
            style={{ maxWidth: '100%', border: '1px solid #ccc' }}
          >
            <source src={videoPath1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Path 2: videos/example.mp4</h3>
          <p>Resolved to: {videoPath2}</p>
          <video 
            controls 
            width="400" 
            height="300" 
            style={{ maxWidth: '100%', border: '1px solid #ccc' }}
          >
            <source src={videoPath2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <div>
        <h2>Manual Tests</h2>
        <p>Try these direct paths in your browser:</p>
        <ul>
          <li><a href="/webonwater-webonwater/images/web_on_water_logo.png" target="_blank">/webonwater-webonwater/images/example.jpg</a></li>
          <li><a href="/webonwater-webonwater/public/imagesweb_on_water_logo.png" target="_blank">/webonwater-webonwater/public/images/example.jpg</a></li>
          <li><a href="/webonwater-webonwater/videos/hero-background.mp4" target="_blank">/webonwater-webonwater/videos/example.mp4</a></li>
          <li><a href="/webonwater-webonwater/public/videos/hero-background.mp4" target="_blank">/webonwater-webonwater/public/videos/example.mp4</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SimplePathDebugPage;