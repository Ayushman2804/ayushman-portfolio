import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Sparkles, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative bg-dark-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2 text-lg font-bold text-white mb-1">
              <span>{PERSONAL_INFO.name}</span>
            </a>
            <p className="text-xs font-mono text-slate-400">
              Generative AI • LLMs • Machine Learning • Software Engineering
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              title="Email"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>KIIT University B.Tech CSE (Expected 2026)</span>
            <span>•</span>
            <span className="text-slate-400">Strictly Resume Sourced</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
