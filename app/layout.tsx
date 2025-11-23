'use client'; // IMPORTANT : Pour useState (client-side rendering)

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, X, Menu } from "lucide-react"; // Installe : npm install lucide-react

export const metadata: Metadata = {
  title: "CYA Token – CryptoIA Revolution",
  description: "Staking • Rewards IA • Gouvernance Décentralisée",
  keywords: "CYA, CryptoIA, token IA, staking, rewards, BSC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ferme le menu auto au resize (desktop) ou clic hors
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/iHmVe2H_d.jpeg" sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white min-h-screen antialiased">

        {/* NAVBAR FIXE */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-800/50 shadow-2xl shadow-purple-900/20">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <Image
                src="/iHmVe2H_d.jpeg"
                alt="CYA Token"
                width={60}
                height={60}
                className="rounded-full border-4 border-purple-600 shadow-xl shadow-purple-600/50 group-hover:scale-110 transition duration-300"
                priority
              />
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CYA TOKEN
              </span>
            </Link>

            {/* Menu Desktop (visible >768px) */}
            <div className="hidden md:flex items-center gap-10 text-lg font-medium">
              <Link href="/" className="hover:text-purple-400 transition relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-purple-400 after:transition-all hover:after:w-full">
                Accueil
              </Link>
              <Link href="/staking" className="hover:text-purple-400 transition relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-purple-400 after:transition-all hover:after:w-full">
                Staking
              </Link>
              <Link href="/whitepaper" className="hover:text-purple-400 transition relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-purple-400 after:transition-all hover:after:w-full">
                Whitepaper
              </Link>
              <Link href="/buy" className="hover:text-purple-400 transition relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-purple-400 after:transition-all hover:after:w-full">
                Acheter
              </Link>
              <Link
                href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg shadow-purple-600/50 flex items-center gap-2"
              >
                Acheter CYA
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Bouton Hamburger (visible <768px) */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-3xl p-2 rounded-full hover:bg-purple-900/50 transition z-60"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8 text-purple-400" /> : <Menu className="w-8 h-8 text-purple-400" />}
            </button>
          </div>

          {/* SIDEBAR MOBILE (slide de la droite) */}
          {isMobileMenuOpen && (
            <>
              {/* Overlay fond */}
              <div
                className="md:hidden fixed inset-0 bg-black/50 z-40"
                onClick={toggleMobileMenu}
              />
              {/* Sidebar */}
              <div className="md:hidden fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-lg border-l border-purple-800 z-50 animate-slide-in">
                <div className="p-8 flex flex-col space-y-6 pt-20"> {/* pt-20 pour nav height */}
                  <Link href="/" className="text-xl font-bold hover:text-purple-400 transition py-2" onClick={toggleMobileMenu}>
                    Accueil
                  </Link>
                  <Link href="/staking" className="text-xl font-bold hover:text-purple-400 transition py-2" onClick={toggleMobileMenu}>
                    Staking
                  </Link>
                  <Link href="/whitepaper" className="text-xl font-bold hover:text-purple-400 transition py-2" onClick={toggleMobileMenu}>
                    Whitepaper
                  </Link>
                  <Link href="/buy" className="text-xl font-bold hover:text-purple-400 transition py-2" onClick={toggleMobileMenu}>
                    Acheter
                  </Link>
                  <Link
                    href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
                    target="_blank"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg mt-4"
                    onClick={toggleMobileMenu}
                  >
                    Acheter CYA
                  </Link>
                </div>
              </div>
            </>
          )}
        </nav>

        {/* CONTENU PRINCIPAL */}
        <main className="pt-28 md:pt-32">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-950 border-t border-purple-900 py-12 text-center">
          <p className="text-gray-400">© 2025 CYA Token – Tous droits réservés</p>
          <p className="text-sm text-gray-600 mt-2">DYOR • Not financial advice</p>
        </footer>
      </body>
    </html>
  );
                }
