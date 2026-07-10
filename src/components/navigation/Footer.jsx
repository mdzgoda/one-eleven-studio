import { useState } from 'react';
import { site } from '../../content';

const { branding, footer } = site;

function FooterLink({ href, children }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
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
          <img src={branding.logoMark} style={{ height: 28, display: 'block', marginBottom: 18 }} alt="One Eleven Studio" />
          <p style={{ fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.6, maxWidth: 240, margin: 0 }}>
            {footer.tagline}
          </p>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>
            {footer.visitHeading}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {footer.addressLine1}
            <br />
            {footer.addressLine2}
            <br />
            {footer.hours}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>
            {footer.bookingHeading}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {footer.email}
            <br />
            {footer.phone}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>
            {footer.followHeading}
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
            {footer.socialLinks.map((s) => (
              <FooterLink key={s.label} href={s.url}>
                {s.label}
              </FooterLink>
            ))}
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
        <span>{footer.copyright}</span>
        <span>{footer.availabilityNote}</span>
      </div>
    </div>
  );
}
