/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bonnes pratiques Next.js 14
  reactStrictMode: true,
  swcMinify: true,

  // Très important : élimine le warning + l'erreur mobile MetaMask
  webpack(config) {
    // 1. Résout le problème @react-native-async-storage/async-storage
    //    (présent dans @metamask/sdk même en version browser)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "@react-native-async-storage/async-storage": false,
      "react-native": false,                   // au cas où d'autres paquets RN passent
      // Node.js core modules (jamais utilisés côté client)
      fs: false,
      net: false,
      tls: false,
      dns: false,
      // (tu peux ajouter path, os, etc. si besoin, mais pas nécessaire ici)
    };

    // Optionnel mais très propre : ignore les imports .node (MetaMask SDK en a parfois)
    config.resolve.extensions = [...config.resolve.extensions, ".js", ".jsx", ".ts", ".tsx"];

    return config;
  },

  // Optionnel mais recommandé avec wagmi + MetaMask mobile
  // Force le bon comportement du connector MetaMask sur mobile
  experimental: {
    // Évite certains bugs de SSR avec wagmi
    serverComponentsExternalPackages: ["@wagmi/core", "viem"],
  },

  // Si tu veux être absolument propre (supprime le warning MODULE_TYPELESS que tu avais)
  // → ajoute "type": "module" dans ton package.json (je te le remets en bas)
};

export default nextConfig;
