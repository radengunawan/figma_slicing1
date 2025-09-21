import Navbar from './components/container/Navbar';
import Hero from './components/container/HeroSection/Hero';
import BrandsRow from './components/container/BrandsRow';
import Stats from './components/container/Stats';
import Process from './components/container/Process';
import Services from './components/container/Services';
import Portfolio from './components/container/Portfolio';
import Industry from './components/container/Industry';

export default function App() {
  return (
    <main className="min-h-dvh bg-white text-gray-900">
      <Navbar />
      <Hero />
      <BrandsRow />
      <Stats />
      <Process />
      <Services />
      <Industry />
      <Portfolio />
    </main>
  );
}
