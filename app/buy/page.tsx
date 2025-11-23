'use client';

import Link from "next/link";
import { ArrowRight, Copy } from "lucide-react";

export const dynamic = "force-dynamic";

export default function BuyPage() {
  const copyCA = () => {
    navigator.clipboard.writeText("0x671cb1a2c934017fc019a7a4bf11ae5a30a32354");
    alert("Adresse CA copiée !");
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black to-purple-900 text-white overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Comment acheter CYA
        </h1>

        <div className="space-y-12 text-lg">
          {/* Étape 1 */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-6">Étape 1 – Prépare ton wallet</h2>
            <p>Installe MetaMask ou Trust Wallet et passe sur le réseau Binance Smart Chain (BSC).</p>
          </div>

          {/* Étape 2 */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-6">Étape 2 – Ajoute du BNB</h2>
            <p>Achète du BNB sur Binance, KuCoin, etc., puis transfère-le sur ton wallet BSC.</p>
          </div>

          {/* Étape 3 */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-6">Étape 3 – Achète CYA sur PancakeSwap</h2>
            <p className="mb-6">
              Clique sur le bouton ci-dessous, connecte ton wallet, colle l’adresse du token et swap BNB → CYA.
            </p>
            <div className="text-center">
              <Link
                href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full font-bold text-xl hover:scale-105 transition duration-300 shadow-2xl"
              >
                Acheter CYA sur PancakeSwap
              </Link>
            </div>
          </div>

          {/* Adresse CA */}
          <div className="text-center text-gray-400 mt-16">
            <p>Adresse contrat CYA :</p>
            <code className="block mt-2 p-3 bg-black/50 rounded text-cyan-400 break-all">
              0x671cb1a2c934017fc019a7a4bf11ae5a30a32354
            </code>
            <button
              onClick={copyCA}
              className="mt-4 px-8 py-4 border border-cyan-500 rounded-full font-bold hover:bg-cyan-500/20 transition"
            >
              Copier l’adresse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
