// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // === Settings classiques Next.js ===
  reactStrictMode: true,
  swcMinify: true,

  // === TRÈS IMPORTANT pour Vercel : on enlève le static export forcé ===
  // Si tu laisses output: 'export', Vercel cherchera un dossier "out" ou "public" → erreur que tu avais
  // Pour un site Next.js normal (SSR + SSG + API routes si tu en as), il ne faut RIEN mettre ici :
  // output: undefined  → c'est le comportement par défaut, c'est ce qu'on veut
  // output: 'standalone' → si tu veux un build plus léger (recommandé en prod)
  output: 'standalone',   // ← meilleure option en 2025 sur Vercel

  // === Fix du warning MetaMask SDK (le plus propre et durable) ===
  // Au lieu de bidouiller avec des alias compliqués qui cassent souvent,
  // on dit simplement à Webpack/Node de remplacer le module React-Native par un stub vide
  webpack(config) {
    // Fallbacks pour les modules Node.js qu'on n'utilise jamais dans le navigateur
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      dns: false,
      // ← ces 4 lignes sont utiles mais pas obligatoires
    };

    // Remplace le package React Native par un stub vide → élimine le warning à 100%
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-native-async-storage/async-storage': false,
      // ou plus safe (au cas où d'autres packages React Native trainent) :
      // 'react-native$': 'react-native-web',
    };

    return config;
  },

  // === Si tu utilises des images externes (ex: IPFS, Arweave, etc.) ===
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',   // autorise toutes les sources HTTPS (pratique en Web3)
      },
    ],
    // unoptimized: true → uniquement si tu fais output: 'export'
  },

  // === Optionnel mais propre : désactiver la télémétrie Next.js en prod ===
  telemetry: false,
};

export default nextConfig;
