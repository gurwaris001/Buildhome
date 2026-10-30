
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" strokeWidth="1.6"/>
    <path d="m16 16 4 4" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" strokeWidth="1.6"/>
    <path d="M12 7v5l3 2" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M5 12h14m-6-6 6 6-6 6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);

const SERVICES_DATA = [
  { id:'s1', category:'hair', title:'Royal Keratin Hair Restoration', duration:'90 mins', price:3500, desc:'Deep enrichment with silk proteins & argan extracts for high shine.', tag:'HAIR RITUAL' },
  { id:'s2', category:'hair', title:'Hand-Painted Balayage / Highlights', duration:'180 mins', price:6500, desc:'Dimensional custom color blending with Olaplex structural protection.', tag:'SIGNATURE COLOR' },
  { id:'s3', category:'skin', title:'24K Diamond Glow Hydra-Facial', duration:'75 mins', price:4200, desc:'Pore vacuuming & LED light infusion for instant glass radiance.', tag:'SKIN LUXE' },
  { id:'s4', category:'skin', title:'Oxy Detox & Anti-Pollution Facial', duration:'60 mins', price:3200, desc:'Deep oxygenation for tired, urban-congested skin.', tag:'SKIN RITUAL' },
  { id:'s5', category:'bridal', title:'HD Airbrush Bridal Makeup', duration:'240 mins', price:18000, desc:'Waterproof HD airbrush look with luxury hair styling and lash set.', tag:'BRIDAL EXCLUSIVE' },
  { id:'s6', category:'nails', title:'3D Chrome Gel Extension Set', duration:'90 mins', price:2500, desc:'Long-lasting sculptured acrylic or builder gel with custom chrome art.', tag:'NAIL ARTISTRY' },
  { id:'s7', category:'aesthetics', title:'Microblading & Eyebrow Lamination', duration:'120 mins', price:8500, desc:'Semi-permanent hair stroke eyebrow crafting for natural fullness.', tag:'BROW STUDIO' },
  { id:'s8', category:'aesthetics', title:'Aesthetic Chemical Peel Treatment', duration:'45 mins', price:3800, desc:'Professional formulation for acne scarring and pigmentation concerns.', tag:'ADVANCED CARE' }
];

const categories = [
  { id:'all', label:'All Treatments' },
  { id:'hair', label:'Hair' },
  { id:'skin', label:'Skin & Facials' },
  { id:'bridal', label:'Bridal' },
  { id:'nails', label:'Nails' },
  { id:'aesthetics', label:'Aesthetics' }
];

