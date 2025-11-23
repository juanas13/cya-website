"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Copy } from "lucide-react";

// Fonction pour copier l'adresse du contrat
function copyCA() {
  navigator.clipboard.writeText("0x671cb1a2c934017fc019a7a4bf11ae5a30a32354");
  // Toast plus propre qu'un alert()
  const toast = document.createElement("div");
  toast.textContent = "Adresse CA copiée !";
  toast.className =
    "fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl z-50 animate-pulse";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-32 text-center bg-gradient-to-b from-purple-900/40 via-black to-black">
        {/* Logo CYA */}
        <Image
          src="/iHmVe2H_d.jpeg"
          alt="Logo CYA Token"
          width={300}
          height={300}
          className="mx-auto mb-10 rounded-full border-8 border-purple-600 shadow-2xl shadow-purple-600/50"
          priority
        />

        {/* Titre principal */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          CYA TOKEN
        </h1>

        <p className="text-2xl md:text-4xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Le premier token IA qui récompense vraiment ses holders
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link
            href="/buy"
            className="group px-16 py-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-2xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-600/50 flex items-center gap-4 justify-center"
          >
            Acheter CYA
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition" />
          </Link>

          <button
            onClick={copyCA}
            className="px-16 py-8 border-2 border-purple-600 rounded-2xl font-bold text-2xl hover:bg-purple-600/30 transition-all duration-300 flex items-center gap-4 backdrop-blur"
          >
            <Copy className="w-7 h-7" />
            Copier l’adresse CA
          </button>
        </div>
      </section>

      {/* Section Stats / Tokenomics */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Taxe totale */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800 rounded-3xl p-10 text-center backdrop-blur hover:scale-105 transition">
            <div className="text-6xl font-bold text-purple-400">2.5%</div>
            <p className="text-xl text-gray-400 mt-4">Taxes totales</p>
            <p className="text-sm text-gray-500 mt-2">2% + 0.5% burn</p>
          </div>

          {/* Supply maximale */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800 rounded-3xl p-10 text-center backdrop-blur hover:scale-105 transition">
            <div className="text-6xl font-bold text-purple-400">1M</div>
            <p className="text-xl text-gray-400 mt-4">Supply Max</p>
            <p className="text-sm text-gray-500 mt-2">1 000 000 CYA</p>
          </div>

          {/* APY Staking */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800 rounded-3xl p-10 text-center backdrop-blur hover:scale-105 transition">
            <div className="text-6xl font-bold text-purple-400">100%</div>
            <p className="text-xl text-gray-400 mt-4">APY Max Staking</p>
            <p className="text-sm text-gray-500 mt-2">Jusqu’à 100% ajustable</p>
          </div>
        </div>
      </section>

      {/* Optionnel : Petite section CTA finale */}
      <section className="py-16 text-center">
        <p className="text-gray-500 text-sm">
          Contrat vérifié • Upgradeable • Audité OpenZeppelin v5
        </p>
      </section>
    </div>
  );
}
