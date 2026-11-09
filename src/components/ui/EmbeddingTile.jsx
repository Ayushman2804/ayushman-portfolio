import { useMemo } from 'react';

// Small deterministic PRNG so each project always gets the same pattern.
function seeded(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/*
  Placeholder shown when a project has no screenshot (or a profile has no photo):
  a grid of cells shaded like an embedding vector, with an optional label.
*/
export default function EmbeddingTile({ seed, cols = 24, rows = 15, label, className = '' }) {
  const cells = useMemo(() => {
    const rand = seeded(seed);
    return Array.from({ length: cols * rows }, () => rand() ** 2.2);
  }, [seed, cols, rows]);

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 ${cols} ${rows}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        {cells.map((v, i) => (
          <rect
            key={i}
            x={(i % cols) + 0.12}
            y={Math.floor(i / cols) + 0.12}
            width={0.76}
            height={0.76}
            rx={0.12}
            className="fill-accent"
            opacity={label ? 0.04 + v * 0.22 : 0.04 + v * 0.32}
          />
        ))}
      </svg>
      {label && (
        <span className="absolute inset-0 flex items-center justify-center font-mono text-5xl font-medium tracking-tight text-fg sm:text-6xl">
          {label}
        </span>
      )}
    </div>
  );
}
