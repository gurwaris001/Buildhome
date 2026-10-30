import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Navbar = () => {
  const { activeTab, setActiveTab, openBooking } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Academy' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Transformations' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b0b0f]/90 backdrop-blur-md border-b border-amber-500/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          className="cursor-pointer flex items-center space-x-3"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-10 h-10 rounded-full border text-[#bbbb67] flex items-center justify-center text-[#bbbb67] font-serif font-bold text-xl">
            N
          </div>
          <span className="serif-font text-2xl font-bold tracking-widest text-[#bbbb67] uppercase">
            Naayaab
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-sm tracking-wider uppercase transition-colors ${
                activeTab === item.id
                  ? 'text-[#bbbb67] font-semibold border-b-2 border-[#bbbb67] pb-1'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => openBooking()}
            className="px-5 py-2 rounded-full border border-[#bbbb67]  hover:bg-[#bbbb67] hover:text-black text-xs font-semibold uppercase tracking-wider transition-all"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#bbbb67] text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-amber-500/20 flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-sm uppercase py-1 ${
                activeTab === item.id ? 'text-[#bbbb67] font-bold' : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              openBooking();
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 py-2 text-[#bbbb67] text-black font-semibold text-xs uppercase tracking-wider rounded-full"
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};