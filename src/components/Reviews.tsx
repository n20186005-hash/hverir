import { useTranslations } from 'next-intl';
import { ATTRACTION, RATING } from '@/lib/site';

export default function Reviews() {
  const t = useTranslations('reviews');

  return (
    <section id="reviews" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-sm leading-relaxed mb-10 max-w-2xl"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('declaration')}
        </p>

        {/* Rating snapshot (display only — no invented quotes) */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <SnapshotCard label={t('ratingLabel')} value={t('ratingValue')} />
          <SnapshotCard label={t('countLabel')} value={t('countValue')} />
          <SnapshotCard label={t('checkedLabel')} value={t('checkedValue')} />
        </div>

        <div className="flex justify-center">
          <a
            href={ATTRACTION.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            style={{
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
            }}
          >
            <span>{t('moreReviews')}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
          {RATING.checkedAt}
        </p>
      </div>
    </section>
  );
}

function SnapshotCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: 'var(--card-bg)',
        boxShadow: 'var(--card-shadow)',
        border: '1px solid var(--border-color)',
      }}
    >
      <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
      <p className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
        {value}
      </p>
    </div>
  );
}
