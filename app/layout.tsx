import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CYA Token – CryptoIA Revolution",
  description: "Staking • Rewards IA • Gouvernance Décentralisée • Supply Max 1M",
  keywords: "CYA, CryptoIA, token IA, staking, rewards, BSC, Binance Smart Chain",
  openGraph: {
    title: "CYA Token – Le futur de la Crypto IA",
    description: "Staking intelligent, rewards IA automatisés, gouvernance décentralisée",
    url: "https://cya-coral.vercel.app",
    images: ["/iHmVe2H_d.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/iHmVe2H_d.jpeg" sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className="bg-black text-white min-h-screen antialiased">

        {/* ===== NAVBAR FIXE ===== */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-800/50 shadow-2xl shadow-purple-900/20">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* Logo + Nom */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <Image
                  src="/iHmVe2H_d.jpeg"
                  alt="CYA Token"
                  width={60}
                  height={60}
                  className="rounded-full border-4 border-purple-600 shadow-xl shadow-purple-600/50 group-hover:scale-110 transition duration-300"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-xl group-hover:opacity-80 transition" />
              </div>
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CYA TOKEN
              </span>
            </Link>

            {/* Menu */}
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

              {/* Bouton CTA PancakeSwap */}
              <Link
                href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg shadow-purple-600/50 flex items-center gap-2"
              >
                Acheter CYA
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile menu (futur hamburger si besoin) */}
            <div className="md:hidden">
              <button className="text-3xl">☰</button>
            </div>
          </div>
        </nav>

        {/* ===== CONTENU PRINCIPAL ===== */}
        <main className="pt-28 md:pt-32">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="bg-gradient-to-t from-black via-purple-950/20 to-transparent border-t border-purple-900/50 py-16 mt-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex justify-center gap-8 mb-8">
              <Link href="https://t.me/cya_token" target="_blank" className="text-3xl hover:text-purple-400 transition">Telegram</Link>
              <Link href="https://twitter.com/cya_token" target="_blank" className="text-3xl hover:text-purple-400 transition">Twitter</Link>
            </div>

            <p className="text-gray-400 text-lg">
              © 2025 <span className="font-bold text-purple-400">CYA Token</span> – Tous droits réservés
            </p>
            <p className="text-sm text-gray-600 mt-3">
              DYOR • NFA • Contrat vérifié sur BscScan
            </p>
            <p className="text-xs text-gray-700 mt-6">
              Adresse : 0x671cb1a2c934017fc019a7a4bf11ae5a30a32354
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
              }
