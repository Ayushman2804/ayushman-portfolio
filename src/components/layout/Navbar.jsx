import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { EXPERIENCE, PERSONAL_INFO } from '../../data/portfolioData';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience', hidden: EXPERIENCE.length === 0 },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
].filter((link) => !link.hidden);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main">
        <a href="#top" className="shrink-0 whitespace-nowrap font-medium tracking-tight" onClick={() => setOpen(false)}>
          {PERSONAL_INFO.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded-md px-3 py-2 text-[0.9375rem] text-muted transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Button href={PERSONAL_INFO.resumePath} target="_blank" rel="noopener" variant="secondary" className="ml-1 hidden !py-1.5 sm:inline-flex">
            Resume
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:bg-surface hover:text-fg md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="container-page pb-5 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-lg">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={PERSONAL_INFO.resumePath} target="_blank" rel="noopener" className="block py-3 text-lg text-accent">
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
