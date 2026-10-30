
import React, { useState } from 'react';
import { coursesData } from '../data/coursesData';
import { useApp } from '../context/AppContext';

// Discount assigned to each course
const getDiscount = (course) => {
  const discounts = {
    c1: 15,
    c2: 12,
    c3: 10,
    c4: 5,
    c5: 10,
    c6: 5,
    c7: 8,
    c8: 5,
    c9: 5,
    c10: 5,
    c11: 5,
    c12: 8,
  };

  return discounts[course.id] || 5;
};

// Calculate discounted price
const getDiscountedPrice = (course) => {
  const originalPrice = Number(
    String(course.fee).replace(/[^\d]/g, '')
  );

  const discount = getDiscount(course);

  return Math.round(originalPrice * (1 - discount / 100));
};

// Format price in Indian currency
const formatPrice = (price) =>
  `₹${price.toLocaleString('en-IN')}`;

// Course category
const getCategory = (title) => {
  const name = title.toLowerCase();

  if (name.includes('makeup') || name.includes('bridal')) return 'Makeup';
  if (name.includes('hair') || name.includes('cosmetology')) return 'Hair';
  if (name.includes('facial') || name.includes('skin')) return 'Skin';
  if (name.includes('nail')) return 'Nails';

  return 'Other';
};

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-4 w-4"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CoursesPage = () => {
  const { openBooking } = useApp();

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Makeup',
    'Hair',
    'Skin',
    'Nails',
    'Other',
  ];

  const filteredCourses =
    activeCategory === 'All'
      ? coursesData
      : coursesData.filter(
          (course) => getCategory(course.title) === activeCategory
        );

  return (
    <div className="min-h-screen bg-[#211b1d] text-white">

      {/* PAGE INTRO */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-14 md:px-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d6ad70]">
              Nayaab Beauty Studio & Academy
            </p>

            <h1 className="font-serif text-4xl leading-tight text-[#f6e9e3] md:text-6xl">
              The Art of Beauty
              <span className="block italic text-[#c98c9e]">
                Education.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#c4b5b9] md:text-base">
              Learn professional beauty skills with practical training,
              expert guidance and courses designed to help you grow.
            </p>
          </div>

          <div className="border-l border-[#d6ad70]/50 pl-5">
            <p className="text-4xl font-serif text-[#d6ad70]">
              12+
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-[#c4b5b9]">
              Professional Courses
            </p>
          </div>

        </div>

        {/* SPECIAL OFFER */}
        <div className="mt-8 flex flex-wrap items-center gap-3 border border-[#d6ad70]/30 bg-[#33262b] px-5 py-4">

          <span className="text-2xl text-[#d6ad70]">✦</span>

          <div>
            <p className="text-sm font-semibold text-[#f3d5a5]">
              Special Academy Offers
            </p>
            <p className="mt-1 text-xs text-[#c4b5b9]">
              Save up to 15% on selected professional courses.
            </p>
          </div>

        </div>

      </section>

      {/* COURSE CATALOGUE */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">

        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end">

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#c98c9e]">
              Explore our programmes
            </p>

            <h2 className="font-serif text-3xl text-[#f6e9e3] md:text-4xl">
              Find Your Course
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#b9a9ae]">
            Choose a programme that matches your passion and
            take your first step towards a beauty career.
          </p>

        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-9 flex flex-wrap gap-2">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-xs font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'border-[#d6ad70] bg-[#d6ad70] text-[#211b1d]'
                  : 'border-white/15 text-[#d5c5ca] hover:border-[#d6ad70] hover:text-[#d6ad70]'
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* COURSE LIST */}
        <div className="space-y-6">

          {filteredCourses.map((course, index) => {
            const discount = getDiscount(course);
            const discountedPrice = getDiscountedPrice(course);

            return (
              <article
                key={course.id}
                className="group grid overflow-hidden border border-[#c98c9e]/20 bg-[#f4eae6] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6ad70]/70 hover:shadow-xl hover:shadow-black/20 md:grid-cols-[250px_1fr]"
              >

                {/* LEFT DECORATIVE PANEL */}
                <div className="relative flex min-h-[210px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#754153] via-[#9b6474] to-[#3d2630] p-6">

                  <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/20" />

                  <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full border border-white/20" />

                  <div className="absolute bottom-[-65px] left-[-35px] h-44 w-44 rounded-full border border-white/20" />

                  <div className="relative z-10 flex items-start justify-between">

                    <span className="font-serif text-4xl text-white/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="rounded-full bg-[#d6ad70] px-3 py-2 text-xs font-bold text-[#211b1d] shadow-lg">
                      {discount}% OFF
                    </span>

                  </div>

                  <div className="relative z-10">

                    <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#f0d5d9]">
                      Nayaab Academy
                    </p>

                    <p className="max-w-[190px] font-serif text-2xl leading-tight text-white">
                      Learn. Create. Shine.
                    </p>

                  </div>

                </div>

                {/* RIGHT COURSE DETAILS */}
                <div className="flex flex-col justify-between gap-6 p-6 md:p-8">

                  <div>

                    <div className="mb-3 flex flex-wrap items-center gap-3">

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a15e75]">
                        {getCategory(course.title)}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#c98c9e]" />

                      <span className="flex items-center gap-1 text-xs text-[#796b70]">
                        <ClockIcon />
                        {course.duration}
                      </span>

                    </div>

                    <h3 className="font-serif text-2xl text-[#35242b] transition-colors group-hover:text-[#96536b] md:text-3xl">
                      {course.title}
                    </h3>

                    {/* TAGS */}
                    <div className="mt-4 flex flex-wrap gap-2">

                      {course.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-[#d9c5c9] px-3 py-1 text-[10px] text-[#78656d]"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                    {/* SYLLABUS */}
                    {course.syllabus && (
                      <div className="mt-5">

                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a15e75]">
                          What you will learn
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2">

                          {course.syllabus.slice(0, 3).map((item, i) => (
                            <p
                              key={i}
                              className="flex items-center gap-2 text-xs text-[#65545b]"
                            >
                              <span className="text-[#a15e75]">✦</span>
                              {item}
                            </p>
                          ))}

                        </div>

                      </div>
                    )}

                  </div>

                  {/* PRICE AND ENQUIRY */}
                  <div className="flex flex-col justify-between gap-5 border-t border-[#ddc9cd] pt-5 sm:flex-row sm:items-center">

                    <div>

                      <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#8d747d]">
                        Special course fee
                      </p>

                      <div className="flex flex-wrap items-center gap-2">

                        <span className="text-2xl font-bold text-[#8b455b]">
                          {formatPrice(discountedPrice)}
                        </span>

                        <span className="text-sm text-[#a99ba0] line-through">
                          {course.fee}
                        </span>

                      </div>

                      <p className="mt-1 text-[11px] font-medium text-green-700">
                        You save {formatPrice(
                          Number(String(course.fee).replace(/[^\d]/g, '')) - discountedPrice
                        )}
                      </p>

                    </div>

                    <button
                      onClick={() => openBooking('course', course.title)}
                      className="flex items-center justify-center gap-3 bg-[#754153] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d6ad70] hover:text-[#211b1d]"
                    >
                      Enquire Now
                      <ArrowIcon />
                    </button>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* EMPTY STATE */}
        {filteredCourses.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-serif text-2xl text-[#f6e9e3]">
              No courses found
            </p>
            <p className="mt-2 text-sm text-[#b9a9ae]">
              Please select another category.
            </p>
          </div>
        )}

      </section>

    </div>
  );
};

export default CoursesPage;
