import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Sparkles, 
  Search, 
  Terminal, 
  Cpu, 
  Server, 
  Cloud, 
  CheckSquare, 
  Binary,
  Layers
} from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    genai: <Cpu className="w-4 h-4 text-accent-cyan" />,
    backend: <Server className="w-4 h-4 text-accent-purple" />,
    programming: <Terminal className="w-4 h-4 text-emerald-400" />,
    core_cs: <Binary className="w-4 h-4 text-amber-400" />,
    cloud_mlops: <Cloud className="w-4 h-4 text-blue-400" />,
    testing_tools: <CheckSquare className="w-4 h-4 text-rose-400" />
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((category) => {
      const isCategoryMatch = selectedCategory === 'all' || selectedCategory === category.id;
      if (!isCategoryMatch) return null;

      const filteredSkills = category.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );

      if (searchQuery.trim() !== '' && filteredSkills.length === 0) {
        return null;
      }

      return {
        ...category,
        skills: filteredSkills
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-24 scroll-mt-28 relative overflow-hidden bg-dark-900/30">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Categorized Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Organized strictly according to verified curriculum and project engineering experience. No arbitrary percentages.
          </p>
        </div>

        {/* Controls: Search & Category Filters */}
        <div className="mb-10 space-y-4">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., LangChain, FAISS, Docker)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-950/80 border border-white/10 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent-cyan text-dark-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-dark-950/80 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white/15 text-white border border-white/20 shadow-sm'
                    : 'bg-dark-950/80 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-70 font-mono">({cat.skills.length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className={`glass-panel p-6 rounded-2xl border-white/10 flex flex-col justify-between transition-all duration-300 ${
                cat.id === 'genai' ? 'ring-1 ring-accent-cyan/30 bg-dark-900/80' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      {categoryIcons[cat.id]}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {cat.skills.length}
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => {
                    const isGenAI = cat.id === 'genai';
                    return (
                      <span
                        key={sIdx}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-default ${
                          isGenAI
                            ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 hover:border-accent-cyan/40 hover:bg-accent-cyan/15'
                            : 'bg-dark-950/70 text-slate-300 border border-white/5 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom footer stamp */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>VERIFIED RESUME</span>
                <span className="text-slate-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search returns nothing */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border-white/10 max-w-md mx-auto">
            <p className="text-slate-400 text-sm mb-2">No skills matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="text-xs text-accent-cyan hover:underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
