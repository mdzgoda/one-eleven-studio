/* global CMS, h */

function val(entry, path) {
  var v = entry.getIn(['data'].concat(path));
  if (v && typeof v.toJS === 'function') return v.toJS();
  return v;
}

function resolveAsset(getAsset, path) {
  if (!path) return '';
  try {
    var asset = getAsset(path);
    if (asset && typeof asset.toString === 'function') return asset.toString();
  } catch (e) {
    /* fall through to raw path */
  }
  return path;
}

function SectionLabel({ children }) {
  return h('div', { className: 'oes-preview-label' }, children);
}

function Frame({ children }) {
  return h('div', { style: { minHeight: '100%' } }, children);
}

function SitePreview({ entry, getAsset }) {
  var logoSrc = resolveAsset(getAsset, val(entry, ['branding', 'logoMark']));
  var heroSrc = resolveAsset(getAsset, val(entry, ['home', 'heroImage']));
  var home = val(entry, ['home']) || {};
  var gearPage = val(entry, ['gearPage']) || {};
  var crewPage = val(entry, ['crewPage']) || {};
  var bookingPage = val(entry, ['bookingPage']) || {};
  var footer = val(entry, ['footer']) || {};
  var social = footer.socialLinks || [];

  return h(
    Frame,
    null,
    h(SectionLabel, null, 'Nagłówek (widoczny na każdej stronie)'),
    h(
      'div',
      { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 28px', borderBottom: '1px solid var(--border)' } },
      logoSrc ? h('img', { src: logoSrc, style: { height: 32 } }) : h('div', { style: { color: 'var(--text-quiet)', fontSize: 12 } }, 'brak logo'),
      h(
        'div',
        { style: { display: 'flex', gap: 20, fontFamily: 'var(--font-body)', fontSize: 12 } },
        h('span', null, 'Studio'),
        h('span', null, 'Sprzęt'),
        h('span', null, 'Ekipa'),
        h('span', { style: { color: 'var(--accent)' } }, 'Rezerwacja →')
      )
    ),

    h(SectionLabel, null, 'Hero — strona główna'),
    h(
      'div',
      { style: { position: 'relative', padding: '36px 28px', overflow: 'hidden' } },
      heroSrc &&
        h('img', {
          src: heroSrc,
          style: { position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)' },
        }),
      h(
        'div',
        { style: { position: 'relative', maxWidth: '52%' } },
        h(
          'div',
          { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 } },
          home.eyebrow
        ),
        h(
          'h1',
          { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, lineHeight: 1.1, margin: '0 0 14px', letterSpacing: '-.01em' } },
          home.heroTitleLine1,
          h('br'),
          home.heroTitleLine2
        ),
        h('p', { style: { fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)', margin: '0 0 18px' } }, home.heroText),
        h(
          'div',
          { style: { display: 'flex', gap: 10 } },
          h(
            'span',
            { style: { background: 'var(--accent)', color: 'var(--surface)', fontWeight: 600, fontSize: 12, padding: '10px 16px' } },
            home.primaryButtonLabel
          ),
          h(
            'span',
            { style: { border: '1px solid var(--border-strong)', color: 'var(--text-primary)', fontSize: 12, padding: '10px 16px' } },
            home.secondaryButtonLabel
          )
        )
      )
    ),

    h(SectionLabel, null, 'Nagłówki sekcji — strona główna'),
    h(
      'div',
      { style: { padding: '18px 28px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, fontSize: 12 } },
      h('div', null, h('span', { style: { color: 'var(--accent)' } }, home.roomsEyebrow), ' — ', home.roomsTitle),
      h('div', null, h('span', { style: { color: 'var(--accent)' } }, home.gearEyebrow)),
      h('div', null, h('span', { style: { color: 'var(--accent)' } }, home.rentEyebrow), ' — ', home.rentTitle),
      h('div', null, h('span', { style: { color: 'var(--accent)' } }, home.crewEyebrow), ' — ', home.crewTitle),
      h('div', null, h('span', { style: { color: 'var(--accent)' } }, home.testimonialsEyebrow)),
      h('div', null, home.ctaTitle, ' · ', h('span', { style: { color: 'var(--accent)' } }, home.ctaButtonLabel))
    ),

    h(SectionLabel, null, 'Strona: Sprzęt (/gear)'),
    h(
      'div',
      { style: { padding: '18px 28px' } },
      h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 } }, gearPage.eyebrow),
      h('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, margin: '0 0 8px' } }, gearPage.title),
      h('p', { style: { fontSize: 13, color: 'var(--text-secondary)', margin: 0 } }, gearPage.subtitle)
    ),

    h(SectionLabel, null, 'Strona: Ekipa (/crew)'),
    h(
      'div',
      { style: { padding: '18px 28px' } },
      h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 } }, crewPage.eyebrow),
      h('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, margin: 0 } }, crewPage.title)
    ),

    h(SectionLabel, null, 'Strona: Rezerwacja (/book)'),
    h(
      'div',
      { style: { padding: '18px 28px' } },
      h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 } }, bookingPage.eyebrow),
      h('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, margin: '0 0 8px' } }, bookingPage.title),
      h('p', { style: { fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 8px' } }, bookingPage.subtitle),
      h('p', { style: { fontSize: 12, color: 'var(--text-quiet)', margin: 0 } }, '(po wysłaniu formularza): ', bookingPage.thankYou)
    ),

    h(SectionLabel, null, 'Stopka (widoczna na każdej stronie)'),
    h(
      'div',
      { style: { padding: '24px 28px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 20, fontSize: 12 } },
      h(
        'div',
        null,
        logoSrc && h('img', { src: logoSrc, style: { height: 18, marginBottom: 8 } }),
        h('p', { style: { color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.5 } }, footer.tagline)
      ),
      h(
        'div',
        null,
        h('div', { style: { color: 'var(--accent)', textTransform: 'uppercase', fontSize: 10, marginBottom: 8 } }, footer.visitHeading),
        h('div', { style: { color: 'var(--text-secondary)', lineHeight: 1.7 } }, footer.addressLine1, h('br'), footer.addressLine2, h('br'), footer.hours)
      ),
      h(
        'div',
        null,
        h('div', { style: { color: 'var(--accent)', textTransform: 'uppercase', fontSize: 10, marginBottom: 8 } }, footer.bookingHeading),
        h('div', { style: { color: 'var(--text-secondary)', lineHeight: 1.7 } }, footer.email, h('br'), footer.phone)
      ),
      h(
        'div',
        null,
        h('div', { style: { color: 'var(--accent)', textTransform: 'uppercase', fontSize: 10, marginBottom: 8 } }, footer.followHeading),
        h(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: 4 } },
          social.map(function (s, i) {
            return h('span', { key: i, style: { color: 'var(--text-secondary)' } }, s.label);
          })
        )
      )
    ),
    h(
      'div',
      { style: { padding: '10px 28px 24px', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-quiet)' } },
      h('span', null, footer.copyright),
      h('span', null, footer.availabilityNote)
    )
  );
}

function RoomPreview({ entry }) {
  var d = val(entry, []) || {};
  return h(
    Frame,
    null,
    h(SectionLabel, null, 'Karta sali — sekcja "Sale" na stronie głównej'),
    h(
      'div',
      { style: { padding: '28px 24px', maxWidth: 360 } },
      h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-quiet)', marginBottom: 14 } }, d.label),
      h('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, margin: '0 0 12px' } }, d.name),
      h('p', { style: { fontSize: 13, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 16px' } }, d.description),
      h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-quiet)' } }, d.specs)
    )
  );
}

function GearPreview({ entry }) {
  var d = val(entry, []) || {};
  var items = d.items || [];
  return h(
    Frame,
    null,
    h(SectionLabel, null, 'Grupa sprzętu — strony "Sprzęt" i sekcja "Magazyn Sprzętu"'),
    h(
      'div',
      { style: { padding: '28px 24px' } },
      h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, marginBottom: 12 } }, d.title),
      h(
        'div',
        { style: { display: 'flex', flexWrap: 'wrap', gap: 8 } },
        items.map(function (item, i) {
          return h(
            'span',
            { key: i, style: { fontFamily: 'var(--font-body)', fontSize: 13, padding: '7px 13px', border: '1px solid var(--border-strong)', color: 'var(--text-secondary)' } },
            item
          );
        })
      )
    )
  );
}

function RentalPreview({ entry }) {
  var d = val(entry, []) || {};
  return h(
    Frame,
    null,
    h(SectionLabel, null, 'Karta wypożyczenia — sekcja "Wypożycz Rzadkości"'),
    h(
      'div',
      { style: { padding: '28px 24px', maxWidth: 320, border: '1px solid var(--line-tag)' } },
      h(
        'div',
        { style: { fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 14 } },
        'Do Wypożyczenia'
      ),
      h('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, margin: '0 0 10px' } }, d.name),
      h('p', { style: { fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.5, margin: '0 0 16px' } }, d.description),
      h('span', { style: { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13, color: 'var(--text-primary)' } }, 'Zapytaj →')
    )
  );
}

function CrewPreview({ entry }) {
  var d = val(entry, []) || {};
  return h(
    Frame,
    null,
    h(SectionLabel, null, 'Karta osoby — sekcja "Ekipa" i strona "Ekipa"'),
    h(
      'div',
      { style: { padding: '28px 24px', maxWidth: 220 } },
      h('div', { style: { width: '100%', aspectRatio: '1', background: 'var(--surface-media)', marginBottom: 16 } }),
      h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, marginBottom: 4 } }, d.name),
      h('div', { style: { fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--accent)', marginBottom: 10 } }, d.role),
      h('p', { style: { fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.5, margin: 0 } }, d.bio)
    )
  );
}

function StatPreview({ entry }) {
  var d = val(entry, []) || {};
  return h(
    Frame,
    null,
    h(SectionLabel, null, 'Statystyka — sekcja "Prace" na stronie głównej'),
    h(
      'div',
      { style: { padding: '28px 24px' } },
      h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--accent)' } }, d.value),
      h('div', { style: { fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: 8 } }, d.label)
    )
  );
}

