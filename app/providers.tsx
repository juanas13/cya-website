'use client';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { bsc } from 'viem/chains';
import { injected } from 'wagmi/connectors';

// UTILISE INJECTED POUR METAMASK (legacy, sans SDK + sans erreur async-storage)
const config = createConfig({
  chains: [bsc],
  connectors: [
    injected({ target: 'metaMask' }), // MetaMask legacy → zéro bug
    // injected(), // Si tu veux d'autres wallets injected
    // walletConnect({ projectId: 'TON_PROJECT_ID_SI_BESOIN' }), // Décommente si besoin
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
