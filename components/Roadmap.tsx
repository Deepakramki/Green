import React from 'react';
import { CheckCircle2, Circle, Sprout, TreeDeciduous, Globe2, Gem, Rocket } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      id: 1,
      title: "Phase 1: Germination",
      subtitle: "The Foundation",
      status: "completed",
      icon: <Sprout className="w-6 h-6" />,
      date: "2025 Q1 - Q2",
      items: [
        "Smart Contract Deployment",
        "Website Launch V1",
        "Community Building",
        "Initial Marketing Campaign",
        "Whitepaper Release"
      ]
    },
    {
      id: 2,
      title: "Phase 2: Sprouting",
      subtitle: "Growth & Listings",
      status: "active",
      icon: <TreeDeciduous className="w-6 h-6" />,
      date: "2025 Q3 - Q4",
      items: [
        "CoinGecko & CMC Listing",
        "Partnership Announcements",
        "BingX Exchange Listing",
        "Eco-Fund Activation",
        "Audit by CertiK"
      ]
    },
    {
      id: 3,
      title: "Phase 3: Canopy",
      subtitle: "Global Expansion",
      status: "upcoming",
      icon: <Globe2 className="w-6 h-6" />,
      date: "2026 Q1 - Q2",
      items: [
        "GreenDEX Beta Launch",
        "NFT Marketplace Integration",
        "Tier 1 Exchange Listings",
        "Global Reforestation Event",
        "Cross-chain Bridge"
      ]
    },
    {
      id: 4,
      title: "Phase 4: Ecosystem",
      subtitle: "Maturity & DAO",
      status: "upcoming",
      icon: <Gem className="w-6 h-6" />,
      date: "2026 Q3 - Q4",
      items: [
        "DAO Governance Launch",
        "Mobile App Release",
        "Carbon Credit Trading Platform",
        "Real-world Asset Integration",
        "1 Million Holders Goal"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-emerald-50 dark:from-slate-950 dark:to-emerald-950 min-h-screen overflow-hidden relative transition-colors duration-300" style={{ perspective: '1000px' }}>
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <style>{`
            @keyframes orbit-slow {
                0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
                100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
            }
             @keyframes float-sphere {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-40px); }
            }
            @keyframes pulse-path {
                0%, 100% { opacity: 0.2; }
                50% { opacity: 0.5; }
            }
            @keyframes tree-sway {
                0%, 100% { transform: skewX(-2deg); }
                50% { transform: skewX(2deg); }
            }
         `}</style>
         
         {/* Floating Planet-like Spheres */}
         <div className="absolute top-40 left-10 hidden lg:block opacity-60 dark:opacity-30" style={{ animation: 'float-sphere 8s ease-in-out infinite' }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-300 to-teal-500 shadow-xl"></div>
         </div>
         <div className="absolute bottom-1/4 right-20 hidden lg:block opacity-40 dark:opacity-20" style={{ animation: 'float-sphere 10s ease-in-out infinite reverse' }}>
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-lime-200 to-emerald-400 shadow-2xl"></div>
         </div>

         {/* 3D Stylized Trees */}
         <div className="absolute top-1/3 left-10 text-emerald-200 dark:text-emerald-900 hidden md:block" style={{ animation: 'tree-sway 6s ease-in-out infinite' }}>
             <TreeDeciduous className="w-32 h-32 fill-current opacity-20" />
         </div>
         <div className="absolute bottom-1/3 right-10 text-emerald-300 dark:text-emerald-800 hidden md:block" style={{ animation: 'tree-sway 7s ease-in-out infinite reverse' }}>
             <TreeDeciduous className="w-40 h-40 fill-current opacity-20" />
         </div>

         {/* Orbiting Element around center */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-200/30 dark:border-emerald-700/20 rounded-full hidden md:block">
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-emerald-400 rounded-full shadow-lg blur-sm" style={{ marginTop: '-16px', marginLeft: '-16px', animation: 'orbit-slow 20s linear infinite' }}></div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
            <Rocket className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Ecosystem Roadmap</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our journey from a seed of an idea to a global green revolution.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200 dark:from-emerald-900 dark:via-emerald-700 dark:to-emerald-900 rounded-full"></div>

          <div className="space-y-16 md:space-y-24">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              const isActive = phase.status === 'active';
              
              return (
                <div key={phase.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Date Badge (Desktop Only - Opposite side) */}
                  <div className={`hidden md:flex w-5/12 justify-${isEven ? 'start' : 'end'} px-8`}>
                    <span className={`text-2xl font-bold ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-600'}`}>
                      {phase.date}
                    </span>
                  </div>

                  {/* Central Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                     <div className={`
                        w-12 h-12 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center z-10 transition-all duration-500
                        ${isActive ? 'bg-emerald-600 border-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110' : 
                          phase.status === 'completed' ? 'bg-emerald-500 border-white dark:border-slate-800 shadow-md' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}
                     `}>
                        <div className={`${isActive || phase.status === 'completed' ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                            {phase.icon}
                        </div>
                     </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-5/12 pl-12 md:pl-0">
                    <div className={`
                        relative p-8 rounded-3xl transition-all duration-300 group
                        ${isActive 
                            ? 'bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shadow-xl scale-105' 
                            : 'bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm hover:shadow-md'}
                    `}>
                        {/* Connecting Line for Mobile */}
                        <div className="md:hidden absolute top-8 -left-12 w-10 h-1 bg-emerald-200 dark:bg-emerald-800"></div>

                        {/* Arrow for Desktop */}
                        <div className={`
                            hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-8 rotate-45 
                            ${isEven ? '-right-4' : '-left-4'}
                            ${isActive ? 'bg-emerald-800' : 'bg-white dark:bg-slate-800 group-hover:bg-emerald-50 dark:group-hover:bg-slate-700'}
                        `}></div>

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${isActive ? 'text-emerald-300' : 'text-emerald-600 dark:text-emerald-400'}`}>
                                    {phase.subtitle}
                                </span>
                                <h3 className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                    {phase.title}
                                </h3>
                            </div>
                            <div className="md:hidden">
                                <span className={`text-sm font-bold ${isActive ? 'text-emerald-300' : 'text-slate-400 dark:text-slate-500'}`}>
                                    {phase.date}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {phase.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                        isActive ? 'bg-emerald-400' : 
                                        phase.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'
                                    }`}></div>
                                    <span className={`text-sm ${
                                        isActive ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-300'
                                    }`}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                         {phase.status === 'completed' && (
                            <div className="absolute top-4 right-4 text-emerald-500">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                        )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;