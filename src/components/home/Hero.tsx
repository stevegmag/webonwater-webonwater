"use client";

import Link from 'next/link';
import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';
import { getMediaUrl } from '@/utils/imageUtils';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 1024); // 1024px is the typical laptop breakpoint
      };
      
      // Initial check
      checkIfMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkIfMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-[var(--color-text-dark)] to-[var(--color-med-blue)] text-white overflow-hidden">
      {/* Background Video - only shown on laptop/desktop */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-40"
          >
            <source src={getMediaUrl('/videos/hero-background.mp4')} type="video/mp4" />
          </video>
        </div>
      )}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Broken? <span className="text-[var(--color-light-blue)]">Lost?</span> Adrift?
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
          We <span className="text-[var(--color-light-blue)]">fix</span> broken websites!
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          We are a <span className="font-bold text-[var(--color-light-blue)]">full-service</span> design & development agency, but we specialize in rescuing and repairing existing websites, web applications, and SEO campaigns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button primary>Start a Project</Button>
          </Link>
          <Link href="/contact/audit">
            <Button>Request an Audit</Button>
          </Link><Link href="/contact/sos">
            <Button primary aria-label="Emergency SOS! HELP!">••• --- ••• </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
