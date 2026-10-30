import React from 'react';
import { useApp } from '../../context/AppContext';

export const ServiceCard = ({ service }) => {
  const { openBooking } = useApp();

  return (
    <div className="bg-[#15151e] border border-amber-500/10 hover:border-amber-400/40 rounded-xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] uppercase font-bold text-[#bbbb67] tracking-wider bg-amber-400/10 px-2 py-1 rounded">
            {service.category}
          </span>
          <span className="text-xs text-gray-500">{service.duration}</span>
        </div>
        <h3 className="serif-font text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-6">{service.desc}</p>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-800">
        <span className="text-[#bbbb67] font-semibold text-lg">₹{service.price}</span>
        <button
          onClick={() => openBooking(service.name, 'service')}
          className="px-4 py-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 hover:bg-[#bbbb67] hover:text-black rounded-lg text-xs font-semibold transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};