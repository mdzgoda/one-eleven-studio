import { useState } from 'react';
import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Button } from '../components/core/Button';
import { Eyebrow } from '../components/core/Eyebrow';
import { Tag } from '../components/core/Tag';
import { RoomCard } from '../components/cards/RoomCard';
import { RentCard } from '../components/cards/RentCard';
import { CrewCard } from '../components/cards/CrewCard';
import { site, rooms, gearGroups, rentals, crew, stats, portfolio, testimonials } from '../content';
import { usePlayer } from '../context/PlayerContext';

const { home, gearPage, crewPage, bookingPage } = site;

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
            src={home.heroImage}
            alt="Realizator dźwięku przy konsolecie mikserskiej"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'relative', maxWidth: 740 }}>
          <div style={{ marginBottom: 30 }}>
            <Eyebrow>{home.eyebrow}</Eyebrow>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 72, lineHeight: 1.08, margin: '0 0 28px', letterSpacing: '-.01em' }}>
            {home.heroTitleLine1} <br />
            {home.heroTitleLine2}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--text-secondary)', maxWidth: 540, margin: '0 0 40px' }}>
            {home.heroText}
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {bookingPage.visible !== false && <Button variant="primary" href="/book">{home.primaryButtonLabel}</Button>}
            {gearPage.visible !== false && <Button variant="secondary" href="/gear">{home.secondaryButtonLabel}</Button>}
          </div>
        </div>
      </div>

      {home.showRooms !== false && (
        <div id="studio" style={{ padding: '90px 52px 70px', borderTop: '1px solid var(--border)' }}>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{home.roomsEyebrow}</Eyebrow>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36, margin: '0 0 46px', letterSpacing: '-.01em' }}>
            {home.roomsTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)' }}>
            {rooms.map((r) => (
              <RoomCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      )}

      {gearPage.visible !== false && (
        <div id="gear" style={{ padding: '0 52px 90px' }}>
          <div style={{ marginBottom: 30 }}>
            <Eyebrow>{home.gearEyebrow}</Eyebrow>
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
      )}

      {home.showRentals !== false && (
        <div style={{ padding: '90px 52px', background: 'var(--surface-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{home.rentEyebrow}</Eyebrow>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, margin: '0 0 44px', maxWidth: 760, letterSpacing: '-.01em' }}>
            {home.rentTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {rentals.map((r) => (
              <RentCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      )}

      {crewPage.visible !== false && (
        <div id="crew" style={{ padding: '90px 52px 70px' }}>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{home.crewEyebrow}</Eyebrow>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, margin: '0 0 46px', letterSpacing: '-.01em' }}>
            {home.crewTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 26 }}>
            {crew.map((c) => (
              <CrewCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      )}

      {home.showWork !== false && (
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
      )}

      {home.showTestimonials !== false && (
        <div style={{ padding: '90px 52px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ marginBottom: 44 }}>
            <Eyebrow>{home.testimonialsEyebrow}</Eyebrow>
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
      )}

      {bookingPage.visible !== false && (
        <div id="book" style={{ padding: '64px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, margin: 0, letterSpacing: '-.01em' }}>{home.ctaTitle}</h2>
          <Button variant="outline" href="/book">{home.ctaButtonLabel}</Button>
        </div>
      )}

      <Footer />
    </div>
  );
}

function PortfolioTile({ bg, caption, photo }) {
  const [hover, setHover] = useState(false);
  const { track, playing, play } = usePlayer();
  const isActive = track && track.caption === caption;
  const isPlaying = isActive && playing;
  const showOverlay = hover || isActive;

  return (
    <div>
      <button
        type="button"
        onClick={() => play({ bg, caption, photo })}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={(isPlaying ? 'Pauza: ' : 'Odtwórz: ') + caption}
        style={{
          all: 'unset',
          display: 'block',
          width: '100%',
          position: 'relative',
          aspectRatio: '1',
          background: bg,
          border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-soft)'}`,
          marginBottom: 8,
          cursor: 'pointer',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {photo && (
          <img
            src={photo}
            alt={caption}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)', display: 'block' }}
          />
        )}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(11,11,12,.5)',
            opacity: showOverlay ? 1 : 0,
            transition: 'opacity .2s ease',
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              border: `1px solid ${isActive ? 'var(--accent)' : 'var(--cream)'}`,
              background: isActive ? 'var(--accent)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cream)',
            }}
          >
            {isPlaying ? (
              <div style={{ display: 'flex', gap: 3 }}>
                <div style={{ width: 3, height: 12, background: 'currentColor' }} />
                <div style={{ width: 3, height: 12, background: 'currentColor' }} />
              </div>
            ) : (
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '7px solid transparent',
                  borderBottom: '7px solid transparent',
                  borderLeft: '11px solid currentColor',
                  marginLeft: 3,
                }}
              />
            )}
          </div>
        </div>
      </button>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: isActive ? 'var(--accent)' : 'var(--text-tertiary)' }}>{caption}</div>
    </div>
  );
}
