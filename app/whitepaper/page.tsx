'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Whitepaper() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-purple-950/20 to-black text-white overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Whitepaper CYA Token
        </h1>
        <div className="bg-white/5 backdrop-blur rounded-3xl p-12 border border-white/10 prose prose-invert max-w-none space-y-8">
          <h2 className="text-4xl font-bold">1. Vision</h2>
          <p className="text-xl text-gray-300">CYA est le premier token qui récompense l'intelligence artificielle et ses utilisateurs via un système de staking intelligent et des rewards IA automatisés.</p>
          
          <h2 className="text-4xl font-bold">2. Tokenomics</h2>
          <ul className="list-disc text-xl text-gray-300 space-y-4">
            <li>Supply maximum : 1 000 000 CYA</li>
            <li>Taxes : 2.5% (0.5% burn, 1% liquidité, 1% rewards)</li>
            <li>Rewards IA : 1000 CYA/mois max (100/user)</li>
            <li>Staking APY ajustable jusqu'à 100%</li>
          </ul>

          <h2 className="text-4xl font-bold">3. Technologie</h2>
          <p className="text-xl text-gray-300">Contrat upgradeable OpenZeppelin v5 + Timelock + Proxy transparent. Sécurité maximale.</p>

          <h2 className="text-4xl font-bold">4. Roadmap 2025</h2>
          <ul className="list-disc text-xl text-gray-300 space-y-4">
            <li>Q4 2025 : Lancement + Rewards IA v1</li>
            <li>Q1 2026 : Listing CMC/CG + Audit</li>
            <li>Q2 2026 : Rewards IA v2 + DAO</li>
          </ul>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/staking"
            className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-2xl hover:scale-105 transition flex items-center gap-4 mx-auto"
          >
            Commencer le Staking
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}
