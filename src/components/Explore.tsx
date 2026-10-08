import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Explore() {
  const t = useTranslations('explore');

  return (
    <section id="explore" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/parking"
            className="group rounded-xl p-6 block transition-shadow hover:shadow-md"
            style={{
              background: 'var(--card-bg)',
              boxShadow: 'var(--card-shadow)',
              border: '1px solid var(--border-color)',
            }}
          >
            <h3
              className="font-display text-xl font-semibold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('parkingTitle')}
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {t('parkingDesc')}
            </p>
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              {t('parkingCta')} →
            </span>
          </Link>

          <Link
            href="/namafjall-hike"
            className="group rounded-xl p-6 block transition-shadow hover:shadow-md"
            style={{
              background: 'var(--card-bg)',
              boxShadow: 'var(--card-shadow)',
              border: '1px solid var(--border-color)',
            }}
          >
            <h3
              className="font-display text-xl font-semibold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('hikeTitle')}
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {t('hikeDesc')}
            </p>
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              {t('hikeCta')} →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
