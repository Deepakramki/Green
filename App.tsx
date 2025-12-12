import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SupportedWallets from './components/SupportedWallets';
import Features from './components/Features';
import HelpCenter from './components/HelpCenter';
import Fees from './components/Fees';
import Roadmap from './components/Roadmap';
import Exchange from './components/Exchange';
import Agreement from './components/Agreement';
import Footer from './components/Footer';
import Whitepaper from './components/Whitepaper';
import { PageView } from './types';
import { Coins, Flame, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Apply theme class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <SupportedWallets />
            <Features />
            {/* Tokenomics Teaser */}
            <section id="tokenomics" className="py-24 bg-emerald-900 text-white relative overflow-hidden" style={{ perspective: '1000px' }}>
                
                {/* 3D Background Elements */}
                <div className="absolute inset-0 pointer-events-none z-0">
                     <style>{`
                        @keyframes float-coin-3d {
                            0%, 100% { transform: translateY(0) rotateY(0deg) rotateX(10deg); }
                            50% { transform: translateY(-30px) rotateY(180deg) rotateX(10deg); }
                        }
                        @keyframes spin-ring-flat {
                            0% { transform: rotateX(75deg) rotateZ(0deg); }
                            100% { transform: rotateX(75deg) rotateZ(360deg); }
                        }
                        @keyframes particle-rise {
                            0% { bottom: -10%; opacity: 0; transform: translateX(0); }
                            50% { opacity: 0.6; }
                            100% { bottom: 120%; opacity: 0; transform: translateX(20px); }
                        }
                         @keyframes pulse-glow {
                            0%, 100% { opacity: 0.3; transform: scale(1); }
                            50% { opacity: 0.6; transform: scale(1.1); }
                        }
                    `}</style>

                    {/* 3D Floating Coin (Left) */}
                    <div className="absolute top-20 left-10 lg:left-32 opacity-20 lg:opacity-30 hidden md:block" style={{ animation: 'float-coin-3d 8s ease-in-out infinite', transformStyle: 'preserve-3d' }}>
                        <div className="relative w-32 h-32">
                             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 border-4 border-yellow-300 shadow-xl flex items-center justify-center transform translate-z-4">
                                <span className="text-6xl font-bold text-yellow-100">$</span>
                             </div>
                             {/* Coin Edge thickness simulation */}
                             <div className="absolute inset-0 rounded-full bg-yellow-700 transform translate-z-0 translate-x-2"></div>
                        </div>
                    </div>

                    {/* 3D Spinning Orbit Rings (Right Bottom) */}
                    <div className="absolute -bottom-20 -right-20 lg:right-10 w-96 h-96 opacity-20">
                         <div className="absolute inset-0 border-[4px] border-emerald-400 border-dashed rounded-full" style={{ animation: 'spin-ring-flat 20s linear infinite' }}></div>
                         <div className="absolute inset-4 border-[2px] border-emerald-300 rounded-full" style={{ animation: 'spin-ring-flat 15s linear infinite reverse' }}></div>
                    </div>

                    {/* Rising Energy Particles (Burn mechanism visualization) */}
                    {[...Array(12)].map((_, i) => (
                        <div 
                            key={i}
                            className="absolute bg-emerald-400/40 rounded-full blur-sm"
                            style={{
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 15 + 5}px`,
                                height: `${Math.random() * 15 + 5}px`,
                                animation: `particle-rise ${5 + Math.random() * 10}s linear infinite`,
                                animationDelay: `-${Math.random() * 5}s`
                            }}
                        ></div>
                    ))}

                    {/* Background Skewed Layer */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-emerald-800/40 to-transparent skew-x-12 transform translate-x-32 backdrop-blur-[1px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-emerald-800/60 rounded-full text-emerald-300 mb-6 border border-emerald-700 backdrop-blur-sm">
                        <Coins className="w-5 h-5 mr-2" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Economic Model</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight drop-shadow-sm">Sustainable Tokenomics</h2>
                    <p className="text-emerald-100 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
                        A deflationary model designed to reward long-term holders and the planet. 
                        Every transaction fuels the eco-fund and reduces supply.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <div className="group relative p-6 bg-emerald-800/40 rounded-2xl border border-emerald-700 hover:bg-emerald-800/60 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/30 transition-colors"></div>
                            <div className="text-4xl font-bold text-white mb-2">10B</div>
                            <div className="text-sm font-medium text-emerald-300 uppercase tracking-wide">Total Supply</div>
                        </div>

                        <div className="group relative p-6 bg-emerald-800/40 rounded-2xl border border-emerald-700 hover:bg-emerald-800/60 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-20 h-20 bg-red-500/20 rounded-full blur-xl group-hover:bg-red-500/30 transition-colors"></div>
                            <div className="flex items-center justify-center gap-2 text-4xl font-bold text-white mb-2">
                                2% <Flame className="w-6 h-6 text-red-400 animate-pulse" />
                            </div>
                            <div className="text-sm font-medium text-emerald-300 uppercase tracking-wide">Burn Rate</div>
                            <p className="text-xs text-emerald-400/70 mt-2">Per Transaction</p>
                        </div>

                        <div className="group relative p-6 bg-emerald-800/40 rounded-2xl border border-emerald-700 hover:bg-emerald-800/60 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-colors"></div>
                            <div className="text-4xl font-bold text-white mb-2">8K+</div>
                            <div className="text-sm font-medium text-emerald-300 uppercase tracking-wide">Holders</div>
                            <div className="flex -space-x-2 justify-center mt-3">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className={`w-6 h-6 rounded-full border border-emerald-800 bg-emerald-300/80`}></div>
                                ))}
                            </div>
                        </div>

                        <div className="group relative p-6 bg-emerald-800/40 rounded-2xl border border-emerald-700 hover:bg-emerald-800/60 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl group-hover:bg-yellow-500/30 transition-colors"></div>
                            <div className="flex items-center justify-center gap-2 text-4xl font-bold text-white mb-2">
                                $1M <ArrowUpRight className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div className="text-sm font-medium text-emerald-300 uppercase tracking-wide">Donated</div>
                             <p className="text-xs text-emerald-400/70 mt-2">To Global NGOs</p>
                        </div>
                    </div>
                </div>
            </section>
          </>
        );
      case 'help-center':
        return <HelpCenter />;
      case 'fees':
        return <Fees />;
      case 'roadmap':
        return <Roadmap />;
      case 'exchange':
        return <Exchange />;
      case 'agreement':
        return <Agreement />;
      case 'whitepaper':
        return <Whitepaper />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors duration-300">
      <Navbar onNavigate={setCurrentPage} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;