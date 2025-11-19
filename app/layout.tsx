import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CYA Token – CryptoIA Revolution",
  description: "Staking • Rewards IA • Gouvernance Décentralisée",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/iHmVe2H_d.jpeg" sizes="any" />
      </head>
      <body className="bg-black text-white min-h-screen">
        {/* Navigation fixe */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-900">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <Image src="/iHmVe2H_d.jpeg" alt="CYA" width={60} height={60} className="rounded-full" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CYA TOKEN</span>
            </Link>
            <div className="flex gap-8 text-lg">
              <Link href="/" className="hover:text-purple-400 transition">Accueil</Link>
              <Link href="/staking" className="hover:text-purple-400 transition">Staking</Link>
              <Link href="/whitepaper" className="hover:text-purple-400 transition">Whitepaper</Link>
              <Link href="/buy" className="hover:text-purple-400 transition">Acheter</Link>
            </div>
          </div>
        </nav>

        <main className="pt-24"> {/* espace pour la nav fixe */}
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-950 border-t border-purple-900 py-12 text-center">
          <p className="text-gray-400">© 2025 CYA Token – Tous droits réservés</p>
          <p className="text-sm text-gray-600 mt-2">DYOR • Not financial advice</p>
        </footer>
      </body>
    </html>
  );

}
