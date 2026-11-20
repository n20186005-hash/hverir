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
import NearbyIndex from '@/components/NearbyIndex';
import Footer from '@/components/Footer';
import { absoluteUrl, ATTRACTION, SITE_URL, type AppLocale } from '@/lib/site';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const attractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${SITE_URL}/#attraction`,
    name: ATTRACTION.name,
    alternateName: ATTRACTION.alternateNames,
    description: locale === 'zh'
      ? '赫维尔（Hverarönd / Námaskarð）位于冰岛东北米湖附近的 1 号公路旁，以沸腾泥浆池、蒸汽喷口与多彩矿物沉积著称。'
      : 'Hverir (Hverarönd / Námaskarð) is a geothermal area of bubbling mud pots, steam vents and colourful mineral deposits beside Route 1 near Lake Mývatn in northeast Iceland.',
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
    sameAs: [ATTRACTION.mapsUrl],
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
        <NearbyIndex locale={locale} compact />
      </main>
      <Footer />
    </>
  );
}
