import { useRef, useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
}

function PlayIcon({ size = 12 }) {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderTop: `${size * 0.6}px solid transparent`,
        borderBottom: `${size * 0.6}px solid transparent`,
        borderLeft: `${size}px solid currentColor`,
        marginLeft: 2,
      }}
    />
  );
}

function PauseIcon({ size = 12 }) {
  return (
    <div style={{ display: 'flex', gap: size * 0.28 }}>
      <div style={{ width: size * 0.32, height: size * 1.15, background: 'currentColor' }} />
      <div style={{ width: size * 0.32, height: size * 1.15, background: 'currentColor' }} />
    </div>
  );
}

function IconButton({ onClick, label, active, children }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '1px solid var(--border-strong)',
        background: active || hover ? 'var(--accent)' : 'transparent',
        color: active || hover ? 'var(--surface)' : 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background .15s ease, color .15s ease, border-color .15s ease',
      }}
    >
      {children}
    </button>
  );
}

function ScrubBar({ elapsed, duration, onSeek }) {
  const trackRef = useRef(null);
  const [hoverX, setHoverX] = useState(null);
  const pct = duration ? Math.min(100, (elapsed / duration) * 100) : 0;

  const fractionFromEvent = (e) => {
    const rect = trackRef.current.getBoundingClientRect();
    return Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  };

  return (
    <div
      ref={trackRef}
      onMouseMove={(e) => setHoverX(fractionFromEvent(e))}
      onMouseLeave={() => setHoverX(null)}
      onClick={(e) => {
        if (!duration || !onSeek) return;
        onSeek(fractionFromEvent(e) * duration);
      }}
      style={{
        flex: 1,
        height: 12,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: duration ? 'pointer' : 'default',
      }}
    >
      <div style={{ width: '100%', height: 2, background: 'var(--border)', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: pct + '%',
            background: 'var(--accent)',
            transition: 'width .25s linear',
          }}
        />
        {hoverX !== null && (
          <div
            style={{
              position: 'absolute',
              top: -3,
              left: `calc(${hoverX * 100}% - 4px)`,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
            }}
          />
        )}
      </div>
      {hoverX !== null && duration > 0 && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: `calc(${hoverX * 100}% - 18px)`,
            background: 'var(--surface)',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            padding: '3px 7px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          {fmtTime(hoverX * duration)}
        </div>
      )}
    </div>
  );
}

export function PlayerBar() {
  const { track, playing, elapsed, duration, toggle, close, seek } = usePlayer();
  const visible = !!track;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: 'var(--surface-alt)',
        borderTop: '1px solid var(--border)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        opacity: visible ? 1 : 0,
        transition: 'transform .35s cubic-bezier(.22,.9,.35,1), opacity .35s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 52px',
          height: 76,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            background: track ? track.bg : 'var(--surface-media)',
            border: '1px solid var(--border-soft)',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          {track && track.photo && (
            <img
              src={track.photo}
              alt={track.caption}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)' }}
            />
          )}
        </div>

        <div style={{ minWidth: 0, width: 220, flexShrink: 0 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: 'var(--tracking-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--text-quiet)',
              marginBottom: 4,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {track ? track.caption : ''}
          </div>
        </div>

        <IconButton onClick={toggle} label={playing ? 'Pauza' : 'Odtwórz'} active={playing}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </IconButton>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)', width: 34 }}>
            {fmtTime(elapsed)}
          </span>
          <ScrubBar elapsed={elapsed} duration={duration} onSeek={seek} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)', width: 34 }}>
            {fmtTime(duration)}
          </span>
        </div>

        <IconButton onClick={close} label="Zamknij odtwarzacz">
          <div style={{ position: 'relative', width: 12, height: 12 }}>
            <div style={{ position: 'absolute', top: 5, left: 0, width: 12, height: 1.5, background: 'currentColor', transform: 'rotate(45deg)' }} />
            <div style={{ position: 'absolute', top: 5, left: 0, width: 12, height: 1.5, background: 'currentColor', transform: 'rotate(-45deg)' }} />
          </div>
        </IconButton>
      </div>
    </div>
  );
}
