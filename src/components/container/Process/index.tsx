import React from 'react';

type Step = { title: string; desc: string };

const steps: Step[] = [
  { title: 'Discovery & Consultation', desc: 'Understand Your Needs & Goals' },
  { title: 'Planning & Strategy', desc: 'Build a Clear, Scalable Roadmap' },
  { title: 'Design & Prototyping', desc: 'Craft UX That Converts' },
  {
    title: 'Development & Implementation',
    desc: 'Deliver With Speed & Precision',
  },
  { title: 'Testing & Optimization', desc: 'Ensure Quality at Every Step' },
  { title: 'Launch & Growth', desc: 'Scale, Measure & Improve Continuously' },
];

function ChevronUp() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden
      className="text-gray-400"
    >
      <path
        d="M6 15l6-6 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProcessCard({ title, desc }: Step) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{desc}</p>
        </div>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
          <ChevronUp />
        </span>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
        Our Process
      </h2>
      <p className="mt-2 text-center text-gray-500">
        Clear steps. Smart execution. Results you can count on.
      </p>

      {/* Center vertical line on large screens */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 hidden lg:block -translate-x-1/2 top-36 bottom-12 w-px bg-gray-200"
      />

      {/* Timeline grid */}
      <div className="mt-12 space-y-8">
        {steps.map((s, i) => {
          const isLeft = i % 2 === 0; // even indexes on the left
          return (
            <div
              key={s.title}
              className="grid grid-cols-1 lg:grid-cols-[1fr_56px_1fr] items-center gap-6"
            >
              {/* Left column */}
              <div className={isLeft ? '' : 'hidden lg:block'}>
                {isLeft && <ProcessCard {...s} />}
              </div>

              {/* Middle: step number */}
              <div className="hidden lg:flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-semibold">
                  {i + 1}
                </span>
              </div>

              {/* Right column */}
              <div className={!isLeft ? '' : 'hidden lg:block'}>
                {!isLeft && <ProcessCard {...s} />}
              </div>

              {/* Mobile layout: simple stacked card + badge */}
              <div className="lg:hidden">
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-500">Step</span>
                </div>
                <div className="mt-3">
                  <ProcessCard {...s} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
