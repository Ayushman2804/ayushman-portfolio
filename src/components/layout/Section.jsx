export default function Section({ id, title, intro, children, className = '' }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line ${className}`}>
      <div className="container-page py-20 sm:py-28">
        <header className="mb-12 max-w-prose sm:mb-16">
          <h2 id={headingId} className="text-[clamp(1.75rem,3.2vw,2.375rem)] font-medium leading-tight tracking-[-0.02em]">
            {title}
          </h2>
          {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
