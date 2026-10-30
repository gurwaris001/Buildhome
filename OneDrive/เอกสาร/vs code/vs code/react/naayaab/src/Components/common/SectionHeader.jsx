import React from 'react';

export const SectionHeader = ({ subtitle, title, description }) => (
  <div className="text-center max-w-2xl mx-auto mb-12">
    {subtitle && (
      <span className="text-[#bbbb67] text-xs font-semibold uppercase tracking-widest block mb-2">
        {subtitle}
      </span>
    )}
    <h2 className="serif-font text-3xl md:text-5xl font-bold text-[#bbbb67] mb-4">
      {title}
    </h2>
    <div className="w-16 h-0.5 bg-[#bbbb67] mx-auto mb-4" />
    {description && <p className="text-gray-400 text-sm">{description}</p>}
  </div>
);