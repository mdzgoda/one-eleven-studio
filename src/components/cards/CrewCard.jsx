import { useState } from 'react';

function CornerMark({ style }) {
  return (
    <svg width="14" height="10" viewBox="0 0 18 12" style={style} fill="none">
      <path d="M1 1H17M1 1V11" stroke="var(--text-quiet)" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function CrewCard({ name, role, bio }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ opacity: hover ? 0.85 : 1, transition: 'opacity .2s ease' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1', background: 'var(--surface-media)', marginBottom: 18 }}>
        <CornerMark style={{ position: 'absolute', top: 8, left: 8 }} />
        <CornerMark style={{ position: 'absolute', top: 8, right: 8, transform: 'rotate(90deg)' }} />
        <CornerMark style={{ position: 'absolute', bottom: 8, right: 8, transform: 'rotate(180deg)' }} />
        <CornerMark style={{ position: 'absolute', bottom: 8, left: 8, transform: 'rotate(270deg)' }} />
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, marginBottom: 4 }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--accent)', marginBottom: 10 }}>{role}</div>
      <p style={{ fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.5, margin: 0 }}>{bio}</p>
    </div>
  );
}
