import React, { useMemo, useState } from 'react';

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  text: string;
  avatar: string;
  stars?: number;
};

const DATA: Testimonial[] = [
  {
    name: 'John Lee',
    role: 'Director at Innovate Corp',
    text: 'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    avatar: './images/testimonials/john.png',
    stars: 5,
  },
  {
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    text: 'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    avatar: './images/testimonials/sarah.png',
    stars: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Head at TechFlow',
    text: 'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    avatar: './images/testimonials/emily.png',
    stars: 5,
  },
];

// simple modulo that handles negatives
const mod = (n: number, m: number) => ((n % m) + m) % m;

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center justify-center gap-1 text-orange-500">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path
            fill="currentColor"
            d="M12 2l2.7 6.6 7.1.6-5.3 4.5 1.7 6.7L12 16.9 5.8 20.4 7.5 13.8 2.2 9.2l7.1-.6L12 2z"
          />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 48 28" className="h-8 w-12 text-orange-500" aria-hidden>
      {/* two simple quote shapes */}
      <path d="M8 0h8L8 16h10v12H0V16L8 0z" fill="currentColor" opacity=".9" />
      <path
        d="M30 0h8l-8 16h10v12H22V16L30 0z"
        fill="currentColor"
        opacity=".9"
      />
    </svg>
  );
}

function Card({ t, active }: { t: Testimonial; active: boolean }) {
  return (
    <div
      className={[
        'relative w-full max-w-xl rounded-2xl border bg-white p-8 shadow-sm transition',
        'border-gray-200',
        active ? 'opacity-100 scale-100' : 'opacity-30 scale-95 blur-[1px]',
      ].join(' ')}
    >
      <div className="absolute -top-4 left-8">
        <QuoteMark />
      </div>

      <div className="mt-4">
        <Stars count={t.stars ?? 5} />
      </div>

      <blockquote className="mt-4 text-center text-lg leading-relaxed text-gray-800">
        “{t.text}”
      </blockquote>

      <div className="mt-6 text-center">
        <div className="font-semibold text-gray-900">{t.name}</div>
        <div className="mt-1 text-sm text-orange-500">{t.role}</div>
      </div>

      {/* avatar badge */}
      <img
        src={t.avatar}
        alt={t.name}
        className="absolute left-1/2 -bottom-8 h-16 w-16 -translate-x-1/2 rounded-full object-cover ring-4 ring-white"
        loading="lazy"
      />
    </div>
  );
}

export default function Testimonials() {
  const [idx, setIdx] = useState(1); // center on Sarah by default

  // only render the previous, current, next cards
  const visible = useMemo(
    () => [
      DATA[mod(idx - 1, DATA.length)],
      DATA[idx],
      DATA[mod(idx + 1, DATA.length)],
    ],
    [idx]
  );

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
        What Partners Say About Working With Us
      </h2>
      <p className="mt-2 text-center text-gray-500">
        Trusted voices. Real experiences. Proven results.
      </p>

      <div className="relative mt-10">
        {/* gradient fades at edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex items-stretch justify-center gap-8 overflow-hidden px-4">
          <Card t={visible[0]} active={false} />
          <Card t={visible[1]} active={true} />
          <Card t={visible[2]} active={false} />
        </div>
      </div>

      {/* dots / controls */}
      <div className="mt-12 flex items-center justify-center gap-2">
        {DATA.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={[
              'h-2.5 w-2.5 rounded-full transition',
              i === idx ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  );
}
