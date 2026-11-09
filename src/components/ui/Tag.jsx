export function TagList({ items, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Technologies">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-line px-2 py-0.5 text-meta text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}
