import { useState } from 'react';
import mark from '../../assets/one-eleven-mark.svg';

function FooterLink({ children }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ color: hover ? 'var(--accent)' : 'var(--text-secondary)' }}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <div style={{ padding: '48px 52px 36px', borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32, marginBottom: 56 }}>
        <div>
          <img src={mark} style={{ height: 28, display: 'block', marginBottom: 18 }} alt="One Eleven Studio" />
          <p style={{ fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.6, maxWidth: 240, margin: 0 }}>
            Działające studio dla zespołów, ścieżek dźwiękowych i sprzętu, który nagrywa dobre podejście za pierwszym razem.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>
            Odwiedź
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            111 Harrow St
            <br />
            Brooklyn, NY
            <br />
            Pon–Sob, 10:00–2:00
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>
            Rezerwacja
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            book@oneelevenstudio.com
            <br />
            +1 (718) 555-0111
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>
            Obserwuj
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
            <FooterLink>Instagram</FooterLink>
            <FooterLink>YouTube</FooterLink>
            <FooterLink>Bandcamp</FooterLink>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          color: 'var(--text-quiet)',
          borderTop: '1px solid var(--border-soft)',
          paddingTop: 24,
        }}
      >
        <span>© One Eleven Studio</span>
        <span>Cały sprzęt w zależności od dostępności</span>
      </div>
    </div>
  );
}
