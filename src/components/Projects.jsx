import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Sparkles, Terminal, Code2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'genai', label: 'GenAI & RAG' },
    { id: 'streaming', label: 'Streaming & MLOps' },
    { id: 'ml_fullstack', label: 'Full-Stack ML & Deep Learning' }
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'genai') return proj.id === 'rag-document-qa' || proj.id === 'resume-matcher';
    if (filter === 'streaming') return proj.id === 'sentiment-pipeline';
    if (filter === 'ml_fullstack') return proj.id === 'ott-monetization' || proj.id === 'time-series';
    return true;
  });

  return (
    <section id="projects" className="py-24 scroll-mt-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-cyan top-1/3 right-0 opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Production AI & Machine Learning Systems
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Engineered systems demonstrating RAG pipelines, transformer inference, real-time streaming, and predictive modeling strictly verified from my resume.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === cat.id
                  ? 'bg-accent-cyan text-dark-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-dark-900 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Interactive Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
