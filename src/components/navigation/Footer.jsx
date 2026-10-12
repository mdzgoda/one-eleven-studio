import { useState } from 'react';
import { site } from '../../content';
import { useIsMobile } from '../../hooks/useBreakpoint';
import { telHref, websiteHref } from '../../utils/contact';

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

const label = {
  fontFamily: 'var(--font-body)',
  fontSize: 11,
  color: 'var(--accent)',
  textTransform: 'uppercase',
  letterSpacing: '.08em',
  marginBottom: 16,
};

export function Footer() {
  const isMobile = useIsMobile(760);
  // Links still set to the "#" placeholder are hidden until a real URL is entered
  const socialLinks = (footer.socialLinks || []).filter((s) => s.url && s.url !== '#');

  return (
    <div style={{ padding: isMobile ? '40px 20px 28px' : '48px 52px 36px', borderTop: '1px solid var(--border)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : socialLinks.length ? '1.4fr 1fr 1fr 1fr' : '1.4fr 1fr 1fr',
          gap: isMobile ? 36 : 32,
          marginBottom: isMobile ? 36 : 56,
        }}
      >
        <div>
          <img src={branding.logoMark} style={{ height: 28, display: 'block', marginBottom: 18 }} alt="One Eleven Studio" />
          <p style={{ fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.6, maxWidth: isMobile ? 'none' : 240, margin: 0 }}>
            {footer.tagline}
          </p>
        </div>
        <div>
          <div style={label}>{footer.visitHeading}</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {footer.addressLine1}
            <br />
            {footer.addressLine2}
            {footer.hours && (
              <>
                <br />
                {footer.hours}
              </>
            )}
          </div>
        </div>
        <div>
          <div style={label}>{footer.bookingHeading}</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <FooterLink href={`mailto:${footer.email}`}>{footer.email}</FooterLink>
            <br />
            <FooterLink href={telHref(footer.phone)}>{footer.phone}</FooterLink>
            {footer.website && (
              <>
                <br />
                <FooterLink href={websiteHref(footer.website)}>{footer.website}</FooterLink>
              </>
            )}
          </div>
        </div>
        {socialLinks.length > 0 && (
          <div>
            <div style={label}>{footer.followHeading}</div>
            <div style={{ fontSize: 13, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
              {socialLinks.map((s) => (
                <FooterLink key={s.label} href={s.url}>
                  {s.label}
                </FooterLink>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 8 : 0,
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
