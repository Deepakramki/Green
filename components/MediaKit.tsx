import React from 'react';
import { Download, Image as ImageIcon, FileCode, CheckCircle, Shield } from 'lucide-react';

const MediaKit: React.FC = () => {
  const assets = [
    {
      name: "Official Logo (SVG)",
      description: "Lossless vector format. Perfect for high-resolution printing, merchandise, and professional web development.",
      file: "logo.svg",
      icon: <FileCode className="w-6 h-6" />,
      type: "Vector"
    },
    {
      name: "Brand Icon (High-Res)",
      description: "A 512x512 transparent asset optimized for app icons, profile pictures, and small interface elements.",
      file: "logo.svg", 
      icon: <ImageIcon className="w-6 h-6" />,
      type: "Branding"
    }
  ];

  const handleDownload = (file: string, name: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="media-kit" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
            <ImageIcon className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Media Kit</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get the official Green Energy Coin brand assets. We provide everything you need to represent the ecosystem accurately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {assets.map((asset, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors"></div>
              
              <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
                <div className="w-40 h-40 flex-shrink-0 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500 shadow-inner">
                  <img src="logo.svg" alt="GreenCoin Logo" className="w-full h-full object-contain drop-shadow-xl" />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{asset.name}</h3>
                    <span className="inline-block px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-black rounded uppercase tracking-widest">
                      {asset.type}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                    {asset.description}
                  </p>
                  <button 
                    onClick={() => handleDownload(asset.file, asset.name.toLowerCase().replace(/\s+/g, '-') + '.svg')}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-emerald-200 dark:shadow-none transform hover:-translate-y-1 active:scale-95"
                  >
                    <Download className="w-5 h-5" /> Download Asset
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">Correct Usage</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Ensure there is ample clear space around the logo and it is used on contrasting backgrounds.</p>
                </div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                    <Shield className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">Brand Protection</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Do not modify the colors, rotate, or distort the official logo elements in any way.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;