import type { MetadataRoute } from 'next';
import { absoluteUrl, languageAlternates, PUBLIC_PATHS } from '@/lib/site';

const LAST_UPDATED = new Date('2026-10-08T00:00:00Z');

/**
 * Only indexable, canonical (non-www / https) URLs are listed.
 * Legal pages are noindex and therefore excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PUBLIC_PATHS) {
    entries.push({
      url: absoluteUrl('zh', path),
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: path === '/' ? 1 : 0.8,
      alternates: { languages: languageAlternates(path) },
    });
    entries.push({
      url: absoluteUrl('en', path),
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: path === '/' ? 1 : 0.8,
      alternates: { languages: languageAlternates(path) },
    });
  }

  return entries;
}
