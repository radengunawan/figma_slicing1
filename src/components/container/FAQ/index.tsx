import React, { useState } from 'react';

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: 'What services do you offer?',
    a: 'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
  },
  {
    q: 'How do I know if this is right for my business?',
    a: 'Book a free consult — we’ll assess your goals and recommend the right approach.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Every project is different. Let’s talk about your needs to get a tailored estimate.',
  },
  {
    q: 'How long does it take?',
    a: 'Depends on scope — but we always prioritize quality and deadlines.',
  },
  {
    q: 'Can I start with a small project first?',
    a: 'Absolutely. We often begin with MVPs or pilot projects.',
  },
];

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="relative h-5 w-5 inline-flex items-center justify-center"
    >
      <span className="absolute block h-[2px] w-5 bg-gray-800 transition-transform" />
      <span
        className={[
          'absolute block h-[2px] w-5 bg-gray-800 transition-transform',
          open ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100',
        ].join(' ')}
      />
    </span>
  );
}

function Item({
  i,
  qa,
  open,
  onToggle,
}: {
  i: number;
  qa: QA;
  open: boolean;
  onToggle: (i: number) => void;
}) {
  const panelId = `faq-panel-${i}`;
  const btnId = `faq-btn-${i}`;
  return (
    <div className="border-b last:border-b-0 border-gray-200">
      <button
        id={btnId}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => onToggle(i)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-gray-900">{qa.q}</span>
        <PlusMinus open={open} />
      </button>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={btnId}
          className="pb-6 -mt-1 text-gray-500"
        >
          {qa.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  // open the first question by default
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] items-start gap-10">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Need Help? Start <br className="hidden sm:block" />
            Here.
          </h2>
        </div>

        <p className="text-gray-500 lg:text-right">
          Everything you need to <br className="hidden lg:block" />
          know — all in one place.
        </p>
      </div>

      <hr className="mt-6 border-gray-200" />

      {/* Content row */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
        {/* Left: Accordion */}
        <div className="rounded-2xl">
          {FAQS.map((qa, i) => (
            <Item
              key={qa.q}
              i={i}
              qa={qa}
              open={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </div>

        {/* Right: CTA card */}
        <aside className="order-first lg:order-last">
          <div className="rounded-3xl bg-orange-500 text-white p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold leading-snug">
              Let’s talk it <br /> through
            </h3>
            <p className="mt-2 text-white/90">
              book a free consultation with our team.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl">
              <img
                src="/images/faq/p6_lets.png"
                alt="Team consultation"
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-black px-5 py-3 font-semibold text-white hover:opacity-95"
            >
              Free Consultation
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
