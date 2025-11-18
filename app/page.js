// app/page.js
import { ArrowRight, Zap, Shield, Brain, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative px-6 pt-24 pb-32 bg-gradient-to-b from-purple-900/30 via-black to-black">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-900/50 border border-purple-800 rounded-full px-4 py-2 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Live sur Binance Smart Chain
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              CYA Token
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Le premier token qui récompense l&apos;intelligence artificielle<br className="hidden md:block" />
              Staking ultime • Rewards IA automatisés • Gouvernance 100% décentralisée
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                Acheter sur PancakeSwap
                <ArrowRight className="ml-3 w-5 h-5" />
              </a>
              <a
                href="#tokenomics"
                className="px-10 py-5 border-2 border-purple-600 rounded-xl font-bold text-lg hover:bg-purple-600/20 transition-all"
              >
                Voir les Tokenomics
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">2.5%</div>
                <div className="text-gray-400 mt-2">Taxes totales</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">1M</div>
                <div className="text-gray-400 mt-2">Supply Maximum</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">5-100%</div>
                <div className="text-gray-400 mt-2">APY Staking</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-20">Pourquoi CYA va tout changer</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="bg-gray-900/50 border border-purple-800 rounded-2xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
                <Brain className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Rewards IA Automatisés</h3>
                <p className="text-gray-400 leading-relaxed">
                  Notre bot IA mint automatiquement du CYA chaque mois pour récompenser les utilisateurs actifs (max 100 CYA/user).
                </p>
              </div>

              <div className="bg-gray-900/50 border border-purple-800 rounded-2xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
                <Shield className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Sécurité Totale</h3>
                <p className="text-gray-400 leading-relaxed">
                  Proxy Upgradeable + Timelock Controller + Ownership bientôt renoncé = zéro risque de rug pull.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-purple-800 rounded-2xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
                <TrendingUp className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Staking Intelligent</h3>
                <p className="text-gray-400 leading-relaxed">
                  Jusqu’à 100% APY ajustable par la communauté + 7 jours de cooldown avec pénalité anti-dump.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section id="tokenomics" className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-20">Tokenomics 100% Transparents</h2>
            <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-12 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-purple-400">Taxes (2.5% total)</h3>
                  <ul className="space-y-6 text-left text-lg">
                    <li className="flex items-center gap-4"><span className="text-3xl">🔥</span> 0.5% Burn permanent</li>
                    <li className="flex items-center gap-4"><span className="text-3xl">💧</span> 1% Liquidité automatique</li>
                    <li className="flex items-center gap-4"><span className="text-3xl">🤖</span> 1% Rewards IA & Marketing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-purple-400">Supply & Distribution</h3>
                  <ul className="space-y-6 text-left text-lg">
                    <li>📊 Supply maximum : <strong>1 000 000 CYA</strong></li>
                    <li>🔒 Initial mint au Timelock</li>
                    <li>🤖 Rewards IA : max 1 000 CYA/mois</li>
                    <li>⏳ Staking rewards mintés via gouvernance</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-purple-800">
                <p className="text-xl text-purple-400 font-bold">
                  Contrat vérifié très bientôt • Audit professionnel en cours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-gradient-to-t from-purple-900/20 to-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Rejoignez la révolution Crypto + IA
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Le token utilitaire qui récompense vraiment ses holders.
            </p>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354&inputCurrency=BNB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl font-bold text-2xl transition-all transform hover:scale-110 shadow-2xl"
            >
              Acheter CYA maintenant
              <ArrowRight className="ml-4 w-8 h-8" />
            </a>
            <p className="mt-10 text-gray-400 font-mono text-lg">
              CA: 0x671cb1a2c934017fc019a7a4bf11ae5a30a32354
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center text-gray-500 px-6">
            <p>© 2025 CYA Token — Tous droits réservés</p>
            <p className="mt-3 text-sm">Investir comporte des risques. DYOR • Not financial advice.</p>
          </div>
        </footer>
      </div>
    </>
  );
                  }
