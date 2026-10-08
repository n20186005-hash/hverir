import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuidePage from '@/components/GuidePage';
import { absoluteUrl, languageAlternates } from '@/lib/site';
import type { Metadata } from 'next';

const PATH = '/namafjall-hike';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const page = messages.hike;

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: absoluteUrl(locale, PATH),
      languages: languageAlternates(PATH),
    },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      url: absoluteUrl(locale, PATH),
      type: 'article',
    },
    robots: { index: true, follow: true },
  };
}

export default async function HikePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <GuidePage namespace="hike" path={PATH} sourceUrl="https://www.northiceland.is" />
      </main>
      <Footer />
    </>
  );
}
