import React from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

function CircleBtn({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-gray-300 bg-white/60 hover:bg-white transition"
      title={label}
    >
      {children}
    </a>
  );
}

// If you have brand SVGs, replace the <span> with <img src="/icons/facebook.svg" .../>
export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-[28px] border border-gray-200 bg-gray-50 p-6 sm:p-8 md:p-12">
        {/* Top row */}
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight text-gray-900">
            LET’S DISCUSS <br className="hidden sm:block" />
            YOUR IDEAS
          </h3>
          <img
            src="./images/logo_light.png"
            alt="Your Logo"
            className="h-8 w-auto"
          />
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap gap-x-10 gap-y-3 text-gray-800">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:underline">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CircleBtn label="Facebook" href="#">
              <span className="text-base font-semibold">f</span>
            </CircleBtn>
            <CircleBtn label="Instagram" href="#">
              <span className="text-base font-semibold">ig</span>
            </CircleBtn>
            <CircleBtn label="LinkedIn" href="#">
              <span className="text-base font-semibold">in</span>
            </CircleBtn>
            <CircleBtn label="TikTok" href="#">
              <span className="text-base font-semibold">t</span>
            </CircleBtn>
          </div>
        </div>
      </div>
    </footer>
  );
}
