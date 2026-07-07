import { useState } from 'react';

export function RentCard({ name, description, href = '/book' }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hover ? 'var(--accent)' : 'var(--line-tag)'}`,
        padding: 26,
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'border-color .2s ease, transform .2s ease',
      }}
    >
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 14 }}>
        Do Wypożyczenia
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, margin: '0 0 10px' }}>{name}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.5, margin: '0 0 18px' }}>{description}</p>
      <a href={href} style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13, color: hover ? 'var(--accent)' : 'var(--text-primary)' }}>
        Zapytaj →
      </a>
    </div>
  );
}
