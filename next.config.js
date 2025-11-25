// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // React & perf
  reactStrictMode: true,
  swcMinify: true,

  // === MEILLEURE option Vercel 2025 ===
  // standalone = build ultra-léger + zero config serveur
  // → génère un dossier .next/standalone + .next/static séparés (idéal Vercel)
  output: 'standalone',

  // === Images externes (IPFS, Arweave, etc.) ===
  images: {
    unoptimized: true, // obligatoire quand output: 'standalone' + images externes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // === Webpack – fixes wagmi / WalletConnect / React-Native warnings ===
  webpack(config) {
    // Fallbacks Node.js (inutiles dans le navigateur)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      dns: false,
      child_process: false,
    };

    // Stub complet pour tout ce qui vient de react-native (MetaMask SDK, WalletConnect, etc.)
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      '@react-native-async-storage/async-storage': 'react-native-web',
      'react-native-randombytes': false,
      'react-native-url-polyfill': false,
    };

    return config;
  },

  // === Plus de warning "telemetry" depuis Next.js 14.1+ ===
  // La clé "telemetry" n'existe plus → on la supprime complètement
  // Si tu veux désactiver la télémétrie → utilise la variable d’environnement
  // NEXT_TELEMETRY_DISABLED=1 dans Vercel (ou .env.local)

  // === Experimental (optionnel mais propre) ===
  experimental: {
    // Améliore encore la taille du bundle wagmi/viem
    optimizePackageImports: ['wagmi', 'viem', '@wagmi/core', 'lucide-react'],
  },
};

export default nextConfig;
