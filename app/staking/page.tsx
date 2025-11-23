'use client';

import { useAccount, useConnect, useDisconnect, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useState } from 'react';
import { parseEther, formatEther } from 'viem';
import { ArrowRight, Wallet, Loader2, CheckCircle } from 'lucide-react';

// ABI complète et vérifiée du contrat CYA (ajustée selon les vraies fonctions)
const CYA_ABI = [
  { name: 'balanceOf', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { name: 'stakes', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { name: 'earned', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { name: 'stake', inputs: [{ type: 'uint256' }], outputs: [], stateMutability: 'nonpayable', type: 'function' },
  { name: 'unstake', inputs: [{ type: 'uint256' }], outputs: [], stateMutability: 'nonpayable', type: 'function' },
  { name: 'claimRewards', inputs: [], outputs: [], stateMutability: 'nonpayable', type: 'function' },
] as const;

const CONTRACT_ADDRESS = '0x671cb1a2c934017fc019a7a4bf11ae5a30a32354' as const;

export default function StakingPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { writeContract, data: hash, isPending: isTxPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const [stakeAmount, setStakeAmount] = useState('');

  // Lectures du contrat (automatiquement désactivées si pas connecté)
  const { data: balance, refetch: refetchBalance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'balanceOf',
    args: [address!],
    query: { enabled: !!address },
  });

  const { data: staked, refetch: refetchStaked } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'stakes',
    args: [address!],
    query: { enabled: !!address },
  });

  const { data: rewards, refetch: refetchRewards } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'earned',
    args: [address!],
    query: { enabled: !!address },
  });

  // Rafraîchir les données après chaque transaction confirmée
  if (isConfirmed) {
    setTimeout(() => {
      refetchBalance();
      refetchStaked();
      refetchRewards();
      setStakeAmount('');
    }, 2000);
  }

  const handleStake = () => {
    if (!stakeAmount || Number(stakeAmount) <= 0) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CYA_ABI,
      functionName: 'stake',
      args: [parseEther(stakeAmount)],
    });
  };

  const handleUnstake = () => {
    if (!staked || staked === 0n) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CYA_ABI,
      functionName: 'unstake',
      args: [staked],
    });
  };

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
          Staking CYA
        </h1>

        {/* === Connexion Wallet === */}
        <div className="text-center mb-16">
          {isConnected ? (
            <div className="inline-flex items-center gap-4 bg-green-600/20 border border-green-500 rounded-2xl px-8 py-5">
              <Wallet className="w-7 h-7" />
              <span className="text-xl font-bold">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <button
                onClick={() => disconnect()}
                className="px-5 py-2 bg-red-600 rounded-full text-sm hover:bg-red-500 transition"
              >
                Déconnecter
              </button>
            </div>
          ) : (
            <button
              onClick={() => connect({ connector: injected() })}
              className="px-14 py-7 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-2xl hover:scale-105 transition shadow-2xl"
            >
              Connecter Wallet (MetaMask / Trust Wallet)
            </button>
          )}
        </div>

        {/* === Dashboard une fois connecté === */}
        {isConnected && (
          <>
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400 mb-2">Solde Wallet</p>
                <p className="text-4xl font-bold text-cyan-400">
                  {balance ? Number(formatEther(balance)).toFixed(4) : '0'} CYA
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400 mb-2">Staké</p>
                <p className="text-4xl font-bold text-purple-400">
                  {staked ? Number(formatEther(staked)).toFixed(4) : '0'} CYA
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400 mb-2">Rewards</p>
                <p className="text-4xl font-bold text-green-400">
                  {rewards ? Number(formatEther(rewards)).toFixed(4) : '0'} CYA
                </p>
              </div>
            </div>

            {/* Transaction en cours */}
            {(isTxPending || isConfirming) && (
              <div className="text-center py-8">
                <Loader2 className="w-12 h-12 animate-spin mx-auto text-purple-400" />
                <p className="mt-4 text-xl">
                  {isTxPending ? 'Transaction en attente de signature...' : 'Confirmation en cours...'}
                </p>
              </div>
            )}

            {isConfirmed && (
              <div className="text-center py-8 text-green-400">
                <CheckCircle className="w-12 h-12 mx-auto" />
                <p className="mt-4 text-xl">Transaction confirmée !</p>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-10">

              {/* Stake */}
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Staker des CYA</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="number"
                    placeholder="Montant à staker (ex: 1000)"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="flex-1 px-6 py-5 bg-black/50 border border-purple-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                    disabled={isTxPending || isConfirming}
                  />
                  <button
                    onClick={handleStake}
                    disabled={!stakeAmount || isTxPending || isConfirming}
                    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl font-bold text-xl hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isTxPending || isConfirming ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Staker'}
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Unstake + Claim */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={handleUnstake}
                  disabled={!staked || staked === 0n || isTxPending || isConfirming}
                  className="px-12 py-6 bg-purple-600 rounded-xl font-bold text-xl hover:bg-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Unstaker tout
                </button>

                {(rewards && rewards > 0n) && (
                  <button
                    onClick={handleClaim}
                    disabled={isTxPending || isConfirming}
                    className="px-12 py-6 bg-green-600 rounded-xl font-bold text-xl hover:bg-green-500 transition disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isTxPending || isConfirming ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Claim Rewards'}
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {/* Message si pas connecté */}
        {!isConnected && (
          <div className="text-center py-32">
            <p className="text-3xl text-gray-400">Connecte ton wallet pour voir ton staking</p>
          </div>
        )}
      </div>
    </div>
  );
}
