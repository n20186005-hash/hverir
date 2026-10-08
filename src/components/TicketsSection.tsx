'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function TicketsSection() {
  const t = useTranslations('tickets');

  return (
    <section id="tickets" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {/* Parking is paid — stated before anything about free admission */}
        <div
          className="mb-8 rounded-2xl p-5 sm:p-6"
          style={{ background: 'var(--bg-tertiary)', border: '2px solid var(--accent)' }}
        >
          <div className="flex items-start gap-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              className="flex-shrink-0 mt-0.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 17V9h6v8" />
            </svg>
            <div>
              <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('parkingTitle')}
              </p>
              <p className="text-lg font-bold mb-2" style={{ color: 'var(--accent)' }}>
                {t('parkingPrice')}
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                {t('parkingDesc')}
              </p>
              <Link
                href="/parking"
                className="text-sm font-medium hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('parkingLink')} →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Optional guided tours */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)', border: '2px solid var(--accent)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L4 12h3v4h10v-4h3L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t('garden')}
                </h3>
                <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{t('gardenPrice')}</p>
              </div>
            </div>
          </div>

          {/* Nearby Mývatn Nature Baths */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('rosenborg')}
            </h3>
            <div className="space-y-3">
              <PriceRow label={t('adults')} value={t('adultsPrice')} />
              <PriceRow label={t('students')} value={t('studentsPrice')} />
              <PriceRow label={t('under17')} value={t('under17Price')} isFree />
            </div>
          </div>
        </div>

        {/* Námafjall hike */}
        <div
          className="mt-6 rounded-xl p-5 flex items-start gap-4"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <line x1="2" y1="10" x2="22" y2="10"/>
          </svg>
          <div>
            <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{t('card')}</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('cardPrice')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceRow({ label, value, isFree = false }: { label: string; value: string; isFree?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
      <span className="font-semibold" style={{ color: isFree ? 'var(--accent)' : 'var(--text-primary)' }}>
        {value}
      </span>
    </div>
  );
}
