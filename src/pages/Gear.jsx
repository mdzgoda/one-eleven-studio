import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Eyebrow } from '../components/core/Eyebrow';
import { Tag } from '../components/core/Tag';

const groups = [
  { title: 'Mikrofony', items: ['Neumann U47', 'AKG C12', 'Coles 4038', 'Shure SM7B', 'Royer R-121', 'Sennheiser MD421'] },
  { title: 'Outboard', items: ['Fairchild 670 pair', 'Pultec EQP-1A', 'UA 1176', 'Neve 1073', 'SSL Bus Compressor'] },
  { title: 'Syntezatory i Klawisze', items: ['Moog Modular 55', 'Sequential Prophet-5', 'Buchla 200', 'Yamaha CS-80', 'Mellotron M400', 'Hammond B3'] },
  { title: 'Taśmy i Gitary', items: ["Studer A827", 'Ampex ATR-102', "'59 Les Paul", 'Marshall Plexi', 'Fender Twin', 'Jazzmaster'] },
];

export function Gear() {
  return (
    <div className="page">
      <NavHeader />
      <div style={{ padding: '90px 52px 100px' }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>Magazyn Sprzętu</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 48, margin: '0 0 20px', letterSpacing: '-.01em' }}>
          Cały sprzęt, jedna lista.
        </h1>
        <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 0 60px' }}>
          Czterdzieści lat vintage'owego i nowoczesnego sprzętu — dostępne z każdą sesją.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px 56px' }}>
          {groups.map((g) => (
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
