import { Navigate } from 'react-router-dom';
import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Eyebrow } from '../components/core/Eyebrow';
import { Tag } from '../components/core/Tag';
import { site, gearGroups } from '../content';
import { useBreakpoint, pick } from '../hooks/useBreakpoint';

const { gearPage } = site;

export function Gear() {
  const bp = useBreakpoint();
  const sm = bp === 'sm';
  const padX = pick({ sm: 20, md: 36, lg: 52 }, bp);

  if (gearPage.visible === false) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <NavHeader />
      <div style={{ padding: `${sm ? 48 : 90}px ${padX}px ${sm ? 56 : 100}px` }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>{gearPage.eyebrow}</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: pick({ sm: 32, md: 40, lg: 48 }, bp), margin: '0 0 20px', letterSpacing: '-.01em' }}>
          {gearPage.title}
        </h1>
        <p style={{ fontSize: sm ? 16 : 18, color: 'var(--text-secondary)', maxWidth: sm ? 'none' : 560, margin: '0 0 44px' }}>
          {gearPage.subtitle}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${pick({ sm: 1, md: 2, lg: 2 }, bp)},1fr)`, gap: sm ? '26px' : '40px 56px' }}>
          {gearGroups.map((g) => (
            <div key={g.title}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, marginBottom: 14 }}>{g.title}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.items.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
