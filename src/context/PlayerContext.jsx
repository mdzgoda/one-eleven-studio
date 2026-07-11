import { createContext, useContext, useEffect, useRef, useState } from 'react';

const PlayerContext = createContext(null);

// Tracks without an audioSrc have no real audio — playback is simulated with
// a timer instead. Tracks with an audioSrc play through a real <audio> element.
const SIMULATED_DURATION = 194;

export function PlayerProvider({ children }) {
  const [track, setTrack] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(SIMULATED_DURATION);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  if (audioRef.current === null && typeof Audio !== 'undefined') {
    audioRef.current = new Audio();
  }

  const isReal = !!(track && track.audioSrc);

  // Simulated timer — only advances when the current track has no real audio.
  useEffect(() => {
    if (!playing || isReal) return undefined;
    intervalRef.current = setInterval(() => {
      setElapsed((e) => {
        if (e + 1 >= duration) {
          setPlaying(false);
          return 0;
        }
        return e + 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [playing, isReal, duration]);

  // Real <audio> element event wiring — keeps elapsed/duration/playing in sync.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onTimeUpdate = () => setElapsed(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      setPlaying(false);
      setElapsed(0);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const play = (nextTrack) => {
    const audio = audioRef.current;
    const sameTrack = track && track.caption === nextTrack.caption;

    if (sameTrack) {
      toggle();
      return;
    }

    setTrack(nextTrack);
    setElapsed(0);

    if (nextTrack.audioSrc) {
      setDuration(0);
      if (audio) {
        audio.src = nextTrack.audioSrc;
        audio.currentTime = 0;
        audio.play().catch(() => setPlaying(false));
      }
    } else {
      if (audio) {
        audio.pause();
        audio.removeAttribute('src');
      }
      setDuration(SIMULATED_DURATION);
      setPlaying(true);
    }
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (isReal && audio) {
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
      return;
    }
    setPlaying((p) => (track ? !p : p));
  };

  const close = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
    }
    setTrack(null);
    setPlaying(false);
    setElapsed(0);
    setDuration(SIMULATED_DURATION);
  };

  const seek = (time) => {
    const audio = audioRef.current;
    const clamped = Math.max(0, Math.min(duration, time));
    if (isReal && audio) {
      audio.currentTime = clamped;
      return;
    }
    setElapsed(clamped);
  };

  return (
    <PlayerContext.Provider value={{ track, playing, elapsed, duration, play, toggle, close, seek }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
