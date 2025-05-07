
import Link from 'next/link';
import Image from 'next/image';
import { Fugaz_One } from "next/font/google";
import { Original_Surfer } from "next/font/google";
import { Cherry_Cream_Soda } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";
import { Fredoka } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import { Righteous } from "next/font/google";
import { Bungee } from "next/font/google";
import { Bungee_Hairline } from "next/font/google";
import { Kalam } from "next/font/google";
import { Bubblegum_Sans } from "next/font/google";
import { Sniglet } from "next/font/google";
import { Nunito } from "next/font/google";
import { Titan_One } from "next/font/google";
import { Patrick_Hand } from "next/font/google";
import { Varela_Round } from "next/font/google";
import { Concert_One } from "next/font/google";
import { getImagePath } from '@/utils/imageUtils';

// Initialize all fonts
const fugazOne = Fugaz_One({ subsets: ['latin'], weight: '400' }); 
const originalSurfer = Original_Surfer({ subsets: ['latin'], weight: '400' }); 
const cherryCreamSoda = Cherry_Cream_Soda({ subsets: ['latin'], weight: '400' });
const luckiestGuy = Luckiest_Guy({ subsets: ['latin'], weight: '400' });
const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '700'] });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400', '700'] });
const baloo2 = Baloo_2({ subsets: ['latin'], weight: ['400', '700'] });
const righteous = Righteous({ subsets: ['latin'], weight: '400' });
const bungee = Bungee({ subsets: ['latin'], weight: '400' });
const bungeeHairline = Bungee_Hairline({ subsets: ['latin'], weight: '400' });
const kalam = Kalam({ subsets: ['latin'], weight: ['400', '700'] });
const bubblegumSans = Bubblegum_Sans({ subsets: ['latin'], weight: '400' });
const sniglet = Sniglet({ subsets: ['latin'], weight: ['400', '800'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });
const titanOne = Titan_One({ subsets: ['latin'], weight: '400' });
const patrickHand = Patrick_Hand({ subsets: ['latin'], weight: '400' });
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' });
const concertOne = Concert_One({ subsets: ['latin'], weight: '400' });

// Array of all fonts for easier rendering
const fonts = [
  { name: "Fugaz One", font: fugazOne },
  { name: "Original Surfer", font: originalSurfer },
  { name: "Cherry Cream Soda", font: cherryCreamSoda },
  { name: "Luckiest Guy", font: luckiestGuy },
  { name: "Fredoka", font: fredoka },
  { name: "Comfortaa", font: comfortaa },
  { name: "Baloo 2", font: baloo2 },
  { name: "Righteous", font: righteous },
  { name: "Bungee", font: bungee },
  { name: "Bungee", font: bungee },
  { name: "Bungee Hairline", font: bungeeHairline },
  { name: "Kalam", font: kalam },
  { name: "Bubblegum Sans", font: bubblegumSans },
  { name: "Sniglet", font: sniglet },
  { name: "Nunito", font: nunito },
  { name: "Titan One", font: titanOne },
  { name: "Patrick Hand", font: patrickHand },
  { name: "Varela Round", font: varelaRound },
  { name: "Concert One", font: concertOne }
];

export default function LogosPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Logo Explorations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {fonts.map((fontItem, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className={`text-2xl font-bold mb-4 ${fontItem.font.className}`}>{fontItem.name}</h2>
            <div className={`bg-[var(--color-light-khaki)] p-4 rounded-md ${fontItem.font.className}`}>
              <Link href="/" className="wow-logo flex items-center">
                <Image 
                  src={getImagePath('/web_on_water_logo.png')}
                  alt="Web on Water Logo"
                  width={80} 
                  height={80}
                  className="mr-2"
                />
                <div className="logo-name">
                  <span className="text-[var(--color-dark-blue)] font-bold">Web</span>
                  <span className="text-[var(--color-dark-blue)]">On</span>
                  <span className="text-[var(--color-dark-blue)] font-bold">Water</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Original examples preserved */}
      <h2 className="text-2xl font-bold mb-6">Original Examples</h2>
      <div className="flex flex-row flex-wrap gap-8 mb-12">
        <div className={`logo-name ${cherryCreamSoda.className}`}>
          <h2 className="text-2xl font-bold mb-6">Cherry Cream Soda</h2>
          <span className="text-secondary font-bold">Web</span>
          <span className="text-primary">On</span>
          <span className="text-secondary font-bold">Water</span>
        </div>

        <div className="bg-[var(--color-light-khaki)] p-4 rounded-md">
          <Link href="/" className="wow-logo flex items-center">
            <Image 
              src={getImagePath('/web_on_water_logo.png')}
              alt="Web on Water Logo"
              width={120} 
              height={120}
              className="mr-2"
            />
            <div className={`logo-name ${cherryCreamSoda.className}`}>
              <span className="text-[var(--color-dark-blue)] font-bold">Web</span>
              <span className="text-[var(--color-dark-blue)]">On</span>
              <span className="text-[var(--color-dark-blue)] font-bold">Water</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


/*
Fugaz One
Original Surfer
Luckiest Guy

Fredoka
Comfortaa
Baloo 2 
Righteous
Bungee
Bungee Hairline
Kalam
Cherry Cream Soda

Bubblegum Sans
Sniglet
Nunito (headers)
Titan One
Patrick Hand
Varela Round
Concert One
*/
