import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-2 py-8 text-meta text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </p>
        <a href="#top" className="link self-start sm:self-auto">
          Back to top
        </a>
      </div>
    </footer>
  );
}
