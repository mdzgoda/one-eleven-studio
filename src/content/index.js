function loadCollection(globResult) {
  return Object.keys(globResult)
    .sort()
    .map((key) => globResult[key]);
}

export const site = Object.values(
  import.meta.glob('../../content/site.json', { eager: true, import: 'default' })
)[0];

export const rooms = loadCollection(
  import.meta.glob('../../content/rooms/*.json', { eager: true, import: 'default' })
);

export const gearGroups = loadCollection(
  import.meta.glob('../../content/gear/*.json', { eager: true, import: 'default' })
);

export const rentals = loadCollection(
  import.meta.glob('../../content/rentals/*.json', { eager: true, import: 'default' })
);

export const crew = loadCollection(
  import.meta.glob('../../content/crew/*.json', { eager: true, import: 'default' })
);

export const stats = loadCollection(
  import.meta.glob('../../content/stats/*.json', { eager: true, import: 'default' })
);

export const portfolio = loadCollection(
  import.meta.glob('../../content/portfolio/*.json', { eager: true, import: 'default' })
);

export const testimonials = loadCollection(
  import.meta.glob('../../content/testimonials/*.json', { eager: true, import: 'default' })
);
