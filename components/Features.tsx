import React from 'react';
import { Leaf, BarChart3, Lock, Coins, Users, Lightbulb } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Carbon Negative",
      desc: "Every transaction contributes 2% to reforestation projects globally."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      desc: "Track the environmental impact of your portfolio in real-time."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure Staking",
      desc: "Earn up to 12% APY by staking your GreenCoins in secure pools."
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Low Fees",
      desc: "Built on Layer-2 scaling solutions for negligible gas fees."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Governance",
      desc: "Vote on which green energy projects receive funding next."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Fund",
      desc: "Direct support for startups developing breakthrough clean tech."
    }
  ];

  return (
    <div id="features" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300" style={{ perspective: '1000px' }}>
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <style>{`
            @keyframes float-panel {
                0%, 100% { transform: translateY(0) rotateX(10deg); }
                50% { transform: translateY(-30px) rotateX(15deg); }
            }
            @keyframes float-leaf-diag {
                0% { transform: translate(-100px, 100px) rotate(0deg); opacity: 0; }
                20% { opacity: 0.6; }
                80% { opacity: 0.6; }
                100% { transform: translate(100vw, -100vh) rotate(360deg); opacity: 0; }
            }
         `}</style>
         
         {/* Floating Glass Panels */}
         <div className="absolute top-20 left-10 w-40 h-60 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800 transform -rotate-12 backdrop-blur-sm hidden lg:block" style={{ animation: 'float-panel 8s ease-in-out infinite' }}></div>
         <div className="absolute bottom-20 right-10 w-60 h-40 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800 transform rotate-6 backdrop-blur-sm hidden lg:block" style={{ animation: 'float-panel 10s ease-in-out infinite reverse' }}></div>

         {/* Floating Leaves */}
         <div className="absolute top-1/2 left-0 text-emerald-200 dark:text-emerald-900 w-10 h-10" style={{ animation: 'float-leaf-diag 15s linear infinite' }}>
            <Leaf className="w-full h-full fill-current" />
         </div>
         <div className="absolute bottom-0 right-1/4 text-emerald-100 dark:text-emerald-900 w-8 h-8" style={{ animation: 'float-leaf-diag 20s linear infinite 5s' }}>
            <Leaf className="w-full h-full fill-current" />
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Why Choose GreenCoin?</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We combine the security of blockchain with the mission of saving our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-900 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:shadow-slate-900">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/60 transition-colors group-hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;