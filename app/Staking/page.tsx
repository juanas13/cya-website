"use client";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default function Staking() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-black mb-12 text-gradient">Staking CYA</h1>
        <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-12">
          <div className="text-8xl font-bold text-purple-400 mb-8">Jusqu'à 100% APY</div>
          <p className="text-2xl text-gray-300 mb-12">Stakez vos CYA et gagnez des rewards mintés automatiquement</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/50 rounded-2xl p-8 border border-purple-700">
              <p className="text-xl mb-4">Cooldown</p>
              <p className="text-5xl font-bold text-purple-400">7 jours</p>
            </div>
            <div className="bg-black/50 rounded-2xl p-8 border border-purple-700">
              <p className="text-xl mb-4">Pénalité early unstake</p>
              <p className="text-5xl font-bold text-purple-400">1%</p>
            </div>
          </div>
          <a href="https://cya-coral.vercel.app" target="_blank" className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-purple rounded-2xl font-bold text-2xl hover:scale-110 transition-all">
            Aller au DApp Staking <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );

}
