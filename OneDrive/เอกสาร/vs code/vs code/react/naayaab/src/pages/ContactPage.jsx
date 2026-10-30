
import React, { useState } from 'react';
import { SectionHeader } from '../Components/common/SectionHeader';
import { siteConfig } from '../config/siteConfig';

export const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '916284549731';

    const whatsappMessage = `
Hello Nayaab Beauty Studio & Academy!

I would like to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Preferred Date: ${form.date}
Preferred Time: ${form.time}
Additional Message: ${form.message || 'None'}

Please confirm my appointment. Thank you!
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <main className="bg-[#170d14] text-white min-h-screen px-6 py-10">

      <SectionHeader
        subtitle="We Would Love to Hear From You"
        title="Let's Make You Feel Beautiful"
        description="Book your beauty experience or get in touch with our team."
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-10">

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#39212e] to-[#21131c] border border-[#d9ad79]/20 rounded-2xl p-8 md:p-10">

          <p className="text-[#d9ad79] uppercase tracking-[0.3em] text-xs mb-4">
            Nayaab Beauty Studio
          </p>

          <h2 className="text-3xl font-serif mb-5">
            Your Beauty Journey Starts Here.
          </h2>

          <p className="text-gray-400 text-sm leading-7 mb-9">
            From everyday beauty care to your most special occasions,
            we are here to make every experience unforgettable.
          </p>

          <div className="space-y-7">

            <div>
              <p className="text-[#d9ad79] text-xs uppercase tracking-widest mb-2">
                Visit Us
              </p>
              <p className="text-gray-300 text-sm">
                {siteConfig.address}
              </p>
            </div>

            <div>
              <p className="text-[#d9ad79] text-xs uppercase tracking-widest mb-2">
                Call Us
              </p>
              <a href="tel:6284549731" className="text-gray-300 hover:text-[#d9ad79]">
                6284549731
              </a>
            </div>

            <div>
              <p className="text-[#d9ad79] text-xs uppercase tracking-widest mb-2">
                Email
              </p>
              <p className="text-gray-300 text-sm">
                {siteConfig.email}
              </p>
            </div>

            <div>
              <p className="text-[#d9ad79] text-xs uppercase tracking-widest mb-2">
                Opening Hours
              </p>
              <p className="text-gray-300 text-sm">
                Monday – Saturday: 10 AM – 8 PM
              </p>
              <p className="text-gray-300 text-sm">
                Sunday: 11 AM – 7 PM
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/916284549731"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-9 px-6 py-3 rounded-full border border-[#d9ad79]/50 text-[#e7c49b] text-sm hover:bg-[#d9ad79] hover:text-black transition"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* Appointment Form */}
        <div className="bg-[#21151e] border border-[#d9ad79]/20 rounded-2xl p-8 md:p-10">

          <p className="text-[#d9ad79] uppercase tracking-[0.3em] text-xs mb-3">
            Appointment Booking
          </p>

          <h2 className="text-3xl font-serif mb-2">
            Reserve Your Moment
          </h2>

          <p className="text-gray-400 text-sm mb-7">
            Fill in your details and send your appointment request directly to WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="w-full bg-[#170d14] border border-[#59404c] rounded-lg p-3 text-sm outline-none focus:border-[#d9ad79]"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
              required
              className="w-full bg-[#170d14] border border-[#59404c] rounded-lg p-3 text-sm outline-none focus:border-[#d9ad79]"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full bg-[#170d14] border border-[#59404c] rounded-lg p-3 text-sm text-gray-300 outline-none focus:border-[#d9ad79]"
            >
              <option value="">Select a Service</option>
              <option>Bridal Makeup</option>
              <option>Party Makeup</option>
              <option>Hair Styling</option>
              <option>Hair Treatment</option>
              <option>Facial & Skin Care</option>
              <option>Nail Art & Extensions</option>
              <option>Beauty Package</option>
              <option>Academy Course</option>
              <option>Other</option>
            </select>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toLocaleDateString('en-CA')}
                required
                className="min-w-0 w-full bg-[#170d14] border border-[#59404c] rounded-lg p-3 text-sm text-gray-300 outline-none focus:border-[#d9ad79]"
              />

              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="min-w-0 w-full bg-[#170d14] border border-[#59404c] rounded-lg p-3 text-sm text-gray-300 outline-none focus:border-[#d9ad79]"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              placeholder="Additional Requirements (Optional)"
              className="w-full bg-[#170d14] border border-[#59404c] rounded-lg p-3 text-sm outline-none focus:border-[#d9ad79] resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-[#d9ad79] text-[#170d14] font-semibold uppercase tracking-widest text-xs hover:bg-[#edc99f] transition"
            >
              Book Appointment via WhatsApp →
            </button>

            <p className="text-gray-500 text-xs text-center">
              Your WhatsApp will open with your appointment details.
            </p>

          </form>
        </div>

      </div>
    </main>
  );
};

export default ContactPage;
