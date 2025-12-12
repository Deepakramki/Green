import React from 'react';

const SupportedWallets: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-300" style={{ perspective: '800px' }}>
      
      {/* 3D Animation Background */}
      <div className="absolute inset-0 pointer-events-none">
         <style>{`
            @keyframes coin-flow {
                0% { transform: translate(-50px, -50px) rotateY(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translate(100%, 100%) rotateY(720deg); opacity: 0; }
            }
         `}</style>
         
         <div className="absolute -top-10 left-10 w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-500" style={{ animation: 'coin-flow 4s linear infinite' }}></div>
         <div className="absolute top-0 left-1/4 w-6 h-6 rounded-full bg-emerald-400 border-2 border-emerald-500" style={{ animation: 'coin-flow 5s linear infinite 1s' }}></div>
         <div className="absolute -top-5 right-1/3 w-10 h-10 rounded-full bg-yellow-400 border-2 border-yellow-500" style={{ animation: 'coin-flow 6s linear infinite 2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-10">
          Supported Wallets & Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
           {/* MetaMask */}
           <div className="group cursor-pointer transition-transform hover:scale-110 flex flex-col items-center gap-2 transform hover:rotate-3 transition-all duration-300">
             <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" 
                alt="MetaMask" 
                className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 dark:grayscale-0 transition-all duration-300 drop-shadow-lg" 
             />
             <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">MetaMask</span>
           </div>

           {/* Binance Wallet */}
           <div className="group cursor-pointer transition-transform hover:scale-110 flex flex-col items-center gap-2 transform hover:rotate-3 transition-all duration-300">
             <img 
                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=032" 
                alt="Binance Wallet" 
                className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 dark:grayscale-0 transition-all duration-300 drop-shadow-lg"
             />
             <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Binance</span>
           </div>

           {/* Coinbase Wallet */}
           <div className="group cursor-pointer transition-transform hover:scale-110 flex flex-col items-center gap-2 transform hover:-rotate-3 transition-all duration-300">
             <img 
                src="https://avatars.githubusercontent.com/u/18060234?s=200&v=4" 
                alt="Coinbase Wallet" 
                className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 dark:grayscale-0 transition-all duration-300 rounded-full drop-shadow-lg"
             />
             <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">Coinbase</span>
           </div>

           {/* SafePal */}
           <div className="group cursor-pointer transition-transform hover:scale-110 flex flex-col items-center gap-2 transform hover:rotate-3 transition-all duration-300">
             <img 
                src="https://s2.coinmarketcap.com/static/img/coins/200x200/8119.png" 
                alt="SafePal" 
                className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 dark:grayscale-0 transition-all duration-300 rounded-lg drop-shadow-lg"
             />
             <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">SafePal</span>
           </div>

           {/* WalletConnect */}
           <div className="group cursor-pointer transition-transform hover:scale-110 flex flex-col items-center gap-2 transform hover:-rotate-3 transition-all duration-300">
             <img 
                src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg" 
                alt="WalletConnect" 
                className="h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 dark:grayscale-0 transition-all duration-300 drop-shadow-lg"
             />
             <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">WalletConnect</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedWallets;