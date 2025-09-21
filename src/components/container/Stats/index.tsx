import React from 'react';

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years of Experience' },
  { value: '10+', label: 'Industry Awards Won' },
  { value: '100%', label: 'Client Satisfaction Rate' },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading + subtext */}
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
        End-to-End IT Solutions That Drive Results
      </h2>
      <p className="mt-3 text-center text-gray-500 max-w-2xl mx-auto">
        From strategy to execution, we deliver solutions that grow your
        business.
      </p>

      {/* Circles */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center justify-center">
            <div className="h-48 w-48 sm:h-56 sm:w-56 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-orange-500">
                  {s.value}
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-900">
                  {s.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
