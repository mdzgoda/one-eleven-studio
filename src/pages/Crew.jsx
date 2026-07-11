import { Navigate } from 'react-router-dom';
import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Eyebrow } from '../components/core/Eyebrow';
import { CrewCard } from '../components/cards/CrewCard';
import { site, crew } from '../content';

const { crewPage } = site;

export function Crew() {
  if (crewPage.visible === false) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <NavHeader />
      <div style={{ padding: '90px 52px 100px' }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>{crewPage.eyebrow}</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 48, margin: '0 0 46px', letterSpacing: '-.01em' }}>
          {crewPage.title}
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 26 }}>
          {crew.map((c) => (
            <CrewCard key={c.name} {...c} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
