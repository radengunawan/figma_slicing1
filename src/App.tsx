import Navbar from './components/container/Navbar';
import Hero from './components/container/HeroSection/Hero';
import BrandsRow from './components/container/BrandsRow';
import Stats from './components/container/Stats';

export default function App() {
  return (
    <main className="min-h-dvh bg-white text-gray-900">
      <Navbar />
      <Hero />
      <BrandsRow />
      <Stats />
    </main>
  );
}
