// app/ClientLayout.tsx  ← C'EST ICI QUE VA TOUT LE CODE CLIENT
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, X, Menu } from "lucide-react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <>
      {/* NAVBAR FIXE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-800/50 shadow-2xl shadow-purple-900/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

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

          {/* Desktop Menu */}
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

          {/* Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 rounded-full hover:bg-purple-900/50 transition"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8 text-purple-400" /> : <Menu className="w-8 h-8 text-purple-400" />}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE (plus jamais coupé) */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/80 z-40" onClick={toggleMobileMenu} />
          <div className="fixed inset-y-0 right-0 w-80 bg-black/95 backdrop-blur-2xl border-l border-purple-800 z-50 flex flex-col">
            <div className="flex-1 overflow-y-auto px-8 pt-24 pb-12">
              <div className="flex flex-col space-y-8">
                <Link href="/" onClick={toggleMobileMenu} className="text-2xl font-bold hover:text-purple-400 py-3">Accueil</Link>
                <Link href="/staking" onClick={toggleMobileMenu} className="text-2xl font-bold hover:text-purple-400 py-3">Staking</Link>
                <Link href="/whitepaper" onClick={toggleMobileMenu} className="text-2xl font-bold hover:text-purple-400 py-3">Whitepaper</Link>
                <Link href="/buy" onClick={toggleMobileMenu} className="text-2xl font-bold hover:text-purple-400 py-3">Acheter</Link>
                
                <div className="pt-8">
                  <Link
                    href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
                    target="_blank"
                    onClick={toggleMobileMenu}
                    className="block text-center px-8 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-xl hover:scale-105 transition shadow-2xl"
                  >
                    Acheter CYA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Contenu principal */}
      <main className="pt-28 md:pt-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-purple-900 py-12 text-center text-gray-400">
        <p>© 2025 CYA Token – Tous droits réservés</p>
        <p className="text-sm mt-2">DYOR • Not financial advice</p>
      </footer>
    </>
  );
}
