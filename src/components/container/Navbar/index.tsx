import Button from '../../ui/Button';

const links = ['About', 'Service', 'Projects', 'Testimonials', 'FAQ'];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="./images/logo_light.png"
            alt="Your Logo"
            className="h-6 w-auto"
          />
          <span className="sr-only">Home</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-gray-900"
            >
              {l}
            </a>
          ))}
        </nav>

        <Button className="hidden sm:inline-flex rounded-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-2">
          Let’s Talk
        </Button>
      </div>
    </header>
  );
}
