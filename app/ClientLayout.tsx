'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, X, Menu } from "lucide-react";
import Providers from "./providers";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fermeture auto du menu mobile au resize + touche Escape
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

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <Providers>
      {/* NAVBAR FIXE – CORRIGÉE & OPTIMISÉE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-800/50 shadow-2xl shadow-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* Logo + Texte */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/iHmVe2H_d.jpeg"
              alt="CYA Token"
              width={52}
              height={52}
              className="rounded-full border-4 border-purple-600 shadow-xl shadow-purple-600/50 group-hover:scale-110 transition duration-300"
              priority
            />
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CYA TOKEN
            </span>
          </Link>

          {/* Menu Desktop – espacement optimisé */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 text-lg font-medium">
            <Link
              href="/"
              className="hover:text-purple-400 transition relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-purple-400 after:transition-all hover:after:w-full whitespace-nowrap"
            >
              Accueil
            </Link>
            <Link
              href="/staking"
              className="hover:text-purple-400 transition relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-purple-400 after:transition-all hover:after:w-full whitespace-nowrap"
            >
              Staking
            </Link>
            <Link
              href="/whitepaper"
              className="hover:text-purple-400 transition relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-purple-400 after:transition-all hover:after:w-full whitespace-nowrap"
            >
              Whitepaper
            </Link>
            <Link
              href="/buy"
              className="hover:text-purple-400 transition relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-1 after:bg-purple-400 after:transition-all hover:after:w-full whitespace-nowrap"
            >
              Acheter
            </Link>

            {/* Bouton CTA */}
            <Link
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
              target="_blank"
              className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-base lg:text-lg hover:scale-105 transition shadow-lg shadow-purple-600/50 flex items-center gap-2 whitespace-nowrap"
            >
              Acheter CYA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full hover:bg-purple-900/50 transition z-50"
            aria-label="Ouvrir/Fermer le menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 text-purple-400" />
            ) : (
              <Menu className="w-8 h-8 text-purple-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay + Menu Mobile */}
      {isMobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/80 z-40"
            onClick={toggleMobileMenu}
          />
          <div className="md:hidden fixed top-0 right-0 h-screen w-80 bg-black/95 backdrop-blur-lg border-l border-purple-800 z-50 flex flex-col">
            <div className="flex-1 overflow-y-auto p-8 pt-24 space-y-6">
              <Link href="/" className="block text-2xl font-bold hover:text-purple-400 transition py-3" onClick={toggleMobileMenu}>
                Accueil
              </Link>
              <Link href="/staking" className="block text-2xl font-bold hover:text-purple-400 transition py-3" onClick={toggleMobileMenu}>
                Staking
              </Link>
              <Link href="/whitepaper" className="block text-2xl font-bold hover:text-purple-400 transition py-3" onClick={toggleMobileMenu}>
                Whitepaper
              </Link>
              <Link href="/buy" className="block text-2xl font-bold hover:text-purple-400 transition py-3" onClick={toggleMobileMenu}>
                Acheter
              </Link>
              <Link
                href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg mt-6"
                onClick={toggleMobileMenu}
              >
                Acheter CYA
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Contenu principal */}
      <main className="pt-28 md:pt-32">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-purple-900 py-12 text-center">
        <p className="text-gray-400">© 2025 CYA Token – Tous droits réservés</p>
        <p className="text-sm text-gray-600 mt-2">DYOR • Not financial advice</p>
      </footer>
    </Providers>
  );
}
