import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'architecture', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Architecture', href: '#architecture', id: 'architecture' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-dark-900/95 backdrop-blur-xl shadow-2xl shadow-black/60 border border-white/15'
            : 'bg-dark-900/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/30'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-sm sm:text-base font-semibold tracking-tight text-white group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-mono text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors">
            ayushman<span className="text-accent-cyan">.ai</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-dark-950/50 px-3 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Actions & Socials */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-white/5"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-white/5"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:border-accent-cyan/40 hover:text-white"
          >
            <FileText className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-xs text-accent-cyan bg-white/5 rounded-full border border-white/10"
            title="Resume"
          >
            <FileText className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-slate-400 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 p-4 rounded-2xl glass-panel bg-dark-900/95 border-white/10 shadow-2xl flex flex-col gap-2 sm:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between px-2">
            <span className="text-xs text-slate-400">Social Profiles</span>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
