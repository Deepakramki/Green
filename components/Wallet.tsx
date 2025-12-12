import React from 'react';
import { Wallet as WalletIcon, CheckCircle2, Zap } from 'lucide-react';

const Wallet: React.FC = () => {
  const wallets = [
    { 
      name: "MetaMask", 
      desc: "The most popular browser wallet.", 
      color: "bg-orange-50", 
      text: "text-orange-600",
      logo: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
            <path fill="#E17726" d="M30.6 12.3L26.7 2 16.5 9l-9.8-7-3.9 10.3c-2.3 3.6-2.5 8.7.6 13.9l.4.7L16.2 32l12.4-5.1.4-.7c3.1-5.2 2.9-10.3.6-13.9z"/>
            <path fill="#E27625" d="M26.7 2L16.5 9v18.7L28.6 22l.4-.7c3.1-5.2 2.9-10.3 1.6-13.9l-3.9 4.9z"/>
        </svg>
      )
    },
    { 
      name: "Trust Wallet", 
      desc: "Secure mobile crypto wallet.", 
      color: "bg-blue-50", 
      text: "text-blue-600",
      logo: (
         <img 
            src="https://cdn.worldvectorlogo.com/logos/trust-wallet-token.svg" 
            alt="Trust Wallet" 
            className="w-12 h-12 object-contain" 
         />
      )
    },
    { 
      name: "Binance Wallet", 
      desc: "Official wallet for BSC.", 
      color: "bg-yellow-50", 
      text: "text-yellow-600",
      logo: (
        <svg viewBox="0 0 32 32" className="w-12 h-12 text-yellow-500 fill-current">
            <path d="M16 2l-9 9 9 9 9-9-9-9zm0 3.8l5.2 5.2-5.2 5.2-5.2-5.2L16 5.8zM4.2 13.8L2 16l2.2 2.2 2.2-2.2-2.2-2.2zm23.6 0L25.6 16l2.2 2.2 2.2-2.2-2.2-2.2zM16 22l-5.2 5.2 5.2 5.2 5.2-5.2L16 22z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-full text-emerald-600 mb-6">
            <WalletIcon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Connect Your Wallet</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            GreenCoin is fully compatible with the Binance Smart Chain (BSC). 
            Connect using any BEP-20 supported wallet to manage your assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {wallets.map((wallet, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border border-slate-200 ${wallet.color} transition-all hover:scale-105 hover:shadow-lg cursor-pointer`}>
              <div className="mb-6 flex justify-center">
                {wallet.logo}
              </div>
              <h3 className={`text-xl font-bold ${wallet.text} text-center mb-2`}>{wallet.name}</h3>
              <p className="text-slate-600 text-center text-sm">{wallet.desc}</p>
              <div className="mt-6 flex justify-center">
                 <button className="px-6 py-2 bg-white rounded-full text-sm font-semibold shadow-sm text-slate-700 hover:bg-slate-50">
                    Connect
                 </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Zap className="w-6 h-6 text-yellow-400" />
                        Why Binance Smart Chain?
                    </h3>
                    <ul className="space-y-3 text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Extremely low transaction fees (~$0.03)</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> 3-second block times for instant transfers</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Eco-friendly Proof-of-Stake Authority consensus</li>
                    </ul>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 max-w-sm w-full">
                    <h4 className="font-semibold text-slate-200 mb-4">Network Details</h4>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">Network Name</span> <span>Smart Chain</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">RPC URL</span> <span className="text-emerald-400">https://bsc-dataseed.binance.org/</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Chain ID</span> <span>56</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Symbol</span> <span>BNB</span></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;