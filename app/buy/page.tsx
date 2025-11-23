"use client";

import Link from "next/link";
import { ArrowRight, Copy } from "lucide-react";

// Toast propre au lieu de alert()
function copyCA() {
  navigator.clipboard.writeText("0x671cb1a2c934017fc019a7a4bf11ae5a30a32354");
  const toast = document.createElement("div");
  toast.textContent = "Adresse CA copiée !";
  toast.className =
    "fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl z-50 animate-pulse";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

export const dynamic = "force-dynamic";

export default function BuyPage() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <div className="max-w-4xl mx-auto">

        {/* Titre */}
        <h1 className="text-6xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Comment acheter CYA
        </h1>

        <div className="space-y-12">

          {/* Étape 1 */}
          <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-10 hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">1. Créez un wallet</h2>
            <p className="text-xl text-gray-300">
              Téléchargez <span className="font-bold text-cyan-400">MetaMask</span> ou <span className="font-bold text-cyan-400">Trust Wallet</span>
            </p>
          </div>

          {/* Étape 2 */}
          <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-10 hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">2. Achetez du BNB</h2>
            <p className="text-xl text-gray-300">
              Sur Binance, Coinbase, ou directement dans votre wallet (via MoonPay, Ramp, etc.)
            </p>
          </div>

          {/* Étape 3 */}
          <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-10 hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">3. Allez sur PancakeSwap</h2>
            
            <Link
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-2xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-600/50"
            >
              Aller sur PancakeSwap
              <ArrowRight className="w-8 h-8" />
            </Link>
          </div>

          {/* Contract Address */}
          <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-10 text-center">
            <p className="text-xl mb-6 text-gray-400">Contract Address (CA)</p>
            <code className="block text-2xl md:text-3xl text-purple-400 font-mono break-all bg-black/50 px-6 py-4 rounded-xl">
              0x671cb1a2c934017fc019a7a4bf11ae5a30a32354
            </code>
            <button
              onClick={copyCA}
              className="mt-8 px-10 py-5 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-xl flex items-center gap-3 mx-auto transition-all hover:scale-105"
            >
              <Copy className="w-6 h-6" />
              Copier l’adresse CA
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
