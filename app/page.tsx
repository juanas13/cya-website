'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Brain, Shield, Rocket, Users, TrendingUp, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX / window.innerWidth);
      setMouseY(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">

      {/* Animated gradient background */}
      <div 
        className="fixed inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, #a855f7 0%, transparent 50%)`,
        }}
      />

      {/* HERO ÉPIQUE */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10">
            <span className="inline-block px-6 py-2 bg-purple-900/50 border border-purple-700 rounded-full text-sm font-bold tracking-wider text-purple-300 mb-8">
              PREMIER TOKEN IA + CRYPTO
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              CYA TOKEN
            </span>
          </h1>

          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-10 max-w-5xl mx-auto">
            Staking intelligent • Rewards IA automatisés • Jusqu’à <span className="text-green-400">100% APY</span>
          </p>

          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Le premier token qui récompense <strong>l’intelligence artificielle</strong> et ses utilisateurs via un système décentralisé révolutionnaire.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              href="/staking"
              className="group px-12 py-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-black text-2xl md:text-3xl hover:scale-110 transition-all duration-500 shadow-2xl shadow-purple-600/70 flex items-center gap-5"
            >
              Commencer le staking
              <Rocket className="w-10 h-10 group-hover:translate-x-2 transition" />
            </Link>

            <Link
              href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354"
              target="_blank"
              className="px-12 py-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-black text-2xl md:text-3xl hover:scale-110 transition-all duration-500 shadow-2xl shadow-cyan-600/70 flex items-center gap-5"
            >
              Acheter CYA
              <ArrowRight className="w-10 h-10" />
            </Link>
          </div>

          {/* Logo + glow */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 blur-3xl bg-purple-600/50 animate-pulse"></div>
            <Image
              src="/iHmVe2H_d.jpeg"
              alt="CYA Token"
              width={240}
              height={240}
              className="rounded-full border-8 border-purple-600 shadow-2xl relative z-10 mx-auto animate-pulse-glow"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Pourquoi CYA ?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-800 rounded-3xl p-10 text-center hover:scale-105 transition-all duration-500">
              <Brain className="w-20 h-20 mx-auto mb-6 text-purple-400" />
              <h3 className="text-3xl font-black mb-4">Rewards IA</h3>
              <p className="text-gray-300 text-lg">1000 CYA distribués chaque mois à l’IA et aux stakers</p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-black border border-pink-800 rounded-3xl p-10 text-center hover:scale-105 transition-all duration-500">
              <TrendingUp className="w-20 h-20 mx-auto mb-6 text-pink-400" />
              <h3 className="text-3xl font-black mb-4">Jusqu’à 100% APY</h3>
              <p className="text-gray-300 text-lg">Staking intelligent avec APY dynamique ultra rentable</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-black border border-cyan-800 rounded-3xl p-10 text-center hover:scale-105 transition-all duration-500">
              <Shield className="w-20 h-20 mx-auto mb-6 text-cyan-400" />
              <h3 className="text-3xl font-black mb-4">Sécurité maximale</h3>
              <p className="text-gray-300 text-lg">Contrat upgradeable + Timelock + Audit en cours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-10">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Le futur commence maintenant
            </span>
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-gray-300 mb-16">
            Rejoins la révolution Crypto × IA
          </p>

          <div className="flex flex-col sm:flex-row gap-10 justify-center">
            <Link
              href="/staking"
              className="px-16 py-10 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full font-black text-3xl md:text-4xl hover:scale-110 transition-all duration-500 shadow-2xl shadow-purple-600/80 animate-pulse"
            >
              Staker maintenant
            </Link>
          </div>

          <div className="mt-20 flex items-center justify-center gap-10 text-gray-400">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8" />
              <span className="text-xl">Communauté grandissante</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              <span className="text-xl">Fair launch 100%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
                }
