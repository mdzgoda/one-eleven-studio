import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../content';
import { useIsMobile } from '../../hooks/useBreakpoint';

const { branding, home, gearPage, crewPage, bookingPage } = site;

function NavLink({ href, children, accent, onClick, big }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: accent ? 'var(--accent)' : hover ? 'var(--accent)' : 'var(--text-primary)',
        opacity: accent && hover ? 0.72 : 1,
        fontFamily: 'var(--font-body)',
        fontSize: big ? 17 : 13,
        letterSpacing: '.03em',
        transition: 'color .15s ease, opacity .15s ease',
      }}
    >
      {children}
    </Link>
  );
}

function MenuIcon({ open }) {
  const bar = {
    width: 20,
    height: 1,
    background: 'var(--text-primary)',
    transition: 'transform .2s ease, opacity .2s ease',
  };
  return (
    <div style={{ width: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
      <div style={{ ...bar, transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
      <div style={{ ...bar, opacity: open ? 0 : 1 }} />
      <div style={{ ...bar, transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
    </div>
  );
}

export function NavHeader() {
  const isMobile = useIsMobile(760);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  const links = [
    home.showRooms !== false && { href: '/#studio', label: 'Studio' },
    gearPage.visible !== false && { href: '/gear', label: 'Sprzęt' },
    crewPage.visible !== false && { href: '/crew', label: 'Ekipa' },
    home.showWork !== false && { href: '/#work', label: 'Prace' },
  ].filter(Boolean);

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '18px 20px' : '26px 52px',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src={branding.logoMark} style={{ height: isMobile ? 36 : 50, display: 'block' }} alt="One Eleven Studio" />
        </Link>

        {isMobile ? (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={open}
            style={{
              all: 'unset',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <MenuIcon open={open} />
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
            {bookingPage.visible !== false && (
              <NavLink href="/book" accent>
                Rezerwacja →
              </NavLink>
            )}
          </div>
        )}
      </div>

      {isMobile && (
        <div
          style={{
            overflow: 'hidden',
            maxHeight: open ? 320 : 0,
            transition: 'max-height .25s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              padding: '20px 20px 28px',
              borderTop: '1px solid var(--border-soft)',
            }}
          >
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)} big>
                {l.label}
              </NavLink>
            ))}
            {bookingPage.visible !== false && (
              <NavLink href="/book" onClick={() => setOpen(false)} accent big>
                Rezerwacja →
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
