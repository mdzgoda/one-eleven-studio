import { useState } from 'react';
import { Link } from 'react-router-dom';
import mark from '../../assets/one-eleven-mark.svg';

const navLinks = [
  { href: '/#studio', label: 'Studio' },
  { href: '/gear', label: 'Sprzęt' },
  { href: '/crew', label: 'Ekipa' },
  { href: '/#work', label: 'Prace' },
];

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
        <img src={mark} style={{ height: 50, display: 'block' }} alt="One Eleven Studio" />
      </Link>
      <div style={{ display: 'flex', gap: 32 }}>
        {navLinks.map((l) => (
          <NavLink key={l.href} href={l.href}>
            {l.label}
          </NavLink>
        ))}
        <NavLink href="/book" accent>
          Rezerwacja →
        </NavLink>
      </div>
    </div>
  );
}
