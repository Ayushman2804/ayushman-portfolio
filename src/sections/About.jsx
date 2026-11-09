import { CERTIFICATIONS, EDUCATION, PERSONAL_INFO } from '../data/portfolioData';
import Section from '../components/layout/Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="space-y-5 text-lg leading-relaxed md:col-span-7">
          {PERSONAL_INFO.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-muted">Based in {PERSONAL_INFO.location}.</p>
        </div>

        <div className="space-y-10 md:col-span-5">
          <div>
            <h3 className="font-medium text-muted">Education</h3>
            <p className="mt-3 text-lg font-medium leading-snug">{EDUCATION.institution}</p>
            <p className="mt-1">{EDUCATION.degree}</p>
            <p className="mt-1 text-meta text-muted">
              {EDUCATION.period}, {EDUCATION.location}
            </p>
            <details className="group mt-4">
              <summary className="cursor-pointer text-[0.9375rem] text-accent marker:text-accent">Coursework</summary>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{EDUCATION.coursework.join(', ')}.</p>
            </details>
          </div>

          <div>
            <h3 className="font-medium text-muted">Certifications</h3>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.title} className="py-3">
                  {cert.url ? (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="link">
                      {cert.title}
                    </a>
                  ) : (
                    <span>{cert.title}</span>
                  )}
                  <span className="block text-meta text-muted">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
