import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Workflow, 
  Server, 
  Cloud, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function TechStackVisual() {
  const [activeCluster, setActiveCluster] = useState('rag');

  const clusters = {
    llm: {
      id: 'llm',
      title: 'Foundation Models & LLM Inference',
      icon: <Cpu className="w-5 h-5 text-accent-purple" />,
      items: ['GPT', 'LLaMA', 'Gemini', 'Claude', 'HuggingFace Transformers', 'Fine-Tuning'],
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300',
      description: 'Orchestrating state-of-the-art foundation models with custom system prompts, temperature controls, and parameter fine-tuning for domain-specific tasks.'
    },
    rag: {
      id: 'rag',
      title: 'RAG & Vector Retrieval Engine',
      icon: <Database className="w-5 h-5 text-accent-cyan" />,
      items: ['FAISS', 'Pinecone', 'Weaviate', 'Sentence Transformers', 'LangChain', 'LlamaIndex'],
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300',
      description: 'Building dense semantic embeddings, hybrid keyword + vector retrieval, and custom chunking algorithms to eliminate hallucinations.'
    },
    agents: {
      id: 'agents',
      title: 'AI Agents & Orchestration',
      icon: <Workflow className="w-5 h-5 text-emerald-400" />,
      items: ['LangChain Agents', 'LlamaIndex Workflows', 'Tool Calling', 'Prompt Engineering'],
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300',
      description: 'Creating autonomous agent loops with dynamic tool invocation, multi-step reasoning, and deterministic fallback strategies.'
    },
    backend: {
      id: 'backend',
      title: 'Backend & Event Streaming',
      icon: <Server className="w-5 h-5 text-amber-400" />,
      items: ['FastAPI', 'Kafka', 'Streamlit', 'Plotly Dash', 'Reddit API', 'PyTorch'],
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300',
      description: 'Serving high-concurrency low-latency REST endpoints via FastAPI and processing event-driven message feeds through Apache Kafka.'
    },
    cloud: {
      id: 'cloud',
      title: 'Cloud, MLOps & Containerization',
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      items: ['Docker', 'Google Cloud Platform (GCP)', 'Cloud Run', 'GKE', 'MLflow', 'W&B', 'CI/CD'],
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300',
      description: 'Standardizing reproducible Docker containers and deploying scalable workloads to Google Cloud Platform with MLflow lifecycle tracking.'
    }
  };

  const active = clusters[activeCluster];

  return (
    <section id="architecture" className="py-24 scroll-mt-28 relative overflow-hidden bg-dark-900/40">
      <div className="ambient-glow-purple -top-10 left-1/3 opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            System Topology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            AI System Architecture & Connected Ecosystem
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            An interconnected architectural view of how my Generative AI models, vector stores, backend microservices, and MLOps pipelines interact.
          </p>
        </div>

        {/* Interactive Architecture Canvas */}
        <div className="relative rounded-3xl glass-panel p-6 sm:p-10 border-white/10 overflow-hidden">
          {/* Top Cluster Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {Object.values(clusters).map((cl) => (
              <button
                key={cl.id}
                onClick={() => setActiveCluster(cl.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCluster === cl.id
                    ? 'bg-white/15 text-white border border-white/20 shadow-md'
                    : 'bg-dark-950 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {cl.icon}
                <span>{cl.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>

          {/* Central Architecture Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Node Diagram (Left 7 cols) */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[360px] p-4 rounded-2xl bg-dark-950/70 border border-white/5">
              {/* Background circular radar grid */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full border border-white/5 border-dashed" />
                <div className="w-52 h-52 rounded-full border border-white/5 absolute" />
                <div className="w-32 h-32 rounded-full border border-accent-cyan/10 absolute animate-pulse" />
              </div>

              {/* Central AI Node */}
              <div className="relative z-10 p-5 rounded-2xl bg-gradient-to-br from-dark-900 to-dark-850 border border-accent-cyan/40 shadow-xl shadow-cyan-950/50 flex flex-col items-center text-center max-w-[190px]">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan mb-2">
                  <Sparkles className="w-6 h-6 animate-spin-slow" />
                </div>
                <div className="text-sm font-bold text-white tracking-tight">
                  Generative AI Core
                </div>
                <div className="text-[10px] font-mono text-accent-cyan mt-1">
                  Engineered Pipelines
                </div>
              </div>

              {/* Connected Orbiting Subsystem Pills */}
              <div className="absolute top-4 left-6 z-20">
                <button
                  onClick={() => setActiveCluster('llm')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    activeCluster === 'llm'
                      ? 'bg-purple-950/80 border-purple-400 text-purple-300 scale-105 shadow-lg shadow-purple-900/40'
                      : 'bg-dark-900/90 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  LLMs (GPT/LLaMA/Gemini)
                </button>
              </div>

              <div className="absolute top-4 right-6 z-20">
                <button
                  onClick={() => setActiveCluster('rag')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    activeCluster === 'rag'
                      ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 scale-105 shadow-lg shadow-cyan-900/40'
                      : 'bg-dark-900/90 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  FAISS & Pinecone RAG
                </button>
              </div>

              <div className="absolute bottom-4 left-6 z-20">
                <button
                  onClick={() => setActiveCluster('backend')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    activeCluster === 'backend'
                      ? 'bg-amber-950/80 border-amber-400 text-amber-300 scale-105 shadow-lg shadow-amber-900/40'
                      : 'bg-dark-900/90 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  FastAPI & Kafka Stream
                </button>
              </div>

              <div className="absolute bottom-4 right-6 z-20">
                <button
                  onClick={() => setActiveCluster('cloud')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    activeCluster === 'cloud'
                      ? 'bg-blue-950/80 border-blue-400 text-blue-300 scale-105 shadow-lg shadow-blue-900/40'
                      : 'bg-dark-900/90 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  Docker & GCP Cloud Run
                </button>
              </div>
            </div>

            {/* Subsystem Details & Component List (Right 5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-dark-900/80 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {active.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {active.title}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    Active Architecture Node
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {active.description}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Integrated Technologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.items.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-950 text-slate-200 border border-white/10 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>PIPELINE ORCHESTRATION</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> High Availability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
