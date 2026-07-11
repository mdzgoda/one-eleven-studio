import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../content';

const { branding, home, gearPage, crewPage, bookingPage } = site;

function NavLink({ href, children, accent }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: accent ? 'var(--accent)' : hover ? 'var(--accent)' : 'var(--text-primary)',
        opacity: accent && hover ? 0.72 : 1,
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        letterSpacing: '.03em',
        transition: 'color .15s ease, opacity .15s ease',
      }}
    >
      {children}
    </Link>
  );
}

export function NavHeader() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '26px 52px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <img src={branding.logoMark} style={{ height: 50, display: 'block' }} alt="One Eleven Studio" />
      </Link>
      <div style={{ display: 'flex', gap: 32 }}>
        {home.showRooms !== false && <NavLink href="/#studio">Studio</NavLink>}
        {gearPage.visible !== false && <NavLink href="/gear">Sprzęt</NavLink>}
        {crewPage.visible !== false && <NavLink href="/crew">Ekipa</NavLink>}
        {home.showWork !== false && <NavLink href="/#work">Prace</NavLink>}
        {bookingPage.visible !== false && (
          <NavLink href="/book" accent>
            Rezerwacja →
          </NavLink>
        )}
      </div>
    </div>
  );
}
