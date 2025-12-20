import React from 'react';
import { Leaf } from 'lucide-react';
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
              <a href="https://x.com/greenencoin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://discord.gg/Y6vSDBhKe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#5865F2] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1279 3.77867 13.9837 4.11467C12.3504 3.872 10.7135 3.872 9.10399 4.11467C8.95982 3.77867 8.74433 3.33067 8.55216 3C7.02266 3.256 5.56133 3.71467 4.1895 4.34399C1.41966 8.42933 0.669665 12.4133 1.04233 16.328C2.69533 17.552 4.2985 18.2933 5.86783 18.776L6.96366 17.272C6.38716 17.0507 5.83266 16.7813 5.3045 16.4747C5.44216 16.372 5.5765 16.2653 5.7045 16.1547C8.79283 17.5653 12.1895 17.5653 15.2512 16.1547C15.3823 16.2693 15.5198 16.376 15.6607 16.4747C15.1293 16.784 14.5717 17.0533 13.9918 17.2747L15.0877 18.7787C16.6602 18.2933 18.2665 17.552 19.923 16.328C20.371 11.9067 19.227 7.97333 16.7725 4.34399H16.7693V4.34399ZM8.2415 13.5653C7.2605 13.5653 6.45433 12.6693 6.45433 11.5707C6.45433 10.472 7.24133 9.576 8.2415 9.576C9.25133 9.576 10.0547 10.472 10.0355 11.5707C10.0355 12.6693 9.24183 13.5653 8.2415 13.5653ZM14.8512 13.5653C13.8702 13.5653 13.064 12.6693 13.064 11.5707C13.064 10.472 13.851 9.576 14.8512 9.576C15.861 9.576 16.6643 10.472 16.6452 11.5707C16.6452 12.6693 15.8515 13.5653 14.8512 13.5653Z"></path>
                </svg>
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