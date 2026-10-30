
import React from 'react';
import { BeforeAfterSlider } from '../Components/features/BeforeAfterSlider';
import { useApp } from '../context/AppContext';

export const HomePage = () => {
  const { setActiveTab, openBooking } = useApp();

  return (
    <main className="bg-[#FFF9F7] text-[#41343A] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-10 md:relative overflow-hidden bg-[#24131D] ">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=2000&q=90"
            alt="Luxury beauty studio"
            className="w-full h-full object-cover object-center opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#24131D] via-[#24131D]/90 to-[#24131D]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24131D]/90 via-transparent to-[#24131D]/30" />
        </div>

        {/* Decorative circle */}
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[#A65370]/20 blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-12 pt-3 pb-12 md:py-16">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">

              {/* Brand Badge */}
              <div className="inline-flex items-center gap-2 md:gap-3 border border-[#D9A1B5]/40 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 mb-4 md:mb-7">

                <span className="w-2 h-2 rounded-full bg-[#E6A9BE]" />

                <span className="text-[#E6B7C7] text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase">
                  Nayaab Beauty Studio & Academy
                </span>

              </div>

              <p className="text-[#D99BAE] uppercase tracking-[0.25em] md:tracking-[0.35em] text-[10px] md:text-xs font-semibold mb-3 md:mb-5">
                Beauty • Elegance • Excellence
              </p>

              {/* Main Heading */}
              <h1 className="serif-font text-4xl sm:text-5xl md:text-7xl xl:text-8xl leading-[1.15] text-[#FFF3F0]">

                Discover Your

                <span className="block italic text-[#D99BAE] mt-1 md:mt-3">
                  Timeless Beauty.
                </span>

              </h1>

              {/* Description */}
              <p className="text-[#D5C1CA] text-xs sm:text-sm md:text-base leading-6 md:leading-8 max-w-xl mt-5 md:mt-8 mx-auto lg:mx-0">
                Experience the perfect blend of luxury beauty treatments,
                expert artistry and professional cosmetology education.
                Your journey to confidence and elegance starts here.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 mt-6 md:mt-10">

                <button
                  onClick={() => openBooking()}
                  className="group px-7 md:px-9 py-3 md:py-4 bg-[#C47D96] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-black/20 hover:bg-[#D99BAE] hover:-translate-y-1 transition-all duration-300"
                >
                  Book Appointment
                  <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('courses')}
                  className="px-7 md:px-9 py-3 md:py-4 border border-[#D99BAE]/70 text-[#F0C6D2] text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D99BAE] hover:text-[#24131D] transition-all duration-300"
                >
                  Explore Academy
                </button>

              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-lg mx-auto lg:mx-0 border-t border-white/15 mt-7 md:mt-10 pt-4 md:pt-5">

                <div>
                  <h3 className="serif-font text-lg sm:text-xl md:text-3xl text-[#E6B0C1]">
                    Beauty
                  </h3>
                  <p className="text-[8px] md:text-xs text-[#C3AAB5] uppercase tracking-wider mt-1 md:mt-2">
                    Treatments
                  </p>
                </div>

                <div>
                  <h3 className="serif-font text-lg sm:text-xl md:text-3xl text-[#E6B0C1]">
                    Expert
                  </h3>
                  <p className="text-[8px] md:text-xs text-[#C3AAB5] uppercase tracking-wider mt-1 md:mt-2">
                    Artistry
                  </p>
                </div>

                <div>
                  <h3 className="serif-font text-lg sm:text-xl md:text-3xl text-[#E6B0C1]">
                    Academy
                  </h3>
                  <p className="text-[8px] md:text-xs text-[#C3AAB5] uppercase tracking-wider mt-1 md:mt-2">
                    Education
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative max-w-xl mx-auto w-full mt-2 lg:mt-0">

              <div className="absolute -inset-5 bg-[#B66C83]/20 blur-3xl rounded-full" />

              <div className="relative p-2 md:p-3 border border-[#D99BAE]/40 bg-white/5 backdrop-blur-sm rounded-t-[150px] md:rounded-t-[220px] rounded-b-lg shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=90"
                  alt="Professional beauty artistry"
                  className="w-full h-[230px] sm:h-[300px] md:h-[560px] object-cover rounded-t-[140px] md:rounded-t-[210px] rounded-b-lg"
                />

              </div>

              {/* Floating Label */}
              <div className="absolute -bottom-3 -left-2 md:-bottom-5 md:-left-10 bg-[#F8EDEF] px-4 py-3 md:px-6 md:py-5 shadow-xl rounded-sm">

                <p className="serif-font text-base md:text-2xl italic text-[#632D43]">
                  Beauty is an art.
                </p>

                <p className="text-[8px] md:text-[9px] tracking-[0.2em] text-[#945269] mt-1 md:mt-2 uppercase">
                  Experience the difference
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-gradient-to-br from-[#E8BFD0] via-[#C6B1D8] via-50% to-[#F6D2BC] py-12">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <p className="text-[#B66C83] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              Our Specialities
            </p>

            <h2 className="serif-font text-4xl md:text-6xl text-[#512E40]">
              A Touch of Elegance
            </h2>

            <p className="text-[#796771] text-sm leading-7 mt-5">
              Discover our range of beauty experiences designed
              to celebrate your unique style and personality.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group bg-white p-3 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=85"
                  alt="Skincare treatment"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="text-center py-7 px-4">

                <p className="text-[#B66C83] text-[10px] uppercase tracking-[0.25em] mb-3">
                  Beauty & Care
                </p>

                <h3 className="serif-font text-2xl text-[#512E40]">
                  Skin & Facial Care
                </h3>

                <p className="text-[#927D87] text-xs leading-6 mt-4">
                  Refresh your look with personalised skincare
                  and facial beauty experiences.
                </p>

              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-3 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=85"
                  alt="Professional makeup"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="text-center py-7 px-4">

                <p className="text-[#B66C83] text-[10px] uppercase tracking-[0.25em] mb-3">
                  Professional Artistry
                </p>

                <h3 className="serif-font text-2xl text-[#512E40]">
                  Makeup & Styling
                </h3>

                <p className="text-[#927D87] text-xs leading-6 mt-4">
                  Enhance your natural beauty with creative
                  makeup and personalised styling.
                </p>

              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-3 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=85"
                  alt="Beauty studio"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="text-center py-7 px-4">

                <p className="text-[#B66C83] text-[10px] uppercase tracking-[0.25em] mb-3">
                  Learn & Grow
                </p>

                <h3 className="serif-font text-2xl text-[#512E40]">
                  Beauty Academy
                </h3>

                <p className="text-[#927D87] text-xs leading-6 mt-4">
                  Develop professional beauty skills through
                  structured learning and practical training.
                </p>

              </div>
            </div>

          </div>

          <div className="text-center mt-12">

            <button
              onClick={() => setActiveTab('courses')}
              className="px-9 py-4 bg-[#B66C83] text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#945269] transition"
            >
              Explore Academy →
            </button>

          </div>

        </div>
      </section>


      {/* ================= BEFORE AFTER SECTION ================= */}
      <section className="bg-[#FFF9F7] py-12">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center mb-14">

            <p className="text-[#B66C83] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              Precision Transformations
            </p>

            <h2 className="serif-font text-4xl md:text-6xl text-[#512E40]">
              The Signature Touch
            </h2>

            <p className="text-[#927D87] text-sm leading-7 max-w-2xl mx-auto mt-5">
              Explore before and after transformations and
              experience the beauty of professional artistry.
            </p>

          </div>

          <div className="bg-white p-4 md:p-8 shadow-xl shadow-[#B66C83]/10 border border-[#F0DCE3]">

            <BeforeAfterSlider />

          </div>

          <div className="text-center mt-12">

            <button
              onClick={() => setActiveTab('gallery')}
              className="px-9 py-4 border border-[#B66C83] text-[#945269] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#B66C83] hover:text-white transition"
            >
              Explore Gallery →
            </button>

          </div>

        </div>

      </section>


      {/* ================= ACADEMY SECTION ================= */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-[#512E40]">

        <div className="absolute inset-0 opacity-10">

          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-white" />

          <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full border border-white" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-[#E8B5C4] text-xs tracking-[0.35em] uppercase mb-5">
                Nayaab Beauty Academy
              </p>

              <h2 className="serif-font text-4xl md:text-6xl text-white leading-tight">

                Turn Your Passion Into

                <span className="block italic text-[#E8B5C4] mt-3">
                  Your Profession.
                </span>

              </h2>

              <p className="text-white/70 text-sm leading-8 mt-7 max-w-lg">
                Explore professional beauty courses and develop
                your creativity, practical skills and confidence
                to begin your journey in the beauty industry.
              </p>

              <button
                onClick={() => setActiveTab('courses')}
                className="mt-9 px-9 py-4 bg-[#E8B5C4] text-[#512E40] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white transition"
              >
                Discover Our Courses →
              </button>

            </div>

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85"
                alt="Beauty and fashion academy"
                className="w-full h-[350px] md:h-[450px] object-cover rounded-sm shadow-2xl"
              />

              <div className="absolute inset-0 border border-white/30 m-4 pointer-events-none" />

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL BOOKING SECTION ================= */}
      <section className="relative py-16 md:py-28 px-6 text-center bg-gradient-to-br from-[#F4C6D7] via-[#D8BCE5] via-50% to-[#F6D0B8]">

        <div className="max-w-3xl mx-auto">

          <p className="text-[#B66C83] text-xs tracking-[0.4em] uppercase font-semibold mb-6">
            Your Beauty Journey Begins Here
          </p>

          <h2 className="serif-font text-4xl md:text-6xl text-[#512E40] leading-tight">

            Ready to Experience

            <span className="block italic text-[#B66C83] mt-3">
              Something Beautiful?
            </span>

          </h2>

          <p className="text-[#796771] text-sm leading-8 mt-7 max-w-xl mx-auto">
            Give yourself the experience you deserve.
            Book your appointment and let us help you
            celebrate your unique beauty.
          </p>

          <button
            onClick={() => openBooking()}
            className="mt-10 px-10 py-4 bg-[#B66C83] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-xl shadow-[#B66C83]/20 hover:bg-[#945269] hover:-translate-y-1 transition-all duration-300"
          >
            Book Your Appointment →
          </button>

        </div>

      </section>

    </main>
  );
};

export default HomePage;
