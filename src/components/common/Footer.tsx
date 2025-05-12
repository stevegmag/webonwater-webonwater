"use client";

import Link from 'next/link';
import LogoText from '@/components/common/LogoText';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)' }} className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row flex-no-wrap">

          {/* Company info column */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-6">
            <div className={`bg-[var(--color-light-khaki)] text-[var(--color-dark-flatblue)] p-4 rounded-lg mb-4 ${
              theme === 'light' ? 'outline outline-2 outline-[var(--color-text-dark)]' : ''
            }`}>
              <LogoText width="46" height="46" fontsize="28" />
              <p className="text-center mt-2">Fixing the web, one site at a time!</p>
            </div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="px-2">
              <a href="mailto:info@webonwater.com" className="hover:underline">info@webonwater.com</a>
            </p>
            <p className="px-2">123 Web Street, Digital City</p>            
          </div>
          
          {/* Quick links column */}
          <div className="w-full md:w-1/4 mt-8 md:mt-0 mb-8 md:mb-0 md:pr-4 md:pl-10">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="px-2 space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
            
          {/* Technologies column */}
          <div className="w-full md:w-1/2">
            <h4 className="text-lg font-semibold mb-4">Specializing in the following development stacks / platforms:</h4>
            <div className="px-4 flex flew-row flex-no-wrap">
              <div className="w-full sm:w-1/2">
                <ul className="space-y-2">
                  <li>React | Vue | SolidJS | Svelte</li>
                  <li>Next.js | Nuxt.js | Astro</li>
                  <li>JavaScript | TypeScript | jQuery | Alpine.js</li>
                  <li>Node.js | Express | NestJS</li>
                  <li>PHP | Laravel | Symfony</li>
                  <li>Python | Django | Flask</li>
                  <li>HTML | CSS | Sass/SCSS | LESS </li>
                  <li>Bootstrap | Tailwind CSS | *UIKits</li>
                  <li>GraphQL | REST | SOAP</li>
                  <li>Jest | Vitest | Cypress | Playwright</li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <ul className="space-y-2">
                  <li>Vite | Webpack | Rollup</li>
                  <li>MySQL | PostgreSQL | MongoDB</li>
                  <li>Git | GitHub | GitLab</li>
                  <li>NPM | Yarn | PNPM | Gulp</li>
                  <li>Docker | CI/CD | Cloudflare</li>
                  <li>Netlify | Vercel | AWS | DigitalOcean</li>
                  <li>Drupal | WordPress | Headless CMS | Custom CMS</li>
                  <li>Shopify | WooCommerce | HubSpot | Mailchimp</li>
                  <li>Squarespace | Wix | Webflow</li>
                  <li><em>--You name it, we can probably build it!</em></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} WebOnWater. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
