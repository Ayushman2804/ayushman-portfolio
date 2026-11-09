import { SKILL_GROUPS } from '../data/portfolioData';
import Section from '../components/layout/Section';

export default function Skills() {
  return (
    <Section id="skills" title="Tools I use">
      <dl className="border-b border-line">
        {SKILL_GROUPS.map((group) => (
          <div key={group.name} className="grid gap-2 border-t border-line py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
            <dt className="font-medium">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-muted">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
