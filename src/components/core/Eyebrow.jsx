export function Eyebrow({ children }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: 'var(--tracking-eyebrow)',
        color: 'var(--accent)',
        textTransform: 'uppercase',
      }}
    >
      <svg width="16" height="11" viewBox="0 0 18 12" fill="none">
        <path d="M1 1H17M1 1V11" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="square" />
      </svg>
      {children}
    </div>
  );
}
