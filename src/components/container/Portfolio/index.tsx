import React from 'react';

type Item = {
  img: string;
  tag: string; // e.g., "Landing Page"
  title: string; // e.g., "Portofolio 1"
  alt: string;
};

const items: Item[] = [
  {
    img: './images/portofolio/p4_porto1.png',
    tag: 'Landing Page',
    title: 'Portofolio 1',
    alt: 'Portfolio 1 preview',
  },
  {
    img: './images/portofolio/p4_porto2.png',
    tag: 'Landing Page',
    title: 'Portofolio 2',
    alt: 'Portfolio 2 preview',
  },
  {
    img: './images/portofolio/p4_porto3.png',
    tag: 'Landing Page',
    title: 'Portofolio 3',
    alt: 'Portfolio 3 preview',
  },
];

function PortfolioCard({ img, tag, title, alt }: Item) {
  return (
    <figure>
      {/* Image frame */}
      <div className="overflow-hidden rounded-[28px] border border-gray-200 shadow-sm">
        {/* fixed height + object-cover → no aspect-ratio plugin needed */}
        <img
          src={img}
          alt={alt}
          className="w-full h-80 md:h-[420px] object-cover"
          loading="lazy"
        />
      </div>

      {/* Caption */}
      <figcaption className="mt-4">
        <div className="text-sm font-medium text-orange-500">{tag}</div>
        <div className="mt-1 text-2xl font-semibold text-gray-900">{title}</div>
      </figcaption>
    </figure>
  );
}

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
        From Vision to Launch! Projects We’re Proud Of
      </h2>
      <p className="mt-2 text-center text-gray-500 max-w-3xl mx-auto">
        Take a closer look at our recent work powering startups, enterprises,
        and everything in between.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it) => (
          <PortfolioCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
