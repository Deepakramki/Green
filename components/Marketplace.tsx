import React from 'react';
import { ShoppingBag, TreePine, Wind, Sun } from 'lucide-react';

const Marketplace: React.FC = () => {
  const nfts = [
    { id: 1, name: 'Amazonian Rain Tree #402', price: '450 GEC', image: 'bg-emerald-100', icon: <TreePine className="w-12 h-12 text-emerald-600" /> },
    { id: 2, name: 'Solar Farm Alpha', price: '1,200 GEC', image: 'bg-orange-100', icon: <Sun className="w-12 h-12 text-orange-600" /> },
    { id: 3, name: 'Offshore Wind Turbine', price: '890 GEC', image: 'bg-blue-100', icon: <Wind className="w-12 h-12 text-blue-600" /> },
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-full text-emerald-600 mb-6">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Eco-NFT Marketplace</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trade verified carbon credits and digital environmental assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nfts.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-48 ${item.image} flex items-center justify-center`}>
                {item.icon}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-emerald-600 font-bold text-xl">{item.price}</span>
                  <button className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;