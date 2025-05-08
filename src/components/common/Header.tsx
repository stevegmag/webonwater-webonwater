"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Cherry_Cream_Soda } from "next/font/google";
import { getImagePath } from '@/utils/imageUtils';

const cherryCreamSoda = Cherry_Cream_Soda({ subsets: ['latin'], weight: '400' });

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
        <Link href="/" className="wow-logo flex items-center">
          <Image 
            src={getImagePath('web_on_water_logo.png')}
            alt="Web on Water Logo"
            width={120} 
            height={120}
            className="mr-2"
          />
          <div className={`logo-name ${cherryCreamSoda.className}`}>
            <span className="text-secondary font-bold">Web</span>
            <span className="text-primary">On</span>
            <span className="text-secondary font-bold">Water</span>
          </div>
        </Link>
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
