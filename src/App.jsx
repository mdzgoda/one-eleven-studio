import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Gear } from './pages/Gear';
import { Crew } from './pages/Crew';
import { Booking } from './pages/Booking';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
