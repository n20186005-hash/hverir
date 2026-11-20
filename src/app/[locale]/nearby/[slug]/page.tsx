import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';
import { Link } from '@/i18n/navigation';
import { AREA_NAMES, NEARBY_SOURCE_DATE, NEARBY_TEXT, getNearbyPlace, nearbyMap, nearbyPlaces, relatedPlaces } from '@/lib/nearby';
import { absoluteUrl, languageAlternates, type AppLocale } from '@/lib/site';

type Props = { params: Promise<{ locale: AppLocale; slug: string }> };

export function generateStaticParams() {
  return nearbyPlaces.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const place = getNearbyPlace(slug);
  if (!place?.[locale]) notFound();
  const copy = place[locale];
  const path = `/nearby/${slug}`;
  const images = place.photos?.slice(0, 1).map((photo) => ({ url: photo.src, alt: photo.alt[locale] })) ?? [];
  return {
    title: `${copy.title} | Hverir`,
    description: copy.description,
    alternates: { canonical: absoluteUrl(locale, path), languages: languageAlternates(path) },
    openGraph: { title: copy.title, description: copy.description, url: absoluteUrl(locale, path), type: 'article', images },
    twitter: { card: images.length ? 'summary_large_image' : 'summary', title: copy.title, description: copy.description, images },
    robots: { index: true, follow: true },
  };
}

function GuideSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="border-t py-6" style={{ borderColor: 'var(--border-color)' }}>
      <h2 className="font-display text-2xl">{heading}</h2>
      <div className="mt-2 leading-relaxed">{children}</div>
    </section>
  );
}

export default async function NearbyAttractionPage({ params }: Props) {
  const { locale, slug } = await params;
  const place = getNearbyPlace(slug);
  if (!place?.[locale]) notFound();
  setRequestLocale(locale);
  const content = place[locale];
  const labels = NEARBY_TEXT[locale];
  const map = nearbyMap(place);
  const related = relatedPlaces(place);

  return (
    <>
      <main className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
        <nav className="flex flex-wrap items-center gap-4 py-6">
          <Link className="underline" href="/">{labels.home}</Link>
          <Link className="underline" href="/nearby">{labels.title}</Link>
          <LanguageToggle />
        </nav>
        <header className="pb-7">
          <p>{AREA_NAMES[place.area][locale]}</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">{content.title}</h1>
          <p className="mt-3 text-lg">{content.description}</p>
          <a href={map} className="mt-4 inline-block underline underline-offset-4">{labels.map}</a>
        </header>
        <GuideSection heading={labels.overview}>
          <p>{content.history}</p>
          {place.manager ? (
            <p className="mt-2">{labels.manager} · <a className="underline" href={place.manager.source}>{place.manager[locale]}</a></p>
          ) : (
            <p className="mt-2">{labels.managerPending}</p>
          )}
          {place.photos?.[0] && (
            <figure className="mt-4">
              <Image src={place.photos[0].src} width={place.photos[0].width} height={place.photos[0].height} alt={place.photos[0].alt[locale]} className="h-auto w-full rounded-lg" />
              <figcaption className="mt-1 text-sm"><a className="underline" href={place.photos[0].source}>{place.photos[0].author}</a> · <a className="underline" href={place.photos[0].licenseUrl}>{place.photos[0].license}</a></figcaption>
            </figure>
          )}
        </GuideSection>
        <GuideSection heading={labels.highlights}><p>{content.highlights}</p></GuideSection>
        <GuideSection heading={labels.walk}><p>{content.walk}</p></GuideSection>
        <GuideSection heading={labels.photo}>
          <p>{content.photo}</p>
          {place.photos?.slice(1).map((photo) => (
            <figure key={photo.src} className="mt-4">
              <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt[locale]} className="h-auto w-full rounded-lg" />
              <figcaption className="mt-1 text-sm"><a className="underline" href={photo.source}>{photo.author}</a> · <a className="underline" href={photo.licenseUrl}>{photo.license}</a></figcaption>
            </figure>
          ))}
        </GuideSection>
        <GuideSection heading={labels.faq}>
          <dl><dt className="font-semibold">{content.faq[0]}</dt><dd>{content.faq[1]}</dd></dl>
        </GuideSection>
        <GuideSection heading={labels.sources}>
          <p className="mb-2 text-sm"><time dateTime={NEARBY_SOURCE_DATE}>{labels.sourceDate}</time></p>
          <ul className="space-y-2">
            <li><a className="underline" href={place.source}>{place.name} · {labels.sources}</a></li>
            <li><a className="underline" href={map}>{labels.map}</a></li>
          </ul>
        </GuideSection>
        {related.length > 0 && (
          <GuideSection heading={labels.related}>
            <ul className="space-y-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link className="underline" href={{ pathname: '/nearby/[slug]', params: { slug: item.slug } }}>{item[locale].title}</Link>
                </li>
              ))}
            </ul>
          </GuideSection>
        )}
      </main>
      <Footer />
    </>
  );
}
