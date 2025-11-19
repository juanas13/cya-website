"use client";
import { useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Copy, Twitter, MessageCircle } from "lucide-react";

export const dynamic = "force-dynamic";

function copyCA() {
  navigator.clipboard.writeText("0x671cb1a2c934017fc019a7a4bf11ae5a30a32354");
  alert("CA copiée !");
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero */}
        <section className="relative px-6 pt-20 pb-40 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="max-w-7xl mx-auto text-center">
            <Image
              src="/iHmVe2H_d.jpeg"
              alt="CYA Token"
              width={280}
              height={280}
              className="mx-auto mb-8 rounded-full border-8 border-purple-600 shadow-2xl animate-pulse"
              priority
            />

            <div className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500 rounded-full px-8 py-4 text-lg mb-8">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
              LIVE SUR BSC
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CYA TOKEN
            </h1>

            <p className="text-2xl md:text-4xl mb-12 text-gray-300">
              Le premier token qui récompense l'IA et ses holders
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
                target="_blank"
                rel="noopener noreferrer"
                className="px-16 py-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-2xl hover:scale-110 transition-all shadow-2xl flex items-center gap-4"
              >
                Acheter sur PancakeSwap <ArrowRight className="w-8 h-8" />
              </a>
              <button
                onClick={copyCA}
                className="px-16 py-8 border-2 border-purple-600 rounded-2xl font-bold text-2xl hover:bg-purple-600/30 transition-all flex items-center gap-4"
              >
                <Copy className="w-7 h-7" /> Copier CA
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto fade-up">
              <div className="bg-gray-900/50 border border-purple-800 rounded-2xl p-8">
                <div className="text-5xl font-bold text-purple-400">2.5%</div>
                <p className="text-gray-400 mt-2">Taxes</p>
              </div>
              <div className="bg-gray-900/50 border border-purple-800 rounded-2xl p-8">
                <div className="text-5xl font-bold text-purple-400">1M</div>
                <p className="text-gray-400 mt-2">Supply Max</p>
              </div>
              <div className="bg-gray-900/50 border border-purple-800 rounded-2xl p-8">
                <div className="text-5xl font-bold text-purple-400">100%</div>
                <p className="text-gray-400 mt-2">APY Max</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section className="py-32 px-6 fade-up">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl font-bold mb-20">Tokenomics</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-80 h-80 mx-auto">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" fill="none" stroke="#1f2937" strokeWidth="3" />
                  <path d="M18 2 a 16 16 0 0 1 12 26" fill="none" stroke="#a855f7" strokeWidth="3" className="drop-shadow-lg" />
                  <path d="M30 28 a 16 16 0 0 1 -24 -14" fill="none" stroke="#ec4899" strokeWidth="3" />
                  <text x="18" y="20" className="fill-white text-4xl font-bold">2.5%</text>
                </svg>
              </div>
              <div className="text-left space-y-8 text-2xl">
                <div className="flex items-center gap-4"><div className="w-8 h-8 bg-purple-500 rounded-full"></div> 0.5% Burn permanent</div>
                <div className="flex items-center gap-4"><div className="w-8 h-8 bg-pink-500 rounded-full"></div> 1% Liquidité</div>
                <div className="flex items-center gap-4"><div className="w-8 h-8 bg-cyan-500 rounded-full"></div> 1% Rewards IA & Marketing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-32 px-6 bg-gray-950 fade-up">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl font-bold mb-20">Roadmap</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {["Lancement", "Listing CMC/CG", "Rewards IA v2", "Partenariats IA"].map((phase, i) => (
                <div key={i} className="bg-gradient-to-b from-purple-900/30 to-transparent border border-purple-800 rounded-2xl p-8 hover:border-purple-500 transition-all">
                  <div className="text-6xl font-bold text-purple-400 mb-4">Q{i + 1} 2025</div>
                  <p className="text-xl">{phase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-gray-800 text-center">
          <div className="flex justify-center gap-20 text-7xl mb-10">
            <a href="https://twitter.com/CYATokenBSC" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <Twitter />
            </a>
            <a href="https://t.me/CYATokenBSC" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <MessageCircle />
            </a>
          </div>
          <p className="text-gray-400 text-lg">© 2025 CYA Token – Le futur c'est maintenant</p>
          <p className="text-sm text-gray-600 mt-4">DYOR • Not financial advice</p>
        </footer>
      </div>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease-out;
        }
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );

}
