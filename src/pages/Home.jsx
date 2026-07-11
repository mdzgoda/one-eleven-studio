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
import { useBreakpoint, pick } from '../hooks/useBreakpoint';

const { home, gearPage, crewPage, bookingPage } = site;

export function Home() {
  const bp = useBreakpoint();
  const sm = bp === 'sm';
  const mdDown = bp !== 'lg';

  const padX = pick({ sm: 20, md: 36, lg: 52 }, bp);
  const sectionPad = (top, bottom) =>
    `${pick({ sm: Math.round(top * 0.55), md: Math.round(top * 0.8), lg: top }, bp)}px ${padX}px ${pick(
      { sm: Math.round(bottom * 0.6), md: Math.round(bottom * 0.85), lg: bottom },
      bp
    )}px`;

  return (
    <div className="page">
      <NavHeader />

      <div
        style={{
          position: 'relative',
          padding: sm ? `48px ${padX}px 40px` : `${pick({ md: 90, lg: 130 }, bp)}px 0 ${pick({ md: 70, lg: 110 }, bp)}px ${padX}px`,
          overflow: 'hidden',
        }}
      >
        {!sm && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: pick({ md: '55%', lg: 701 }, bp),
              right: 0,
              height: pick({ md: 560, lg: 765 }, bp),
              filter: 'grayscale(1) contrast(1.05)',
            }}
          >
            <img
              src={home.heroImage}
              alt="Realizator dźwięku przy konsolecie mikserskiej"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
        <div style={{ position: 'relative', maxWidth: sm ? 'none' : 740 }}>
          <div style={{ marginBottom: sm ? 20 : 30 }}>
            <Eyebrow>{home.eyebrow}</Eyebrow>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: pick({ sm: 38, md: 56, lg: 72 }, bp),
              lineHeight: 1.08,
              margin: '0 0 22px',
              letterSpacing: '-.01em',
            }}
          >
            {home.heroTitleLine1} <br />
            {home.heroTitleLine2}
          </h1>
          <p style={{ fontSize: sm ? 16 : 18, lineHeight: 1.5, color: 'var(--text-secondary)', maxWidth: sm ? 'none' : 540, margin: '0 0 32px' }}>
            {home.heroText}
          </p>
          {sm && (
            <div style={{ aspectRatio: '4/3', marginBottom: 32, filter: 'grayscale(1) contrast(1.05)' }}>
              <img
                src={home.heroImage}
                alt="Realizator dźwięku przy konsolecie mikserskiej"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: sm ? 'column' : 'row', gap: 16 }}>
            {bookingPage.visible !== false && <Button variant="primary" href="/book">{home.primaryButtonLabel}</Button>}
            {gearPage.visible !== false && <Button variant="secondary" href="/gear">{home.secondaryButtonLabel}</Button>}
          </div>
        </div>
      </div>

      {home.showRooms !== false && (
        <div id="studio" style={{ padding: sectionPad(90, 70), borderTop: '1px solid var(--border)' }}>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{home.roomsEyebrow}</Eyebrow>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: pick({ sm: 26, md: 32, lg: 36 }, bp), margin: sm ? '0 0 28px' : '0 0 46px', letterSpacing: '-.01em' }}>
            {home.roomsTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${pick({ sm: 1, md: 2, lg: 3 }, bp)},1fr)`, gap: 1, background: 'var(--border)' }}>
            {rooms.map((r) => (
              <RoomCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      )}

      {gearPage.visible !== false && (
        <div id="gear" style={{ padding: `0 ${padX}px ${pick({ sm: 54, md: 76, lg: 90 }, bp)}px` }}>
          <div style={{ marginBottom: sm ? 20 : 30 }}>
            <Eyebrow>{home.gearEyebrow}</Eyebrow>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${pick({ sm: 1, md: 2, lg: 2 }, bp)},1fr)`, gap: sm ? '26px' : '30px 56px' }}>
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
        <div
          style={{
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            width: '100vw',
            background: 'var(--surface-alt)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ maxWidth: 'var(--page-width)', margin: '0 auto', padding: sectionPad(90, 90) }}>
            <div style={{ marginBottom: 18 }}>
              <Eyebrow>{home.rentEyebrow}</Eyebrow>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: pick({ sm: 24, md: 28, lg: 32 }, bp), margin: sm ? '0 0 28px' : '0 0 44px', maxWidth: sm ? 'none' : 760, letterSpacing: '-.01em' }}>
              {home.rentTitle}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${pick({ sm: 1, md: 2, lg: 4 }, bp)},1fr)`, gap: 20 }}>
              {rentals.map((r) => (
                <RentCard key={r.name} {...r} />
              ))}
            </div>
          </div>
        </div>
      )}

      {crewPage.visible !== false && (
        <div id="crew" style={{ padding: sectionPad(90, 70) }}>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{home.crewEyebrow}</Eyebrow>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: pick({ sm: 24, md: 28, lg: 32 }, bp), margin: sm ? '0 0 28px' : '0 0 46px', letterSpacing: '-.01em' }}>
            {home.crewTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${pick({ sm: 2, md: 3, lg: 4 }, bp)},1fr)`, gap: sm ? 18 : 26 }}>
            {crew.map((c) => (
              <CrewCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      )}

      {home.showWork !== false && (
        <div id="work" style={{ padding: `0 ${padX}px ${pick({ sm: 54, md: 76, lg: 90 }, bp)}px` }}>
          <div
            style={
              sm
                ? { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '28px 20px', marginBottom: 36 }
                : { display: 'flex', gap: mdDown ? 40 : 64, flexWrap: 'wrap', marginBottom: 56 }
            }
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: pick({ sm: 32, md: 38, lg: 44 }, bp), color: 'var(--accent)' }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: 8 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${pick({ sm: 2, md: 3, lg: 6 }, bp)},1fr)`, gap: 14 }}>
            {portfolio.map((p) => (
              <PortfolioTile key={p.caption} {...p} />
            ))}
          </div>
        </div>
      )}

      {home.showTestimonials !== false && (
        <div style={{ padding: sectionPad(90, 90), borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ marginBottom: sm ? 28 : 44 }}>
            <Eyebrow>{home.testimonialsEyebrow}</Eyebrow>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: sm ? '1fr' : 'repeat(2,1fr)', gap: sm ? 36 : 60 }}>
            {testimonials.map((t) => (
              <div key={t.attribution}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: pick({ sm: 20, md: 22, lg: 25 }, bp), lineHeight: 1.4, marginBottom: 20 }}>{t.quote}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-tertiary)' }}>{t.attribution}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {bookingPage.visible !== false && (
        <div
          id="book"
          style={{
            padding: sm ? `48px ${padX}px` : `64px ${padX}px`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: sm ? 'flex-start' : 'center',
            flexDirection: sm ? 'column' : 'row',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: pick({ sm: 26, md: 28, lg: 32 }, bp), margin: 0, letterSpacing: '-.01em' }}>{home.ctaTitle}</h2>
          <Button variant="outline" href="/book">{home.ctaButtonLabel}</Button>
        </div>
      )}

      <Footer />
    </div>
  );
}

function PortfolioTile({ bg, caption, photo, audioSrc }) {
  const [hover, setHover] = useState(false);
  const { track, playing, play } = usePlayer();
  const isActive = track && track.caption === caption;
  const isPlaying = isActive && playing;
  const showOverlay = hover || isActive;

  return (
    <div>
      <button
        type="button"
        onClick={() => play({ bg, caption, photo, audioSrc })}
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
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: showOverlay ? 'none' : 'grayscale(1) contrast(1.05)',
              transition: 'filter .2s ease',
              display: 'block',
            }}
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
