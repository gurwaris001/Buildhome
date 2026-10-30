
import React, { useState } from 'react';

export const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const beforeImage =
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&auto=format&fit=crop&q=90';

  const afterImage =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1400&auto=format&fit=crop&q=90';

  return (
    <section className="relative bg-[#170d14] px-5 py-16 md:py-24 overflow-hidden">

      {/* Background decoration */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-[#74364f]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#bd9164]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">

          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-10 h-px bg-[#d9ad79]" />
            <p className="text-[#d9ad79] text-[10px] md:text-xs uppercase tracking-[0.4em]">
              The Art of Transformation
            </p>
            <span className="w-10 h-px bg-[#d9ad79]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#fff5eb]">
            Beauty in Every
            <span className="block italic text-[#d9ad79]">
              Detail.
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base mt-5 max-w-xl mx-auto leading-7">
            Discover the beauty of professional artistry and
            the magic of a perfectly finished look.
          </p>
        </div>

        {/* Before After Slider */}
        <div className="max-w-5xl mx-auto">

          <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-[#a77a4d] via-[#f0d6ad] to-[#8e603e] shadow-[0_20px_70px_rgba(0,0,0,0.45)]">

            <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] rounded-[14px] overflow-hidden bg-[#291923]">

              {/* AFTER IMAGE */}
              <img
                src={afterImage}
                alt="Beauty and makeup inspiration"
                draggable="false"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* BEFORE IMAGE */}
              <img
                src={beforeImage}
                alt="Natural beauty inspiration"
                draggable="false"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                  clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                }}
              />

              {/* Dark image overlays */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none"
                style={{
                  clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />

              {/* BEFORE Label */}
              <div className="absolute top-5 left-5 md:top-8 md:left-8 z-10">
                <span className="bg-black/55 backdrop-blur-md border border-white/30 text-white text-[9px] md:text-xs tracking-[0.3em] px-4 md:px-6 py-2.5 rounded-full">
                  BEFORE
                </span>
              </div>

              {/* AFTER Label */}
              <div className="absolute top-5 right-5 md:top-8 md:right-8 z-10">
                <span className="bg-black/55 backdrop-blur-md border border-[#e8c394]/60 text-[#f3d5aa] text-[9px] md:text-xs tracking-[0.3em] px-4 md:px-6 py-2.5 rounded-full">
                  AFTER
                </span>
              </div>

              {/* Slider Divider */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#f3d5aa] z-20 pointer-events-none"
                style={{
                  left: `${sliderPos}%`,
                  boxShadow: '0 0 18px rgba(243,213,170,0.8)'
                }}
              >

                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#f5dfbd] to-[#b9854f] border-[3px] border-white shadow-[0_0_25px_rgba(217,173,121,0.6)] flex items-center justify-center">

                    <span className="text-[#291620] text-xl font-bold tracking-tighter">
                      ↔
                    </span>

                  </div>
                </div>
              </div>

              {/* Range Input */}
              <input
                type="range"
                min="1"
                max="99"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Compare beauty images"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

            </div>
          </div>

          {/* Bottom Caption */}
          <div className="flex items-center justify-center gap-3 mt-7">
            <span className="w-8 md:w-12 h-px bg-[#a77a4d]" />

            <p className="text-[#d9ad79] text-[9px] md:text-xs uppercase tracking-[0.25em] text-center">
              Drag to explore the look
            </p>

            <span className="w-8 md:w-12 h-px bg-[#a77a4d]" />
          </div>

        </div>

        {/* Closing Text */}
        <p className="text-center text-gray-500 text-xs md:text-sm mt-8 font-serif italic">
          Every detail deserves a touch of elegance.
        </p>

      </div>
    </section>
  );
};

export default BeforeAfterSlider;
