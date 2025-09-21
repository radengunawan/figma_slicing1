import React, { useState } from 'react';

type Tab = {
  key: 'fintech' | 'ecom' | 'health';
  label: string;
  desc: string;
  img: string;
};

const TABS: Tab[] = [
  {
    key: 'fintech',
    label: 'Fintech',
    desc: 'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    img: './images/industry/pic1.png',
  },
  {
    key: 'ecom',
    label: 'E-Commerce',
    desc: 'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration',
    img: './images/industry/pic2.png',
  },
  {
    key: 'health',
    label: 'Healthcare', // change to 'Healtcare' if you must match Figma text exactly
    desc: 'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    img: './images/industry/pic3.png',
  },
];

export default function Industry() {
  const [active, setActive] = useState<Tab['key']>('fintech');
  const current = TABS.find((t) => t.key === active)!;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
        Built for Your Industry
      </h2>
      <p className="mt-2 text-gray-500">
        We’ve helped companies across industries launch smarter, faster, and
        more securely.
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
        {/* Left tabs */}
        <div role="tablist" aria-label="Industries" className="space-y-6">
          {TABS.map((t) => {
            const selected = t.key === active;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(t.key)}
                className="group w-full flex items-center gap-3 text-left outline-none"
              >
                {/* left vertical bar */}
                <span
                  aria-hidden
                  className={[
                    'h-8 w-1 rounded-full transition-all',
                    selected ? 'bg-orange-500' : 'bg-gray-300',
                  ].join(' ')}
                />
                <span
                  className={[
                    'text-lg font-semibold transition-colors',
                    selected
                      ? 'text-gray-900'
                      : 'text-gray-400 group-hover:text-gray-600',
                  ].join(' ')}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right panel */}
        <div className="space-y-6">
          <p className="text-xl text-gray-800">{current.desc}</p>

          <div className="overflow-hidden rounded-[28px]">
            <img
              key={current.img} // force fade on change
              src={current.img}
              alt={`${current.label} example`}
              className="w-full h-[360px] md:h-[440px] object-cover transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
