import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Eyebrow } from '../components/core/Eyebrow';
import { CrewCard } from '../components/cards/CrewCard';

const crew = [
  {
    name: 'Mara Okonkwo',
    role: 'Główny Realizator · 19 lat',
    bio: 'Zaczął sklejać taśmy w wieku siedemnastu lat i nigdy w pełni nie przeszedł na ekran.',
  },
  { name: 'Dev Patel', role: 'Miks i Scoring · 12 lat', bio: 'Miksuje zarówno do obrazu, jak i do płyt — i odmawia wyjaśnienia różnicy.' },
  { name: 'Luca Ferri', role: 'Syntezatory i Modular · 8 lat', bio: 'Ma więcej kabli patch niż przyjaciół. I nie chciałby inaczej.' },
  {
    name: 'Sam Reyes',
    role: 'Technika i Renowacja Taśm · 15 lat',
    bio: 'Utrzymuje czterdziestoletnie maszyny w lepszym stanie niż nowe.',
  },
];

export function Crew() {
  return (
    <div className="page">
      <NavHeader />
      <div style={{ padding: '90px 52px 100px' }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>Ekipa</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 48, margin: '0 0 46px', letterSpacing: '-.01em' }}>
          Tworzona przez ludzi, nie presety.
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
