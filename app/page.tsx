'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Coins, Shield } from "lucide-react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          CYA TOKEN
        </h1>
        <p className="text-2xl md:text-4xl font-bold mb-12 text-gray-300">
          Crypto x IA Revolution – Staking & Rewards
        </p>

        <div className="flex justify-center mb-16">
          <Image
            src="/iHmVe2H_d.jpeg"
            alt="CYA Token Logo"
            width={200}
            height={200}
            className="rounded-full border-4 border-purple-600 shadow-2xl animate-pulse"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="p-8 bg-gray-900/50 border border-purple-800 rounded-3xl">
            <Brain className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-3xl font-bold mb-4">Rewards IA</h2>
            <p className="text-gray-400">1000 CYA/mois pour l'IA et les stakers</p>
          </div>
          <div className="p-8 bg-gray-900/50 border border-purple-800 rounded-3xl">
            <Coins className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
            <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
            <p className="text-gray-400">Supply 1M • Taxes 2.5%</p>
          </div>
          <div className="p-8 bg-gray-900/50 border border-purple-800 rounded-3xl">
            <Shield className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">Sécurité</h2>
            <p className="text-gray-400">OpenZeppelin • Audit planned</p>
          </div>
        </div>

        <Link
          href="/staking"
          className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-2xl hover:scale-105 transition shadow-lg flex items-center gap-4 mx-auto"
        >
          Commencer le Staking
          <ArrowRight className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}
