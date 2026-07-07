import { useState } from 'react';
import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Eyebrow } from '../components/core/Eyebrow';
import { Button } from '../components/core/Button';

function Field({ label, placeholder, value, onChange }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'block', marginBottom: 24 }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 8 }}>
        {label}
      </div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          background: 'transparent',
          border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-strong)'}`,
          color: 'var(--text-primary)',
          padding: '14px 16px',
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          transition: 'border-color .15s ease',
        }}
      />
    </label>
  );
}

const initialForm = { name: '', email: '', room: '', date: '' };

export function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <NavHeader />
      <div style={{ padding: '90px 52px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>Rezerwacja</Eyebrow>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 44, margin: '0 0 20px', letterSpacing: '-.01em' }}>
            Umów sesję.
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 420 }}>
            Podaj kilka szczegółów o sesji, a odezwiemy się w ciągu 24 godzin z dostępnością i wyceną.
          </p>
        </div>
        <div style={{ maxWidth: 440 }}>
          {submitted ? (
            <p style={{ fontSize: 16, color: 'var(--text-primary)', lineHeight: 1.6 }}>
              Dziękujemy! Otrzymaliśmy Twoje zapytanie i odezwiemy się w ciągu 24 godzin.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <Field label="Imię i nazwisko" placeholder="Jan Kowalski" value={form.name} onChange={update('name')} />
              <Field label="E-mail" placeholder="jan@zespol.com" value={form.email} onChange={update('email')} />
              <Field label="Sala" placeholder="Sala Live / Studio B / Scena do Scoringu" value={form.room} onChange={update('room')} />
              <Field label="Preferowana data" placeholder="np. 14 sierpnia 2026" value={form.date} onChange={update('date')} />
              <Button variant="primary" onClick={handleSubmit}>Wyślij zapytanie</Button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
