"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Cherry_Cream_Soda } from "next/font/google";
import { getImagePath } from '@/utils/imageUtils';

const cherryCreamSoda = Cherry_Cream_Soda({ subsets: ['latin'], weight: '400' });

export default function LogoText(props: { width ?: string, height ?: string, fontsize ?: string }) {
  const { width, height, fontsize } = props;
  const logoWidth = width ? parseInt(width, 10) : 120;
  const logoHeight = height ? parseInt(height, 10) : 120; 
  const logoFontSize = fontsize ? parseInt(fontsize, 10) : 36;
  

  return (
    <Link href="/" className="wow-logo flex items-center">
      <Image 
        src={getImagePath('/images/web_on_water_logo.png')}
        alt="Web on Water Logo"
        width={logoWidth} 
        height={logoHeight}
        className="hidden sm:block mr-2 "
      />
      <div className={`logo-name ${cherryCreamSoda.className}`} style={{ fontSize: fontsize ? `${logoFontSize}px` : '36px' }}>
        <span className="text-secondary font-bold" >Web</span>
        <span className="text-primary">On</span>
        <span className="text-secondary font-bold">Water</span>
      </div>
    </Link>
  );
}
