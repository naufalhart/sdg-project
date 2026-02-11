import Navbar from './components/navbar/page';
import Hero from './components/hero/page';
import About from './components/about/page';
import Services from './components/services/page';
import Carousel from './components/carousel/page';
import Projects from './components/projects/page';
import Contact from './components/contact/page';
import Footer from './components/footer/page';
import './globals.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Carousel />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
