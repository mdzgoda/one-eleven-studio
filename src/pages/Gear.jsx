import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Eyebrow } from '../components/core/Eyebrow';
import { Tag } from '../components/core/Tag';
import { site, gearGroups } from '../content';

const { gearPage } = site;

export function Gear() {
  return (
    <div className="page">
      <NavHeader />
      <div style={{ padding: '90px 52px 100px' }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>{gearPage.eyebrow}</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 48, margin: '0 0 20px', letterSpacing: '-.01em' }}>
          {gearPage.title}
        </h1>
        <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 0 60px' }}>
          {gearPage.subtitle}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px 56px' }}>
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
