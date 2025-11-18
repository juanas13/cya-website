import "./globals.css";

export const metadata = {
 title: "CYA Token - CryptoIA | Staking + Rewards IA",
 description: "Premier token BSC avec staking intelligent et rewards automatisés par IA",
};

export default function RootLayout({ children }) {
 return (
 <html lang="fr">
 <head>
 <link rel="icon" href="/favicon.ico" />
 <meta property="og:image" content="https://juanas13-cya-website-5qv4ztp34-juanas13s-projects.vercel.app/og.png" />
 <meta name="twitter:card" content="summary_large_image" />
 </head>
 <body>{children}</body>
 </html>
 );
}
