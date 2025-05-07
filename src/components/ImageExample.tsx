import React from 'react';
import Image from 'next/image';
import { getImagePath, getMediaUrl } from '../utils/imageUtils';

/**
 * Example component showing how to use images and videos with proper pathing
 * Works in both development and GitHub Pages environments
 */
const ImageExample: React.FC = () => {
  return (
    <div className="image-examples">
      <h2>Images with Proper Paths</h2>
      
      {/* Regular img tags */}
      <div>
        <h3>Regular img tags</h3>
        <img 
          src={getImagePath('/images/example.jpg')} 
          alt="Example image" 
          width={300}
          height={200}
        />
      </div>
      
      {/* Next.js Image component */}
      <div>
        <h3>Next.js Image Component</h3>
        <Image
          src={getImagePath('/images/example2.jpg')}
          alt="Another example"
          width={300}
          height={200}
          unoptimized={true}
        />
      </div>
      
      {/* Video example */}
      <div>
        <h3>Video with proper path</h3>
        <video 
          controls
          width={400}
          height={300}
        >
          <source src={getMediaUrl('/videos/example.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* CSS background image will need to be handled in CSS */}
      <div 
        className="bg-image-example"
        style={{ 
          backgroundImage: `url(${getImagePath('/images/background.jpg')})`,
          width: '300px',
          height: '200px',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h3>CSS Background Image</h3>
      </div>
    </div>
  );
};

export default ImageExample;