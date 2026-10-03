import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, Cloud, Cpu, Briefcase, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certIcons = {
    'gcp-genai': <Cloud className="w-6 h-6 text-accent-cyan" />,
    'ibm-aiml': <Cpu className="w-6 h-6 text-accent-purple" />,
    'lbs-program': <Briefcase className="w-6 h-6 text-emerald-400" />
  };

  return (
    <section id="certifications" className="py-24 scroll-mt-28 relative overflow-hidden bg-dark-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Formal certifications validating competencies in Generative AI, Machine Learning, and Technology Strategy.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {certIcons[cert.id]}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-accent-cyan mb-4 flex items-center gap-1.5">
                  <span>Issued by {cert.issuer}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
                <span className="text-slate-500">Official Resume</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
