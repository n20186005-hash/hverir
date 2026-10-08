import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { SITE_URL } from './lib/site';

const intlMiddleware = createMiddleware(routing);

const CANONICAL_HOST = new URL(SITE_URL).host; // hverir.com

/**
 * 1) www -> apex (301)
 * 2) http -> https (301)
 * then hand over to the next-intl locale middleware.
 */
export default function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = (request.headers.get('host') || '').toLowerCase();
  const proto = (
    request.headers.get('x-forwarded-proto') ||
    url.protocol.replace(':', '')
  ).toLowerCase();

  const isWrongHost = host === `www.${CANONICAL_HOST}`;
  const isHttp = proto === 'http';

  if (isWrongHost || isHttp) {
    const redirectUrl = new URL(`${url.pathname}${url.search}${url.hash}`, SITE_URL);
    return NextResponse.redirect(redirectUrl, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized.
  // Excludes api/_next/_vercel, paths with a dot (e.g. /sitemap.xml, images),
  // and the bare metadata routes /robots and /sitemap so Next serves them directly.
  matcher: ['/((?!api|_next|_vercel|robots|sitemap|.*\\..*).*)']
};
