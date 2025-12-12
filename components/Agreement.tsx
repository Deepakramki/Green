import React from 'react';
import { ScrollText, AlertTriangle, Scale, ShieldAlert, Lock } from 'lucide-react';

const Agreement: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen relative overflow-hidden transition-colors duration-300" style={{ perspective: '1000px' }}>
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <style>{`
          @keyframes sway-shield {
             0%, 100% { transform: rotateY(-10deg); }
             50% { transform: rotateY(10deg); }
          }
          @keyframes float-paper {
             0%, 100% { transform: translateY(0) rotateX(20deg) rotateZ(-5deg); }
             50% { transform: translateY(-20px) rotateX(20deg) rotateZ(5deg); }
          }
          @keyframes spin-lock {
             0% { transform: rotateY(0deg); }
             100% { transform: rotateY(360deg); }
          }
        `}</style>

        {/* 3D Shield (Top Left) */}
        <div className="absolute top-32 left-10 md:left-24 opacity-20 dark:opacity-10 hidden md:block" style={{ perspective: '500px' }}>
            <div style={{ transformStyle: 'preserve-3d', animation: 'sway-shield 6s ease-in-out infinite' }} className="w-40 h-48 bg-emerald-200 dark:bg-emerald-900 rounded-b-full rounded-t-lg shadow-xl relative border-4 border-emerald-300 dark:border-emerald-800">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-24 bg-emerald-300 dark:bg-emerald-800 rounded-b-full rounded-t-lg opacity-50"></div>
                </div>
            </div>
        </div>

        {/* 3D Floating Lock (New Center/Bottom) */}
        <div className="absolute bottom-1/3 left-1/3 opacity-10 dark:opacity-5 hidden lg:block" style={{ perspective: '600px' }}>
             <div className="text-slate-600 dark:text-slate-400" style={{ animation: 'spin-lock 12s linear infinite', transformStyle: 'preserve-3d' }}>
                <Lock className="w-32 h-32" />
             </div>
        </div>

        {/* Floating Paper (Right) */}
        <div className="absolute top-1/3 right-10 md:right-32 opacity-20 dark:opacity-10 hidden lg:block" style={{ perspective: '800px' }}>
            <div className="w-48 h-64 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 shadow-xl transform skew-y-6" style={{ animation: 'float-paper 8s ease-in-out infinite' }}>
                <div className="space-y-4 p-6">
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-5/6"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-full"></div>
                </div>
            </div>
        </div>

        {/* Balance Scale Abstract (Bottom Left) */}
        <div className="absolute bottom-20 left-20 opacity-30 dark:opacity-10 hidden md:block">
            <div className="w-32 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" style={{ animation: 'sway-shield 4s ease-in-out infinite' }}></div>
            <div className="w-2 h-32 bg-slate-400 dark:bg-slate-600 mx-auto -mt-2"></div>
            <div className="w-20 h-4 bg-slate-400 dark:bg-slate-600 mx-auto rounded-t-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full text-emerald-600 dark:text-emerald-400 mb-6 shadow-md ring-4 ring-white dark:ring-slate-800">
            <ScrollText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">User Agreement</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using the Green Energy Coin platform.
          </p>
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 inline-block px-4 py-1 rounded-full backdrop-blur-sm">Last Updated: October 2024</div>
        </div>

        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-8 space-y-8">
                
                {/* Section 1 */}
                <section>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm">1</span>
                        Acceptance of Terms
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 pl-10 space-y-2">
                        <p>
                            By accessing or using the Green Energy Coin (GEC) website, smart contracts, or related services, you agree to be bound by this Agreement. If you disagree with any part of the terms, you may not access the service.
                        </p>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* Section 2 */}
                <section>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm">2</span>
                        Risk Disclosure
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 pl-10 space-y-4">
                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/40 p-4 rounded-xl flex items-start gap-3 shadow-sm">
                             <AlertTriangle className="w-5 h-5 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                             <p className="text-sm text-orange-800 dark:text-orange-200">
                                Cryptocurrency investments are highly volatile and risky. The value of GreenCoin can fluctuate significantly. You should only invest what you can afford to lose.
                             </p>
                        </div>
                        <p>
                            GreenCoin is not a security or financial instrument. It is a utility token designed for the Green Energy ecosystem. The project makes no guarantees regarding the price or value of the token.
                        </p>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* Section 3 */}
                <section>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm">3</span>
                        User Eligibility
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 pl-10 space-y-2">
                        <p>
                            You must be at least 18 years old to use this platform. By using this service, you represent and warrant that you have the right, authority, and capacity to enter into this Agreement.
                        </p>
                        <p>
                            Citizens or residents of countries where cryptocurrency is prohibited by law are not permitted to participate in the GreenCoin sale or use our platform.
                        </p>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* Section 4 */}
                <section>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm">4</span>
                        Limitation of Liability
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 pl-10 space-y-2">
                        <p>
                            To the maximum extent permitted by applicable law, Green Energy Coin Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                        <ul className="list-disc ml-5 space-y-1 mt-2">
                            <li>Smart contract failures or bugs.</li>
                            <li>Hacking attacks or security breaches.</li>
                            <li>Loss of private keys by the user.</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />
                
                {/* Section 5 */}
                <section>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                         <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm">5</span>
                         Governing Law
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 pl-10">
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Green Energy Coin Foundation is established, without regard to its conflict of law provisions.
                        </p>
                    </div>
                </section>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Agreement;