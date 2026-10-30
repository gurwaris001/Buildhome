
import React from 'react';

export const AboutPage = () => {
  const features = [
    {
      title: 'Expert Artistry',
      desc: 'Professional beauty services with creativity and precision.'
    },
    {
      title: 'Personalised Care',
      desc: 'Every experience thoughtfully designed around your beauty.'
    },
    {
      title: 'Beauty Education',
      desc: 'Developing skills and inspiring the next generation of artists.'
    }
  ];

  return (
    <main className="bg-[#170d14] text-white">

      {/* About Hero */}
      <section className="relative px-6 pt-12 pb-14 md:pt-16 md:pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#51283d]/35 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#d9ad79] uppercase tracking-[0.35em] text-xs mb-4">
            Welcome to Nayaab
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            The Art of Beauty,
            <span className="block italic text-[#d9ad79]">
              The Essence of You.
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-5 leading-7">
            Where professional artistry meets personalised care,
            creating beauty experiences that inspire confidence
            and celebrate individuality.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10 items-center">

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#75445b] via-[#442638] to-[#21121b] flex items-center justify-center">
          <div className="absolute inset-4 border border-[#d9ad79]/40 rounded-xl"></div>
          <div className="relative text-center">
            <span className="text-8xl font-serif italic text-[#e8c59c]">N</span>
            <p className="text-[#e8c59c] uppercase tracking-[0.3em] text-xs mt-3">
              Beauty • Artistry • Elegance
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#d9ad79] uppercase tracking-[0.3em] text-xs mb-4">
            Our Story
          </p>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-5">
            More Than Beauty.
            <span className="block italic text-[#d9ad79]">
              It's an Experience.
            </span>
          </h2>

          <p className="text-gray-300 leading-7">
            At Nayaab Beauty Studio & Academy, we believe beauty is
            an expression of individuality. Our passion lies in
            combining modern beauty techniques, artistic creativity
            and thoughtful care.
          </p>

          <p className="text-gray-400 leading-7 mt-4">
            From stunning transformations to professional beauty
            education, we create experiences that make every moment
            feel special.
          </p>

          <p className="text-[#d9ad79] font-serif italic text-xl mt-5">
            Your beauty. Your identity. Your Nayaab moment.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#24151e] border-y border-[#d9ad79]/15 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-9">
            <p className="text-[#d9ad79] uppercase tracking-[0.3em] text-xs mb-3">
              What Defines Us
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">
              The Nayaab Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-xl border border-[#d9ad79]/20 bg-[#170d14]/60"
              >
                <span className="text-[#d9ad79] text-sm">
                  0{index + 1}
                </span>

                <h3 className="font-serif text-xl mt-3 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="text-center px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-serif">
          Elegance Is Not Just Seen.
          <span className="block italic text-[#d9ad79] mt-2">
            It's Felt.
          </span>
        </h2>
      </section>

    </main>
  );
};

export default AboutPage;
