import React from 'react'; // optional in Vite+TS, safe to keep

const Hero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
      {/* Left: text */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
          Your Tech Partner for{' '}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Smarter Growth
          </span>
        </h1>

        <p className="mt-5 text-gray-600 max-w-xl">
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-white font-medium shadow-sm hover:bg-orange-600"
        >
          Let’s Talk
        </a>
      </div>

      {/* Right: image */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent" />
        <img
          src="./images/hero/phone_light.png" // make sure this file exists in public/images/hero
          alt="Phone mockup"
          className="relative w-full max-w-lg mx-auto rounded-[28px] shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
