'use client'; // Ajout pour useState (client-side)

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, X, Menu } from "lucide-react"; // Ajout X pour fermer, Menu pour hamburger

export const metadata: Metadata = {
  title: "CYA Token – CryptoIA Revolution",
  description: "Staking • Rewards IA • Gouvernance Décentralisée",
  keywords: "CYA, CryptoIA, token IA, staking, rewards, BSC",
  openGraph: {
    title: "CYA Token – Le futur de la Crypto IA",
    description: "Staking intelligent et rewards automatisés",
    url: "https://cya-coral.vercel.app",
    images: ["/iHmVe2H_d.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ferme le menu au clic hors ou resize
  useEffect(() => {
    const handleResize = () => setIsMobileMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/iHmVe2H_d.jpeg" sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white min-h-screen antialiased">

        {/* ===== NAVBAR FIXE ===== */}
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

            {/* Menu Desktop */}
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

            {/* Bouton Hamburger Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-3xl z-60"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Sidebar Mobile Menu (overlay) */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-lg border-l border-purple-800 z-40 animate-slide-in">
              <div className="p-8 flex flex-col space-y-6">
                <Link href="/" className="text-xl font-bold hover:text-purple-400 transition" onClick={toggleMobileMenu}>
                  Accueil
                </Link>
                <Link href="/staking" className="text-xl font-bold hover:text-purple-400 transition" onClick={toggleMobileMenu}>
                  Staking
                </Link>
                <Link href="/whitepaper" className="text-xl font-bold hover:text-purple-400 transition" onClick={toggleMobileMenu}>
                  Whitepaper
                </Link>
                <Link href="/buy" className="text-xl font-bold hover:text-purple-400 transition" onClick={toggleMobileMenu}>
                  Acheter
                </Link>
                <Link
                  href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
                  target="_blank"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg"
                  onClick={toggleMobileMenu}
                >
                  Acheter CYA
                </Link>
              </div>
            </div>
          )}

          {/* Overlay pour fermer au clic hors menu */}
          {isMobileMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/50 z-30"
              onClick={toggleMobileMenu}
            />
          )}
        </nav>

        {/* ===== CONTENU PRINCIPAL ===== */}
        <main className="pt-28 md:pt-32">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="bg-gray-950 border-t border-purple-900 py-12 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center gap-8 mb-4 text-2xl">
              <Link href="https://t.me/cya_token" target="_blank" className="hover:text-purple-400 transition">📱 Telegram</Link>
              <Link href="https://twitter.com/cya_token" target="_blank" className="hover:text-purple-400 transition">🐦 Twitter</Link>
              <Link href="https://bscscan.com/address/0x671cb1a2c934017fc019a7a4bf11ae5a30a32354" target="_blank" className="hover:text-purple-400 transition">🔍 BscScan</Link>
            </div>
            <p className="text-gray-400">© 2025 CYA Token – Tous droits réservés</p>
            <p className="text-sm text-gray-600 mt-2">DYOR • Not financial advice</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
