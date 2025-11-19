import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYA Token – Le Token IA qui récompense vraiment",
  description: "Staking intelligent • Rewards IA automatisés • 2.5% taxes • Max supply 1M",
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
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );

}
