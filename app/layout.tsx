// app/layout.tsx ← SERVER COMPONENT (pas de 'use client')
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
 title: "CYA Token – CryptoIA Revolution",
 description: "Staking • Rewards IA • Gouvernance Décentralisée",
 keywords: "CYA, CryptoIA, token IA, staking, rewards, BSC",
 icons: { icon: "/iHmVe2H_d.jpeg" },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="fr">
 <head />
 <body className="bg-black text-white min-h-screen antialiased">
 <ClientLayout>{children}</ClientLayout>
 </body>
 </html>
 );
}
