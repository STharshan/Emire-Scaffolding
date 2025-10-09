import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/back.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>

      {/* Content Centered */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-16">
        <div className="text-center max-w-2xl">
          {/* Badge */}
          <span className="inline-block mb-4 mt-20 bg-white text-black text-sm font-semibold px-4 py-1 rounded-full shadow">
            Professional Scaffolding Services
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Safe & Reliable Scaffolding Solutions
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/90 mb-8 leading-relaxed font-medium">
            Providing premium commercial and domestic scaffolding services with uncompromising safety standards and professional excellence across the Midlands and throughout the UK.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            {/* Mailto link for "Get Free Quote" button */}
            <a href="mailto:Shay@empirescaffolding.co.uk">
              <button className="bg-white text-black font-semibold px-5 py-3 rounded shadow hover:bg-gray-300 transition w-full sm:w-auto">
                Get Free Quote
              </button>
            </a>

            {/* Anchor Link to scroll to Services Section */}
            <a href="#our-services">
              <button className="border border-white text-white font-semibold px-5 py-3 rounded hover:bg-white hover:text-[#0d2b7d] transition w-full sm:w-auto">
                Our Services
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
