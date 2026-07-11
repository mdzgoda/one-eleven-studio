import { createContext, useContext, useEffect, useRef, useState } from 'react';

const PlayerContext = createContext(null);

// This player has no real audio source — playback is simulated with a timer.
// Wire up a real <audio> element / track URLs to make it actually play sound.
const SIMULATED_DURATION = 194;

export function PlayerProvider({ children }) {
  const [track, setTrack] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!playing) return undefined;
    intervalRef.current = setInterval(() => {
      setElapsed((e) => {
        if (e + 1 >= SIMULATED_DURATION) {
          setPlaying(false);
          return 0;
        }
        return e + 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const play = (nextTrack) => {
    if (track && track.caption === nextTrack.caption) {
      setPlaying((p) => !p);
      return;
    }
    setTrack(nextTrack);
    setElapsed(0);
    setPlaying(true);
  };

  const toggle = () => setPlaying((p) => (track ? !p : p));

  const close = () => {
    setTrack(null);
    setPlaying(false);
    setElapsed(0);
  };

  const seek = (time) => setElapsed(Math.max(0, Math.min(SIMULATED_DURATION, time)));

  return (
    <PlayerContext.Provider value={{ track, playing, elapsed, duration: SIMULATED_DURATION, play, toggle, close, seek }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
