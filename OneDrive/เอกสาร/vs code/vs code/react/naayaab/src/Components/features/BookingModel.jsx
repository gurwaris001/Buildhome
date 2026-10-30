import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const BookingModal = () => {
  const { isBookingOpen, closeBooking, bookingDetails } = useApp();
  const [submitted, setSubmitted] = useState(false);

  if (!isBookingOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeBooking();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#15151e] border border-amber-500/30 w-full max-w-md rounded-2xl p-6 relative">
        <button
          onClick={closeBooking}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <span className="text-4xl text-[#bbbb67] block mb-3">✓</span>
            <h3 className="serif-font text-2xl text-white font-bold mb-2">Request Received!</h3>
            <p className="text-xs text-gray-400">Our concierge will confirm your slot via call shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="serif-font text-2xl font-bold text-[#bbbb67]">
              {bookingDetails.category === 'course' ? 'Enrollment Request' : 'Book Appointment'}
            </h3>
            {bookingDetails.title && (
              <p className="text-xs text-amber-200/80 bg-amber-400/10 p-2 rounded">
                Target: {bookingDetails.title}
              </p>
            )}

            <div>
              <label className="text-xs text-gray-400 block mb-1">Full Name</label>
              <input required className="w-full bg-[#0b0b0f] border border-gray-800 rounded-lg p-2.5 text-xs text-white focus:border-amber-400 outline-none" placeholder="Your name" />
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Phone Number</label>
              <input required type="tel" className="w-full bg-[#0b0b0f] border border-gray-800 rounded-lg p-2.5 text-xs text-white focus:border-amber-400 outline-none" placeholder="+91" />
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Preferred Date</label>
              <input required type="date" className="w-full bg-[#0b0b0f] border border-gray-800 rounded-lg p-2.5 text-xs text-white focus:border-amber-400 outline-none" />
            </div>

            <button type="submit" className="w-full py-3 bg-[#bbbb67] text-black font-semibold text-xs uppercase tracking-wider rounded-lg mt-4 hover:bg-amber-300">
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};