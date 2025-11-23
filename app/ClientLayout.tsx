// app/ClientLayout.tsx ← CLIENT COMPONENT
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, X, Menu } from "lucide-react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

 useEffect(() => {
 const closeOnResize = () => window.innerWidth >= 768 && setIsMobileMenuOpen(false);
 window.addEventListener("resize", closeOnResize);
 return () => window.removeEventListener("resize", closeOnResize);
 }, []);

 return (
 <>
 {/* NAVBAR */}
 <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-800/50">
 <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
 <Link href="/" className="flex items-center gap-4">
 <Image src="/iHmVe2H_d.jpeg" alt="CYA" width={60} height={60} className="rounded-full border-4 border-purple-600" priority />
 <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">CYA TOKEN</span>
 </Link>

 <div className="hidden md:flex items-center gap-10 text-lg font-medium">
 <Link href="/" className="hover:text-purple-400 transition">Accueil</Link>
 <Link href="/staking" className="hover:text-purple-400 transition">Staking</Link>
 <Link href="/whitepaper" className="hover:text-purple-400 transition">Whitepaper</Link>
 <Link href="/buy" className="hover:text-purple-400 transition">Acheter</Link>
 <Link href="https://pancakeswap.finance/swap?outputCurrency= 0x671cb1a2c934017fc019a7a4bf11ae5a30a32354" target="_blank"
 className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition">
 Acheter CYA <ArrowRight className="w-5 h-5" />
 </Link>
 </div>

 <button onClick={toggleMenu} className="md:hidden p-3">
 {isMobileMenuOpen ? <X className="w-8 h-8 text-purple-400" /> : <Menu className="w-8 h-8 text-purple-400" />}
 </button>
 </div>
 </nav>

 {/* MENU MOBILE */}
 {isMobileMenuOpen && (
 <>
 <div className="fixed inset-0 bg-black/80 z-40" onClick={toggleMenu} />
 <div className="fixed inset-y-0 right-0 w-80 bg-black/95 backdrop-blur-xl border-l border-purple-800 z-50 flex flex-col">
 <div className="flex-1 overflow-y-auto px-8 pt-24 pb-12 space-y-8">
 <Link href="/" onClick={toggleMenu} className="text-2xl font-bold hover:text-purple-400 py-3 block">Accueil</Link>
 <Link href="/staking" onClick={toggleMenu} className="text-2xl font-bold hover:text-purple-400 py-3 block">Staking</Link>
 <Link href="/whitepaper" onClick={toggleMenu} className="text-2xl font-bold hover:text-purple-400 py-3 block">Whitepaper</Link>
 <Link href="/buy" onClick={toggleMenu} className="text-2xl font-bold hover:text-purple-400 py-3 block">Acheter</Link>
 <Link href="https://pancakeswap.finance/swap?outputCurrency=0x671cb1a2c934017fc019a7a4bf11ae5a30a32354" target="_blank" onClick={toggleMenu}
 className="block text-center px-8 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-xl">
 Acheter CYA
 </Link>
 </div>
 </div>
 </>
 )}

 <main className="pt-28 md:pt-32">{children}</main>

 <footer className="bg-gray-950 border-t border-purple-900 py-12 text-center text-gray-400">
 © 2025 CYA Token • DYOR • Not financial advice
 </footer>
 </>
 );
}
