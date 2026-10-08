import type { Locale } from '@/i18n/routing';

/** Canonical origin — always non-www, always https. www and http are 301'd in middleware. */
export const SITE_URL = 'https://hverir.com';

export const SITE_NAME = 'Hverir';

/** Hverir = Hverarönd = Námaskarð geothermal area, Námafjall, Mývatn, NE Iceland. */
export const ATTRACTION = {
  name: 'Hverir',
  alternateNames: ['Hverarönd', 'Námaskarð', 'Hverir Geothermal Area', 'Námafjall Geothermal Area'],
  region: 'Northeast Iceland, near Mývatn and Reykjahlíð',
  address: 'J5RR+978, 660 Reykjahlíð, Iceland',
  plusCode: 'J5RR+978',
  postalCode: '660',
  city: 'Reykjahlíð',
  country: 'Iceland',
  countryCode: 'IS',
  latitude: 65.6392,
  longitude: -16.8886,
  mapsUrl: 'https://maps.app.goo.gl/XR4FSQY6QcQvKWSq8',
  /** No-key Google Maps embed (query based, stable without an API key). */
  embedBaseUrl:
    'https://maps.google.com/maps?q=Hverir%20Geothermal%20Area%2C%20N%C3%A1maskar%C3%B0%2C%20Iceland&z=15&output=embed',
};

/** Google Maps rating snapshot — page display only, with a visible check date. */
export const RATING = {
  value: 4.6,
  count: 10314,
  checkedAt: 'Google Maps rating · checked October 2026',
};

/** Parking at Hverir is operated by Sannir Landvættir and is chargeable 24/7, year-round. */
export const PARKING = {
  operatorName: 'Sannir Landvættir',
  operatorUrl: 'https://www.sannir.is/hv',
  operatorPaymentUrl: 'https://www.sannir.is/verkefni',
  operatorFaqUrl: 'https://www.sannir.is/faq',
  operatorPhone: '+354 587 0444',
  rates: '1,400 / 3,000 / 7,000 ISK',
  checkedAt: 'Parking information last checked: October 2026',
};

export function localePrefix(locale: string): string {
  // English is the default locale (served at the apex, no prefix).
  return locale === 'en' ? '' : `/${locale}`;
}

/** Build an absolute, canonical (non-www, https) URL for a locale + app path. */
export function absoluteUrl(locale: string, path = ''): string {
  const suffix = !path || path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${localePrefix(locale)}${suffix}`;
}

/**
 * hreflang alternates for a given app path (e.g. '/parking').
 * x-default points at the English version: the audience for Hverir is
 * overwhelmingly international and English is the fallback language.
 */
export function languageAlternates(path = ''): Record<string, string> {
  return {
    'zh-CN': absoluteUrl('zh', path),
    en: absoluteUrl('en', path),
    'x-default': absoluteUrl('en', path),
  };
}

export const PUBLIC_PATHS = ['/', '/parking', '/namafjall-hike'] as const;

export type AppLocale = Locale;
