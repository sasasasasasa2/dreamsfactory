import Navbar from '@/components/ui/navbar';
import Hero from '@/components/sections/hero';
import Portfolio from '@/components/sections/portfolio';
import Services from '@/components/sections/services';
import Clients from '@/components/sections/clients';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-df-dark">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
