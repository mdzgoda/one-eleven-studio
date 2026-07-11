import { useEffect, useState } from 'react';

function getBreakpoint() {
  const w = window.innerWidth;
  if (w <= 640) return 'sm';
  if (w <= 1024) return 'md';
  return 'lg';
}

// 'sm' (phone, <=640), 'md' (tablet, <=1024), or 'lg' (desktop).
export function useBreakpoint() {
  const [bp, setBp] = useState(getBreakpoint);
  useEffect(() => {
    function onResize() {
      const next = getBreakpoint();
      setBp((prev) => (prev === next ? prev : next));
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return bp;
}

// Pick a value per breakpoint: pick({ sm: 1, md: 2, lg: 3 }, bp)
export function pick(map, bp) {
  return map[bp] !== undefined ? map[bp] : map.lg;
}

// Convenience boolean, true at/below `breakpoint` px (default 720).
export function useIsMobile(breakpoint = 720) {
  const query = `(max-width: ${breakpoint}px)`;
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = () => setMatches(mql.matches);
    if (mql.addEventListener) mql.addEventListener('change', handler);
    else mql.addListener(handler);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', handler);
      else mql.removeListener(handler);
    };
  }, [query]);
  return matches;
}
