
import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { useApp } from '../../context/AppContext';

export const Footer = () => {
  const { setActiveTab } = useApp();

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <footer className="relative overflow-hidden bg-[#170d14] text-[#d7c5c9]">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full border border-[#d6ad70]/10" />
      <div className="pointer-events-none absolute -right-20 top-12 h-64 w-64 rounded-full border border-[#d6ad70]/10" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 md:px-10">

        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-1">

            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#d6ad70]">
              Beauty • Elegance • Excellence
            </p>

            <h2 className="font-serif text-4xl font-semibold tracking-wide text-[#f4e8e3]">
              Nayaab<span className="text-[#d6ad70]">.</span>
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#a9949d]">
              Where beauty meets artistry. Experience luxurious beauty
              transformations and discover your potential through
              professional beauty education.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d6ad70]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d6ad70]">
                Feel Beautiful. Be Confident.
              </span>
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#d6ad70]">
              Explore
            </h3>

            <ul className="space-y-4 text-sm">

              {[
                ['Home', 'home'],
                ['Salon Services', 'services'],
                ['Academy Courses', 'courses'],
                ['VIP Packages', 'packages'],
                ['Our Lookbook', 'gallery'],
                ['Contact Us', 'contact'],
              ].map(([label, tab]) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className="group flex items-center gap-2 text-[#b9a6ad] transition-colors hover:text-[#d6ad70]"
                  >
                    <span className="h-px w-0 bg-[#d6ad70] transition-all group-hover:w-4" />
                    {label}
                  </button>
                </li>
              ))}

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#d6ad70]">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-widest text-[#987d88]">
                  Call Us
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-[#e8d8dc] transition-colors hover:text-[#d6ad70]"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-widest text-[#987d88]">
                  Email Us
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-sm text-[#e8d8dc] transition-colors hover:text-[#d6ad70]"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-widest text-[#987d88]">
                  Visit Our Studio
                </p>
                <p className="max-w-xs text-sm leading-6 text-[#b9a6ad]">
                  {siteConfig.address}
                </p>
              </div>

            </div>
          </div>

          {/* OPENING HOURS */}
          <div>
            <div className="border border-[#d6ad70]/20 bg-[#24151e] p-6">

              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#d6ad70]">
                We Welcome You
              </p>

              <h3 className="mb-6 font-serif text-2xl text-[#f4e8e3]">
                Opening Hours
              </h3>

              <div className="space-y-4 text-xs">

                <div className="flex justify-between gap-3 border-b border-white/10 pb-3">
                  <span className="text-[#b9a6ad]">Monday - Saturday</span>
                  <span className="whitespace-nowrap text-[#f0d5b0]">
                    10 AM - 8 PM
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-[#b9a6ad]">Sunday</span>
                  <span className="whitespace-nowrap text-[#f0d5b0]">
                    11 AM - 7 PM
                  </span>
                </div>

              </div>

              <div className="mt-7 border-t border-[#d6ad70]/20 pt-5">
                <p className="text-xs leading-6 text-[#a9949d]">
                  Your beauty appointment awaits. Connect with us
                  to plan your visit.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* LOCATION SECTION */}
        <div className="grid grid-cols-1 items-center gap-8 py-14 lg:grid-cols-[0.8fr_1.5fr]">

          {/* LOCATION DETAILS */}
          <div className="py-4">

            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#d6ad70]">
              Come Find Us
            </p>

            <h3 className="font-serif text-3xl leading-snug text-[#f4e8e3] md:text-4xl">
              Your Beauty
              <span className="block italic text-[#c98c9e]">
                Destination.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#a9949d]">
              Visit Nayaab Beauty Studio & Academy and experience
              a space dedicated to beauty, creativity and self-care.
            </p>

            <div className="mt-7 flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d6ad70]/40 text-lg text-[#d6ad70]">
                ↗
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#e8d8dc]">
                  Our Location
                </p>
                <p className="text-xs leading-6 text-[#a9949d]">
                  {siteConfig.address}
                </p>
              </div>

            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-[#d6ad70] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d6ad70] transition-all hover:bg-[#d6ad70] hover:text-[#170d14]"
            >
              Get Directions
              <span>↗</span>
            </a>

          </div>

          {/* MAP */}
          <div className="relative h-[280px] overflow-hidden border border-[#d6ad70]/30 p-1 md:h-[350px]">

            <iframe
              title="Nayaab Beauty Studio Location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[35%] transition-all duration-500 hover:grayscale-0"
            />

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center md:flex-row md:text-left">

          <p className="text-[11px] text-[#806e76]">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>

          <p className="font-serif text-sm italic tracking-wider text-[#d6ad70]">
            Beauty is an Art.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] uppercase tracking-[0.2em] text-[#b9a6ad] transition-colors hover:text-[#d6ad70]"
          >
            Back to Top ↑
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
