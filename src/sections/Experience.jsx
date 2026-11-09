import { EXPERIENCE } from '../data/portfolioData';
import Section from '../components/layout/Section';
import { TagList } from '../components/ui/Tag';

export default function Experience() {
  if (EXPERIENCE.length === 0) return null;

  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-line">
        {EXPERIENCE.map((job) => (
          <li key={`${job.org}-${job.period}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent" aria-hidden="true" />
            <p className="text-meta text-muted">
              {job.period}
              {job.location && `, ${job.location}`}
            </p>
            <h3 className="mt-1 text-xl font-medium tracking-tight">
              {job.role},{' '}
              {job.orgUrl ? (
                <a href={job.orgUrl} target="_blank" rel="noopener noreferrer" className="link">
                  {job.org}
                </a>
              ) : (
                job.org
              )}
            </h3>
            {job.points?.length > 0 && (
              <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {job.stack?.length > 0 && <TagList items={job.stack} className="mt-4" />}
          </li>
        ))}
      </ol>
    </Section>
  );
}
