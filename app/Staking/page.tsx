'use client';

import { useAccount, useConnect, useDisconnect, useReadContract, useWriteContract } from 'wagmi';
import { useState } from 'react';
import { parseEther, formatEther } from 'viem';
import { ArrowRight, Copy, Wallet } from 'lucide-react';

// ABI minimale du contrat CYA (de ton Solidity - étends si besoin)
const CYA_ABI = [
  { name: 'balanceOf', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] },
  { name: 'stakes', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] },
  { name: 'earned', type: 'function', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] },
  { name: 'stake', type: 'function', inputs: [{ type: 'uint256' }], outputs: [] },
  { name: 'unstake', type: 'function', inputs: [{ type: 'uint256' }], outputs: [] },
  { name: 'claimRewards', type: 'function', inputs: [], outputs: [] },
] as const;

const CONTRACT_ADDRESS = '0x671cb1a2c934017fc019a7a4bf11ae5a30a32354';

export default function StakingPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { writeContract } = useWriteContract();
  const [stakeAmount, setStakeAmount] = useState('');

  // Lecture contrat (si connecté)
  const { data: balance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'balanceOf',
    args: [address!],
    query: { enabled: !!address },
  });

  const { data: staked } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'stakes',
    args: [address!],
    query: { enabled: !!address },
  });

  const { data: rewards } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CYA_ABI,
    functionName: 'earned',
    args: [address!],
    query: { enabled: !!address },
  });

  const handleStake = () => {
    if (!stakeAmount || !address) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CYA_ABI,
      functionName: 'stake',
      args: [parseEther(stakeAmount)],
    });
    setStakeAmount('');
  };

  const handleUnstake = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CYA_ABI,
      functionName: 'unstake',
      args: [parseEther(staked?.toString() || '0')],
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

        {/* Connexion Wallet */}
        <div className="text-center mb-16">
          {isConnected ? (
            <div className="flex items-center justify-center gap-4 bg-green-600/20 border border-green-500 rounded-2xl p-6">
              <Wallet className="w-8 h-8" />
              <span className="text-xl font-bold">Connecté : {address?.slice(0, 6)}...{address?.slice(-4)}</span>
              <button onClick={disconnect} className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-500 transition">
                Déconnecter
              </button>
            </div>
          ) : (
            <button
              onClick={() => connect({ connector: metaMask() })}
              className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-2xl hover:scale-105 transition"
            >
              Connecter Wallet
            </button>
          )}
        </div>

        {isConnected ? (
          <>
            {/* Dashboard Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400">Solde CYA</p>
                <div className="text-4xl font-bold text-purple-400">{formatEther(balance || 0)} CYA</div>
              </div>
              <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400">Staké</p>
                <div className="text-4xl font-bold text-purple-400">{formatEther(staked || 0)} CYA</div>
              </div>
              <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-8 text-center">
                <p className="text-gray-400">Rewards</p>
                <div className="text-4xl font-bold text-green-400">{formatEther(rewards || 0)} CYA</div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-8">
              {/* Stake */}
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Staker CYA</h2>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Montant à staker"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="flex-1 px-6 py-4 bg-black/50 border border-purple-600 rounded-xl text-white placeholder-gray-400"
                  />
                  <button
                    onClick={handleStake}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition"
                  >
                    Staker <ArrowRight className="w-5 h-5 inline" />
                  </button>
                </div>
              </div>

              {/* Unstake & Claim */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleUnstake}
                  className="px-12 py-6 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition"
                >
                  Unstaker
                </button>
                {rewards && parseFloat(formatEther(rewards)) > 0 && (
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
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">Connecte ton wallet pour commencer le staking !</p>
          </div>
        )}
      </div>
    </div>
  );
            }
