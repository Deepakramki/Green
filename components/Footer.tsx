import React from 'react';
import { Leaf, Facebook, Instagram } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-emerald-400 group cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 border border-yellow-600 shadow-sm text-emerald-800">
                    <Leaf className="w-5 h-5 fill-emerald-900" />
                </div>
              <span className="font-bold text-xl">GreenCoin</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the world to transition to renewable energy through decentralized finance.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate('roadmap')} className="hover:text-emerald-400 transition-colors text-left">Roadmap</button></li>
              <li><button onClick={() => onNavigate('exchange')} className="hover:text-emerald-400 transition-colors text-left">Exchange</button></li>
              <li><button onClick={() => onNavigate('agreement')} className="hover:text-emerald-400 transition-colors text-left">Agreement</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('help-center')} className="hover:text-emerald-400 transition-colors text-left">Help Center</button></li>
              <li><button onClick={() => onNavigate('fees')} className="hover:text-emerald-400 transition-colors text-left">Fees</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Community</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/share/1aBajzRB2J/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/greenencoin?igsh=cGdhbW4zMjk2N2pk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E4405F] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-slate-500 text-sm">
                Join our community for the latest announcements and events.
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Green Energy Coin Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
