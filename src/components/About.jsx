import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { 
  GraduationCap, 
  Brain, 
  Layers, 
  Database, 
  Workflow, 
  Server, 
  Cloud, 
  Sparkles,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-accent-cyan" />,
      title: "Generative AI & LLMs",
      desc: "Specializing in prompt engineering, fine-tuning foundation models, and agentic workflows across GPT, LLaMA, Gemini, and Claude ecosystems."
    },
    {
      icon: <Database className="w-5 h-5 text-accent-purple" />,
      title: "RAG & Vector Databases",
      desc: "Building low-hallucination semantic search and retrieval systems using FAISS, Pinecone, and Weaviate with custom chunking strategies."
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      title: "Production Backend & Streaming",
      desc: "Exposing robust inference microservices using FastAPI, Python, and Kafka event streams with Streamlit and Plotly Dash interfaces."
    },
    {
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      title: "Cloud & MLOps Infrastructure",
      desc: "Containerizing services with Docker and deploying to Google Cloud Platform (Cloud Run, GKE), Vercel, and Render with MLflow tracking."
    }
  ];

  return (
    <section id="about" className="py-24 scroll-mt-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About My Work & Engineering Philosophy
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Bridging foundational Computer Science theory with production-grade Generative AI pipelines and scalable backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Story & Background */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl -z-10" />

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-accent-cyan" />
                Computer Science at KIIT
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a final-year <span className="text-white font-medium">Computer Science and Engineering</span> student 
                  at <span className="text-accent-cyan font-medium">Kalinga Institute of Industrial Technology (KIIT)</span>, Bhubaneswar (Class of 2026).
                </p>
                <p>
                  My engineering focus is centered on the rapid evolution of <span className="text-white font-medium">Generative AI</span>, 
                  large language model ecosystems, <span className="text-white font-medium">RAG architectures</span>, and autonomous AI agent frameworks.
                </p>
                <p>
                  Rather than treating AI models as black-box toys, I design end-to-end architectures: from raw data ingestion and custom chunking 
                  to dense vector indexing in FAISS, context-grounded prompt templates, and low-latency microservice serving with FastAPI and Docker.
                </p>
              </div>

              {/* Education highlight badge */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>KIIT University • B.Tech CSE</span>
                </div>
                <span className="text-accent-cyan">Expected 2026</span>
              </div>
            </div>

            {/* Quick Core Strengths Box */}
            <div className="glass-panel p-5 rounded-2xl border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                Key Architectural Capabilities
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-950/60 border border-white/5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>RAG Hallucination Control</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-950/60 border border-white/5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                  <span>FAISS / Pinecone Indexing</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-950/60 border border-white/5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>FastAPI Microservices</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-950/60 border border-white/5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Kafka Stream Ingestion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SYSTEM PILLAR 0{idx + 1}</span>
                  <span className="text-slate-400">Production</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
