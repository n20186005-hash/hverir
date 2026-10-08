import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VisitSummary from '@/components/VisitSummary';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import RouteSection from '@/components/RouteSection';
import Explore from '@/components/Explore';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import HotelsSection from '@/components/HotelsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';
import { absoluteUrl, ATTRACTION, SITE_URL } from '@/lib/site';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const attractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${SITE_URL}/#attraction`,
    name: ATTRACTION.name,
    alternateName: ATTRACTION.alternateNames,
    description:
      'Hverir (Hverarönd / Námaskarð) is a highly active geothermal area of boiling mud pots, steam vents and colourful mineral deposits beside Route 1 near Lake Mývatn in northeast Iceland.',
    url: absoluteUrl(locale, '/'),
    image: `${SITE_URL}/gallery/hverir-1.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ATTRACTION.countryCode,
      addressLocality: ATTRACTION.city,
      postalCode: ATTRACTION.postalCode,
      streetAddress: ATTRACTION.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.latitude,
      longitude: ATTRACTION.longitude,
    },
    hasMap: ATTRACTION.mapsUrl,
    isAccessibleForFree: true,
    publicAccess: true,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: [
      ATTRACTION.mapsUrl,
      'https://www.northiceland.is',
      'https://www.visitmyvatn.is',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <VisitSummary />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <InfoSection />
        <RouteSection />
        <Explore />
        <PhotoSpotsSection />
        <HotelsSection />
        <Gallery />
        <Reviews />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
