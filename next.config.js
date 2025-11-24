/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Résout le bug MetaMask SDK + async-storage sur le web
  transpilePackages: ["@metamask/sdk"],

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@react-native-async-storage/async-storage": require.resolve(
        "@react-native-async-storage/async-storage/standalone"
      ),
    };

    // Sécurité supplémentaire (au cas où)
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
