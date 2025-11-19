"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Copy } from "lucide-react";

function copyCA() {
  navigator.clipboard.writeText("0x671cb1a2c934017fc019a7a4bf11ae5a30a32354");
  alert("CA copiée !");
}

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-32 text-center bg-gradient-to-b from-purple-900/30 to-black">
        <Image src="/iHmVe2H_d.jpeg" alt="CYA" width={300} height={300} className="mx-auto mb-10 rounded-full border-8 border-purple-600 shadow-2xl" priority />
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-gradient">CYA TOKEN</h1>
        <p className="text-2xl md:text-4xl mb-12 text-gray-300">Le premier token IA qui récompense vraiment ses holders</p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link href="/buy" className="px-16 py-8 bg-gradient-purple rounded-2xl font-bold text-2xl hover:scale-110 transition-all shadow-2xl flex items-center gap-4 justify-center">
            Acheter CYA <ArrowRight className="w-8 h-8" />
          </Link>
          <button onClick={copyCA} className="px-16 py-8 border-2 border-purple-600 rounded-2xl font-bold text-2xl hover:bg-purple-600/30 transition-all flex items-center gap-4">
            <Copy className="w-7 h-7" /> Copier CA
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-10 text-center">
            <div className="text-6xl font-bold text-purple-400">2.5%</div>
            <p className="text-xl text-gray-400 mt-4">Taxes totales</p>
          </div>
          <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-10 text-center">
            <div className="text-6xl font-bold text-purple-400">1M</div>
            <p className="text-xl text-gray-400 mt-4">Supply Max</p>
          </div>
          <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-10 text-center">
            <div className="text-6xl font-bold text-purple-400">100%</div>
            <p className="text-xl text-gray-400 mt-4">APY Max Staking</p>
          </div>
        </div>
      </section>
    </div>
  );

}
