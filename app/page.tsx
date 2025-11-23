'use client';

import Link from "next/link";
import { Copy, Check, Wallet, ArrowRight, Zap, Shield, Globe } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/30 to-black text-white overflow-x-hidden">
      
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Acheter CYA Token
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
            En 3 étapes ultra simples
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pas de KYC • Pas d’inscription • 100% décentralisé sur Binance Smart Chain
          </p>

          {/* Bouton principal direct */}
          <div className="mt-12">
            <Link
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-7 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-full font-black text-2xl hover:scale-110 transition-all shadow-2xl shadow-purple-600/60 group"
            >
              Acheter CYA maintenant
              <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Étapes - Timeline visuelle */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Étape 1 */}
          <div className="relative flex items-start gap-8 mb-20 group">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-black shadow-2xl z-10">
              1
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-purple-700/50 rounded-3xl p-8 md:p-10 hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <Wallet className="w-10 h-10 text-cyan-400" />
                <h2 className="text-3xl md:text-4xl font-black">Installe un wallet</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Télécharge <strong>MetaMask</strong> (PC/mobile) ou <strong>Trust Wallet</strong> (mobile).<br />
                Crée ton wallet en 30 secondes et passe sur le réseau <strong>Binance Smart Chain (BSC)</strong>.
              </p>
              <div className="mt-6 flex gap-4">
                <Link href="https://metamask.io" target="_blank" className="px-6 py-3 bg-cyan-600/20 border border-cyan-500 rounded-full hover:bg-cyan-600/40 transition">
                  MetaMask
                </Link>
                <Link href="https://trustwallet.com" target="_blank" className="px-6 py-3 bg-purple-600/20 border border-purple-500 rounded-full hover:bg-purple-600/40 transition">
                  Trust Wallet
                </Link>
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="relative flex items-start gap-8 mb-20 group flex-row-reverse">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-4xl font-black shadow-2xl z-10">
              2
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-pink-700/50 rounded-3xl p-8 md:p-10 hover:scale-105 transition-all duration-500 text-right md:text-left">
              <div className="flex items-center gap-4 mb-4 justify-end md:justify-start">
                <Zap className="w-10 h-10 text-pink-400" />
                <h2 className="text-3xl md:text-4xl font-black">Ajoute du BNB</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Achète du BNB sur Binance, Bybit, KuCoin ou OKX.<br />
                Transfère-le directement sur ton wallet BSC (frais < $0.10).
              </p>
              <p className="text-sm text-cyan-400 mt-4 font-bold">
                Astuce : utilise le réseau BEP-20 pour des frais quasi nuls
              </p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="relative flex items-start gap-8 group">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-4xl font-black shadow-2xl z-10">
              3
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-green-700/50 rounded-3xl p-8 md:p-10 hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-10 h-10 text-green-400" />
                <h2 className="text-3xl md:text-4xl font-black">Swap sur PancakeSwap</h2>
              </div>
              <p className="text-lg text-gray-300 mb-8">
                Clique sur le bouton, connecte ton wallet, colle l’adresse du contrat et échange BNB → CYA en 1 clic.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-14 py-7 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-full font-black text-2xl hover:scale-110 transition-all shadow-2xl group"
                >
                  Ouvrir PancakeSwap
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Adresse Contrat + Copy */}
      <section className="px-6 py-20 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-br from-purple-900/50 to-pink-900/30 border border-purple-700 rounded-3xl p-10 backdrop-blur-xl">
            <Shield className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <p className="text-xl text-gray-400 mb-4">Adresse officielle du contrat CYA</p>
            <code className="block text-2xl md:text-3xl font-mono bg-black/70 px-8 py-5 rounded-2xl border border-cyan-500/50 text-cyan-300 break-all">
              {CONTRACT_ADDRESS}
            </code>
            <button
              onClick={copyCA}
              className="mt-8 px-10 py-5 bg-cyan-600 hover:bg-cyan-500 rounded-full font-bold text-xl transition flex items-center gap-3 mx-auto group"
            >
              {copied ? (
                <>
                  <Check className="w-6 h-6" />
                  Copié !
                </>
              ) : (
                <>
                  <Copy className="w-6 h-6 group-hover:scale-110 transition" />
                  Copier l’adresse
                </>
              )}
            </button>
            {copied && (
              <p className="mt-4 text-green-400 font-bold animate-pulse">
                Adresse copiée dans le presse-papier
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Prêt à rejoindre la révolution ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link
              href="/staking"
              className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-black text-2xl hover:scale-110 transition shadow-2xl"
            >
              Aller au Staking
            </Link>
            <Link
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
              target="_blank"
              className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-black text-2xl hover:scale-110 transition shadow-2xl"
            >
              Acheter maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
