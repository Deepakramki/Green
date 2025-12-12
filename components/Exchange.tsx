import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';

const Exchange: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300" style={{ perspective: '1000px' }}>
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <style>{`
            @keyframes grow-bar {
                0%, 100% { transform: scaleY(1); }
                50% { transform: scaleY(1.3); }
            }
            @keyframes float-arrow {
                0% { transform: translate(0, 0); }
                50% { transform: translate(20px, -20px); }
                100% { transform: translate(0, 0); }
            }
             @keyframes spin-slow-cube {
                0% { transform: rotateX(45deg) rotateY(45deg) rotateZ(0deg); }
                100% { transform: rotateX(45deg) rotateY(405deg) rotateZ(0deg); }
            }
            @keyframes slide-plate {
                0% { transform: translateZ(-100px) translateY(100px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateZ(50px) translateY(-100px); opacity: 0; }
            }
         `}</style>

         {/* 3D Bar Chart (Left) */}
         <div className="absolute bottom-20 left-10 md:left-24 opacity-20 dark:opacity-10 flex items-end gap-2" style={{ transform: 'rotateY(20deg) rotateX(10deg)' }}>
            <div className="w-10 bg-emerald-400 h-24 rounded-t-lg shadow-xl" style={{ animation: 'grow-bar 4s ease-in-out infinite' }}></div>
            <div className="w-10 bg-teal-400 h-40 rounded-t-lg shadow-xl" style={{ animation: 'grow-bar 4s ease-in-out infinite 1s' }}></div>
            <div className="w-10 bg-cyan-400 h-32 rounded-t-lg shadow-xl" style={{ animation: 'grow-bar 4s ease-in-out infinite 0.5s' }}></div>
            <div className="w-10 bg-blue-400 h-56 rounded-t-lg shadow-xl" style={{ animation: 'grow-bar 4s ease-in-out infinite 1.5s' }}></div>
         </div>

         {/* 3D Order Book Plates (Right Background) */}
         <div className="absolute top-20 right-20 w-40 h-80 hidden lg:block" style={{ perspective: '500px' }}>
             <div className="w-full h-8 bg-green-500/30 mb-2 transform rotate-12" style={{ animation: 'slide-plate 3s linear infinite' }}></div>
             <div className="w-full h-8 bg-green-500/30 mb-2 transform rotate-12" style={{ animation: 'slide-plate 3s linear infinite 1s' }}></div>
             <div className="w-full h-8 bg-red-500/30 mb-2 transform rotate-12" style={{ animation: 'slide-plate 3s linear infinite 2s' }}></div>
         </div>

         {/* 3D Up Arrow (Top Right) */}
         <div className="absolute top-32 right-10 md:right-32 opacity-30 dark:opacity-10 hidden md:block" style={{ animation: 'float-arrow 5s ease-in-out infinite' }}>
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-emerald-400 border-r-[30px] border-r-transparent transform -rotate-45 filter drop-shadow-lg"></div>
            <div className="w-16 h-40 bg-emerald-400 transform -rotate-45 -translate-y-8 translate-x-4 shadow-lg"></div>
         </div>

         {/* Abstract Cubes */}
         <div className="absolute top-1/4 left-1/4 opacity-10 dark:opacity-5 hidden lg:block">
            <div className="w-32 h-32 border-4 border-blue-300" style={{ transformStyle: 'preserve-3d', animation: 'spin-slow-cube 15s linear infinite' }}></div>
         </div>
      </div>

      <div className="max-w-4xl w-full px-4 text-center relative z-10">
        <div className="mb-12">
           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Exchange Listings</h1>
           <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
             GreenCoin is expanding its presence across major global cryptocurrency exchanges.
           </p>
        </div>

        {/* BingX Listing Section */}
        <div className="transform hover:scale-105 transition-transform duration-500">
            <div className="bg-[#0057FF] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-200 dark:shadow-blue-900 mx-auto max-w-3xl border border-blue-400">
                {/* decorative bg elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-sm border border-white/10 shadow-lg">
                        <TrendingUp className="w-4 h-4" /> Official Listing
                    </div>
                    
                    <div className="bg-white p-8 rounded-3xl shadow-xl mb-10 w-full max-w-sm flex items-center justify-center transform transition-transform hover:rotate-1 min-h-[160px]">
                        <span className="text-5xl font-extrabold text-[#0057FF] tracking-tight">BingX</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Coming Soon</h2>
                    <p className="text-blue-100 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
                        We are thrilled to announce our upcoming listing on BingX. 
                        Prepare your wallets for high-liquidity trading.
                    </p>

                    <a 
                        href="https://bingx.com/en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-[#0057FF] font-bold text-lg rounded-xl hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2 inline-flex transform hover:-translate-y-1"
                    >
                        Visit BingX <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;