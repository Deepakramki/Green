import React from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Leaf } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const faqs = [
    {
      q: "How do I buy GreenCoin?",
      a: "You can purchase GreenCoin directly through our affiliated exchanges or by swapping ETH/BNB on Uniswap using our official contract address."
    },
    {
      q: "What makes GreenCoin sustainable?",
      a: "We use a Proof-of-Stake consensus mechanism which consumes 99% less energy than Bitcoin. Additionally, 2% of every transaction is automatically donated to verified reforestation projects."
    },
    {
      q: "Is my wallet secure?",
      a: "Yes, GreenCoin is compatible with standard secure wallets like MetaMask, Trust Wallet, and Ledger hardware wallets. We never ask for your private keys."
    },
    {
      q: "How can I stake my coins?",
      a: "Navigate to the 'Earn' section in your dashboard. You can stake your GreenCoins for 30, 60, or 90 days to earn up to 12% APY."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen relative overflow-hidden transition-colors duration-300" style={{ perspective: '1000px' }}>
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <style>{`
          @keyframes float-bob {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes spin-slow-ring {
            0% { transform: rotateX(60deg) rotateZ(0deg); }
            100% { transform: rotateX(60deg) rotateZ(360deg); }
          }
          @keyframes float-message {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(10px, -15px) scale(1.05); }
          }
           @keyframes spin-leaf-3d {
             0% { transform: rotateY(0deg); }
             100% { transform: rotateY(360deg); }
           }
        `}</style>

        {/* 3D Question Mark (Left) */}
        <div className="absolute top-40 left-10 md:left-20 opacity-20 dark:opacity-10 hidden md:block" style={{ animation: 'float-bob 6s ease-in-out infinite' }}>
            <div className="text-9xl font-black text-emerald-300 dark:text-emerald-800 transform -rotate-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>?</div>
        </div>

        {/* 3D Spinning Leaf (New) */}
        <div className="absolute top-20 left-1/2 opacity-30 dark:opacity-20 hidden lg:block" style={{ perspective: '500px' }}>
             <div className="w-20 h-20 text-emerald-500" style={{ animation: 'spin-leaf-3d 10s linear infinite', transformStyle: 'preserve-3d' }}>
                <Leaf className="w-full h-full fill-current" />
             </div>
        </div>

        {/* 3D Ring/Lifebuoy (Right) */}
        <div className="absolute top-1/3 right-10 md:right-32 opacity-30 dark:opacity-10 hidden md:block">
            <div className="w-40 h-40 rounded-full border-[16px] border-emerald-400 dark:border-emerald-700 border-dashed" style={{ animation: 'spin-slow-ring 20s linear infinite' }}></div>
        </div>

        {/* Floating Chat Bubbles (Bottom Left) */}
        <div className="absolute bottom-40 left-20 opacity-30 dark:opacity-10 hidden lg:block" style={{ animation: 'float-message 8s ease-in-out infinite' }}>
             <div className="w-24 h-20 bg-teal-200 dark:bg-teal-800 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl transform rotate-6 shadow-lg border border-white dark:border-teal-700 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-teal-600 dark:text-teal-200" />
             </div>
        </div>
         
         {/* Small decorative spheres */}
         <div className="absolute top-20 right-20 w-8 h-8 bg-yellow-300 dark:bg-yellow-600 rounded-full blur-sm opacity-60 animate-bounce"></div>
         <div className="absolute bottom-20 right-1/2 w-12 h-12 bg-blue-300 dark:bg-blue-800 rounded-full blur-md opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full text-emerald-600 dark:text-emerald-400 mb-6 relative group">
            <HelpCircle className="w-8 h-8 relative z-10" />
            <div className="absolute inset-0 bg-emerald-200 dark:bg-emerald-800 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity"></div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Help Center</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Frequently asked questions and support resources to help you navigate the Green Energy Coin ecosystem.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center justify-between">
                {faq.q}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-900/90 backdrop-blur-md rounded-3xl p-8 text-center text-white border border-emerald-700 shadow-2xl transform hover:scale-[1.01] transition-transform relative overflow-hidden">
          {/* Internal decorative 3d effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full -mr-10 -mt-10 blur-xl"></div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">Still need help?</h3>
          <p className="mb-8 text-emerald-100 relative z-10">Our support team is available 24/7 on our community channels.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-white text-emerald-900 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg">
              Contact Support
            </button>
            <button className="bg-emerald-800 text-white border border-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg">
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;