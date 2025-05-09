"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import LogoText from '@/components/common/LogoText';


export default function Header() {
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <LogoText width="120" height="120" fontsize="41" />
        
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
