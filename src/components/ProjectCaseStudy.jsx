import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import EmbeddingTile from './ui/EmbeddingTile';
import { TagList } from './ui/Tag';
import ProjectLinks from './ProjectLinks';

const STEPS = [
  ['problem', 'The problem'],
  ['approach', 'Approach'],
  ['implementation', 'How it’s built'],
  ['outcome', 'Outcome'],
];

/*
  Uses the native <dialog> element: showModal() makes the rest of the page inert,
  traps focus and closes on Esc. We add scroll locking and return focus to the trigger.
*/
export default function ProjectCaseStudy({ project, onClose }) {
  const ref = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!project || !dialog) return;
    trigger.current = document.activeElement;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
      if (dialog.open) dialog.close();
      trigger.current?.focus?.();
    };
  }, [project]);

  if (!project) return null;
  const number = PROJECTS.findIndex((p) => p.id === project.id) + 1;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="case-study-title"
      className="case-study m-auto max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-line bg-bg p-0 text-fg shadow-2xl"
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-bg/95 px-6 py-4 backdrop-blur sm:px-8">
        <h2 id="case-study-title" className="text-xl font-medium tracking-tight">
          <span className="cite mr-2 !ml-0">{number}</span>
          {project.title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="-mr-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-surface hover:text-fg"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="px-6 py-6 sm:px-8 sm:py-8">
        <p className="text-lg">{project.tagline}</p>

        {project.image ? (
          <img src={project.image} alt={`Screenshot of ${project.title}`} className="mt-6 aspect-[16/10] w-full rounded-xl border border-line object-cover" />
        ) : (
          <EmbeddingTile seed={project.id} className="mt-6 aspect-[16/7] w-full rounded-xl border border-line" />
        )}

        <dl className="mt-8 space-y-6">
          {STEPS.map(([key, label]) => (
            <div key={key}>
              <dt className="font-medium">{label}</dt>
              <dd className="mt-1 leading-relaxed text-muted">{project[key]}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-8 font-medium">What it does</h3>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
          {project.keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <TagList items={project.techStack} className="mt-8" />
        <ProjectLinks project={project} className="mt-6" />
      </div>
    </dialog>
  );
}
