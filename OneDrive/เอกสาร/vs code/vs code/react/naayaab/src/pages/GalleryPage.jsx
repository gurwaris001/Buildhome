import React from 'react';
import { SectionHeader } from '../Components/common/SectionHeader';
import { BeforeAfterSlider } from '../Components/features/BeforeAfterSlider';

export const GalleryPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <SectionHeader
        subtitle="Portfolio"
        title="Transformations & Lookbook"
        description="Visual proof of our skin glow, hair restyling, and bridal artistry."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BeforeAfterSlider />
        <BeforeAfterSlider />
      </div>
    </div>
  );
};