export const ServicesPage = () => {
  const { openBooking } = useApp();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SERVICES_DATA.filter(service => {
    const categoryMatch =
      selectedCategory === 'all' || service.category === selectedCategory;

    const searchMatch =
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.desc.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <main className="bg-[#170d14] min-h-screen text-[#f8eee8] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[570px] flex items-center overflow-hidden bg-gradient-to-br from-[#421d2d] via-[#28121f] to-[#160d15]">

        <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-[#c18b73]/10 blur-[110px]"/>
        <div className="absolute -bottom-48 -left-20 w-[450px] h-[450px] rounded-full bg-[#9a435b]/20 blur-[100px]"/>

        <div className="absolute right-[8%] top-[12%] hidden lg:block">
          <div className="w-[390px] h-[460px] border border-[#d6b17b]/30 rounded-t-full rounded-b-[190px] rotate-6"/>
          <div className="absolute inset-5 rounded-t-full rounded-b-[190px] bg-gradient-to-br from-[#a76c68]/30 via-[#713d4c]/20 to-[#d1a47d]/10 border border-[#d6b17b]/20"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center rotate-6">
              <SparkleIcon/>
              <p className="font-serif text-5xl italic text-[#ead0ad] mt-4">Be</p>
              <p className="font-serif text-5xl italic text-[#ead0ad]">Unforgettable</p>
              <div className="w-16 h-px bg-[#d6b17b] mx-auto mt-5"/>
              <p className="text-[9px] tracking-[0.4em] mt-5 text-[#e7c9b4]">NAYAAB BEAUTY</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[#d8ae80] text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold mb-7">
              <span className="w-9 h-px bg-[#d8ae80]"/>
              Nayaab Beauty Studio & Academy
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-[#fff4ec]">
              The Art of
              <span className="block italic text-[#d9ad91] font-normal">
                Being Beautiful.
              </span>
            </h1>

            <p className="mt-7 text-sm sm:text-base text-[#d0b9b9] leading-8 max-w-lg">
              More than beauty treatments. A world of personalised care,
              artistic expression and unforgettable experiences.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-10">
              <button
                onClick={() => document.getElementById('service-menu')?.scrollIntoView({behavior:'smooth'})}
                className="bg-gradient-to-r from-[#d7b183] to-[#b98270] text-[#28131c] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:brightness-110 transition"
              >
                Explore Treatments <ArrowIcon/>
              </button>

              <div className="text-[#d9b9a9] text-xs tracking-widest uppercase">
                <span className="text-[#e3bc8d]">✦</span> Beauty, Refined
              </div>
            </div>

            <div className="flex gap-10 mt-16 pt-7 border-t border-white/10 max-w-lg">
              <div>
                <p className="font-serif text-3xl text-[#e4bd91]">08+</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99da2] mt-2">Luxury Services</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#e4bd91]">100%</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99da2] mt-2">Personalised Care</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#e4bd91]">01</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99da2] mt-2">You, Always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE MENU */}
      <section id="service-menu" className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">

        <div className="text-center mb-14">
          <p className="text-[#c79a72] text-[10px] uppercase tracking-[0.4em] font-semibold">
            The Nayaab Experience
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl text-[#fff0e7] mt-4">
            Our Signature Menu
          </h2>

          <p className="text-[#a9919a] text-sm mt-5 max-w-xl mx-auto leading-7">
            Carefully curated treatments, crafted to celebrate your individuality
            and bring your beauty vision to life.
          </p>

          <div className="flex justify-center items-center gap-3 mt-7">
            <span className="w-12 h-px bg-[#9b6b59]"/>
            <SparkleIcon/>
            <span className="w-12 h-px bg-[#9b6b59]"/>
          </div>
        </div>

        {/* SEARCH */}
        <div className="max-w-lg mx-auto mb-8 relative">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#c29b86]">
            <SearchIcon/>
          </div>

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Discover your perfect treatment..."
            className="w-full bg-[#281923] border border-[#76505b]/60 rounded-full pl-14 pr-6 py-4 text-sm text-[#fff0e7] placeholder:text-[#a78d96] focus:outline-none focus:border-[#d1a47d] focus:ring-2 focus:ring-[#d1a47d]/10 transition"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-3 text-[10px] sm:text-xs uppercase tracking-[0.13em] transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#d5ae84] text-[#29151e] shadow-lg shadow-[#d5ae84]/10'
                  : 'bg-[#281923] border border-[#64424e] text-[#d4b8b8] hover:border-[#d5ae84] hover:text-[#f1d3b5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-xs text-[#aa929a] tracking-wider">
            DISCOVER <span className="text-[#d9ad91]">{filteredServices.length}</span> TREATMENTS
          </p>

          {(search || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('all');
              }}
              className="text-xs text-[#d9ad91] underline underline-offset-4"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* CARDS */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {filteredServices.map((service, index) => (
              <article
                key={service.id}
                className="group relative bg-gradient-to-br from-[#30202b] to-[#21151f] border border-[#76505b]/40 p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c39a75]/70 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#d4ad83]/60 to-transparent"/>

                <div className="flex justify-between items-center mb-8">
                  <span className="font-serif italic text-3xl text-[#795565]/70">
                    0{index + 1}
                  </span>

                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#d8ae80] border border-[#a17b64]/40 px-3 py-2">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#f9eae3] leading-snug group-hover:text-[#e3bd99] transition-colors min-h-[64px]">
                  {service.title}
                </h3>

                <p className="text-sm text-[#b6a0a7] leading-7 mt-4 min-h-[78px]">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 mt-5 text-xs text-[#c49a81]">
                  <ClockIcon/>
                  {service.duration}
                </div>

                <div className="h-px bg-gradient-to-r from-[#8d5d66]/60 to-transparent mt-7 mb-6"/>

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#a58b95] mb-2">
                      Investment
                    </p>
                    <p className="font-serif text-3xl text-[#e2bd91]">
                      ₹{service.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <button
                    onClick={() => openBooking('salon', service.title)}
                    className="flex items-center gap-2 bg-[#d5ae84] text-[#29151e] px-4 py-3 text-[10px] uppercase tracking-wider font-bold hover:bg-[#f0d2af] transition-colors"
                  >
                    Book Now <ArrowIcon/>
                  </button>
                </div>
              </article>
            ))}

          </div>
        ) : (
          <div className="text-center py-20 border border-[#76505b]/40 bg-[#281923]">
            <SparkleIcon/>
            <h3 className="font-serif text-2xl mt-4 text-[#f4e3db]">Nothing found</h3>
            <p className="text-sm text-[#b6a0a7] mt-3">
              Try searching for another treatment.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('all');
              }}
              className="mt-6 text-[#d9ad91] underline text-sm"
            >
              View all treatments
            </button>
          </div>
        )}
      </section>

      {/* FINAL BOOKING BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#57283b] via-[#713c4a] to-[#482334] px-6 py-20 text-center">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#e5bd91]/10 rounded-full blur-[90px]"/>

        <div className="relative max-w-2xl mx-auto">
          <p className="text-[#e6bd91] text-[10px] tracking-[0.4em] uppercase">
            A Moment That Belongs To You
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl text-white mt-5">
            Your Beauty. Your Statement.
          </h2>

          <p className="text-sm text-[#e7cdd0] leading-7 mt-5">
            Step into the Nayaab experience and let us create something
            beautiful, just for you.
          </p>

          <button
            onClick={() => openBooking()}
            className="mt-9 bg-[#e0bb94] text-[#321b25] px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
          >
            Reserve Your Experience
          </button>
        </div>
      </section>

    </main>
  );
};

export default ServicesPage;
