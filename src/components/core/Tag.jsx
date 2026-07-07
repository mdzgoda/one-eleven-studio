import { useState } from 'react';

export function Tag({ children }) {
  const [hover, setHover] = useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        padding: '7px 13px',
        border: `1px solid ${hover ? 'var(--accent)' : 'var(--border-strong)'}`,
        color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'border-color .15s ease, color .15s ease',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
}
