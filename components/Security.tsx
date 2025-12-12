import React from 'react';
import { Shield, Lock, FileCheck, Server, AlertCircle } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-full text-emerald-600 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Security & Audits</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We prioritize the safety of your assets with industry-leading security measures and transparent code audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Smart Contract Audit</h3>
                        <p className="text-sm text-slate-500">Audited by CertiK & Hacken</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                        <span className="text-slate-600 font-medium">Score</span>
                        <span className="text-emerald-600 font-bold">98/100</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                        <span className="text-slate-600 font-medium">Critical Issues</span>
                        <span className="text-emerald-600 font-bold">0 Found</span>
                    </div>
                    <button className="w-full py-3 mt-2 border border-slate-300 rounded-lg text-slate-600 font-medium hover:bg-slate-50 hover:text-emerald-600 transition-colors">
                        View Full Report
                    </button>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                        <Lock className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Liquidity Lock</h3>
                        <p className="text-sm text-slate-500">Protected by Team.Finance</p>
                    </div>
                </div>
                <p className="text-slate-600 mb-6">
                    The initial liquidity pool is locked for 5 years to prevent rug pulls and ensure long-term stability for investors.
                </p>
                <div className="w-full bg-slate-100 rounded-full h-4 mb-2">
                    <div className="bg-emerald-500 h-4 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                    <span>Locked: 12 Months</span>
                    <span>Total: 60 Months</span>
                </div>
            </div>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-orange-800 mb-1">Security Warning</h4>
                <p className="text-orange-700 text-sm">
                    Always verify the contract address before trading. The official GreenCoin contract address ends in ...8f2A. 
                    We will never DM you first asking for wallet validation or seed phrases.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Security;