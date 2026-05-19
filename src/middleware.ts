import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** Legacy ?page= links → path pagination so listing routes stay statically cacheable. */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  if (pathname !== '/blog' && pathname !== '/tools') return NextResponse.next();

  const page = searchParams.get('page');
  if (!page || page === '1') return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `${pathname}/page/${page}`;
  url.search = '';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/blog', '/tools'],
};
