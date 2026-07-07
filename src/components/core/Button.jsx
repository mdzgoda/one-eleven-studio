import { useState } from 'react';

const base = {
  display: 'inline-block',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  letterSpacing: 'var(--tracking-label)',
  padding: '16px 28px',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'background .15s ease, color .15s ease, border-color .15s ease, transform .15s ease',
  textDecoration: 'none',
};

const variants = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--surface)',
    fontWeight: 600,
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    borderColor: 'var(--border-strong)',
    fontWeight: 500,
  },
  outline: {
    background: 'transparent',
    color: 'var(--accent)',
    borderColor: 'var(--accent)',
    fontWeight: 600,
  },
};

export function Button({ variant = 'primary', href, onClick, children }) {
  const [hover, setHover] = useState(false);

  const hoverStyle =
    variant === 'primary'
      ? { background: 'var(--accent-hover)', transform: 'translateY(-2px)' }
      : variant === 'secondary'
      ? { borderColor: 'var(--accent)', color: 'var(--accent)' }
      : { background: 'var(--accent)', color: 'var(--surface)' };

  const style = { ...base, ...variants[variant], ...(hover ? hoverStyle : null) };
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Tag>
  );
}
