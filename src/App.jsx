import { MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Experience from './sections/Experience';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-accent px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Work />
          <Experience />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
