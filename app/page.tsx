"use client"; // Obligatoire pour le onClick

import Image from "next/image";
import { ArrowRight, Copy, Twitter, MessageCircle } from "lucide-react";

// Désactive la génération statique (ligne magique qui règle tout)
export const dynamic = "force-dynamic";

function copyCA() {
  navigator.clipboard.writeText("0x671cb1a2c934017fc019a7a4bf11ae5a30a32354");
  alert("✅ Contract Address copiée !");
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative px-6 pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-transparent opacity-60" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Image
            src="/iHmVe2H_d.jpeg"
            alt="CYA Token Logo"
            width={300}
            height={300}
            className="mx-auto mb-10 rounded-full shadow-2xl border-8 border-purple-600/50"
            priority
          />

          <div className="inline-flex items-center gap-3 bg-green-600/20 border border-green-500 rounded-full px-8 py-4 text-lg mb-10">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
            LIVE SUR BINANCE SMART CHAIN
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            CYA TOKEN
          </h1>

          <p className="text-2xl md:text-4xl mb-16 text-gray-300 max-w-4xl mx-auto">
            Staking Ultime • Rewards IA Automatisés • Gouvernance 100% Décentralisée
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
              target="_blank"
              rel="noopener noreferrer"
              className="px-16 py-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-2xl hover:scale-110 transition-all shadow-2xl flex items-center gap-4 justify-center"
            >
              Acheter sur PancakeSwap <ArrowRight className="w-8 h-8" />
            </a>

            <button
              onClick={copyCA}
              className="px-16 py-8 border-2 border-purple-600 rounded-2xl font-bold text-2xl hover:bg-purple-600/30 transition-all flex items-center gap-4 justify-center"
            >
              <Copy className="w-7 h-7" /> Copier CA
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-gray-900/70 backdrop-blur border border-purple-700 rounded-3xl p-10">
              <div className="text-6xl font-bold text-purple-400">2.5%</div>
              <p className="text-xl text-gray-400 mt-4">Taxes totales</p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur border border-purple-700 rounded-3xl p-10">
              <div className="text-6xl font-bold text-purple-400">1M</div>
              <p className="text-xl text-gray-400 mt-4">Supply Maximum</p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur border border-purple-700 rounded-3xl p-10">
              <div className="text-6xl font-bold text-purple-400">100%</div>
              <p className="text-xl text-gray-400 mt-4">APY Max Staking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-800 text-center">
        <div className="flex justify-center gap-20 text-7xl mb-10">
          <a href="https://twitter.com/CYATokenBSC" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Twitter />
          </a>
          <a href="https://t.me/CYATokenBSC" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <MessageCircle />
          </a>
        </div>
        <p className="text-gray-400 text-lg">© 2025 CYA Token – CryptoIA Revolution</p>
        <p className="text-sm text-gray-600 mt-4">DYOR • Not financial advice</p>
      </footer>
    </div>
  );
}
