import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYA Token – CryptoIA | Staking + Rewards IA",
  description: "Le premier token BSC avec staking intelligent et rewards IA automatisés",
  openGraph: {
    images: ["/iHmVe2H_d.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon = ton logo carré */}
        <link rel="icon" href="/iHmVe2H_d.jpeg" sizes="any" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
