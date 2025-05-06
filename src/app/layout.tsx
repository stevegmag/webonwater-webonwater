import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web on Water - WoW - Expert Web Development & Technical Solutions',
  description: 'Development-focused agency specializing in web design, custom development, technical repairs, performance optimization, and strategic marketing. We solve complex digital challenges with technical excellence. We rescue broken websites and failing marketing campaigns.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-24"> {/* Add padding-top to account for fixed header */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
