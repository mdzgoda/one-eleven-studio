import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { NavHeader } from '../components/navigation/NavHeader';
import { Footer } from '../components/navigation/Footer';
import { Eyebrow } from '../components/core/Eyebrow';
import { Button } from '../components/core/Button';
import { site } from '../content';
import { useBreakpoint, pick } from '../hooks/useBreakpoint';
import { telHref, websiteHref } from '../utils/contact';

const { bookingPage, footer } = site;

const encode = (data) => new URLSearchParams(data).toString();

function Field({ label, name, placeholder, value, onChange }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'block', marginBottom: 24 }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 8 }}>
        {label}
      </div>
      <input
        name={name}
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const bp = useBreakpoint();
  const sm = bp === 'sm';
  const mdDown = bp !== 'lg';
  const padX = pick({ sm: 20, md: 36, lg: 52 }, bp);
  // Submissions are delivered to this address, so no address means no form
  const hasEmail = Boolean(footer.email && footer.email.trim());

  if (bookingPage.visible === false) return <Navigate to="/" replace />;

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // Delivered by Netlify Forms (see the hidden "booking" form in index.html)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'booking', ...form }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page">
      <NavHeader />
      <div
        style={{
          padding: `${sm ? 48 : 90}px ${padX}px ${sm ? 56 : 100}px`,
          display: 'grid',
          gridTemplateColumns: mdDown || !hasEmail ? '1fr' : '1fr 1fr',
          gap: sm ? 40 : 80,
        }}
      >
        <div>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{bookingPage.eyebrow}</Eyebrow>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: pick({ sm: 30, md: 38, lg: 44 }, bp), margin: '0 0 20px', letterSpacing: '-.01em' }}>
            {bookingPage.title}
          </h1>
          <p style={{ fontSize: sm ? 15 : 16, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: sm ? 'none' : 420 }}>
            {bookingPage.subtitle}
          </p>
          <div style={{ marginTop: 32, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {footer.addressLine1}
            <br />
            {footer.addressLine2}
            <br />
            <a href={telHref(footer.phone)} style={{ color: 'var(--accent)' }}>{footer.phone}</a>
            {hasEmail && (
              <>
                <br />
                <a href={`mailto:${footer.email}`} style={{ color: 'var(--accent)' }}>{footer.email}</a>
              </>
            )}
            {footer.website && (
              <>
                <br />
                <a href={websiteHref(footer.website)} style={{ color: 'var(--accent)' }}>{footer.website}</a>
              </>
            )}
          </div>
        </div>
        {hasEmail && (
          <div style={{ maxWidth: mdDown ? 'none' : 440 }}>
            {submitted ? (
              <p style={{ fontSize: 16, color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {bookingPage.thankYou}
              </p>
            ) : (
              <form name="booking" onSubmit={handleSubmit}>
                <Field name="name" label="Imię i nazwisko" placeholder="Jan Kowalski" value={form.name} onChange={update('name')} />
                <Field name="email" label="E-mail" placeholder="jan@zespol.com" value={form.email} onChange={update('email')} />
                <Field name="room" label="Sala" placeholder="Sala Live / Studio B / Scena do Scoringu" value={form.room} onChange={update('room')} />
                <Field name="date" label="Preferowana data" placeholder="np. 14 sierpnia 2026" value={form.date} onChange={update('date')} />
                <Button variant="primary" onClick={handleSubmit}>{sending ? 'Wysyłanie…' : 'Wyślij zapytanie'}</Button>
                {error && (
                  <p style={{ fontSize: 14, color: 'var(--accent)', lineHeight: 1.5, margin: '16px 0 0' }}>
                    Nie udało się wysłać formularza. Spróbuj ponownie lub napisz na {footer.email}.
                  </p>
                )}
              </form>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
