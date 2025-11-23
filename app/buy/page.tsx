'use client';

import Link from "next/link";
import { ArrowRight, Copy, Check, Wallet, Zap, Globe } from "lucide-react";
import { useState } from "react";

const CONTRACT_ADDRESS = "0x671cb1a2c934017fc019a7a4bf11ae5a30a32354";

export const dynamic = "force-dynamic";

export default function BuyPage() {
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white pt-24 pb-32 px-6">

      {/* HERO */}
      <div className="text-center max-w-5xl mx-auto mb-20">
        <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
          Comment acheter CYA
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-gray-300">
          En 3 étapes seulement – 100 % décentralisé
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">

        {/* ÉTAPE 1 */}
        <div className="group relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/50 rounded-3xl p-10 md:p-12 hover:scale-[1.02] transition-all duration-500 shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-black shadow-xl">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-4">
                <Wallet className="w-10 h-10 text-cyan-400" />
                Créez un wallet
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Téléchargez <strong className="text-cyan-400">MetaMask</strong> (PC/mobile) ou <strong className="text-cyan-400">Trust Wallet</strong> (mobile).<br />
                Passez sur le réseau <strong>Binance Smart Chain (BSC)</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* ÉTAPE 2 */}
        <div className="group relative bg-gradient-to-br from-pink-900/20 to-black border border-pink-800/50 rounded-3xl p-10 md:p-12 hover:scale-[1.02] transition-all duration-500 shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-3xl font-black shadow-xl">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-4">
                <Zap className="w-10 h-10 text-pink-400" />
                Achetez du BNB
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Achetez du BNB sur Binance, Bybit, KuCoin, ou directement dans votre wallet via MoonPay / Ramp.<br />
                <span className="text-cyan-400 font-bold">Frais BEP-20 = quasi gratuit</span>
              </p>
            </div>
          </div>
        </div>

        {/* ÉTAPE 3 */}
        <div className="group relative bg-gradient-to-br from-green-900/20 to-black border border-green-800/50 rounded-3xl p-10 md:p-12 hover:scale-[1.02] transition-all duration-500 shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-3xl font-black shadow-xl">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4">
                <Globe className="w-10 h-10 text-green-400" />
                Swap sur PancakeSwap
              </h2>
              <div className="text-center">
                <Link
                  href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-5 px-16 py-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-full font-black text-2xl md:text-3xl hover:scale-110 transition-all duration-500 shadow-2xl shadow-purple-600/70 group"
                >
                  Aller sur PancakeSwap
                  <ArrowRight className="w-9 h-9 group-hover:translate-x-4 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CONTRACT ADDRESS */}
        <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-700 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-purple-400">
            Adresse du contrat (CA)
          </h3>
          <code className="block text-lg md:text-2xl font-mono bg-black/60 px-8 py-6 rounded-2xl border border-cyan-500/50 text-cyan-300 break-all mb-8">
            {CONTRACT_ADDRESS}
          </code>

          <button
            onClick={copyCA}
            className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 flex items-center gap-4 mx-auto shadow-xl"
          >
            {copied ? (
              <>
                <Check className="w-7 h-7 text-green-400" />
                Copié !
              </>
            ) : (
              <>
                <Copy className="w-7 h-7" />
                Copier l’adresse CA
              </>
            )}
          </button>

          {copied && (
            <p className="mt-6 text-green-400 font-bold text-lg animate-pulse">
              Adresse copiée dans le presse-papier
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
