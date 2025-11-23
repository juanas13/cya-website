'use client';

import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { useState } from 'react';
import { parseEther, formatEther } from 'viem';
import { ArrowRight, Wallet, CheckCircle, Loader2 } from 'lucide-react';

const CYA_ABI = [
  { name: 'earned', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] },
  { name: 'claimRewards', type: 'function', inputs: [], outputs: [] },
] as const;

const CONTRACT_ADDRESS = '0x671cb1a2c934017fc019a7a4bf11ae5a30a32354';

export const dynamic = "force-dynamic";

export default function RewardPage() {
  const { address, isConnected } = useAccount();
  const { writeContract, data: hash, isPending: isTxPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const { data: rewards, refetch: refetchRewards } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'earned',
    args: [address!],
    query: { enabled: !!address },
  });

  const handleClaim = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CYA_ABI,
      functionName: 'claimRewards',
      args: [],
    });
  };

  if (isConfirmed) {
    setTimeout(() => refetchRewards(), 2000);
  }

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Rewards CYA
        </h1>

        {/* Connexion Wallet */}
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
              onClick={() => connect({ connector: injected() })}
              className="px-14 py-7 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-2xl hover:scale-105 transition shadow-2xl"
            >
              Connecter Wallet
            </button>
          )}
        </div>

        {isConnected ? (
          <>
            {/* Rewards Stats */}
            <div className="grid md:grid-cols-1 gap-8 mb-12">
              <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400 mb-2">Rewards Gagnés</p>
                <p className="text-4xl font-bold text-green-400">
                  {rewards ? Number(formatEther(rewards)).toFixed(4) : '0'} CYA
                </p>
              </div>
            </div>

            {/* Transaction Status */}
            {(isTxPending || isConfirming) && (
              <div className="text-center py-8">
                <Loader2 className="w-12 h-12 animate-spin mx-auto text-purple-400" />
                <p className="mt-4 text-xl">
                  {isTxPending ? 'Signature en attente...' : 'Confirmation en cours...'}
                </p>
              </div>
            )}

            {isConfirmed && (
              <div className="text-center py-8 text-green-400">
                <CheckCircle className="w-12 h-12 mx-auto" />
                <p className="mt-4 text-xl">Rewards claimés avec succès !</p>
              </div>
            )}

            {/* Action Claim */}
            <div className="flex justify-center">
              {(rewards && rewards > 0n) && (
                <button
                  onClick={handleClaim}
                  disabled={isTxPending || isConfirming}
                  className="px-16 py-8 bg-green-600 rounded-3xl font-bold text-3xl hover:bg-green-500 transition disabled:opacity-50 flex items-center gap-4"
                >
                  {isTxPending || isConfirming ? <Loader2 className="w-8 h-8 animate-spin" /> : 'Claim Rewards'}
                  <ArrowRight className="w-8 h-8" />
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-32">
            <p className="text-3xl text-gray-400">Connecte ton wallet pour voir tes rewards</p>
          </div>
        )}
      </div>
    </div>
  );
}
