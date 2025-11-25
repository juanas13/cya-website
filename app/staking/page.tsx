'use client';

import { useAccount, useConnect, useDisconnect, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { metaMask } from '@wagmi/connectors'; // Changé : MetaMask spécifique au lieu d'injected
import { bsc } from 'viem/chains'; // Ajout : Chain BSC pour matcher ton contrat
import { useState } from 'react';
import { parseEther, formatEther } from 'viem';
import { ArrowRight, Wallet, Loader2 } from 'lucide-react'; // Ajout : Loader pour feedback

const CYA_ABI = [
  { name: 'balanceOf', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
  { name: 'stakes', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
  { name: 'earned', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view' },
  { name: 'stake', type: 'function', inputs: [{ type: 'uint256' }], outputs: [], stateMutability: 'nonpayable' },
  { name: 'unstake', type: 'function', inputs: [{ type: 'uint256' }], outputs: [], stateMutability: 'nonpayable' },
  { name: 'claimRewards', type: 'function', inputs: [], outputs: [], stateMutability: 'nonpayable' },
] as const;

const CONTRACT_ADDRESS = '0x671cb1a2c934017fc019a7a4bf11ae5a30a32354';

export const dynamic = 'force-dynamic';

export default function StakingPage() {
  const { address, isConnected, chain } = useAccount(); // Ajout : chain pour check réseau
  const { connect, connectAsync, error: connectError, isPending: connectPending } = useConnect(); // Ajout : error + pending
  const { disconnect } = useDisconnect();
  const { writeContract } = useWriteContract();
  const [stakeAmount, setStakeAmount] = useState('');
  const [error, setError] = useState(''); // Ajout : État pour erreurs UI

  // Read contracts (inchangés)
  const { data: balance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'balanceOf',
    args: [address!],
    query: { enabled: !!address && chain?.id === bsc.id }, // Ajout : Check chain
  });

  const { data: staked } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'stakes',
    args: [address!],
    query: { enabled: !!address && chain?.id === bsc.id },
  });

  const { data: rewards } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'earned',
    args: [address!],
    query: { enabled: !!address && chain?.id === bsc.id },
  });

  // Gestion connexion async avec erreur (remplace connect simple)
  const handleConnect = async () => {
    try {
      setError(''); // Reset erreur
      console.log('Tentative de connexion MetaMask...'); // Debug
      await connectAsync({ connector: metaMask(), chainId: bsc.id }); // Async + chain BSC
      console.log('Connexion réussie !'); // Debug
    } catch (err) {
      console.error('Erreur connexion:', err); // Debug
      setError(err instanceof Error ? err.message : 'Erreur de connexion inconnue');
    }
  };

  const handleStake = async () => {
    if (!stakeAmount || !address || Number(stakeAmount) <= 0) return;
    try {
      setError('');
      console.log('Staking en cours...');
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CYA_ABI,
        functionName: 'stake',
        args: [parseEther(stakeAmount)],
        chainId: bsc.id, // Ajout : Force BSC
      });
      setStakeAmount('');
      console.log('Stake soumis !');
    } catch (err) {
      console.error('Erreur stake:', err);
      setError(err instanceof Error ? err.message : 'Erreur stake');
    }
  };

  const handleUnstake = async () => {
    if (!staked || staked === 0n) return;
    try {
      setError('');
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CYA_ABI,
        functionName: 'unstake',
        args: [staked],
        chainId: bsc.id,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur unstake');
    }
  };

  const handleClaim = async () => {
    try {
      setError('');
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CYA_ABI,
        functionName: 'claimRewards',
        args: [],
        chainId: bsc.id,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur claim');
    }
  };

  // Fonction format (inchangée)
  const format = (value: bigint | undefined | null, decimals: number = 4) => {
    return value != null ? Number(formatEther(value)).toFixed(decimals) : '0.' + '0'.repeat(decimals);
  };

  // Check réseau (affiché si wrong chain)
  const isWrongChain = isConnected && chain?.id !== bsc.id;
  if (isWrongChain) {
    setError('Veuillez switcher vers BSC Mainnet dans MetaMask');
  }

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Staking CYA
        </h1>

        <div className="text-center mb-16">
          {isConnected ? (
            <div className="inline-flex items-center gap-4 bg-green-600/20 border border-green-500 rounded-2xl px-8 py-5">
              <Wallet className="w-7 h-7" />
              <span className="text-xl font-bold">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <button onClick={() => disconnect()} className="px-5 py-2 bg-red-600 rounded-full text-sm hover:bg-red-500 transition">
                Déconnecter
              </button>
            </div>
          ) : (
            <button
              onClick={handleConnect}
              disabled={connectPending}
              className="px-14 py-7 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-2xl hover:scale-105 shadow-2xl transition disabled:opacity-50 flex items-center gap-2 mx-auto"
            >
              {connectPending ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Connexion...
                </>
              ) : (
                <>
                  <Wallet className="w-6 h-6" />
                  Connecter Wallet
                </>
              )}
            </button>
          )}
        </div>

        {/* Affichage erreurs */}
        {error && (
          <div className="bg-red-600/20 border border-red-500 rounded-2xl p-4 text-center mb-8 text-red-300">
            {error}
          </div>
        )}

        {connectError && (
          <div className="bg-red-600/20 border border-red-500 rounded-2xl p-4 text-center mb-8 text-red-300">
            Erreur connexion : {connectError.message}
          </div>
        )}

        {isConnected && !isWrongChain && (
          <>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400 mb-2">Solde CYA</p>
                <p className="text-4xl font-bold text-purple-400">{format(balance)} CYA</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400 mb-2">Staké</p>
                <p className="text-4xl font-bold text-purple-400">{format(staked)} CYA</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400 mb-2">Rewards</p>
                <p className="text-4xl font-bold text-green-400">{format(rewards, 6)} CYA</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Staker CYA</h2>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Montant à staker"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="flex-1 px-6 py-4 bg-black/50 border border-purple-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    onClick={handleStake}
                    disabled={!stakeAmount || Number(stakeAmount) <= 0}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Staker <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex gap-6 justify-center">
                <button
                  onClick={handleUnstake}
                  disabled={!staked || staked === 0n}
                  className="px-12 py-6 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Unstaker tout
                </button>
                {rewards && rewards > 0n && (
                  <button
                    onClick={handleClaim}
                    className="px-12 py-6 bg-green-600 rounded-xl font-bold hover:bg-green-500 transition"
                  >
                    Claim Rewards
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {isWrongChain && (
          <div className="text-center mt-8">
            <p className="text-yellow-400 mb-4">Réseau incorrect détecté.</p>
            <button
              onClick={() => window.ethereum?.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x38' }] })}
              className="px-8 py-4 bg-yellow-600 rounded-xl font-bold hover:bg-yellow-500 transition"
            >
              Switch vers BSC
            </button>
          </div>
        )}
      </div>
    </div>
  );
               }
