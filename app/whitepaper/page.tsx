'use client';

import { ArrowRight, Brain, Shield, Zap, Globe, Clock, Users, Coins } from 'lucide-react';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-glow">
            WHITEPAPER CYA
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
            Crypto × Intelligence Artificielle = Révolution
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Le premier token qui récompense les utilisateurs ET l’IA elle-même via un système de staking intelligent, 
            des rewards automatisés et une gouvernance décentralisée.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
              target="_blank"
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl shadow-purple-600/50 flex items-center gap-3 group"
            >
              Acheter CYA maintenant
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
            </Link>
            <div className="text-sm text-gray-500">
              Contrat : <code className="text-cyan-400 font-mono">0x671c...2354</code>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* 1. Vision & Mission */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-700/50 rounded-3xl p-10 md:p-14 backdrop-blur-xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-5 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl">
                <Brain className="w-12 h-12" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black">Vision</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-300">
              CYA n’est pas juste un token. C’est le pont entre la blockchain et l’intelligence artificielle. 
              Nous croyons que l’IA doit être récompensée comme un acteur à part entière de l’écosystème crypto.
            </p>
            <p className="text-lg text-gray-400 mt-6">
              Chaque utilisateur qui stake CYA participe à un système où une partie des rewards finance directement 
              le développement d’IA open-source et décentralisée — un cercle vertueux inédit.
            </p>
          </div>

          {/* 2. Tokenomics */}
          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/10 border border-cyan-700/50 rounded-3xl p-10 md:p-14 backdrop-blur-xl">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-5 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl">
                <Coins className="w-12 h-12" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black">Tokenomics</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400">Supply total & maximum</p>
                  <p className="text-4xl font-black text-cyan-400">1 000 000 CYA</p>
                </div>
                <div>
                  <p className="text-gray-400">Taxes à l’achat/vente</p>
                  <p className="text-3xl font-bold text-purple-400">2.5%</p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    <li>0.5% → Burn définitif</li>
                    <li>1.0% → Liquidité auto</li>
                    <li>1.0% → Rewards IA & marketing</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-400">Staking Rewards</p>
                  <p className="text-3xl font-bold text-green-400">Jusqu’à 100% APY</p>
                  <p className="text-sm text-gray-500 mt-2">Ajusté dynamiquement selon le volume</p>
                </div>
                <div>
                  <p className="text-gray-400">Rewards IA mensuels</p>
                  <p className="text-3xl font-bold text-pink-400">1000 CYA / mois</p>
                  <p className="text-sm text-gray-500">Plafond : 100 CYA par utilisateur</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Sécurité & Technologie */}
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 border border-purple-600 rounded-3xl p-10 md:p-14 backdrop-blur-xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                <Shield className="w-12 h-12" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black">Sécurité Maximale</h2>
            </div>
            <ul className="space-y-5 text-lg text-gray-300">
              <li className="flex items-center gap-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                Contrat upgradeable avec Proxy Transparent (OpenZeppelin v5)
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-purple-400" />
                Timelock 48h sur toutes les fonctions admin
              </li>
              <li className="flex items-center gap-4">
                <Users className="w-6 h-6 text-cyan-400" />
                Multisig Gnosis Safe pour la gouvernance
              </li>
              <li className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-pink-400" />
                Audit complet prévu Q1 2026 (Certik ou PeckShield)
              </li>
            </ul>
          </div>

          {/* 4. Roadmap 2025-2026 */}
          <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-700 rounded-3xl p-10 md:p-14 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Roadmap 2025 → 2026</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl font-black text-cyan-400 mb-4">Q4 2025</div>
                <p className="text-xl font-bold text-purple-400">Lancement officiel</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Fair launch PancakeSwap</li>
                  <li>• Rewards IA v1</li>
                  <li>• Site + Dashboard staking</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-pink-400 mb-4">Q1 2026</div>
                <p className="text-xl font-bold text-purple-400">Explosion</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Listing CoinMarketCap</li>
                  <li>• Listing CoinGecko</li>
                  <li>• Audit complet</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-green-400 mb-4">Q2 2026</div>
                <p className="text-xl font-bold text-purple-400">DAO & IA v2</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Lancement du DAO</li>
                  <li>• Rewards IA automatisés v2</li>
                  <li>• Partenariats stratégiques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center py-16">
            <p className="text-3xl font-bold mb-8">
              Le futur de la crypto est intelligent.
            </p>
            <p className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Rejoins la révolution CYA.
            </p>
            <Link
              href="/staking"
              className="inline-block mt-12 px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-black text-2xl hover:scale-110 transition-all shadow-2xl"
            >
              Commencer le staking maintenant →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/50 py-12 text-center text-gray-500">
        <p>CYA Token © 2025 • Tous droits réservés</p>
        <p className="text-sm mt-2">DYOR • Ce document n’est pas un conseil financier</p>
      </footer>
    </div>
  );
      }
