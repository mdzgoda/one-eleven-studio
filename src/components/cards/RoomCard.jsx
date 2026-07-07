import { useState } from 'react';

export function RoomCard({ label, name, description, specs }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--surface-hover)' : 'var(--surface)',
        padding: '36px 32px',
        transition: 'background .2s ease',
      }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-quiet)', marginBottom: 16 }}>{label}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, margin: '0 0 14px' }}>{name}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 20px' }}>{description}</p>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-quiet)' }}>{specs}</div>
    </div>
  );
}
