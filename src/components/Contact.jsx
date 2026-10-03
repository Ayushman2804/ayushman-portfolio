import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#a855f7', '#10b981']
      });
    } catch (err) {
      // fallback
    }

    setFormSubmitted(true);
    
    // Create mailto fallback link
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Ayushman,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    
    // Open user's email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 scroll-mt-28 relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-accent-cyan/10 via-accent-purple/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Open to Generative AI engineering roles, LLM systems development, and innovative machine learning collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards & Quick Buttons */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-accent-cyan transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Phone / WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-accent-purple transition-colors"
                  >
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Copy Phone"
                aria-label="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Quick Link Buttons (Email Me, GitHub, LinkedIn) */}
            <div className="p-5 rounded-2xl glass-panel border-white/10 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Direct Profiles & Actions
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-950 font-semibold text-xs transition-all hover:brightness-110 shadow-lg shadow-cyan-950/40"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Me Directly
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-dark-950 hover:bg-dark-850 border border-white/10 text-white font-medium text-xs transition-all hover:border-white/20"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub Profile
                </span>
                <span className="text-[11px] font-mono text-slate-400">Ayushman2804</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-dark-950 hover:bg-dark-850 border border-white/10 text-white font-medium text-xs transition-all hover:border-white/20"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-accent-blue" /> LinkedIn Profile
                </span>
                <span className="text-[11px] font-mono text-slate-400">Connect</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border-white/10 relative">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent-cyan" />
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Have an engineering opportunity or project in mind? Drop a message and I'll get back to you promptly.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-300">
                  Thank you! If your email client didn't open automatically, feel free to email me directly at{' '}
                  <span className="text-accent-cyan">{PERSONAL_INFO.email}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-slate-400 hover:text-white underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Generative AI Engineering Role / Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, project, or technical challenge..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all hover:border-accent-cyan/50 hover:text-accent-cyan"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
