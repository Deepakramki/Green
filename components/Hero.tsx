import React from 'react';
import { ArrowRight, Globe, Zap, Shield, Leaf } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div id="home" className="relative pt-24 pb-16 lg:pt-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300" style={{ perspective: '1200px' }}>
      
      {/* 3D Animated Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes spin-3d {
            0% { transform: rotateY(0deg) rotateX(20deg); }
            100% { transform: rotateY(360deg) rotateX(20deg); }
          }
           @keyframes spin-turbine {
            0% { transform: rotateZ(0deg); }
            100% { transform: rotateZ(360deg); }
          }
           @keyframes tilt-solar {
             0%, 100% { transform: rotateX(60deg) rotateZ(10deg); }
             50% { transform: rotateX(50deg) rotateZ(15deg); }
          }
        `}</style>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 opacity-100 dark:opacity-40 transition-opacity duration-300">
            <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        </div>

        {/* 3D Wind Turbine (Abstract) - Left */}
        <div className="absolute top-40 left-10 lg:left-20 opacity-40 dark:opacity-20 hidden md:block">
            <div className="relative w-2 h-40 bg-slate-300 dark:bg-slate-700 rounded-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-400 dark:bg-slate-600 rounded-full z-10"></div>
                {/* Blades */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-60 h-60 -mt-28" style={{ animation: 'spin-turbine 6s linear infinite' }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-28 bg-emerald-200/80 dark:bg-emerald-700/50 rounded-full origin-bottom"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-28 bg-emerald-200/80 dark:bg-emerald-700/50 rounded-full origin-bottom transform rotate-120"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-28 bg-emerald-200/80 dark:bg-emerald-700/50 rounded-full origin-bottom transform rotate-240"></div>
                </div>
            </div>
        </div>

        {/* 3D Spinning Green Coin - Center/Right */}
        <div className="absolute top-20 right-[15%] opacity-80 hidden md:block" style={{ perspective: '500px' }}>
            <div style={{ transformStyle: 'preserve-3d', animation: 'spin-3d 15s linear infinite' }} className="w-24 h-24 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center border-4 border-emerald-300 shadow-xl" style={{ transform: 'translateZ(4px)' }}>
                   <Leaf className="text-white w-12 h-12" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center border-4 border-emerald-300 shadow-xl" style={{ transform: 'translateZ(-4px) rotateY(180deg)' }}>
                   <Leaf className="text-white w-12 h-12" />
                </div>
            </div>
        </div>

        {/* 3D Solar Panel Grid - Bottom Right */}
        <div className="absolute bottom-10 right-10 opacity-30 dark:opacity-20 hidden lg:block" style={{ perspective: '1000px' }}>
             <div className="w-64 h-40 bg-blue-900/20 dark:bg-blue-600/10 border border-blue-500/30 rounded-lg grid grid-cols-4 gap-1 p-1 transform" style={{ animation: 'tilt-solar 8s ease-in-out infinite' }}>
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="bg-blue-500/20 dark:bg-blue-400/10 rounded-sm backdrop-blur-sm border border-blue-400/30"></div>
                ))}
             </div>
        </div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm bg-opacity-80">
          <span className="flex h-2 w-2 relative mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Protocol V2 is now live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 drop-shadow-sm transition-colors duration-300">
          The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 relative">
            Green Energy
          </span>
          <br className="hidden md:block" /> Financing
        </h1>
        
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 transition-colors duration-300">
          Invest in renewable energy projects, earn rewards, and reduce your carbon footprint with the world's first AI-integrated eco-currency.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => {
                onNavigate('exchange');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30 hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            Buy GreenCoin <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => {
                onNavigate('whitepaper');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all flex items-center gap-2"
          >
            Read Whitepaper
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
                { icon: <Globe className="w-6 h-6" />, title: "Global Impact", desc: "Funding projects across 40+ countries" },
                { icon: <Zap className="w-6 h-6" />, title: "Fast Transactions", desc: "Eco-friendly PoS consensus mechanism" },
                { icon: <Shield className="w-6 h-6" />, title: "Verified Assets", desc: "Audited smart contracts & real-world assets" },
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-emerald-50 dark:border-slate-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-xl mb-4">
                        {item.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;