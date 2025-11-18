// app/layout.js
import "./globals.css";

export const metadata = {
  title: "CYA Token - Staking Ultime & Rewards IA",
  description: "Le premier token qui récompense l'intelligence artificielle avec du staking intelligent et des rewards automatisés.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
