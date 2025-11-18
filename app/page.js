import { ArrowRight, Copy, Twitter, Telegram, Zap, Shield, Brain, TrendingUp, Globe, Lock } from "lucide-react";

function copyCA() {
 navigator.clipboard.writeText("0x671cb1a2c934017fc019a7a4bf11ae5a30a32354");
 alert("Contract Address copiée !");
}

export default function Home() {
 return (
 <>
 <div className="min-h-screen bg-black text-white overflow-x-hidden">
 {/* Hero */}
 <section className="relative px-6 pt-24 pb-40 bg-gradient-to-b from-purple-900/40 via-black to-black">
 <div className="max-w-7xl mx-auto text-center">
 <div className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500 rounded-full px-6 py-3 text-sm mb-8 animate-pulse">
 <span className="w-3 h-3 bg-green-400 rounded-full"></span>
 LIVE SUR BINANCE SMART CHAIN
 </div>

 <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
 CYA TOKEN
 </h1>
 <p className="text-2xl md:text-3xl mb-12 text-gray-300 max-w-5xl mx-auto">
 Le futur du staking intelligent avec <span className="text-purple-400 font-bold">Rewards IA automatisés</span> et gouvernance décentralisée
 </p>

 <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
 <a
 href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
 target="_blank"
 className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl font-bold text-xl transition-all transform hover:scale-110 shadow-2xl flex items-center gap-3"
 >
 Acheter sur PancakeSwap <ArrowRight className="w-6 h-6" />
 </a>
 <button
 onClick={copyCA}
 className="px-12 py-6 border-2 border-purple-600 rounded-2xl font-bold text-xl hover:bg-purple-600/30 transition-all flex items-center gap-3 mx-auto sm:mx-0"
 >
 <Copy className="w-5 h-5" /> Copier CA
 </button>
 </div>

 <div className="grid grid-cols-3 gap-10 max-w-4xl mx-auto">
 <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-2xl p-8">
 <div className="text-5xl font-bold text-purple-400">2.5%</div>
 <p className="text-gray-400 mt-3">Taxes totales</p>
 </div>
 <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-2xl p-8">
 <div className="text-5xl font-bold text-purple-400">1M</div>
 <p className="text-gray-400 mt-3">Supply Max</p>
 </div>
 <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-2xl p-8">
 <div className="text-5xl font-bold text-purple-400">100%</div>
 <p className="text-gray-400 mt-3">APY Max</p>
 </div>
 </div>
 </div>
 </section>

 {/* Features */}
 <section className="py-32 px-6">
 <div className="max-w-7xl mx-auto text-center">
 <h2 className="text-6xl font-bold mb-20">Pourquoi CYA est unique</h2>
 <div className="grid md:grid-cols-3 gap-12">
 <div className="bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-800 rounded-3xl p-10 hover:border-purple-500 transition-all hover:scale-105">
 <Brain className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
 <h3 className="text-3xl font-bold mb-6">Rewards IA</h3>
 <p className="text-xl text-gray-300">Mint automatique chaque mois via signature bot sécurisée (max 100 CYA/user)</p>
 </div>
 <div className="bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-800 rounded-3xl p-10 hover:border-purple-500 transition-all hover:scale-105">
 <Lock className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
 <h3 className="text-3xl font-bold mb-6">100% Safe</h3>
 <p className="text-xl text-gray-300">Proxy + Timelock + Ownership renoncé bientôt = Impossible de rug</p>
 </div>
 <div className="bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-800 rounded-3xl p-10 hover:border-purple-500 transition-all hover:scale-105">
 <TrendingUp className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
 <h3 className="text-3xl font-bold mb-6">Staking Ultime</h3>
 <p className="text-xl text-gray-300">Jusqu’à 100% APY + 7 jours cooldown avec pénalité anti-dump</p>
 </div>
 </div>
 </div>
 </section>

 {/* Tokenomics + Socials + Footer tout amélioré */}
 <section id="tokenomics" className="py-32 px-6 bg-gray-950">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-6xl font-bold text-center mb-20">Tokenomics</h2>
 <div className="grid md:grid-cols-2 gap-16 items-center">
 <div className="bg-gray-900 border border-purple-800 rounded-3xl p-12">
 <h3 className="text-4xl font-bold mb-10 text-purple-400">Taxes 2.5%</h3>
 <ul className="space-y-8 text-2xl">
 <li>🔥 0.5% Burn</li>
 <li>💧 1% Liquidité</li>
 <li>🤖 1% Rewards IA</li>
 </ul>
 </div>
 <div className="text-center">
 <p className="text-3xl font-bold mb-8">Contract Address</p>
 <code className="bg-gray-900 px-8 py-6 rounded-xl text-purple-400 font-mono text-lg break-all">
 0x671cb1a2c934017fc019a7a4bf11ae5a30a32354
 </code>
 <button onClick={copyCA} className="mt-6 px-8 py-4 bg-purple-600 rounded-xl flex items-center gap-3 mx-auto">
 <Copy /> Copier
 </button>
 </div>
 </div>
 </div>
 </section>

 {/* Socials */}
 <section className="py-20 text-center ">
 <div className="flex justify-center gap-10 text-6xl">
 <a href="https://twitter.com/YourTwitter" target="_blank" className="hover:text-cyan-400 transition"><Twitter /></a>
 <a href="https://t.me/YourTelegram" target="_blank" className="hover:text-cyan-400 transition"><Telegram /></a>
 </div>
 </section>

 {/* Footer */}
 <footer className="py-16 border-t border-gray-800 text-center">
 <p className="text-gray-400">© 2025 CYA Token — Le futur de la Crypto IA</p>
 <p className="text-sm text-gray-600 mt-4">DYOR • Not financial advice</p>
 </footer>
 </div>
 </>
 );
   }
