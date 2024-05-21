import { type NextRequest } from 'next/server';

import intlMiddleware from './middlewares/intlMiddleware';

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
