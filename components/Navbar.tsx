import React, { useState } from 'react';
import { Menu, X, FileText, Sun, Moon, Leaf } from 'lucide-react';
import { NavItem, PageView } from '../types';

interface NavbarProps {
  onNavigate: (page: PageView) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#', action: () => onNavigate('home') },
    { label: 'Features', href: '#features', action: () => onNavigate('home') },
    { label: 'Tokenomics', href: '#tokenomics', action: () => onNavigate('home') },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.action) {
      item.action();
    }
    
    if (item.href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.href.startsWith('#')) {
      const targetId = item.href.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-yellow-500 border border-yellow-600 shadow-sm transition-transform group-hover:scale-110 text-emerald-800">
                 <Leaf className="w-5 h-5 fill-emerald-900" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-slate-100">GreenCoin</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer bg-transparent border-none"
                >
                  {item.label}
                </button>
              ))}
              
              <button 
                 onClick={toggleTheme}
                 className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                 aria-label="Toggle Dark Mode"
              >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button 
                onClick={() => {
                    onNavigate('whitepaper');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 dark:shadow-none flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> Whitepaper
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-4">
             <button 
                 onClick={toggleTheme}
                 className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-emerald-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-emerald-100 dark:border-emerald-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <button 
                onClick={() => {
                    onNavigate('whitepaper');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsOpen(false);
                }}
                className="w-full text-left bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium px-3 py-2 rounded-md mt-2 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Whitepaper
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;