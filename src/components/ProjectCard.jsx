import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { Github } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="group relative rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 border-white/10 flex flex-col justify-between transition-all duration-300">
      {/* Subtle top ambient glow on hover */}
      <div className="absolute top-0 right-1/4 w-36 h-36 bg-accent-cyan/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

      <div>
        {/* Card Header: Number & Category Badge */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-accent-cyan bg-accent-cyan/10 px-2.5 py-1 rounded-full border border-accent-cyan/20">
              {project.number}
            </span>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              {project.category}
            </span>
          </div>

          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-full border border-accent-purple/20">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Project Short Description */}
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
          {project.summary}
        </p>

        {/* Key Functionality Bullets */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
            Key Architecture & Features:
          </div>
          <ul className="space-y-1.5">
            {project.keyPoints.slice(0, 2).map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="line-clamp-2">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950/80 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 hover:border-accent-cyan/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Deep Dive Details</span>
          <ChevronRight className="w-3.5 h-3.5 text-accent-cyan" />
        </button>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-xs font-mono"
          title="Ayushman's GitHub Profile"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">Profile</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
