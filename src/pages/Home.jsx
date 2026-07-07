import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Button } from '../components/core/Button';
import { Eyebrow } from '../components/core/Eyebrow';
import { Tag } from '../components/core/Tag';
import { RoomCard } from '../components/cards/RoomCard';
import { RentCard } from '../components/cards/RentCard';
import { CrewCard } from '../components/cards/CrewCard';
import heroGear from '../assets/hero-gear.webp';

const rooms = [
  {
    label: 'SALA A',
    name: 'Sala Live',
    description:
      '76 m², 5,5 m sufitu, trzy kabiny izolacyjne. Stworzona, by nagrać cały zespół na żywo, głośno, za jednym podejściem.',
    specs: 'NEVE 8068 · STUDER A827',
  },
  {
    label: 'SALA B',
    name: 'Studio B',
    description:
      'Sala do overdubów i wokali. Ciasna, akustycznie potraktowana — stworzona pod podejście powtarzane czterdzieści razy, aż wyjdzie idealnie.',
    specs: 'API 1608 · TUBE-TECH CL1B',
  },
  {
    label: 'SALA C',
    name: 'Scena do Scoringu',
    description: 'Mieści 40 muzyków, synchronizacja z obrazem, monitoring Dolby Atmos do pracy przy filmach i zwiastunach.',
    specs: 'PRO TOOLS HDX · ATMOS 7.1.4',
  },
];

const gearGroups = [
  { title: 'Mikrofony', items: ['Neumann U47', 'AKG C12', 'Coles 4038', 'Shure SM7B'] },
  { title: 'Outboard', items: ['Fairchild 670 pair', 'Pultec EQP-1A', 'UA 1176'] },
  { title: 'Syntezatory i Klawisze', items: ['Moog Modular 55', 'Sequential Prophet-5', 'Buchla 200', 'Yamaha CS-80'] },
  { title: 'Taśmy i Gitary', items: ["Studer A827", "'59 Les Paul", 'Marshall Plexi', 'Fender Twin'] },
];

const rentals = [
  {
    name: 'Mellotron M400',
    description:
      'Z Joem — trzydzieści lat gry na klawiszach z pętlami taśmowymi, autor dwóch największych ścieżek dźwiękowych ubiegłego roku.',
  },
  { name: 'Hammond B3 + Leslie 122', description: 'Z Daną — sesyjną muzyczką niemal każdej płyty soul, na której się wychowałeś.' },
  { name: 'Theremin', description: 'Z Yuki — sama je buduje i gra tak, jakby były jej coś winne.' },
  {
    name: 'Pedal Steel',
    description: 'Z Wesem — szkolonym w Nashville, sprawi, że twój indie rockowy kawałek trochę się rozpłacze.',
  },
];

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

const stats = [
  { value: '47', label: 'Nagranych Albumów' },
  { value: '12', label: 'Ścieżek Filmowych' },
  { value: '1,400+', label: 'Zarejestrowanych Sesji' },
];

const portfolio = [
  { bg: '#161615', caption: "Hollow Wires — Static Bloom, '25" },
  { bg: '#191816', caption: "Ścieżka oryginalna — Low Tide, '24" },
  { bg: '#141413', caption: "Ferro Saints — No Vacancy, '24" },
  { bg: '#181715', caption: "Ścieżka oryginalna — Marrow, '23" },
  { bg: '#151513', caption: "June Holt — Rust Belt, '23" },
  { bg: '#19180f', caption: "Static Parade — Halo Fade, '22" },
];

const testimonials = [
  { quote: '„Mieli prawdziwy magnetofon. Nie plugin. Prawdziwą maszynę.”', attribution: '— Mara Voss, Hollow Wires' },
  { quote: '„Zarezerwowaliśmy scenę do scoringu na tydzień i właściwie z niej nie wyszliśmy.”', attribution: '— R. Mensah, Reżyser, Low Tide' },
];

