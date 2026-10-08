import { setRequestLocale } from 'next-intl/server';
import { absoluteUrl, languageAlternates } from '@/lib/site';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: `${messages.cookieSettings.title} | Hverir`,
    alternates: {
      canonical: absoluteUrl(locale, '/cookie-settings'),
      languages: languageAlternates('/cookie-settings'),
    },
    robots: { index: false, follow: true },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
