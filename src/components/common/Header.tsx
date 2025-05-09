"use client";

import { useState } from 'react';
import Link from 'next/link';
import LogoText from '@/components/common/LogoText';
import ThemeToggle from '@/components/common/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-light-khaki)]">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <LogoText width="120" height="120" fontsize="41" />
        
        <div className="flex items-center space-x-4">
          {/* Hamburger button */}
          <button 
            onClick={toggleMenu} 
            className="text-[var(--color-dark-flatblue)] hover:text-[var(--color-dark-blue)]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile menu - slides down when open */}
      <div className={`${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out bg-[var(--color-light-khaki)]`}>
        <nav className="container mx-auto px-4 py-2">
          <ul className="flex flex-col space-y-4 py-2">
            <li><Link href="/" className="block text-[var(--color-dark-flatblue)] hover:text-[var(--color-dark-blue)]" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" className="block text-[var(--color-dark-flatblue)] hover:text-[var(--color-dark-blue)]" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/services" className="block text-[var(--color-dark-flatblue)] hover:text-[var(--color-dark-blue)]" onClick={toggleMenu}>Services</Link></li>
            <li><Link href="/portfolio" className="block text-[var(--color-dark-flatblue)] hover:text-[var(--color-dark-blue)]" onClick={toggleMenu}>Portfolio</Link></li>
            <li><Link href="/blog" className="block text-[var(--color-dark-flatblue)] hover:text-[var(--color-dark-blue)]" onClick={toggleMenu}>Blog</Link></li>
            <li><Link href="/contact" className="block text-[var(--color-dark-flatblue)] hover:text-[var(--color-dark-blue)]" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
