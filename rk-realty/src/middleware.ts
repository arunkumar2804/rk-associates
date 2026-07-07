import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';

  // Check if the request is for the admin subdomain
  const isAdminSubdomain = 
    hostname === 'admin.rkassociates.services' || 
    hostname.startsWith('admin.localhost');

  if (isAdminSubdomain) {
    // Rewrite requests to the /admin folder if they don't already start with /admin
    // We skip /api and /_next to ensure API routes and static assets continue to work normally
    if (
      !url.pathname.startsWith('/admin') &&
      !url.pathname.startsWith('/api') &&
      !url.pathname.startsWith('/_next')
    ) {
      url.pathname = `/admin${url.pathname === '/' ? '' : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
