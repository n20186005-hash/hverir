import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';
import NearbyIndex from '@/components/NearbyIndex';
import { Link } from '@/i18n/navigation';
import { NEARBY_TEXT, nearbyPlaces } from '@/lib/nearby';
import { absoluteUrl, languageAlternates, type AppLocale } from '@/lib/site';

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = NEARBY_TEXT[locale];
  if (!copy || !nearbyPlaces.length) notFound();
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: absoluteUrl(locale, '/nearby'), languages: languageAlternates('/nearby') },
    openGraph: { title: copy.title, description: copy.description, url: absoluteUrl(locale, '/nearby'), images: [] },
    twitter: { card: 'summary', title: copy.title, description: copy.description, images: [] },
    robots: { index: true, follow: true },
  };
}

export default async function NearbyPage({ params }: Props) {
  const { locale } = await params;
  const copy = NEARBY_TEXT[locale];
  if (!copy || !nearbyPlaces.length) notFound();
  setRequestLocale(locale);

  return (
    <>
      <main>
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-6 sm:px-6">
          <Link className="underline" href="/">{copy.home}</Link>
          <LanguageToggle />
        </nav>
        <NearbyIndex locale={locale} />
      </main>
      <Footer />
    </>
  );
}
