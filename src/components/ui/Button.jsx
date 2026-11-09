const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[0.9375rem] font-medium transition-colors';

const variants = {
  primary: 'bg-accent text-bg hover:bg-fg',
  secondary: 'border border-line text-fg hover:border-fg/40 hover:bg-surface',
  ghost: 'px-2.5 text-muted hover:text-fg',
};

export default function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
