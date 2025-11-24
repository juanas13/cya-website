'use client';

import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useEffect } from 'react';
import { formatEther } from 'viem';
import { Loader2, CheckCircle } from 'lucide-react';

const CYA_ABI = [
  { name: 'earned', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] },
  { name: 'claimRewards', type: 'function', inputs: [], outputs: [] },
] as const;

const CONTRACT_ADDRESS = '0x671cb1a2c934017fc019a7a4bf11ae5a30a32354';

export const dynamic = 'force-dynamic';

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

  useEffect(() => {
    if (isConfirmed) {
      setTimeout(() => refetchRewards(), 3000);
    }
  }, [isConfirmed, refetchRewards]);

  const handleClaim = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CYA_ABI,
      functionName: 'claimRewards',
      args: [],
    });
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-purple-950 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Rewards CYA
        </h1>

        {!isConnected ? (
          <div className="text-center py-32">
            <p className="text-3xl text-gray-400">Connecte ton wallet pour voir tes rewards</p>
          </div>
        ) : (
          <>
            <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-12 text-center mb-12">
              <p className="text-xl text-gray-400 mb-4">Rewards disponibles</p>
              <p className="text-6xl font-black text-green-400">
                {rewards ? Number(formatEther(rewards)).toFixed(4) : '0.0000'} CYA
              </p>
            </div>

            {(isTxPending || isConfirming) && (
              <div className="text-center py-12">
                <Loader2 className="w-16 h-16 animate-spin mx-auto text-purple-400" />
                <p className="mt-6 text-2xl">
                  {isTxPending ? 'En attente de signature...' : 'Confirmation en cours...'}
                </p>
              </div>
            )}

            {isConfirmed && (
              <div className="text-center py-12 text-green-400">
                <CheckCircle className="w-16 h-16 mx-auto" />
                <p className="mt-6 text-2xl font-bold">Rewards claimés avec succès !</p>
              </div>
            )}

            {(rewards && rewards > 0n && !isConfirmed) && (
              <div className="text-center">
                <button
                  onClick={handleClaim}
                  disabled={isTxPending || isConfirming}
                  className="px-20 py-10 bg-green-600 hover:bg-green-500 rounded-3xl font-bold text-3xl transition disabled:opacity-50 shadow-2xl shadow-green-600/50"
                >
                  {isTxPending || isConfirming ? (
                    <Loader2 className="w-10 h-10 animate-spin inline" />
                  ) : (
                    'Claim Rewards'
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
