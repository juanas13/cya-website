// next.config.js  ←  COPIE-COLLE ÇA À LA PLACE DE L’ANCIEN

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Résout le bug MetaMask SDK + async-storage sur le web
  transpilePackages: ["@metamask/sdk"],

  webpack(config) {
    // Version ESM pure → plus de require !
    config.resolve.alias = {
      ...config.resolve.alias,
      "@react-native-async-storage/async-storage":
        "@react-native-async-storage/async-storage/standalone",
    };

    // Sécurité supplémentaire (facultatif mais propre)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      dns: false,
    };

    return config;
  },
};

export default nextConfig;
