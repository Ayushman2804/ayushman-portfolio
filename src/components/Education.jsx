import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, Sparkles, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 scroll-mt-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Formal Education
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Grounded in core Computer Science fundamentals and software engineering principles.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="relative rounded-3xl glass-panel p-6 sm:p-8 border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-cyan/20 to-accent-blue/20 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {EDUCATION.institution}
                </h3>
                <p className="text-sm font-semibold text-accent-cyan mt-1">
                  {EDUCATION.degree}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                <span>{EDUCATION.graduation}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{EDUCATION.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-accent-cyan" />
                Undergraduate Status
              </div>
              <p className="text-xs text-slate-300">
                {EDUCATION.status} • Final-year candidate completing senior engineering coursework.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
                Specialized Coursework Domain
              </div>
              <p className="text-xs text-slate-300">
                Data Structures, DBMS, Operating Systems, Computer Networks, Software Engineering & AI Systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
