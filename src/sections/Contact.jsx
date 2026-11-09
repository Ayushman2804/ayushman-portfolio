import { useState } from 'react';
import { Check, Copy, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Section from '../components/layout/Section';
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked; the address is still visible and selectable.
    }
  };

  return (
    <Section
      id="contact"
      title="Get in touch"
      intro="Hiring for a generative AI or LLM role, or want to talk through a project? Email is the quickest way to reach me."
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-[clamp(1.125rem,3.6vw,2.125rem)] font-medium tracking-tight underline decoration-accent decoration-2 underline-offset-[6px] [overflow-wrap:anywhere] hover:text-accent"
        >
          {PERSONAL_INFO.email}
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-[0.9375rem] text-muted transition-colors hover:text-fg"
        >
          {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
          <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
        </button>
      </div>

      <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
        <li>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2">
            <GithubIcon /> GitHub
          </a>
        </li>
        <li>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2">
            <LinkedinIcon /> LinkedIn
          </a>
        </li>
        <li>
          <a href={PERSONAL_INFO.resumePath} target="_blank" rel="noopener" className="link inline-flex items-center gap-2">
            <FileText className="h-4 w-4" /> Resume (PDF)
          </a>
        </li>
      </ul>
    </Section>
  );
}
