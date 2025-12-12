import React from 'react';
import { Coins, ArrowRightLeft, Flame, Wallet, Percent } from 'lucide-react';

const Fees: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-slate-900 min-h-screen relative overflow-hidden transition-colors duration-300" style={{ perspective: '1200px' }}>
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <style>{`
            @keyframes spin-coin-y {
                0% { transform: rotateY(0deg); }
                100% { transform: rotateY(360deg); }
            }
            @keyframes float-percent {
                0%, 100% { transform: translateY(0) rotate(-10deg); }
                50% { transform: translateY(-30px) rotate(10deg); }
            }
             @keyframes tumble {
                0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
                100% { transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg); }
            }
            @keyframes burn-rise {
               0% { transform: translateY(0) scale(1); opacity: 0.8; }
               100% { transform: translateY(-100px) scale(0); opacity: 0; }
            }
        `}</style>

        {/* 3D Coin (Left) */}
        <div className="absolute top-32 left-10 md:left-24 opacity-80 hidden lg:block" style={{ perspective: '800px' }}>
             <div className="w-24 h-24 relative" style={{ transformStyle: 'preserve-3d', animation: 'spin-coin-y 8s linear infinite' }}>
                <div className="absolute inset-0 rounded-full bg-yellow-400 border-4 border-yellow-500 flex items-center justify-center shadow-lg" style={{ transform: 'translateZ(5px)' }}>
                   <span className="text-4xl font-bold text-yellow-700">$</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-yellow-500 border-4 border-yellow-600 flex items-center justify-center shadow-lg" style={{ transform: 'translateZ(-5px) rotateY(180deg)' }}>
                   <span className="text-4xl font-bold text-yellow-800">$</span>
                </div>
                {/* Coin Edge */}
                <div className="absolute top-0 left-1/2 w-2 h-full bg-yellow-600" style={{ transform: 'rotateY(90deg) translateX(-50%)' }}></div>
             </div>
        </div>

        {/* 3D Burning Pile (Center Background) */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
             <div className="relative w-20 h-20">
                <div className="absolute w-8 h-8 bg-red-400 rounded-sm" style={{ animation: 'burn-rise 2s ease-in infinite' }}></div>
                <div className="absolute w-6 h-6 bg-orange-400 rounded-sm left-4" style={{ animation: 'burn-rise 2.5s ease-in infinite 0.5s' }}></div>
                <div className="absolute w-8 h-8 bg-red-500 rounded-sm right-2" style={{ animation: 'burn-rise 2.2s ease-in infinite 1s' }}></div>
             </div>
        </div>

        {/* Floating Percent Sign (Right) */}
        <div className="absolute top-40 right-10 md:right-32 text-emerald-100 dark:text-emerald-900 hidden md:block" style={{ animation: 'float-percent 6s ease-in-out infinite' }}>
            <Percent className="w-48 h-48" strokeWidth={1} />
        </div>

        {/* Tumbling Geometric Shape (Bottom Left) */}
        <div className="absolute bottom-20 left-1/4 opacity-40 dark:opacity-20 hidden md:block">
            <div className="w-16 h-16 bg-gradient-to-br from-red-200 to-orange-200 dark:from-red-900 dark:to-orange-900 rounded-xl border border-red-300 dark:border-red-800" style={{ animation: 'tumble 12s linear infinite' }}></div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 dark:bg-slate-950 rounded-full blur-3xl -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm ring-4 ring-emerald-50 dark:ring-emerald-900/20">
            <Coins className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Transaction Fees</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our fee structure is designed to sustain the ecosystem, reward holders, and fund environmental projects.
            Total Transaction Tax: <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xl">5%</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 relative overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 shadow-sm">
                    <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">2% Burn</h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Deflationary mechanism. These tokens are permanently removed from circulation, increasing scarcity.
                </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 relative overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 scale-105 z-20 ring-1 ring-emerald-100 dark:ring-emerald-900/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
                    <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">2% Eco-Fund</h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Directly contributed to our Green Treasury to fund renewable energy projects and reforestation.
                </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 relative overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shadow-sm">
                    <ArrowRightLeft className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">1% Redistribution</h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Automatically distributed to all existing holders as a reward for holding GreenCoin.
                </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
             <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Fee Exemptions</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 text-emerald-400">✓</div>
                        <p className="text-slate-300 dark:text-slate-200">Wallet-to-wallet transfers between family and friends are tax-free.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 text-emerald-400">✓</div>
                        <p className="text-slate-300 dark:text-slate-200">Donations to registered charities using GreenCoin have 0% fees.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 text-emerald-400">✓</div>
                        <p className="text-slate-300 dark:text-slate-200">Staking and unstaking actions are exempt from the transaction tax.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;