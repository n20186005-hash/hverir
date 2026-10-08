import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ATTRACTION, PARKING } from '@/lib/site';

export default function VisitSummary() {
  const t = useTranslations('visitSummary');

  return (
    <section id="visit-summary" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-2xl sm:text-3xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Parking — highest-intent item, first for mobile users */}
          <div
            className="rounded-xl p-5"
            style={{ background: 'var(--bg-tertiary)', border: '2px solid var(--accent)' }}
          >
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
              {t('parkingLabel')}
            </p>
            <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              {t('parkingValue')}
            </p>
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              {t('parkingHint')}
            </p>
            <Link
              href="/parking"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              {t('parkingLink')}
            </Link>
          </div>

          <div
            className="rounded-xl p-5"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
              {t('admissionLabel')}
            </p>
            <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              {t('admissionValue')}
            </p>
            <p className="text-xs uppercase tracking-wide mb-1 mt-3" style={{ color: 'var(--text-muted)' }}>
              {t('hoursLabel')}
            </p>
            <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              {t('hoursValue')}
            </p>
          </div>

          <div
            className="rounded-xl p-5"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
              {t('addressLabel')}
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('addressValue')}
            </p>
            <a
              href={ATTRACTION.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              {t('mapLink')}
            </a>
          </div>

          {/* Safety — the official guidance is to stay on marked paths */}
          <div
            className="rounded-xl p-5"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
              {t('safetyLabel')}
            </p>
            <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              {t('safetyValue')}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('safetyHint')}
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs" style={{ color: 'var(--text-muted)' }}>
          {PARKING.checkedAt}
        </p>
      </div>
    </section>
  );
}