function PortfolioPreview({ entry }) {
  var d = val(entry, []) || {};
  return h(
    Frame,
    null,
    h(SectionLabel, null, 'Kafelek portfolio — sekcja "Prace" na stronie głównej'),
    h(
      'div',
      { style: { padding: '28px 24px', maxWidth: 180 } },
      h('div', { style: { aspectRatio: '1', background: d.bg || '#1a1a1a', border: '1px solid var(--border-soft)', marginBottom: 8 } }),
      h('div', { style: { fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-tertiary)' } }, d.caption)
    )
  );
}

function TestimonialPreview({ entry }) {
  var d = val(entry, []) || {};
  return h(
    Frame,
    null,
    h(SectionLabel, null, 'Opinia — sekcja "W Ich Słowach" na stronie głównej'),
    h(
      'div',
      { style: { padding: '28px 24px', maxWidth: 420 } },
      h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, lineHeight: 1.4, marginBottom: 14 } }, d.quote),
      h('div', { style: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-tertiary)' } }, d.attribution)
    )
  );
}

CMS.registerPreviewStyle('preview.css');
CMS.registerPreviewTemplate('site', SitePreview);
CMS.registerPreviewTemplate('rooms', RoomPreview);
CMS.registerPreviewTemplate('gear', GearPreview);
CMS.registerPreviewTemplate('rentals', RentalPreview);
CMS.registerPreviewTemplate('crew', CrewPreview);
CMS.registerPreviewTemplate('stats', StatPreview);
CMS.registerPreviewTemplate('portfolio', PortfolioPreview);
CMS.registerPreviewTemplate('testimonials', TestimonialPreview);