export function Home() {
  return (
    <div className="page">
      <NavHeader />

      <div style={{ position: 'relative', padding: '130px 0 110px 52px', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 701,
            right: 0,
            height: 765,
            filter: 'grayscale(1) contrast(1.05)',
          }}
        >
          <img
            src={heroGear}
            alt="Realizator dźwięku przy konsolecie mikserskiej"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'relative', maxWidth: 740 }}>
          <div style={{ marginBottom: 30 }}>
            <Eyebrow>Realizacja · Miks · Scoring</Eyebrow>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 72, lineHeight: 1.08, margin: '0 0 28px', letterSpacing: '-.01em' }}>
            Brzmienie <br />
            ponad wszystko
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--text-secondary)', maxWidth: 540, margin: '0 0 40px' }}>
            One Eleven Studio to profesjonalne studio nagraniowe stworzone z myślą o muzyce. Łączymy starannie dobrany
            analogowy sprzęt z nowoczesną realizacją, zapewniając przestrzeń, doświadczenie i ludzi potrzebnych do
            stworzenia nagrania na najwyższym poziomie.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Button variant="primary" href="/book">Zarezerwuj sesję</Button>
            <Button variant="secondary" href="/gear">Zobacz sprzęt</Button>
          </div>
        </div>
      </div>

      <div id="studio" style={{ padding: '90px 52px 70px', borderTop: '1px solid var(--border)' }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>Sale</Eyebrow>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36, margin: '0 0 46px', letterSpacing: '-.01em' }}>
          Trzy sale. Jedna filozofia.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)' }}>
          {rooms.map((r) => (
            <RoomCard key={r.name} {...r} />
          ))}
        </div>
      </div>

      <div id="gear" style={{ padding: '0 52px 90px' }}>
        <div style={{ marginBottom: 30 }}>
          <Eyebrow>Magazyn Sprzętu</Eyebrow>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '30px 56px' }}>
          {gearGroups.map((g) => (
            <div key={g.title}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, marginBottom: 12 }}>{g.title}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.items.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '90px 52px', background: 'var(--surface-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>Wypożycz Rzadkości</Eyebrow>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, margin: '0 0 44px', maxWidth: 760, letterSpacing: '-.01em' }}>
          Nie możesz znaleźć odpowiedniej partii? Wypożycz instrument — razem z osobą, która poświęciła mu życie.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {rentals.map((r) => (
            <RentCard key={r.name} {...r} />
          ))}
        </div>
      </div>

      <div id="crew" style={{ padding: '90px 52px 70px' }}>
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>Ekipa</Eyebrow>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, margin: '0 0 46px', letterSpacing: '-.01em' }}>
          Tworzona przez ludzi, nie presety.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 26 }}>
          {crew.map((c) => (
            <CrewCard key={c.name} {...c} />
          ))}
        </div>
      </div>

      <div id="work" style={{ padding: '0 52px 90px' }}>
        <div style={{ display: 'flex', gap: 64, marginBottom: 56 }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, color: 'var(--accent)' }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: 8 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }}>
          {portfolio.map((p) => (
            <PortfolioTile key={p.caption} {...p} />
          ))}
        </div>
      </div>

      <div style={{ padding: '90px 52px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ marginBottom: 44 }}>
          <Eyebrow>W Ich Słowach</Eyebrow>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 60 }}>
          {testimonials.map((t) => (
            <div key={t.attribution}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 25, lineHeight: 1.4, marginBottom: 20 }}>{t.quote}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-tertiary)' }}>{t.attribution}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="book" style={{ padding: '64px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, margin: 0, letterSpacing: '-.01em' }}>Gotowi nagrywać?</h2>
        <Button variant="outline" href="/book">Sprawdź Dostępność</Button>
      </div>

      <Footer />
    </div>
  );
}

function PortfolioTile({ bg, caption }) {
  return (
    <div>
      <div
        className="portfolio-tile"
        style={{ aspectRatio: '1', background: bg, border: '1px solid var(--border-soft)', marginBottom: 8, transition: 'opacity .2s ease' }}
      />
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-tertiary)' }}>{caption}</div>
    </div>
  );
}
