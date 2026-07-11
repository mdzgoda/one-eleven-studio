import { Navigate } from 'react-router-dom';
import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Eyebrow } from '../components/core/Eyebrow';
import { CrewCard } from '../components/cards/CrewCard';
import { site, crew } from '../content';
import { useBreakpoint, pick } from '../hooks/useBreakpoint';

const { crewPage } = site;

export function Crew() {
  const bp = useBreakpoint();
  const sm = bp === 'sm';
  const padX = pick({ sm: 20, md: 36, lg: 52 }, bp);

  if (crewPage.visible === false) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <NavHeader />
      <div style={{ padding: `${sm ? 48 : 90}px ${padX}px ${sm ? 56 : 100}px` }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>{crewPage.eyebrow}</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: pick({ sm: 32, md: 40, lg: 48 }, bp), margin: sm ? '0 0 28px' : '0 0 46px', letterSpacing: '-.01em' }}>
          {crewPage.title}
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${pick({ sm: 2, md: 3, lg: 4 }, bp)},1fr)`, gap: sm ? 18 : 26 }}>
          {crew.map((c) => (
            <CrewCard key={c.name} {...c} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
