import { Link } from '@/i18n/navigation';
import { AREA_NAMES, NEARBY_TEXT, nearbyPlaces } from '@/lib/nearby';
import type { AppLocale } from '@/lib/site';

export default function NearbyIndex({ locale, compact = false }: { locale: AppLocale; compact?: boolean }) {
  const copy = NEARBY_TEXT[locale];
  if (!nearbyPlaces.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" id="nearby">
      {compact ? <h2 className="font-display text-3xl">{copy.title}</h2> : <h1 className="font-display text-4xl">{copy.title}</h1>}
      <p className="mt-3 max-w-2xl">{copy.description}</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(AREA_NAMES).map(([area, label]) => {
          const places = nearbyPlaces.filter((place) => place.area === area);
          if (!places.length) return null;
          return (
            <section key={area} className="rounded-xl border p-5" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
              {compact ? <h3 className="font-semibold">{label[locale]}</h3> : <h2 className="font-semibold">{label[locale]}</h2>}
              <ul className="mt-3 space-y-2">
                {(compact ? places.slice(0, 3) : places).map((place) => (
                  <li key={place.slug}>
                    <Link className="underline underline-offset-4" href={{ pathname: '/nearby/[slug]', params: { slug: place.slug } }}>{place[locale].title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      {compact && <Link className="mt-5 inline-block underline underline-offset-4" href="/nearby">{copy.title}</Link>}
    </section>
  );
}
