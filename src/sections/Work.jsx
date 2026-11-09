import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import EmbeddingTile from '../components/ui/EmbeddingTile';
import { TagList } from '../components/ui/Tag';
import ProjectLinks from '../components/ProjectLinks';
import ProjectCaseStudy from '../components/ProjectCaseStudy';

// Projects are numbered as sources so the hero's citation markers point at them.
const numbered = PROJECTS.map((p, i) => ({ ...p, number: i + 1 }));
const featured = numbered.filter((p) => p.featured);
const others = numbered.filter((p) => !p.featured);

function Media({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full overflow-hidden rounded-xl border border-line"
      aria-label={`Open case study: ${project.title}`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <EmbeddingTile seed={project.id} className="aspect-[16/10] w-full" />
      )}
    </button>
  );
}

function FeaturedProject({ project, flip, onOpen }) {
  return (
    <article id={`project-${project.id}`} className="project grid items-center gap-6 md:grid-cols-12 md:gap-10">
      <div className={`md:col-span-7 ${flip ? 'md:order-last' : ''}`}>
        <Media project={project} onOpen={onOpen} />
      </div>
      <div className="md:col-span-5">
        <h3 className="text-2xl font-medium tracking-tight">
          <span className="cite !ml-0 mr-2.5">{project.number}</span>
          {project.title}
        </h3>
        <p className="mt-3 text-lg leading-snug">{project.tagline}</p>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
        <TagList items={project.techStack} className="mt-5" />
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Button as="button" type="button" variant="secondary" onClick={onOpen}>
            Read case study
          </Button>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project, onOpen }) {
  return (
    <li>
      <article id={`project-${project.id}`} className="project grid gap-x-6 gap-y-2 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-baseline">
        <span className="cite !ml-0 w-fit">{project.number}</span>
        <div>
          <h4 className="text-lg font-medium">
            <button type="button" onClick={onOpen} className="text-left underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
              {project.title}
            </button>
          </h4>
          <p className="mt-1 text-muted">{project.tagline}</p>
          <p className="mt-2 text-meta text-muted">{project.techStack.join(', ')}</p>
        </div>
        <ProjectLinks project={project} className="sm:justify-end" />
      </article>
    </li>
  );
}

export default function Work() {
  const [open, setOpen] = useState(null);

  return (
    <Section id="work" title="Selected work" intro="Things I’ve built, mostly around retrieval, streaming inference and applied ML.">
      <div className="space-y-20 sm:space-y-28">
        {featured.map((project, i) => (
          <FeaturedProject key={project.id} project={project} flip={i % 2 === 1} onOpen={() => setOpen(project)} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-24">
          <h3 className="text-xl font-medium">More projects</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {others.map((project) => (
              <CompactProject key={project.id} project={project} onOpen={() => setOpen(project)} />
            ))}
          </ul>
        </div>
      )}

      <ProjectCaseStudy project={open} onClose={() => setOpen(null)} />
    </Section>
  );
}
