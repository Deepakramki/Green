import React from 'react';
import { Leaf, Cpu, Globe, ShieldCheck, ArrowLeft, Wind, Droplets, Sun, Code, Database, Network, PieChart, Users, Zap, FileText, List, TreeDeciduous } from 'lucide-react';

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
    { id: 'problem', title: '1. The Problem' },
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
          @keyframes float-tech {
             0%, 100% { transform: translateY(0); }
             50% { transform: translateY(-30px); }
          }
          @keyframes pulse-node {
             0%, 100% { transform: scale(1); opacity: 0.3; }
             50% { transform: scale(1.5); opacity: 0.1; }
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
          @keyframes sway-tree {
            0%, 100% { transform: skewX(-2deg) rotate(0deg); }
            50% { transform: skewX(2deg) rotate(1deg); }
          }
          @keyframes drift-leaf {
            0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
            20% { opacity: 0.4; }
            80% { opacity: 0.4; }
            100% { transform: translate(100px, 50px) rotate(180deg); opacity: 0; }
          }
          @keyframes leaf-spiral {
            0% { transform: translate3d(0, -20px, 0) rotate3d(0, 1, 0, 0deg); opacity: 0; }
            10% { opacity: 0.5; }
            90% { opacity: 0.5; }
            100% { transform: translate3d(50px, 100vh, 100px) rotate3d(1, 1, 1, 720deg); opacity: 0; }
          }
        `}</style>
        
        {/* Rotating 3D Globe Wireframe (Top Left) */}
        <div className="absolute top-32 left-10 opacity-10 hidden lg:block" style={{ perspective: '500px' }}>
             <div className="w-40 h-40 rounded-full border border-emerald-500" style={{ transformStyle: 'preserve-3d', animation: 'spin-globe-slow 20s linear infinite' }}>
                <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ transform: 'rotateY(45deg)' }}></div>
                <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ transform: 'rotateY(90deg)' }}></div>
                <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ transform: 'rotateY(135deg)' }}></div>
                <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ transform: 'rotateX(90deg)' }}></div>
             </div>
        </div>

        {/* Rotating 3D Polygon (Right) */}
        <div className="absolute top-40 right-10 md:right-40 opacity-20 hidden md:block" style={{ perspective: '600px' }}>
            <div className="w-40 h-40 border-2 border-emerald-400" style={{ transformStyle: 'preserve-3d', animation: 'rotate-poly 20s linear infinite' }}>
                <div className="absolute inset-0 border-2 border-emerald-400" style={{ transform: 'rotateX(90deg)' }}></div>
                <div className="absolute inset-0 border-2 border-emerald-400" style={{ transform: 'rotateY(90deg)' }}></div>
            </div>
        </div>

        {/* Floating Tech Chips */}
        <div className="absolute bottom-1/3 left-10 hidden lg:block" style={{ animation: 'float-tech 8s ease-in-out infinite' }}>
            <div className="w-24 h-24 bg-teal-100 dark:bg-teal-900 rounded-xl border border-teal-300 dark:border-teal-700 opacity-30 transform rotate-12 flex items-center justify-center">
                <Cpu className="w-12 h-12 text-teal-500" />
            </div>
        </div>

        {/* Floating Documents (Bottom Right) */}
        <div className="absolute bottom-20 right-20 opacity-20 hidden lg:block" style={{ animation: 'float-tech 6s ease-in-out infinite' }}>
             <FileText className="w-32 h-32 text-slate-400 dark:text-slate-600" />
        </div>

        {/* Network Nodes Pulse */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 z-0">
             <div className="absolute top-0 left-0 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 bg-teal-500 rounded-full animate-ping animation-delay-2000"></div>
             <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-emerald-200 dark:border-emerald-800 rounded-full" style={{ animation: 'pulse-node 4s ease-in-out infinite' }}></div>
        </div>

        {/* Energy Particles - Rising from bottom */}
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

        {/* Abstract Giant Tree Background - Right Side */}
        <div className="absolute top-1/3 right-[-5%] opacity-[0.03] dark:opacity-[0.05] hidden xl:block pointer-events-none" style={{ animation: 'sway-tree 12s ease-in-out infinite' }}>
            <TreeDeciduous className="w-[500px] h-[500px] text-emerald-900 dark:text-emerald-100" strokeWidth={0.5} />
        </div>

        {/* Drifting Leaves (Existing) */}
        <div className="absolute top-32 left-1/4 opacity-20 dark:opacity-10 pointer-events-none" style={{ animation: 'drift-leaf 18s linear infinite' }}>
            <Leaf className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-15 dark:opacity-5 pointer-events-none" style={{ animation: 'drift-leaf 25s linear infinite 7s' }}>
            <Leaf className="w-8 h-8 text-teal-600 dark:text-teal-400" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-15 dark:opacity-5 pointer-events-none" style={{ animation: 'drift-leaf 22s linear infinite 2s' }}>
            <Leaf className="w-12 h-12 text-emerald-500 dark:text-emerald-300" />
        </div>

        {/* New 3D Spiraling Leaves - Background Layer */}
        {[...Array(7)].map((_, i) => (
            <div 
                key={`spiral-leaf-${i}`}
                className="absolute -top-10 z-0 pointer-events-none"
                style={{
                    left: `${Math.random() * 90}%`,
                    animation: `leaf-spiral ${18 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 10}s`,
                    opacity: 0,
                }}
            >
                <Leaf className="w-5 h-5 text-emerald-400/40 dark:text-emerald-300/20 transform" />
            </div>
        ))}

      </div>

      {/* Header Section */}
      <div className="bg-emerald-900 text-white py-20 relative overflow-hidden z-10 shadow-2xl">
         <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

         {/* 3D Elements Behind Title */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
             <style>{`
                @keyframes spin-slow-3d {
                    0% { transform: rotateX(0deg) rotateY(0deg); }
                    100% { transform: rotateX(360deg) rotateY(360deg); }
                }
                @keyframes float-energy {
                    0% { transform: translateY(0) scale(1); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(-100px) scale(0); opacity: 0; }
                }
                @keyframes spin-coin-header {
                   0% { transform: rotateY(0deg); }
                   100% { transform: rotateY(360deg); }
                }
             `}</style>
             
             {/* 3D Wireframe Sphere (Global/Eco Connection) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10">
                 <div className="w-full h-full border border-emerald-400/30 rounded-full animate-[spin-slow-3d_40s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                     <div className="absolute inset-0 border border-emerald-400/20 rounded-full rotate-45"></div>
                     <div className="absolute inset-0 border border-emerald-400/20 rounded-full -rotate-45"></div>
                 </div>
             </div>

             {/* Rising Energy Particles */}
             {[...Array(8)].map((_, i) => (
                 <div 
                    key={i}
                    className="absolute w-2 h-2 bg-emerald-300 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        bottom: '0%',
                        animation: `float-energy ${3 + Math.random() * 4}s linear infinite`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                 ></div>
             ))}

             {/* Abstract Floating Cubes (Blockchain Blocks) */}
             <div className="absolute top-10 left-20 w-16 h-16 border border-emerald-500/30 transform rotate-12 opacity-20 animate-[float-tech_8s_ease-in-out_infinite]"></div>
             <div className="absolute bottom-10 right-20 w-20 h-20 border border-teal-500/30 transform -rotate-12 opacity-20 animate-[float-tech_10s_ease-in-out_infinite_reverse]"></div>

             {/* 3D Spinning Coin Silhouette */}
             <div className="absolute top-1/2 right-10 md:right-32 -translate-y-1/2 opacity-10 hidden md:block" style={{ perspective: '800px' }}>
                 <div className="w-32 h-32 rounded-full border-4 border-emerald-400 animate-[spin-coin-header_15s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                     <div className="absolute inset-0 flex items-center justify-center font-bold text-6xl text-emerald-400 transform translate-z-10">$</div>
                 </div>
             </div>
         </div>
         
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-emerald-800/50 rounded-full text-emerald-300 mb-6 border border-emerald-700/50 backdrop-blur-sm">
                <span className="px-3 text-sm font-semibold tracking-wider uppercase">Version 2.1</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Green Energy Coin <span className="text-emerald-400">Whitepaper</span></h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                A technical framework for decentralized environmental financing and sustainable blockchain architecture.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Sticky Sidebar Navigation (Desktop) */}
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

            {/* Main Content */}
            <div className="flex-1 min-w-0">
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-12 transition-colors duration-300">
                    
                    {/* Abstract */}
                    <div id="abstract" className="mb-16 scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b pb-2 border-slate-200 dark:border-slate-700">Abstract</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                            Green Energy Coin (GEC) introduces a novel "Green Protocol" that leverages blockchain technology to automate funding for renewable energy initiatives and global reforestation. Unlike traditional cryptocurrencies that consume vast amounts of energy, GEC is built on a Proof-of-Stake Authority (PoSA) consensus mechanism, reducing energy consumption by 99.9%. This paper outlines the technical architecture, smart contract logic, and the economic model that ensures every transaction contributes directly to the healing of our planet.
                        </p>
                    </div>

                    {/* Section 1: The Problem */}
                    <div id="problem" className="mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg shadow-sm">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. The Problem: Crypto's Carbon Footprint</h2>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-4">
                            <p>
                                The rapid adoption of blockchain technology has come at a significant environmental cost. Proof-of-Work (PoW) blockchains require immense computational power, leading to an energy consumption comparable to that of entire nations.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>High Energy Consumption:</strong> Traditional mining operations rely heavily on fossil fuels.</li>
                                <li><strong>Lack of Accountability:</strong> Few projects have built-in mechanisms to offset their carbon output.</li>
                                <li><strong>Funding Gaps:</strong> Renewable energy startups often face barriers in accessing capital through traditional finance.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 2: Technical Architecture */}
                    <div id="architecture" className="mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shadow-sm">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Technical Architecture</h2>
                        </div>
                        
                        <div className="space-y-8">
                            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                                    <Network className="w-5 h-5 text-blue-500" /> Consensus Mechanism: PoSA
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    GEC operates on the Binance Smart Chain (BSC), utilizing Proof-of-Stake Authority (PoSA). This hybrid consensus model combines Delegated Proof of Stake (DPoS) and Proof of Authority (PoA).
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                        <span className="block text-xs font-bold text-slate-400 uppercase">Block Time</span>
                                        <span className="text-lg font-bold text-slate-800 dark:text-slate-200">3 Seconds</span>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                        <span className="block text-xs font-bold text-slate-400 uppercase">Energy per Tx</span>
                                        <span className="text-lg font-bold text-slate-800 dark:text-slate-200">~0.0001 kWh</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-emerald-500" /> Smart Contract Logic
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    The core of GEC is a modified BEP-20 smart contract with an integrated "Green Tax" function overridden on standard transfers.
                                </p>
                                <div className="bg-slate-900 text-emerald-400 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-inner">
        {`function _transfer(address sender, address recipient, uint256 amount) internal {
            require(sender != address(0), "ERC20: transfer from zero address");
            require(recipient != address(0), "ERC20: transfer to zero address");

            uint256 taxAmount = amount.mul(5).div(100); // 5% Total Tax
            uint256 burnAmount = amount.mul(2).div(100); // 2% Burn
            uint256 ecoAmount = amount.mul(2).div(100);  // 2% Eco Fund
            uint256 reflectAmount = amount.mul(1).div(100); // 1% Redistribution

            uint256 sendAmount = amount.sub(taxAmount);

            _balances[sender] = _balances[sender].sub(amount);
            _balances[recipient] = _balances[recipient].add(sendAmount);
            
            // Execute automated funding
            _takeEcoFee(ecoAmount);
            _burn(sender, burnAmount);
            _reflect(reflectAmount);
            
            emit Transfer(sender, recipient, sendAmount);
        }`}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Environmental Impact */}
                    <div id="environment" className="mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg shadow-sm">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Benefits for Nature & Environment</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
                                    <Wind className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Automated Philanthropy</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    The 2% Eco-Fund tax creates a perpetual stream of funding for verified NGOs without requiring manual donations from users.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border border-yellow-100 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-900/10 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors">
                                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4 shadow-sm">
                                    <Sun className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Solar & Wind Financing</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Treasury funds are allocated to seed-stage renewable energy startups, bridging the gap between innovation and implementation.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border border-blue-100 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-sm">
                                    <Droplets className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Deflationary Healing</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    As the token supply burns (2% per tx), the value of the remaining Eco-Fund reserves effectively increases, creating more purchasing power for green projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Security */}
                    <div id="security" className="mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg shadow-sm">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Security & Audit</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Security is paramount for sustainable longevity. The GEC smart contract features:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
                            <li><strong>Anti-Whale Mechanics:</strong> Max transaction limits prevent massive sell-offs that could destabilize the project.</li>
                            <li><strong>Liquidity Locking:</strong> Liquidity pool tokens are time-locked via third-party custodians (Team.Finance).</li>
                            <li><strong>Ownership Renouncement:</strong> Critical contract functions (like minting) have been renounced to ensure decentralization.</li>
                        </ul>
                    </div>

                    {/* Section 5: Token Economics */}
                    <div id="tokenomics" className="mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg shadow-sm">
                                <PieChart className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Token Economics</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                            The GEC tokenomics are designed to ensure long-term stability and continuous funding for environmental causes. The total supply is fixed at 10 Billion tokens, with no minting capability.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-4">Allocation Breakdown</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span className="text-slate-600 dark:text-slate-300">Public Presale & Liquidity</span>
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">40%</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span className="text-slate-600 dark:text-slate-300">Eco-Treasury (Vested linearly over 5 years)</span>
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">20%</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span className="text-slate-600 dark:text-slate-300">Team & Development (Locked for 2 years)</span>
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">15%</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span className="text-slate-600 dark:text-slate-300">Marketing & Partnerships</span>
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">15%</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-slate-600 dark:text-slate-300">Staking Rewards Pool</span>
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">10%</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 6: Governance */}
                    <div id="governance" className="mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg shadow-sm">
                                <Users className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. DAO Governance</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Green Energy Coin transitions into a fully Decentralized Autonomous Organization (DAO) in Phase 4. This ensures that the community holds the power to decide which environmental projects receive funding.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                                <h4 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">Proposal Mechanism</h4>
                                <p className="text-sm text-indigo-800/80 dark:text-indigo-300/80">
                                    Holders with more than 0.1% of the supply can submit proposals for new renewable energy investments or charity partnerships.
                                </p>
                            </div>
                            <div className="p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                                <h4 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">Quadratic Voting</h4>
                                <p className="text-sm text-indigo-800/80 dark:text-indigo-300/80">
                                    To prevent whale dominance, voting power is calculated using a quadratic formula, ensuring a fairer representation of the community's will.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 7: Future Tech */}
                    <div id="future" className="mb-16 scroll-mt-28">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg shadow-sm">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">7. Future Technology: Energy-Backed Stablecoin</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                            The ultimate vision of GEC is to launch <strong>WattStable</strong>, an algorithmic stablecoin pegged to the cost of 1 kWh of renewable energy.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300">
                            This innovative mechanism will decouple digital assets from fiat inflation and instead peg them to a tangible, essential utility resource: energy. The GEC token will serve as the governance and collateral token for this dual-token system.
                        </p>
                    </div>

                    {/* Conclusion */}
                    <div id="conclusion" className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8 scroll-mt-28">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conclusion</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Green Energy Coin represents a paradigm shift in how blockchain technology interacts with the physical world. By embedding environmental regeneration into the very code of our currency, we are not just reducing harm—we are actively healing the planet. This whitepaper serves as the foundational document for a movement that believes financial growth and ecological sustainability are not mutually exclusive, but mutually reinforcing.
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