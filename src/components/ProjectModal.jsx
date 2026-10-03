import React, { useEffect } from 'react';
import { 
  X, 
  Layers, 
  AlertCircle, 
  Compass, 
  Code2, 
  CheckCircle2, 
  Cpu, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { Github } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl glass-panel bg-dark-900/95 border-white/15 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
            PROJECT {project.number}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-slate-400 mb-6">
          {project.tagline}
        </p>

        {/* Technologies Grid */}
        <div className="mb-6 p-4 rounded-xl bg-dark-950/60 border border-white/5">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            Technologies & Frameworks
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Structured Sections: Problem, Approach, Implementation, Outcome */}
        <div className="space-y-5 text-sm">
          {/* Problem */}
          <div className="p-4 rounded-xl bg-dark-950/40 border border-white/5">
            <h4 className="font-semibold text-slate-200 flex items-center gap-2 mb-1.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              Problem Definition
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="p-4 rounded-xl bg-dark-950/40 border border-white/5">
            <h4 className="font-semibold text-slate-200 flex items-center gap-2 mb-1.5">
              <Compass className="w-4 h-4 text-accent-cyan shrink-0" />
              Architectural Approach
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Implementation Highlights */}
          <div className="p-4 rounded-xl bg-dark-950/40 border border-white/5">
            <h4 className="font-semibold text-slate-200 flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-accent-purple shrink-0" />
              Implementation & Core Functionality
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
              {project.implementation}
            </p>
            <ul className="space-y-1.5 pl-1">
              {project.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <h4 className="font-semibold text-emerald-300 flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Verified Project Outcome
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Fact-checked against official resume</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-950 hover:bg-dark-800 border border-white/10 text-slate-200 text-xs font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Ayushman's GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
