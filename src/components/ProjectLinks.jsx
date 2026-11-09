import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './ui/BrandIcons';

// Code and demo links for a project; each is hidden when its URL is empty.
export default function ProjectLinks({ project, className = '' }) {
  if (!project.repoUrl && !project.demoUrl) return null;
  return (
    <span className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.9375rem] ${className}`}>
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
          <GithubIcon className="h-4 w-4" />
          Code<span className="sr-only"> for {project.title} on GitHub</span>
        </a>
      )}
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
          <ExternalLink className="h-4 w-4" />
          Live demo<span className="sr-only"> of {project.title}</span>
        </a>
      )}
    </span>
  );
}
