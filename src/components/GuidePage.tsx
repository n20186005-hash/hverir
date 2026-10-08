import { useTranslations, useMessages, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { absoluteUrl, ATTRACTION } from '@/lib/site';

type GuidePageProps = {
  /** messages namespace, e.g. 'parking' */
  namespace: 'parking' | 'hike';
  /** app path without locale prefix, e.g. '/parking' */
  path: string;
  /** authoritative external source for the facts on this page */
  sourceUrl?: string;
};

type GuideContent = {
  title: string;
  intro: string;
  facts: Array<{ label: string; value: string }>;
  sections: Array<{ heading: string; items: string[] }>;
  faq: Array<{ q: string; a: string }>;
  sourceLabel?: string;
  updated: string;
};

export default function GuidePage({ namespace, path, sourceUrl }: GuidePageProps) {
  const t = useTranslations(namespace);
  const ht = useTranslations('header');
  const locale = useLocale();
  const messages = useMessages() as Record<string, GuideContent | undefined>;
  const content = messages[namespace];

  const facts = content?.facts ?? [];
  const sections = content?.sections ?? [];
  const faq = content?.faq ?? [];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Hverir',
        item: absoluteUrl(locale, '/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content?.title ?? '',
        item: absoluteUrl(locale, path),
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {ht('backToHome')}
        </Link>

        <h1
          className="font-display text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h1>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p className="leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          {t('intro')}
        </p>

        {/* Quick facts — the mobile-first answer block */}
        {facts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="rounded-xl p-4"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                  {fact.label}
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {sections.map((section, i) => (
          <section key={i} className="mb-10">
            <h2
              className="font-display text-xl sm:text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {section.heading}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span
                    className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  <span className="leading-relaxed text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {faq.length > 0 && (
          <section className="mb-10">
            <h2
              className="font-display text-xl sm:text-2xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {locale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-6">
              {faq.map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {item.q}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div
          className="rounded-xl p-5 mb-8"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          {sourceUrl && content?.sourceLabel && (
            <p className="text-sm mb-3">
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {content.sourceLabel}
              </a>
            </p>
          )}
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {t('updated')}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={ATTRACTION.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            {locale === 'zh' ? '在 Google 地图查看位置' : 'Open Hverir in Google Maps'}
          </a>
        </div>
      </div>
    </div>
  );
}
