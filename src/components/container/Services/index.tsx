import React from 'react';

type Service = {
  icon: string;
  title: string;
  desc: string;
  featured?: boolean; // optional: to highlight one card
};

const services: Service[] = [
  {
    icon: './images/services/icon_web.png',
    title: 'Web Development',
    desc: 'Build fast, scalable, and SEO-friendly websites.',
  },
  {
    icon: './images/services/icon_mobile.png',
    title: 'Mobile App Development',
    desc: 'Native & cross-platform apps tailored to user needs.',
    featured: true,
  },
  {
    icon: './images/services/icon_uiux.png',
    title: 'UI/UX Design',
    desc: 'Delight users with intuitive and beautiful interfaces',
  },
  {
    icon: './images/services/icon_cloud.png',
    title: 'Cloud Solutions',
    desc: 'Secure and flexible cloud infrastructure for your growth.',
  },
  {
    icon: './images/services/icon_swdev.png',
    title: 'Software Development',
    desc: 'Custom solutions built around your business logic.',
  },
  {
    icon: './images/services/icon_infra.png',
    title: 'IT Infrastructure',
    desc: 'Scale your backend with reliable tech foundations.',
  },
  {
    icon: './images/services/icon_cyber.png',
    title: 'Cybersecurity Services',
    desc: 'Stay protected with enterprise-grade security.',
  },
  {
    icon: './images/services/icon_qa.png',
    title: 'QA Solutions',
    desc: 'Ensure performance with rigorous testing frameworks.',
  },
  {
    icon: './images/services/icon_support.png',
    title: 'IT Consulting & Support',
    desc: 'Make smarter tech decisions with expert guidance.',
  },
];

function ServiceCard({ icon, title, desc, featured }: Service) {
  return (
    <article
      className={[
        'rounded-2xl border bg-white p-6 shadow-sm transition',
        'border-gray-200 hover:shadow-md',
        'relative',
        featured ? 'ring-1 ring-orange-300' : 'ring-0',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <img src={icon} alt="" className="h-12 w-12 shrink-0" loading="lazy" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{desc}</p>
        </div>
      </div>

      {/* subtle rounded corners like the mock */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]" />
    </article>
  );
}

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
        Smart IT Solutions That Grow With You
      </h2>
      <p className="mt-2 text-center text-gray-500">
        Tailored tech to boost efficiency, security, and results.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
