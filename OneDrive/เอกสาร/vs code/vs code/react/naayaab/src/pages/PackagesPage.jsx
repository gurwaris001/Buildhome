import React from 'react';
import { SectionHeader } from '../Components/common/SectionHeader';
import { PackageBuilder } from '../Components/features/PackageBuilder';
import { packagesData } from '../data/packagesData';
import { useApp } from '../context/AppContext';

export const PackagesPage = () => {
  const { openBooking } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div>
        <SectionHeader
          subtitle="Curated Bundles"
          title="VIP Beauty Packages"
          description="Pre-assembled luxury packages designed for weddings, events, and full resets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packagesData.map((pkg) => (
            <div key={pkg.id} className="bg-[#15151e] border border-amber-500/20 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">
                  {pkg.savings}
                </span>
                <h3 className="serif-font text-2xl font-bold text-white mt-3 mb-2">{pkg.name}</h3>
                <p className="text-[#bbbb67] font-bold text-xl mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center space-x-2">
                      <span className="text-[#bbbb67]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => openBooking(pkg.name, 'package')}
                className="w-full py-3 border border-amber-400/40 text-[#bbbb67]rounded-lg text-xs font-semibold uppercase hover:bg-[#bbbb67] hover:text-black transition-colors"
              >
                Book Package
              </button>
            </div>
          ))}
        </div>
      </div>

      <PackageBuilder />
    </div>
  );
};