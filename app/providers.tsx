'use client';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { bsc } from 'viem/chains';
import { metaMask, walletConnect, injected } from 'wagmi/connectors';

// ON DÉSACTIVE LE NOUVEAU METAMASK SDK BUGGUÉ
const config = createConfig({
  chains: [bsc],
  connectors: [
    metaMask({ useDeprecated: true }), // SOLUTION FIABLE
    injected(),
    // walletConnect({ projectId: 'ton-project-id-si-tu-veux' }),
  ],
  transports: {
    [bsc.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
