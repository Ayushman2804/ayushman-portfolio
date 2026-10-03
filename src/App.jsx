import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TechStackVisual from './components/TechStackVisual';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-accent-cyan/20 selection:text-accent-cyan overflow-x-hidden">
      {/* Top Animated Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue z-50 transition-all duration-75" 
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      
      {/* Ambient Top Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Content with elevated z-index */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <TechStackVisual />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
