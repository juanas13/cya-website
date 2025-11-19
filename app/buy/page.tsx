"use client";
import { ArrowRight, Copy } from "lucide-react";

function copyCA() {
  navigator.clipboard.writeText("0x671cb1a2c934017fc019a7a4bf11ae5a30a32354");
  alert("CA copiée !");
}

export const dynamic = "force-dynamic";

export default function Buy() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black mb-12 text-center text-gradient">Comment acheter CYA</h1>
        <div className="space-y-12">
          <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">1. Créez un wallet</h2>
            <p className="text-xl text-gray-300">Téléchargez MetaMask ou Trust Wallet</p>
          </div>
          <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">2. Achetez du BNB</h2>
            <p className="text-xl text-gray-300">Sur Binance, Coinbase ou directement dans votre wallet</p>
          </div>
          <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6">3. Allez sur PancakeSwap</h2>
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354" target="_blank" className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-purple rounded-2xl font-bold text-2xl hover:scale-110 transition-all">
              Aller sur PancakeSwap <ArrowRight />
            </a>
          </div>
          <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-10 text-center">
            <p className="text-xl mb-6">Contract Address</p>
            <code className="text-2xl text-purple-400 font-mono break-all">0x671cb1a2c934017fc019a7a4bf11ae5a30a32354</code>
            <button onClick={copyCA} className="mt-6 px-8 py-4 bg-purple-600 rounded-xl flex items-center gap-3 mx-auto">
              <Copy /> Copier CA
            </button>
          </div>
        </div>
      </
