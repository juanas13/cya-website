// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CYA Token - Staking Ultime & Rewards IA",
  description: "Le premier token qui récompense l'intelligence artificielle avec du staking intelligent et des rewards automatisés.",
  keywords: "CYA, token, crypto, IA, staking, rewards, Binance Smart Chain, BSC",
  openGraph: {
    title: "CYA Token - CryptoIA",
    description: "Staking + Rewards IA + Gouvernance décentralisée",
    url: "https://cya-website.vercel.app",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
