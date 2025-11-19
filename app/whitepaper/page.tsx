export const dynamic = "force-dynamic";

export default function Whitepaper() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-black mb-12 text-center text-gradient">Whitepaper CYA Token</h1>
        <div className="bg-gray-900/50 border border-purple-800 rounded-3xl p-12 prose prose-invert max-w-none">
          <h2>1. Vision</h2>
          <p>CYA est le premier token qui récompense l'intelligence artificielle et ses utilisateurs via un système de staking intelligent et des rewards IA automatisés.</p>
          
          <h2>2. Tokenomics</h2>
          <ul>
            <li>Supply maximum : 1 000 000 CYA</li>
            <li>Taxes : 2.5% (0.5% burn, 1% liquidité, 1% rewards)</li>
            <li>Rewards IA : 1000 CYA/mois max (100/user)</li>
            <li>Staking APY ajustable jusqu'à 100%</li>
          </ul>

          <h2>3. Technologie</h2>
          <p>Contrat upgradeable OpenZeppelin v5 + Timelock + Proxy transparent. Sécurité maximale.</p>

          <h2>4. Roadmap 2025</h2>
          <ul>
            <li>Q4 2025 : Lancement + Rewards IA v1</li>
            <li>Q1 2026 : Listing CMC/CG + Audit</li>
            <li>Q2 2026 : Rewards IA v2 + DAO</li>
          </ul>
        </div>
      </div>
    </div>
  );

}
