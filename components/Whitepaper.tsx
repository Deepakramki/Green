import React from 'react';
import { Leaf, Cpu, Globe, ShieldCheck, Wind, Droplets, Sun, Code, Network, PieChart, Users, Zap, FileText, List, TreeDeciduous, ExternalLink, Shield, Lightbulb, TrendingUp, Handshake, CheckCircle } from 'lucide-react';

const Whitepaper: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const tableOfContents = [
    { id: 'abstract', title: 'Abstract' },
    { id: 'deployment', title: 'Deployment Report' },
    { id: 'architecture', title: '2. Architecture' },
    { id: 'environment', title: '3. Environment' },
    { id: 'security', title: '4. Security' },
    { id: 'tokenomics', title: '5. Tokenomics' },
    { id: 'governance', title: '6. Governance' },
    { id: 'future', title: '7. Future Tech' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen relative overflow-hidden transition-colors duration-300" style={{ perspective: '1000px' }}>
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <style>{`
          @keyframes rotate-poly {
             0% { transform: rotateX(0) rotateY(0); }
             100% { transform: rotateX(360deg) rotateY(360deg); }
          }
          @keyframes spin-globe-slow {
             0% { transform: rotateY(0deg) rotateX(20deg); }
             100% { transform: rotateY(360deg) rotateX(20deg); }
          }
          @keyframes float-particle {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            20% { opacity: 0.6; }
            100% { transform: translateY(-100vh) scale(0); opacity: 0; }
          }
        `}</style>
        
        <div className="absolute top-32 left-10 opacity-10 hidden lg:block" style={{ perspective: '500px' }}>
             <div className="w-40 h-40 rounded-full border border-emerald-500" style={{ transformStyle: 'preserve-3d', animation: 'spin-globe-slow 20s linear infinite' }}>
                <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ transform: 'rotateY(45deg)' }}></div>
                <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ transform: 'rotateY(90deg)' }}></div>
                <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ transform: 'rotateX(90deg)' }}></div>
             </div>
        </div>

        <div className="absolute top-40 right-10 md:right-40 opacity-20 hidden md:block" style={{ perspective: '600px' }}>
            <div className="w-40 h-40 border-2 border-emerald-400" style={{ transformStyle: 'preserve-3d', animation: 'rotate-poly 20s linear infinite' }}>
                <div className="absolute inset-0 border-2 border-emerald-400" style={{ transform: 'rotateX(90deg)' }}></div>
                <div className="absolute inset-0 border-2 border-emerald-400" style={{ transform: 'rotateY(90deg)' }}></div>
            </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div 
              key={`particle-${i}`}
              className="absolute bottom-0 w-2 h-2 bg-emerald-400/60 dark:bg-emerald-500/60 rounded-full blur-[1px]"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `float-particle ${15 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-emerald-900 text-white py-16 md:py-20 relative overflow-hidden z-10 shadow-2xl">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-emerald-800/50 rounded-full text-emerald-300 mb-6 border border-emerald-700/50 backdrop-blur-sm">
                <span className="px-3 text-xs md:text-sm font-semibold tracking-wider uppercase">Official Smart Contract Deployment</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight px-2">Green Energy Coin <span className="text-emerald-400">Whitepaper</span></h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                Technical documentation and verification report for Greencoin (GEC) on the BNB Smart Chain.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-10 relative z-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 z-30">
                <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6">
                    <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <List className="w-5 h-5" />
                        <h3 className="text-sm font-bold uppercase tracking-wider">Contents</h3>
                    </div>
                    <ul className="space-y-1">
                        {tableOfContents.map((section) => (
                            <li key={section.id}>
                                <button 
                                    onClick={() => scrollToSection(section.id)}
                                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 py-2 px-3 rounded-lg transition-all text-left w-full"
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <div className="flex-1 w-full min-w-0">
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-5 md:p-12 transition-colors duration-300">
                    
                    <div id="abstract" className="mb-12 md:mb-16 scroll-mt-28">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b pb-2 border-slate-200 dark:border-slate-700">Abstract</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg mb-4">
                            Green Energy Coin (GEC) is a decentralized asset protocol on the BNB Smart Chain (BEP-20) designed to bridge digital finance with environmental preservation. As the global economy transitions towards renewable energy, GEC provides a frictionless investment pathway for retail investors to participate in ecological projects with <span className="font-bold text-emerald-600 dark:text-emerald-400">zero transaction fees</span>.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                            Unlike traditional tokens that tax users for every trade, GEC maintains a 0% fee model, with environmental initiatives and research funded by a dedicated Ecosystem Treasury. This creates a self-sustaining model for planetary healing without adding financial friction for our community.
                        </p>
                    </div>

                    <div id="deployment" className="mb-12 md:mb-16 scroll-mt-28 bg-emerald-50 dark:bg-emerald-900/10 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-inner">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-6 h-6 text-emerald-600" />
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Smart Contract Deployment Report</h2>
                        </div>
                        
                        <div className="space-y-4 md:space-y-6 font-mono text-xs md:text-sm overflow-hidden">
                            <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 shadow-sm group">
                                <p className="text-emerald-600 font-bold mb-1">Token Contract (BEP-20)</p>
                                <div className="flex items-center justify-between gap-3 md:gap-4 overflow-hidden">
                                    <span className="truncate text-slate-700 dark:text-slate-300 flex-1 min-w-0">0xf65Fb2BFE01Bb1147816770766242f41Fc5b5410</span>
                                    <ExternalLink className="w-4 h-4 text-emerald-400 cursor-pointer flex-shrink-0" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900">
                                    <p className="text-blue-500 font-bold mb-1">Team Vesting</p>
                                    <p className="truncate text-[10px] md:text-xs text-slate-600">0x80b1c5752a8A86D25f54087257CD10b1a07C81E1</p>
                                </div>
                                <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900">
                                    <p className="text-blue-500 font-bold mb-1">Treasury Vesting</p>
                                    <p className="truncate text-[10px] md:text-xs text-slate-600">0xBB8061992202D3Ae14f7D772D27d70488e149AF7</p>
                                </div>
                                <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900">
                                    <p className="text-blue-500 font-bold mb-1">Ecosystem Vesting</p>
                                    <p className="truncate text-[10px] md:text-xs text-slate-600">0xD28d8499236a6cD289Ef41c5C8D3682fEbE0969B</p>
                                </div>
                                <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900 flex items-center justify-between md:block">
                                    <p className="text-emerald-500 font-bold md:mb-1">Status</p>
                                    <p className="text-[10px] md:text-xs text-emerald-600 font-bold">DEPLOYED & VERIFIED</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="architecture" className="mb-12 md:mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shadow-sm">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">2. Architecture</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                            The GEC protocol is built on the BNB Smart Chain (BSC) to leverage its Proof-of-Staked Authority (PoSA) consensus. This choice ensures that while GEC maintains <span className="font-bold">0% transaction fees</span> at the smart contract level, users only pay the standard minimal BSC network gas fees.
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                                <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <span><strong>Energy Efficiency:</strong> PoSA consumes a fraction of the electricity compared to Proof-of-Work systems.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                                <TrendingUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span><strong>Scalability:</strong> Supporting high-frequency trading with zero contract-level taxes.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                                <Network className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span><strong>Interoperability:</strong> Full EVM compatibility allows for zero-tax transfers across DeFi protocols.</span>
                            </li>
                        </ul>
                    </div>

                    <div id="environment" className="mb-12 md:mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg shadow-sm">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">3. Environment Strategy</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-4">
                            Our environmental impact is managed through the <strong>Eco-Treasury</strong>, which is funded through initial supply allocations rather than per-transaction taxes. This ensures a consistent funding source without burdening the user.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 border border-emerald-100 dark:border-emerald-800 rounded-2xl bg-white dark:bg-slate-900">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <TreeDeciduous className="w-4 h-4 text-emerald-500" /> Reforestation
                                </h4>
                                <p className="text-xs text-slate-500">Allocated funding for global tree planting initiatives targeting carbon sequestration hotspots.</p>
                            </div>
                            <div className="p-5 border border-emerald-100 dark:border-emerald-800 rounded-2xl bg-white dark:bg-slate-900">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <Sun className="w-4 h-4 text-yellow-500" /> Solar Infrastructure
                                </h4>
                                <p className="text-xs text-slate-500">Grant program for micro-grid developments in emerging markets, providing clean energy to underserved communities.</p>
                            </div>
                        </div>
                    </div>

                    <div id="security" className="mb-12 md:mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg shadow-sm">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">4. Security Infrastructure</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                            To ensure the longevity of the protocol, we implement a layered security approach:
                        </p>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                <span className="text-sm text-slate-700 dark:text-slate-300"><strong>Time-Locked Liquidity:</strong> LP tokens are locked for 60 months via Team.Finance.</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                <span className="text-sm text-slate-700 dark:text-slate-300"><strong>Multi-Sig Governance:</strong> Treasury and Ecosystem wallets require 3-of-5 board signatures.</span>
                            </div>
                        </div>
                    </div>

                    <div id="tokenomics" className="mb-12 md:mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg shadow-sm">
                                <PieChart className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">5. Tokenomics & 0% Fee Model</h2>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 md:p-6 shadow-sm mb-8">
                             <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-base">Supply Metrics</h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                                    <p className="text-[10px] md:text-xs text-slate-400 uppercase font-semibold">Total Supply</p>
                                    <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">1B GEC</p>
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                                    <p className="text-[10px] md:text-xs text-slate-400 uppercase font-semibold">Market Supply</p>
                                    <p className="text-lg md:text-xl font-bold text-emerald-500">50M - 100M GEC</p>
                                </div>
                             </div>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-800 mb-8">
                            <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400">
                                <Lightbulb className="w-5 h-5" />
                                <h4 className="font-bold">Zero-Fee Ecosystem (0% Tax)</h4>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                GEC implements a <span className="font-bold">0% Transaction Tax</span>. This means 100% of tokens bought are delivered to the user's wallet. Research & Development is sustained by an initial <strong>2% Innovation & Research Supply Allocation</strong>, ensuring growth without taxing transactions.
                            </p>
                        </div>

                        <div className="overflow-x-auto -mx-2 px-2 scrollbar-hide">
                            <table className="w-full text-left text-[11px] md:text-sm text-slate-600 dark:text-slate-300 min-w-[320px]">
                                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                                    <tr>
                                        <th className="p-3 rounded-tl-lg">Pool</th>
                                        <th className="p-3">Start Date</th>
                                        <th className="p-3">Cliff</th>
                                        <th className="p-3 rounded-tr-lg">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr>
                                        <td className="p-3 font-medium">Team & Founders</td>
                                        <td className="p-3">1 Jan 2026</td>
                                        <td className="p-3 text-red-500 dark:text-red-400 font-semibold">6m</td>
                                        <td className="p-3">24m</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium">Treasury</td>
                                        <td className="p-3">1 Jan 2026</td>
                                        <td className="p-3">None</td>
                                        <td className="p-3">24m</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium">Ecosystem Fund</td>
                                        <td className="p-3">1 Jan 2026</td>
                                        <td className="p-3">None</td>
                                        <td className="p-3">18m</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="governance" className="mb-12 md:mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg shadow-sm">
                                <Users className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">6. Community Governance</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-6">
                            GEC is transitioning to a Decentralized Autonomous Organization (DAO) model. Token holders can stake their GEC to earn <strong>Governance Power (GP)</strong>, allowing them to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                                <Handshake className="w-6 h-6 mx-auto mb-2 text-pink-500" />
                                <p className="text-xs font-bold uppercase">Propose Projects</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                                <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-pink-500" />
                                <p className="text-xs font-bold uppercase">Vote on Grants</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                                <PieChart className="w-6 h-6 mx-auto mb-2 text-pink-500" />
                                <p className="text-xs font-bold uppercase">Manage Treasury</p>
                            </div>
                        </div>
                    </div>

                    <div id="future" className="mb-12 md:mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg shadow-sm">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">7. Future Tech & AI Integration</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-4 leading-relaxed">
                            Our roadmap integrates cutting-edge AI to enhance the ecological vision. By using the <strong>Gemini AI Studio</strong>, we enable the community to visualize green transformations.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-6">
                            Beyond imagery, our R&D fund is exploring "Smart Grid Oracle" technology, allowing GEC to be used as a settlement layer for peer-to-peer renewable energy trading with <span className="font-bold">zero internal fees</span>.
                        </p>
                    </div>

                    <div id="conclusion" className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8 scroll-mt-28">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4">Conclusion</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                            Greencoin (GEC) is more than a digital asset; it is a technological bridge to a sustainable future. Through verified smart contracts and a highly efficient <span className="font-bold">0% tax model</span>, we are redefining what a green cryptocurrency can achieve.
                        </p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;