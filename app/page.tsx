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

      {/* HERO */}
      <section className="px-6 py-24 md:py-32 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Acheter CYA Token
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
            En 3 étapes ultra simples
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Pas de KYC • Pas d’inscription • 100 % décentralisé sur Binance Smart Chain
          </p>

          <div className="mt-12">
            <Link
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-14 py-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-full font-black text-2xl md:text-3xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-600/60 group"
            >
              Acheter CYA maintenant
              <ArrowRight className="w-9 h-9 group-hover:translate-x-4 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ÉTAPES – Timeline visuelle */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* Étape 1 */}
          <div className="flex flex-col md:flex-row items-start gap-10 group">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-black shadow-2xl z-10">
              1
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-purple-700/50 rounded-3xl p-8 md:p-12 hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-5 mb-6">
                <Wallet className="w-12 h-12 text-cyan-400" />
                <h2 className="text-3xl md:text-4xl font-black">Installe un wallet</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Télécharge <strong>MetaMask</strong> (PC ou mobile) ou <strong>Trust Wallet</strong> (mobile).<br />
                Crée ton wallet en 30 secondes et passe sur le réseau <strong>Binance Smart Chain (BSC)</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://metamask.io"
                  target="_blank"
                  className="px-6 py-3 bg-cyan-600/20 border border-cyan-500 rounded-full hover:bg-cyan-600/40 transition text-cyan-300 font-semibold"
                >
                  MetaMask
                </Link>
                <Link
                  href="https://trustwallet.com"
                  target="_blank"
                  className="px-6 py-3 bg-purple-600/20 border border-purple-500 rounded-full hover:bg-purple-600/40 transition text-purple-300 font-semibold"
                >
                  Trust Wallet
                </Link>
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-10 group">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-4xl font-black shadow-2xl z-10">
              2
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-pink-700/50 rounded-3xl p-8 md:p-12 hover:scale-[1.02] transition-all duration-500 text-left">
              <div className="flex items-center gap-5 mb-6">
                <Zap className="w-12 h-12 text-pink-400" />
                <h2 className="text-3xl md:text-4xl font-black">Ajoute du BNB</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Achète du BNB sur Binance, Bybit, KuCoin ou OKX.<br />
                Transfère-le sur ton wallet BSC (frais < $0.10).
              </p>
              <p className="text-cyan-400 font-bold">
                Astuce : utilise le réseau BEP-20 → frais quasi nuls
              </p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="flex flex-col md:flex-row items-start gap-10 group">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-4xl font-black shadow-2xl z-10">
              3
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-green-700/50 rounded-3xl p-8 md:p-12 hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-5 mb-8">
                <Globe className="w-12 h-12 text-green-400" />
                <h2 className="text-3xl md:text-4xl font-black">Swap sur PancakeSwap</h2>
              </div>
              <p className="text-lg text-gray-300 mb-10">
                Connecte ton wallet, colle l’adresse du contrat et échange BNB → CYA en un clic.
              </p>
              <div className="text-center">
                <Link
                  href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-5 px-16 py-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-full font-black text-2xl md:text-3xl hover:scale-110 transition-all duration-300 shadow-2xl group"
                >
                  Ouvrir PancakeSwap
                  <ArrowRight className="w-9 h-9 group-hover:translate-x-4 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ADRESSE CONTRAT + COPY */}
      <section className="px-6 py-24 bg-black/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-br from-purple-900/50 to-pink-900/30 border border-purple-700 rounded-3xl p-12 backdrop-blur-2xl shadow-2xl">
            <Shield className="w-20 h-20 mx-auto mb-8 text-purple-400" />
            <p className="text-2xl text-gray-300 mb-6">Adresse officielle du contrat CYA</p>
            <code className="block text-xl md:text-2xl lg:text-3xl font-mono bg-black/70 px-10 py-6 rounded-2xl border border-cyan-500/50 text-cyan-300 break-all mb-8">
              {CONTRACT_ADDRESS}
            </code>

            <button
              onClick={copyCA}
              className="px-12 py-5 bg-cyan-600 hover:bg-cyan-500 rounded-full font-bold text-xl transition-all duration-300 flex items-center gap-4 mx-auto group"
            >
              {copied ? (
                <>
                  <Check className="w-7 h-7 text-green-400" />
                  Copié !
                </>
              ) : (
                <>
                  <Copy className="w-7 h-7 group-hover:scale-110 transition" />
                  Copier l’adresse
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
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Prêt à rejoindre la révolution ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16">
            <Link
              href="/staking"
              className="px-14 py-7 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-black text-2xl md:text-3xl hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              Aller au Staking
            </Link>
            <Link
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
              target="_blank"
              className="px-14 py-7 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-black text-2xl md:text-3xl hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              Acheter maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
          }
