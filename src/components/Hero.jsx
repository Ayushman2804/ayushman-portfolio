import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Cpu, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Bot,
  ChevronDown
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('rag');

  const pipelineStages = {
    rag: {
      title: "RAG Retrieval Pipeline",
      tech: "LangChain • FAISS • Hugging Face",
      steps: [
        { label: "Document Ingestion", detail: "PDF / Markdown chunking (RecursiveCharacterTextSplitter, overlap=100)" },
        { label: "Vector Indexing", detail: "Dense semantic embeddings via sentence-transformers stored in FAISS" },
        { label: "Context Injection", detail: "Prompt template grounding to eliminate hallucinations" },
        { label: "Answer Generation", detail: "Streaming accurate response with source citations" }
      ],
      codeSnippet: `rag_chain = RetrievalQA.from_chain_type(
    llm=HuggingFacePipeline(pipeline=pipe),
    chain_type="stuff",
    retriever=faiss_db.as_retriever(search_kwargs={"k": 4}),
    chain_type_kwargs={"prompt": CUSTOM_RAG_PROMPT}
)`
    },
    agent: {
      title: "Autonomous Agent Workflow",
      tech: "LangChain • Tool Calling • LLM Orchestration",
      steps: [
        { label: "Goal Decomposition", detail: "Parse user intent into atomic execution steps" },
        { label: "Tool Selection", detail: "Dynamic routing between FAISS knowledge base & live APIs" },
        { label: "State Observation", detail: "Evaluate tool outputs & adjust plan dynamically" },
        { label: "Final Synthesis", detail: "Formulate cohesive, verifiable conclusion" }
      ],
      codeSnippet: `agent_executor = AgentExecutor(
    agent=create_openai_tools_agent(llm, tools, prompt),
    tools=[vector_search_tool, custom_api_tool],
    verbose=True,
    handle_parsing_errors=True
)`
    },
    streaming: {
      title: "Streaming Event Ingestion",
      tech: "FastAPI • Kafka • Reddit API",
      steps: [
        { label: "Live Event Stream", detail: "Reddit API data ingestion buffered into Kafka topics" },
        { label: "Distributed Consumer", detail: "Async batching of textual sentiment streams" },
        { label: "Transformer Inference", detail: "Hugging Face model classification on live feeds" },
        { label: "Real-Time Dashboard", detail: "FastAPI endpoints feeding live Streamlit visualizations" }
      ],
      codeSnippet: `@app.post("/api/v1/infer-sentiment")
async def analyze_stream(batch: IngestionBatch):
    scores = sentiment_model.predict(batch.texts)
    await kafka_producer.send("analyzed-stream", scores)
    return {"status": "success", "processed": len(batch.texts)}`
    }
  };

  const current = pipelineStages[activeTab];

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-accent-cyan/15 via-accent-purple/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top status indicator pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-lg shadow-emerald-950/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Generative AI & LLM Engineering Roles</span>
          </div>
        </div>

        {/* Main Name & Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
            AYUSHMAN <span className="gradient-accent">BANERJEE</span>
          </h1>

          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-accent-cyan tracking-wide">
            GENERATIVE AI & LLM ENGINEER
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-200 tracking-tight mb-6">
            Building Intelligent Systems with Generative AI
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            Final-year Computer Science student at KIIT specializing in RAG architectures, 
            LLM agent frameworks, vector databases (FAISS, Pinecone), and scalable production AI pipelines 
            served via FastAPI and containerized microservices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-950 font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Ayushman_Banerjee_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/15 text-slate-200 font-semibold text-sm transition-all hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-accent-cyan" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium text-sm transition-all hover:text-white"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social icons & location note */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              <span>Durgapur, West Bengal, India</span>
            </div>
            <span className="text-slate-600">•</span>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.githubDisplay}</span>
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Interactive AI Architecture Terminal Widget (Framer-inspired interactive element) */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl glass-panel border-white/10 shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-dark-900/90 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                ai-core-pipeline.py
              </span>
            </div>

            {/* Pipeline Tabs */}
            <div className="flex items-center gap-1 bg-dark-950 p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setActiveTab('rag')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activeTab === 'rag'
                    ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                RAG Pipeline
              </button>
              <button
                onClick={() => setActiveTab('agent')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activeTab === 'agent'
                    ? 'bg-accent-purple/20 text-accent-purple border border-accent-purple/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                AI Agent
              </button>
              <button
                onClick={() => setActiveTab('streaming')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activeTab === 'streaming'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Kafka Stream
              </button>
            </div>
          </div>

          {/* Interactive Pipeline Content */}
          <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-dark-900/60">
            {/* Left: Pipeline flow steps */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent-cyan" />
                  {current.title}
                </h4>
                <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                  {current.tech}
                </span>
              </div>

              <div className="space-y-2.5">
                {current.steps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-lg bg-dark-850/80 border border-white/5 flex items-start gap-3 hover:border-white/10 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-[10px] font-mono text-accent-cyan shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{step.label}</div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{step.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Code implementation snippet */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
                  <span>// Implementation Logic</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Production Grade
                  </span>
                </div>
                <div className="rounded-xl bg-dark-950 p-4 border border-white/5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                  <pre className="text-slate-300">
                    <code>{current.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Status info */}
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-cyan" />
                  <span className="text-xs text-slate-300 font-medium">Verified Resume Architecture</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">KIIT B.Tech CSE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Framer-Style Scroll Down Cue */}
        <div className="mt-14 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-slate-500 hover:text-accent-cyan transition-colors"
            aria-label="Scroll down to explore"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-accent-cyan transition-colors">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-700 group-hover:border-accent-cyan/60 flex items-start justify-center p-1 transition-colors">
              <span className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
            </div>
            <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-accent-cyan animate-pulse transition-colors -mt-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
