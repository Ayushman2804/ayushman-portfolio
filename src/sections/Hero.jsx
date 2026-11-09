import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import Button from '../components/ui/Button';
import EmbeddingTile from '../components/ui/EmbeddingTile';
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons';

/*
  The pitch reads like a RAG answer: plain sentences with citation markers
  that link to the projects backing each claim. Strings are text; objects are citations.
*/
const PITCH = [
  'Final-year Computer Science student at KIIT. Recently: a RAG system that answers questions from your own documents',
  { cite: 'rag-document-qa' },
  ', a Kafka pipeline that scores Reddit sentiment as posts arrive',
  { cite: 'sentiment-pipeline' },
  ', and churn models for a streaming platform',
  { cite: 'ott-monetization' },
  '.',
];

function Citation({ id }) {
  const index = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[index];
  return (
    <a href={`#project-${id}`} className="cite" aria-label={`Source ${index + 1}: ${project.title}`} title={project.title}>
      {index + 1}
    </a>
  );
}

// Splits the pitch into words (and citations) so it can stream in like model output.
function tokens() {
  const out = [];
  PITCH.forEach((part, i) => {
    if (typeof part !== 'string') return out.push({ key: `c${i}`, cite: part.cite });
    part.split(/(\s+)/).forEach((t, j) => t && out.push({ key: `${i}-${j}`, text: t }));
  });
  return out;
}

function StreamedPitch() {
  const reduce = useReducedMotion();
  const parts = tokens();

  if (reduce) {
    return parts.map((t) => (t.cite ? <Citation key={t.key} id={t.cite} /> : t.text));
  }

  return (
    <motion.span initial="hidden" animate="shown" variants={{ shown: { transition: { staggerChildren: 0.022, delayChildren: 0.35 } } }}>
      {parts.map((t) =>
        /^\s+$/.test(t.text ?? '') ? (
          t.text
        ) : (
          <motion.span
            key={t.key}
            variants={{ hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: 0.18 } } }}
          >
            {t.cite ? <Citation id={t.cite} /> : t.text}
          </motion.span>
        )
      )}
      <motion.span
        aria-hidden="true"
        className="ml-1 inline-block h-[1.05em] w-[0.5em] translate-y-[0.18em] bg-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0, 1, 0, 1, 0] }}
        transition={{ duration: 2.6, times: [0, 0.05, 0.55, 0.65, 0.75, 0.85, 0.92, 1], delay: 0.35 }}
      />
    </motion.span>
  );
}

function Portrait({ className }) {
  if (PERSONAL_INFO.photo) {
    return (
      <img
        src={PERSONAL_INFO.photo}
        alt={`Portrait of ${PERSONAL_INFO.name}`}
        className={`${className} border border-line object-cover`}
        width="512"
        height="640"
      />
    );
  }
  return <EmbeddingTile seed={PERSONAL_INFO.name} cols={12} rows={15} label="AB" className={`${className} border border-line`} />;
}

export default function Hero() {
  return (
    <section aria-label="Introduction" className="container-page pb-20 pt-12 sm:pb-28 sm:pt-24">
      <div className="grid items-end gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="max-w-[44rem]">
          <Portrait className="mb-8 aspect-square w-20 rounded-xl md:hidden" />

          <h1 className="text-[clamp(2.75rem,7.5vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            {PERSONAL_INFO.name}
          </h1>
          <p className="mt-5 text-[clamp(1.25rem,2.4vw,1.625rem)] leading-snug tracking-[-0.01em]">
            I build language-model systems that answer with sources.
          </p>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            <StreamedPitch />
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#work">See my work</Button>
            <Button href={PERSONAL_INFO.resumePath} download variant="secondary">
              Download resume (PDF)
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] text-muted">
            <p className="flex items-start gap-2 text-fg">
              <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {PERSONAL_INFO.availability}
            </p>
            <ul className="flex items-center gap-1" aria-label="Profiles">
              <li>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface hover:text-fg">
                  <GithubIcon className="h-[18px] w-[18px]" />
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface hover:text-fg">
                  <LinkedinIcon className="h-[18px] w-[18px]" />
                </a>
              </li>
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface hover:text-fg">
                  <Mail className="h-[18px] w-[18px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Portrait className="hidden aspect-[4/5] w-64 rounded-2xl md:block lg:w-72" />
      </div>
    </section>
  );
}
