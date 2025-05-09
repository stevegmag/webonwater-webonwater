import Link from 'next/link';
import LogoText from '@/components/common/LogoText';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row flex-wrap">
          {/* Company info column - 25% width on desktop */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-6">
            <h3 className="text-xl font-bold mb-4 logo-container">
              <LogoText width="46" height="46" fontsize="28" />
            </h3>
            <p className="px-2 mb-4 text-center">Fixing the48 web, one site at a time!</p>
            <br />
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="px-2">
              <a href="mailto:info@webonwater.com" className="hover:underline">info@webonwater.com</a>
            </p>
            <p className="px-2">123 Web Street, Digital City</p>            
          </div>
          
          {/* Quick links column - 25% width on desktop */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-4 md:pl-10">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="px-2 space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          {/* Technologies column - 50% width on desktop */}
          <div className="w-full md:w-2/4">
            <h4 className="text-lg font-semibold mb-4">Specializing in the following stacks / platforms:</h4>
            <div className="px-4 grid grid-cols-2 gap-2">
              <div>
                <ul className="space-y-2">
                  <li>React | Next</li>
                  <li>Vue | Nuxt</li>
                  <li>PHP | Laravel</li>
                  <li>HTML | CSS | JavaScript</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Astro | Vite</li>
                  <li>Drupal | WordPress | Custom CMS</li>
                  <li>Shopify | WooCommerce | HubSpot</li>
                  <li>Squarespace | Wix</li>
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
