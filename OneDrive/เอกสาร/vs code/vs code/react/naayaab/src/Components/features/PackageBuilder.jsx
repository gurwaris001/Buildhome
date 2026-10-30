import React from 'react';
import { useApp } from '../../context/AppContext';
import { servicesData } from '../../data/servicesData';

export const PackageBuilder = () => {
  const { customPackage, togglePackageItem, openBooking } = useApp();

  const subtotal = customPackage.reduce((acc, item) => acc + item.price, 0);
  const hasDiscount = customPackage.length >= 3;
  const discount = hasDiscount ? subtotal * 0.15 : 0;
  const finalTotal = subtotal - discount;

  return (
    <div className="bg-[#15151e] border border-amber-500/20 rounded-2xl p-6 md:p-8">
      <h3 className="serif-font text-2xl font-bold text-[#bbbb67] mb-2">Build Your Own VIP Bundle</h3>
      <p className="text-xs text-gray-400 mb-6">Select 3 or more treatments to unlock an automatic 15% custom bundle discount.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {servicesData.map((service) => {
          const isSelected = customPackage.some((i) => i.id === service.id);
          return (
            <div
              key={service.id}
              onClick={() => togglePackageItem(service)}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex justify-between items-center ${
                isSelected
                  ? 'border-[#bbbb67] bg-amber-400/10'
                  : 'border-gray-800 bg-[#0d0d14] hover:border-gray-700'
              }`}
            >
              <div>
                <h4 className="text-sm font-semibold text-white">{service.name}</h4>
                <p className="text-xs text-gray-400">₹{service.price}</p>
              </div>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${isSelected ? 'bg-[#bbbb67] text-black font-bold' : 'border border-gray-600'}`}>
                {isSelected ? '✓' : ''}
              </span>
            </div>
          );
        })}
      </div>

      <div className="bg-[#0b0b0f] p-4 rounded-xl border border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="text-xs text-gray-400">Selected Items: {customPackage.length}</div>
          <div className="text-[#bbbb67] text-2xl font-bold">₹{finalTotal.toFixed(0)}</div>
          {hasDiscount && <span className="text-[10px] text-green-400">15% Multi-service Discount Applied!</span>}
        </div>

        <button
          disabled={customPackage.length === 0}
          onClick={() => openBooking(`Custom Bundle (${customPackage.length} Items)`, 'package')}
          className="px-6 py-3 bg-[#bbbb67] hover:bg-[#bbbb67] disabled:bg-gray-800 disabled:text-gray-600 text-black font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
        >
          Book Custom Bundle
        </button>
      </div>
    </div>
  );
};