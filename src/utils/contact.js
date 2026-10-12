// Polish numbers are entered without a country code (e.g. "533 230 300")
export function telHref(phone) {
  const trimmed = (phone || '').trim();
  const digits = trimmed.replace(/\D/g, '');
  return trimmed.startsWith('+') ? `tel:+${digits}` : `tel:+48${digits}`;
}

export function websiteHref(website) {
  return `https://${(website || '').replace(/^https?:\/\//, '')}`;
}
